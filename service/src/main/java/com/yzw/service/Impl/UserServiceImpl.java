package com.yzw.service.Impl;

import com.yzw.dao.UserDao;
import com.yzw.entity.vo.QF_User;
import com.yzw.entity.po.User;
import com.yzw.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by admin on 2018/4/13.
 */
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserDao userDao;
    @Override
    public int deleteByPrimaryKey(Integer sysno) {
        return userDao.deleteByPrimaryKey(sysno);
    }

    @Override
    public int insert(User record) {
        return userDao.insert(record);
    }

    @Override
    public int insertSelective(User record) {
        return userDao.insertSelective(record);
    }

    @Override
    public User selectByPrimaryKey(Integer sysno) {
        return userDao.selectByPrimaryKey(sysno);
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return userDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(User record) {
       return  userDao.updateByPrimaryKey(record);
    }

    @Override
    public User selectByFilter(QF_User filter) {
        return userDao.selectByFilter(filter);
    }
}
