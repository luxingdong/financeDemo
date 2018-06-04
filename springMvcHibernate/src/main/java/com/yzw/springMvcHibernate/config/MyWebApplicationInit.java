package com.yzw.springMvcHibernate.config;

import org.springframework.core.annotation.Order;
import org.springframework.web.WebApplicationInitializer;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;

/**
 * Created by admin on 2018/3/15.
 */
//@Order(0)
public class MyWebApplicationInit implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
       ServletRegistration.Dynamic dynamic = servletContext.addServlet("druidServlet", StatViewServlet.class);
        dynamic.addMapping("/druid/*");

        javax.servlet.FilterRegistration.Dynamic dynamicFilter = servletContext.addFilter("druidFilter", WebStatFilter.class);
        dynamicFilter.addMappingForUrlPatterns(null, false, "/*");
        dynamicFilter.setInitParameter("exclusions", "*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*");

    }
}
