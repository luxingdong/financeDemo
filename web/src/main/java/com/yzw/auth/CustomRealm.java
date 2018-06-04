package com.yzw.auth;

import com.yzw.entity.vo.QF_User;
import com.yzw.entity.po.User;
import com.yzw.service.IUserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthenticatingRealm;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by admin on 2018/4/12.
 */
@Component
public class CustomRealm extends AuthorizingRealm {
    @Autowired
    private IUserService userService;

    @Override
    public String getName() {
        return "CustomRealm";
    }

    @Override
    public boolean supports(AuthenticationToken authenticationToken) {
        return authenticationToken instanceof UsernamePasswordToken;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        User user = (User) principalCollection.getPrimaryPrincipal();
        System.out.print("用户信息：" + user.getCellphone());
        // 根据身份信息获取权限信息
        // 连接数据库...
        // 模拟从数据库获取到数据
        List<String> permissions = new ArrayList<String>();
        permissions.add("用户创建");// 用户的创建
        // 查到权限数据，返回授权信息(要包括 上边的permissions)
        SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
        // 将上边查询到授权信息填充到simpleAuthorizationInfo对象中
        simpleAuthorizationInfo.addStringPermissions(permissions);
        simpleAuthorizationInfo.addRole("admin");
        return simpleAuthorizationInfo;
    }


    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String userName = (String) token.getPrincipal();  //得到用户名
        String pwd = new String((char[]) token.getCredentials()); //得到密码
        QF_User filter = new QF_User() {
            {
                setName(userName);
                setPassword(pwd);
            }
        };
        User user = userService.selectByFilter(filter);
        if (user == null) {
            throw new AuthenticationException("用户名或密码错误");
        }
        return new SimpleAuthenticationInfo(user, pwd, getName());
    }
}
