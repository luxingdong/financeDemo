package com.yzw.dao;

import com.yzw.entity.po.SupplierCredit;
import com.yzw.entity.vo.QF_Supplier;
import com.yzw.entity.vo.QR_Supplier;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by admin on 2018/4/8.
 */
@Repository
@Mapper
public interface ISupplierDao {
     List<QR_Supplier> QuerySupplierList(QF_Supplier filter);

     List<SupplierCredit> QuerySupplierCreditUnion(int supplierSysNo);

}
