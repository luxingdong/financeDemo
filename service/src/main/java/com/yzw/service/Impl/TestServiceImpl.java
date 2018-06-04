package com.yzw.service.Impl;

import com.yzw.entity.*;
import com.yzw.dao.*;
import com.yzw.service.ITestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by admin on 2018/3/1.
 */
@Service
public class TestServiceImpl implements ITestService {
    @Autowired
    private TestDao dao;

    public void Insert(test model)
    {
        dao.insert(model);
    }

}
