package com.yzw.service;

import com.yzw.entity.common.BasePageResult;
import com.yzw.entity.vo.QF_Supplier;
import com.yzw.entity.vo.QR_Supplier;

/**
 * Created by admin on 2018/4/8.
 */
public interface ISupplierService {
    BasePageResult<QR_Supplier> QuerySupplierList(QF_Supplier filter);
}
