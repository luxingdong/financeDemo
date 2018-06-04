package com.yzw.Controller;

import com.yzw.entity.common.BasePageResult;
import com.yzw.entity.common.DtoResult;
import com.yzw.entity.vo.QF_Supplier;
import com.yzw.entity.vo.QR_Supplier;
import com.yzw.service.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by admin on 2018/4/2.
 */
@Controller
@RequestMapping("Home")
public class HomeController {
    @Autowired
    private ISupplierService supplierService;

    @RequestMapping(value = "NearbyMap")
    public String NearbyMap() {
        return "pages/home/NearbyMap";
    }

    @RequestMapping(value = "QueryNearByMap",method = RequestMethod.POST)
    @ResponseBody
    public DtoResult<BasePageResult<QR_Supplier>> QueryNearByMap(@RequestBody QF_Supplier filter) {
        BasePageResult<QR_Supplier> result=supplierService.QuerySupplierList(filter);
        DtoResult<BasePageResult<QR_Supplier>> t= new DtoResult<BasePageResult<QR_Supplier>>(result) ;
        return t;
    }

}
