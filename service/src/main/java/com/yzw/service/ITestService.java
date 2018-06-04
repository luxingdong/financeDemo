package com.yzw.service;

import com.yzw.entity.test;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * Created by admin on 2018/3/1.
 */

public interface ITestService {
      void Insert(test model);
}
