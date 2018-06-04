package com.yzw.dao;

import com.yzw.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * Created by admin on 2018/3/1.
 */
@Mapper
@Repository
public interface TestDao {
    void insert(test model);
}
