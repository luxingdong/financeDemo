package com.yzw.auth.all;

import org.apache.shiro.authc.*;
import org.apache.shiro.realm.Realm;

/**
 * Created by admin on 2018/4/12.
 * 登录验证
 */
public class MyRealm1 implements Realm {
    @Override
    public String getName() {
        return "MyRealm1";
    }

    @Override
    public boolean supports(AuthenticationToken authenticationToken) {
        return authenticationToken instanceof UsernamePasswordToken;
    }

    @Override
    public AuthenticationInfo getAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        String username = (String)token.getPrincipal();  //得到用户名
        String password = new String((char[])token.getCredentials()); //得到密码
        if(!username.equals("zhang")||!password.equals("123"))
        {
            throw new AuthenticationException("用户名或密码错误");
        }
        return new SimpleAuthenticationInfo(username,password,getName());
    }
}
