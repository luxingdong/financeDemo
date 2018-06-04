package com.yzw.Controller;

import com.yzw.service.ITestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.yzw.service.*;
import com.yzw.entity.*;

/**
 * Created by admin on 2018/3/1.
 */
@RestController
@RequestMapping("/Hello")
public class HelloController {
    @Autowired
    private ITestService service;

    public HelloController()
    {
        System.out.print("controller初始化");
    }
    @RequestMapping("/GetHello")
    public String GetHello() {
        return "Hello World";
    }
    @RequestMapping("/InsertTest")
    public String InsertTest() {
        test model=new test();
        model.setName("1235");

        service.Insert(model);
        return "success"+model.getId();
    }
}
