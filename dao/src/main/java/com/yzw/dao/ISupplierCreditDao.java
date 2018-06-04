package com.yzw.dao;

import com.yzw.entity.po.SupplierCredit;

public interface ISupplierCreditDao {
    int deleteByPrimaryKey(Integer sysno);

    int insert(SupplierCredit record);

    int insertSelective(SupplierCredit record);

    SupplierCredit selectByPrimaryKey(Integer sysno);

    int updateByPrimaryKeySelective(SupplierCredit record);

    int updateByPrimaryKey(SupplierCredit record);
}