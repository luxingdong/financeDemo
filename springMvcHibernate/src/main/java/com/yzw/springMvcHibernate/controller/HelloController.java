package com.yzw.springMvcHibernate.controller;

import com.yzw.springMvcHibernate.domain.city;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by admin on 2018/3/12.
 */
@Controller
@RequestMapping("/hello")
public class HelloController {
    @RequestMapping("/home")
    public String home() {
        return "home";
    }

    @Autowired
    private SessionFactory sessionFactory;

   // @Transactional
    @RequestMapping("/getcity")
    public String getcity() {
        Session session=sessionFactory.getCurrentSession();
        city domain = (city)session.get(city.class, 1L);
        if (domain!=null)
        {
            System.out.print(domain.getCityName()+"   "+domain.getDescription());
        }
        session.close();
        return "home";
    }
}
