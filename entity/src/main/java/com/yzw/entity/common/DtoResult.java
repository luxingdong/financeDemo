package com.yzw.entity.common;

import java.io.Serializable;

/**
 * Created by admin on 2018/4/9.
 */
public class DtoResult<T> implements Serializable {

    public static final int STATUS_CODE_SUCCESS = 0;

    public static final int STATUS_CODE_BUSINESS_ERROR = 1;

    public static final int STATUS_CODE_SYSTEM_ERROR = 99;

    public static final int STATUS_CODE_LOGIN_NEED_CAPTCHA = 100;

    public static final int STATUS_CODE_NOT_AUTHORIZED = 403;

    private T data;

    private int code;

    private String message;

    private boolean success;

    public DtoResult(){
        this.setCode(STATUS_CODE_SUCCESS);
    }

    public DtoResult(T data) {
        this();
        this.data = data;
    }

    public DtoResult(Integer code, String message, T data) {
        this.setCode(code);
        this.message = message;
        this.data = data;
    }

    public boolean getSuccess(){
        return this.success;
    }

    public void setCode(int code){
        this.code = code;
        this.success =  this.code == STATUS_CODE_SUCCESS;
    }

    public static DtoResult ok(Object data) {

        return new DtoResult(STATUS_CODE_SUCCESS, null, data);
    }

    public static DtoResult ok(String message, Object data) {
        return new DtoResult(STATUS_CODE_SUCCESS, message, data);
    }
    public T getData()
    {
        return data;
    }
    public  String getMessage()
    {
        return message;
    }
}
