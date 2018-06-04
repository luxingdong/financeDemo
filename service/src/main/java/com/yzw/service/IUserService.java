package com.yzw.service;

import com.yzw.entity.vo.QF_User;
import com.yzw.entity.po.User;

/**
 * Created by admin on 2018/4/13.
 */
public interface IUserService {
    int deleteByPrimaryKey(Integer sysno);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer sysno);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectByFilter(QF_User filter);
}
