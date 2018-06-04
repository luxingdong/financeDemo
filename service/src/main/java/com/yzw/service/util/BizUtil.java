package com.yzw.service.util;

import com.yzw.entity.common.BasePageResult;

import java.util.ArrayList;
import java.util.List;
import com.github.pagehelper.Page;
/**
 * Created by admin on 2018/4/8.
 */
public class BizUtil {
    public static <T> BasePageResult<T> buildPageResult(List<T> data) {
        if (data instanceof Page) {
            Page<T> page = (Page<T>) data;
            BasePageResult<T> result = new BasePageResult<T>();
            result.setPageNum(page.getPageNum());
            result.setPageSize(page.getPageSize());
            result.setTotal(page.getTotal());
            result.setPages(page.getPages());

            List<T> list = new ArrayList<T>();
            for (int i = 0; i < page.size(); i++) {
                list.add(page.get(i));
            }
            result.setList(list);

            return result;
        }
     return  null;
    }
}
