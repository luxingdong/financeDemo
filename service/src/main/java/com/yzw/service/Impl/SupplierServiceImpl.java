package com.yzw.service.Impl;

import com.github.pagehelper.PageHelper;
import com.yzw.dao.ISupplierDao;
import com.yzw.entity.common.BasePageResult;
import com.yzw.entity.vo.QF_Supplier;
import com.yzw.entity.vo.QR_Supplier;
import com.yzw.service.ISupplierService;
import com.yzw.service.util.BizUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by admin on 2018/4/8.
 */
@Service
public class SupplierServiceImpl implements ISupplierService{
    @Autowired
    private ISupplierDao supplierDao;
    @Override
    public BasePageResult<QR_Supplier> QuerySupplierList(QF_Supplier filter) {
        PageHelper.startPage(filter.getPageNum(), filter.getPageSize());
        List<QR_Supplier> list= supplierDao.QuerySupplierList(filter);
        return BizUtil.buildPageResult(list);
    }
}
