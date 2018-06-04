package com.yzw.springMvcHibernate.config;

import com.alibaba.druid.pool.DruidDataSource;
import com.yzw.springMvcHibernate.out.TestDomain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;
import javax.xml.ws.WebEndpoint;

import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.io.IOException;

import java.util.Properties;
/**
 * Created by admin on 2018/3/13.
 */
@Configuration
//@EnableTransactionManagement
@ImportResource("/WEB-INF/spring.xml")
@PropertySource("/WEB-INF/jdbc.properties")
public class DataConfig {
    @Autowired
    private Environment env;
    @Bean
    public DataSource dataSource(TestDomain domain) {
        DruidDataSource datasource = new DruidDataSource();
        datasource.setUrl(env.getProperty("jdbc.url"));
        datasource.setUsername(env.getProperty("jdbc.username"));
        datasource.setPassword(env.getProperty("jdbc.password"));
        datasource.setDriverClassName(env.getProperty("jdbc.driverclassname"));
        datasource.setInitialSize(1);
        datasource.setMinIdle(1);
        datasource.setMaxActive(10);
        datasource.setMaxWait(10000);
        datasource.setTimeBetweenEvictionRunsMillis(60000);
        datasource.setMinEvictableIdleTimeMillis(300000);
        datasource.setTestOnBorrow(true);
        datasource.setTestOnReturn(true);

        System.out.print(domain.getName());
        return datasource;
    }


    @Bean
    @Autowired
    public SessionFactory sessionFactoryBean(DataSource dataSource) {
        try {
            LocalSessionFactoryBean lsfb = new LocalSessionFactoryBean();
            lsfb.setDataSource(dataSource);
            lsfb.setPackagesToScan("com.yzw.springMvcHibernate.domain");
            //Properties props = new Properties();
            //props.setProperty("dialect", "org.hibernate.dialect.H2Dialect");
            //lsfb.setHibernateProperties(props);
            lsfb.setHibernateProperties(hibernateProperties());
            lsfb.afterPropertiesSet();
            SessionFactory object = lsfb.getObject();
            return object;
        } catch (IOException e) {
            return null;
        }
    }

    Properties hibernateProperties() {
        return new Properties() {
            private static final long serialVersionUID = 1L;

            {
                setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
                setProperty("hibernate.hbm2ddl.auto", "update");
                setProperty("hibernate.show_sql", "true");
                setProperty("current_session_context_class", "thread");
                setProperty("cache.provider_class", "org.hibernate.cache.NoCacheProvider");
                setProperty("connection.pool_size", "1");
            }
        };
    }

    @Bean("transactionManager")
    @Autowired
    public PlatformTransactionManager transactionManager(SessionFactory sessionFactory) {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory);
        return transactionManager;
    }

}
