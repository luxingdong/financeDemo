package com.yzw.entity.po;

import java.io.Serializable;
import java.util.Date;

/**
 * @author 
 */
public class User implements Serializable {
    /**
     * 系统编号
     */
    private Integer sysno;

    /**
     * 用户名
     */
    private String name;

    /**
     * 密码
     */
    private String password;

    /**
     * 手机号
     */
    private String cellphone;

    /**
     * 状态
     */
    private Integer status;

    /**
     * 创建人SysNo
     */
    private Integer inusersysno;

    /**
     * 创建者显示名
     */
    private String inusername;

    /**
     * 创建时间
     */
    private Date indate;

    /**
     * 编辑人SysNo
     */
    private Integer editusersysno;

    /**
     * 编辑者显示名
     */
    private String editusername;

    /**
     * 编辑时间
     */
    private Date editdate;

    private static final long serialVersionUID = 1L;

    public Integer getSysno() {
        return sysno;
    }

    public void setSysno(Integer sysno) {
        this.sysno = sysno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCellphone() {
        return cellphone;
    }

    public void setCellphone(String cellphone) {
        this.cellphone = cellphone;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getInusersysno() {
        return inusersysno;
    }

    public void setInusersysno(Integer inusersysno) {
        this.inusersysno = inusersysno;
    }

    public String getInusername() {
        return inusername;
    }

    public void setInusername(String inusername) {
        this.inusername = inusername;
    }

    public Date getIndate() {
        return indate;
    }

    public void setIndate(Date indate) {
        this.indate = indate;
    }

    public Integer getEditusersysno() {
        return editusersysno;
    }

    public void setEditusersysno(Integer editusersysno) {
        this.editusersysno = editusersysno;
    }

    public String getEditusername() {
        return editusername;
    }

    public void setEditusername(String editusername) {
        this.editusername = editusername;
    }

    public Date getEditdate() {
        return editdate;
    }

    public void setEditdate(Date editdate) {
        this.editdate = editdate;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        User other = (User) that;
        return (this.getSysno() == null ? other.getSysno() == null : this.getSysno().equals(other.getSysno()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getPassword() == null ? other.getPassword() == null : this.getPassword().equals(other.getPassword()))
            && (this.getCellphone() == null ? other.getCellphone() == null : this.getCellphone().equals(other.getCellphone()))
            && (this.getStatus() == null ? other.getStatus() == null : this.getStatus().equals(other.getStatus()))
            && (this.getInusersysno() == null ? other.getInusersysno() == null : this.getInusersysno().equals(other.getInusersysno()))
            && (this.getInusername() == null ? other.getInusername() == null : this.getInusername().equals(other.getInusername()))
            && (this.getIndate() == null ? other.getIndate() == null : this.getIndate().equals(other.getIndate()))
            && (this.getEditusersysno() == null ? other.getEditusersysno() == null : this.getEditusersysno().equals(other.getEditusersysno()))
            && (this.getEditusername() == null ? other.getEditusername() == null : this.getEditusername().equals(other.getEditusername()))
            && (this.getEditdate() == null ? other.getEditdate() == null : this.getEditdate().equals(other.getEditdate()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getSysno() == null) ? 0 : getSysno().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getPassword() == null) ? 0 : getPassword().hashCode());
        result = prime * result + ((getCellphone() == null) ? 0 : getCellphone().hashCode());
        result = prime * result + ((getStatus() == null) ? 0 : getStatus().hashCode());
        result = prime * result + ((getInusersysno() == null) ? 0 : getInusersysno().hashCode());
        result = prime * result + ((getInusername() == null) ? 0 : getInusername().hashCode());
        result = prime * result + ((getIndate() == null) ? 0 : getIndate().hashCode());
        result = prime * result + ((getEditusersysno() == null) ? 0 : getEditusersysno().hashCode());
        result = prime * result + ((getEditusername() == null) ? 0 : getEditusername().hashCode());
        result = prime * result + ((getEditdate() == null) ? 0 : getEditdate().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", sysno=").append(sysno);
        sb.append(", name=").append(name);
        sb.append(", password=").append(password);
        sb.append(", cellphone=").append(cellphone);
        sb.append(", status=").append(status);
        sb.append(", inusersysno=").append(inusersysno);
        sb.append(", inusername=").append(inusername);
        sb.append(", indate=").append(indate);
        sb.append(", editusersysno=").append(editusersysno);
        sb.append(", editusername=").append(editusername);
        sb.append(", editdate=").append(editdate);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}