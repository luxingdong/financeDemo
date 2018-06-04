package com.yzw.dao;

import com.yzw.entity.vo.QF_User;
import com.yzw.entity.po.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface UserDao {
    int deleteByPrimaryKey(Integer sysno);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer sysno);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectByFilter(QF_User filter);
}