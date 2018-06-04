package com.yzw.springMvcHibernate.config;

import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/**
 * Created by admin on 2018/3/12.
 */
//@Order(1)
public class SpringMvcHibernateInitalizer extends AbstractAnnotationConfigDispatcherServletInitializer {
    public SpringMvcHibernateInitalizer() {
        super();
    }

    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class<?>[]{RootConfig.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class<?>[]{WebConfig.class};
    }
}
