package com.yzw.Controller;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by admin on 2018/4/12.
 */
@Controller
@RequestMapping(value = "Shiro")
public class ShiroController {

    @RequestMapping(value = "login",method = RequestMethod.GET)
    public String shiro()
    {
        return "pages/home/login";
    }

  //@RequestMapping(value = "login",method = RequestMethod.POST)
   // public String shiro(@RequestParam("username") String username,@RequestParam("password") String password)
   // {
        /*//1、获取SecurityManager工厂，此处使用Ini配置文件初始化SecurityManager
        Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
        //2、得到SecurityManager实例 并绑定给SecurityUtils
        org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
        SecurityUtils.setSecurityManager(securityManager);
        //3、得到Subject及创建用户名/密码身份验证Token（即用户身份/凭证）
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken("zhang", "123");
        token.setRememberMe(true);
        try {
            //4、登录，即身份验证
            subject.login(token);
        } catch (AuthenticationException e) {
            //5、身份验证失败
        }
        System.out.print(subject.isAuthenticated());
        Object ojb= subject.getPrincipal();
        // Assert.assertEquals(true, subject.isAuthenticated()); //断言用户已经登录
        //6、退出
       // subject.logout();
       */

       // UsernamePasswordToken token = new UsernamePasswordToken(username,password);
        //获取当前的Subject
      //  Subject currentUser = SecurityUtils.getSubject();
      //  try{
      //      currentUser.login(token);
      //  }
      //  catch (AuthenticationException ex)
      //  {

     //   }
       // return "pages/home/NearbyMap";
   // }

    @RequestMapping(value = "getLoginName")
    @ResponseBody
    @RequiresPermissions("用户创建")
    public Object getLoginName()
    {
      /*  Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
        //2、得到SecurityManager实例 并绑定给SecurityUtils
        org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
        SecurityUtils.setSecurityManager(securityManager);
        */
        Subject subject = SecurityUtils.getSubject();
        Object obj= subject.getPrincipal();

        boolean isPermitted = subject.isPermitted("用户创建");
        return "user:create"+isPermitted;
        //return  obj;
    }
    @RequestMapping(value = "shiroRealm")
    public void shiroRealm()
    {
        //1、获取SecurityManager工厂，此处使用Ini配置文件初始化SecurityManager
        Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro-realm.ini");
        //2、得到SecurityManager实例 并绑定给SecurityUtils
        org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
        SecurityUtils.setSecurityManager(securityManager);
        //3、得到Subject及创建用户名/密码身份验证Token（即用户身份/凭证）
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken("zhang", "123");
        try {
            //4、登录，即身份验证
            subject.login(token);
        } catch (AuthenticationException e) {
            //5、身份验证失败
        }
        System.out.print(subject.isAuthenticated());
        // Assert.assertEquals(true, subject.isAuthenticated()); //断言用户已经登录
        //6、退出
        subject.logout();

    }
    @RequestMapping(value = "allShiroRealm")
    public void allShiroRealm()
    {
        //1、获取SecurityManager工厂，此处使用Ini配置文件初始化SecurityManager
        Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro-authenticator-all-success.ini");
        //2、得到SecurityManager实例 并绑定给SecurityUtils
        org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
        SecurityUtils.setSecurityManager(securityManager);
        //3、得到Subject及创建用户名/密码身份验证Token（即用户身份/凭证）
        Subject subject = SecurityUtils.getSubject();
        UsernamePasswordToken token = new UsernamePasswordToken("zhang", "123");
        try {
            //4、登录，即身份验证
            subject.login(token);
        } catch (AuthenticationException e) {
            //5、身份验证失败
        }
        System.out.print(subject.isAuthenticated());
        // Assert.assertEquals(true, subject.isAuthenticated()); //断言用户已经登录
        //6、退出
        subject.logout();
    }
}
