package com.yzw.entity.vo;

import com.yzw.entity.po.Supplier;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * Created by admin on 2018/4/8.
 */
public class QR_Supplier {

    /**
     * 系统编号
     */
    private Integer sysno;

    /**
     * 业务实体类型
     */
    private Integer businesstype;

    /**
     * 分供方编号
     */
    private Integer suppliersysno;

    /**
     * 分供方企业名称
     */
    private String suppliername;

    /**
     * 分供方公司性质。如：私营企业
     */
    private String type;

    /**
     * 社会统一信用代码
     */
    private String socialcreditnumber;

    /**
     * 工商营业执照注册号
     */
    private String bizregistercode;

    /**
     * 组织机构编号
     */
    private String organizationcode;

    /**
     * 法定代表人姓名
     */
    private String representpeoplename;

    /**
     * 成立日期
     */
    private String establishdate;

    /**
     * 注册资本（万元）
     */
    private BigDecimal registermoney;

    /**
     * 员工数
     */
    private Integer employeenumber;

    /**
     * 公司电话
     */
    private String phonenumber;

    /**
     * 公司地址
     */
    private String address;

    /**
     * 主营业务
     */
    private String mainbusiness;

    /**
     * 区域编码
     */
    private String areacode;

    /**
     * 经度
     */
    private BigDecimal longitude;

    /**
     * 维度
     */
    private BigDecimal latitude;

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

    private String imagepath;

    private String areaname;

    /**
     * 企业状态
     */
    private String supplierstatus;

    /**
     * 企业网址
     */
    private String websiteurl;

    /**
     * 法人电话
     */
    private String representpeoplephone;

    /**
     * 有效日期
     */
    private Date validdate;

    /**
     * 税务登记号
     */
    private String taxcode;

    private String fullareaname;

    public List<QR_SupplierCredit> supplierCreditList;

    public List<QR_SupplierCredit> getSupplierCreditList() {
        return supplierCreditList;
    }

    public void setSupplierCreditList(List<QR_SupplierCredit> supplierCreditList) {
        this.supplierCreditList = supplierCreditList;
    }
    private static final long serialVersionUID = 1L;

    public Integer getSysno() {
        return sysno;
    }

    public void setSysno(Integer sysno) {
        this.sysno = sysno;
    }

    public Integer getBusinesstype() {
        return businesstype;
    }

    public void setBusinesstype(Integer businesstype) {
        this.businesstype = businesstype;
    }

    public Integer getSuppliersysno() {
        return suppliersysno;
    }

    public void setSuppliersysno(Integer suppliersysno) {
        this.suppliersysno = suppliersysno;
    }

    public String getSuppliername() {
        return suppliername;
    }

    public void setSuppliername(String suppliername) {
        this.suppliername = suppliername;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSocialcreditnumber() {
        return socialcreditnumber;
    }

    public void setSocialcreditnumber(String socialcreditnumber) {
        this.socialcreditnumber = socialcreditnumber;
    }

    public String getBizregistercode() {
        return bizregistercode;
    }

    public void setBizregistercode(String bizregistercode) {
        this.bizregistercode = bizregistercode;
    }

    public String getOrganizationcode() {
        return organizationcode;
    }

    public void setOrganizationcode(String organizationcode) {
        this.organizationcode = organizationcode;
    }

    public String getRepresentpeoplename() {
        return representpeoplename;
    }

    public void setRepresentpeoplename(String representpeoplename) {
        this.representpeoplename = representpeoplename;
    }

    public String getEstablishdate() {
        return establishdate;
    }

    public void setEstablishdate(String establishdate) {
        this.establishdate = establishdate;
    }

    public BigDecimal getRegistermoney() {
        return registermoney;
    }

    public void setRegistermoney(BigDecimal registermoney) {
        this.registermoney = registermoney;
    }

    public Integer getEmployeenumber() {
        return employeenumber;
    }

    public void setEmployeenumber(Integer employeenumber) {
        this.employeenumber = employeenumber;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMainbusiness() {
        return mainbusiness;
    }

    public void setMainbusiness(String mainbusiness) {
        this.mainbusiness = mainbusiness;
    }

    public String getAreacode() {
        return areacode;
    }

    public void setAreacode(String areacode) {
        this.areacode = areacode;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }

    public void setLongitude(BigDecimal longitude) {
        this.longitude = longitude;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public void setLatitude(BigDecimal latitude) {
        this.latitude = latitude;
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

    public String getImagepath() {
        return imagepath;
    }

    public void setImagepath(String imagepath) {
        this.imagepath = imagepath;
    }

    public String getAreaname() {
        return areaname;
    }

    public void setAreaname(String areaname) {
        this.areaname = areaname;
    }

    public String getSupplierstatus() {
        return supplierstatus;
    }

    public void setSupplierstatus(String supplierstatus) {
        this.supplierstatus = supplierstatus;
    }

    public String getWebsiteurl() {
        return websiteurl;
    }

    public void setWebsiteurl(String websiteurl) {
        this.websiteurl = websiteurl;
    }

    public String getRepresentpeoplephone() {
        return representpeoplephone;
    }

    public void setRepresentpeoplephone(String representpeoplephone) {
        this.representpeoplephone = representpeoplephone;
    }

    public Date getValiddate() {
        return validdate;
    }

    public void setValiddate(Date validdate) {
        this.validdate = validdate;
    }

    public String getTaxcode() {
        return taxcode;
    }

    public void setTaxcode(String taxcode) {
        this.taxcode = taxcode;
    }

    public String getFullareaname() {
        return fullareaname;
    }

    public void setFullareaname(String fullareaname) {
        this.fullareaname = fullareaname;
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
        Supplier other = (Supplier) that;
        return (this.getSysno() == null ? other.getSysno() == null : this.getSysno().equals(other.getSysno()))
                && (this.getBusinesstype() == null ? other.getBusinesstype() == null : this.getBusinesstype().equals(other.getBusinesstype()))
                && (this.getSuppliersysno() == null ? other.getSuppliersysno() == null : this.getSuppliersysno().equals(other.getSuppliersysno()))
                && (this.getSuppliername() == null ? other.getSuppliername() == null : this.getSuppliername().equals(other.getSuppliername()))
                && (this.getType() == null ? other.getType() == null : this.getType().equals(other.getType()))
                && (this.getSocialcreditnumber() == null ? other.getSocialcreditnumber() == null : this.getSocialcreditnumber().equals(other.getSocialcreditnumber()))
                && (this.getBizregistercode() == null ? other.getBizregistercode() == null : this.getBizregistercode().equals(other.getBizregistercode()))
                && (this.getOrganizationcode() == null ? other.getOrganizationcode() == null : this.getOrganizationcode().equals(other.getOrganizationcode()))
                && (this.getRepresentpeoplename() == null ? other.getRepresentpeoplename() == null : this.getRepresentpeoplename().equals(other.getRepresentpeoplename()))
                && (this.getEstablishdate() == null ? other.getEstablishdate() == null : this.getEstablishdate().equals(other.getEstablishdate()))
                && (this.getRegistermoney() == null ? other.getRegistermoney() == null : this.getRegistermoney().equals(other.getRegistermoney()))
                && (this.getEmployeenumber() == null ? other.getEmployeenumber() == null : this.getEmployeenumber().equals(other.getEmployeenumber()))
                && (this.getPhonenumber() == null ? other.getPhonenumber() == null : this.getPhonenumber().equals(other.getPhonenumber()))
                && (this.getAddress() == null ? other.getAddress() == null : this.getAddress().equals(other.getAddress()))
                && (this.getMainbusiness() == null ? other.getMainbusiness() == null : this.getMainbusiness().equals(other.getMainbusiness()))
                && (this.getAreacode() == null ? other.getAreacode() == null : this.getAreacode().equals(other.getAreacode()))
                && (this.getLongitude() == null ? other.getLongitude() == null : this.getLongitude().equals(other.getLongitude()))
                && (this.getLatitude() == null ? other.getLatitude() == null : this.getLatitude().equals(other.getLatitude()))
                && (this.getInusersysno() == null ? other.getInusersysno() == null : this.getInusersysno().equals(other.getInusersysno()))
                && (this.getInusername() == null ? other.getInusername() == null : this.getInusername().equals(other.getInusername()))
                && (this.getIndate() == null ? other.getIndate() == null : this.getIndate().equals(other.getIndate()))
                && (this.getEditusersysno() == null ? other.getEditusersysno() == null : this.getEditusersysno().equals(other.getEditusersysno()))
                && (this.getEditusername() == null ? other.getEditusername() == null : this.getEditusername().equals(other.getEditusername()))
                && (this.getEditdate() == null ? other.getEditdate() == null : this.getEditdate().equals(other.getEditdate()))
                && (this.getImagepath() == null ? other.getImagepath() == null : this.getImagepath().equals(other.getImagepath()))
                && (this.getAreaname() == null ? other.getAreaname() == null : this.getAreaname().equals(other.getAreaname()))
                && (this.getSupplierstatus() == null ? other.getSupplierstatus() == null : this.getSupplierstatus().equals(other.getSupplierstatus()))
                && (this.getWebsiteurl() == null ? other.getWebsiteurl() == null : this.getWebsiteurl().equals(other.getWebsiteurl()))
                && (this.getRepresentpeoplephone() == null ? other.getRepresentpeoplephone() == null : this.getRepresentpeoplephone().equals(other.getRepresentpeoplephone()))
                && (this.getValiddate() == null ? other.getValiddate() == null : this.getValiddate().equals(other.getValiddate()))
                && (this.getTaxcode() == null ? other.getTaxcode() == null : this.getTaxcode().equals(other.getTaxcode()))
                && (this.getFullareaname() == null ? other.getFullareaname() == null : this.getFullareaname().equals(other.getFullareaname()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getSysno() == null) ? 0 : getSysno().hashCode());
        result = prime * result + ((getBusinesstype() == null) ? 0 : getBusinesstype().hashCode());
        result = prime * result + ((getSuppliersysno() == null) ? 0 : getSuppliersysno().hashCode());
        result = prime * result + ((getSuppliername() == null) ? 0 : getSuppliername().hashCode());
        result = prime * result + ((getType() == null) ? 0 : getType().hashCode());
        result = prime * result + ((getSocialcreditnumber() == null) ? 0 : getSocialcreditnumber().hashCode());
        result = prime * result + ((getBizregistercode() == null) ? 0 : getBizregistercode().hashCode());
        result = prime * result + ((getOrganizationcode() == null) ? 0 : getOrganizationcode().hashCode());
        result = prime * result + ((getRepresentpeoplename() == null) ? 0 : getRepresentpeoplename().hashCode());
        result = prime * result + ((getEstablishdate() == null) ? 0 : getEstablishdate().hashCode());
        result = prime * result + ((getRegistermoney() == null) ? 0 : getRegistermoney().hashCode());
        result = prime * result + ((getEmployeenumber() == null) ? 0 : getEmployeenumber().hashCode());
        result = prime * result + ((getPhonenumber() == null) ? 0 : getPhonenumber().hashCode());
        result = prime * result + ((getAddress() == null) ? 0 : getAddress().hashCode());
        result = prime * result + ((getMainbusiness() == null) ? 0 : getMainbusiness().hashCode());
        result = prime * result + ((getAreacode() == null) ? 0 : getAreacode().hashCode());
        result = prime * result + ((getLongitude() == null) ? 0 : getLongitude().hashCode());
        result = prime * result + ((getLatitude() == null) ? 0 : getLatitude().hashCode());
        result = prime * result + ((getInusersysno() == null) ? 0 : getInusersysno().hashCode());
        result = prime * result + ((getInusername() == null) ? 0 : getInusername().hashCode());
        result = prime * result + ((getIndate() == null) ? 0 : getIndate().hashCode());
        result = prime * result + ((getEditusersysno() == null) ? 0 : getEditusersysno().hashCode());
        result = prime * result + ((getEditusername() == null) ? 0 : getEditusername().hashCode());
        result = prime * result + ((getEditdate() == null) ? 0 : getEditdate().hashCode());
        result = prime * result + ((getImagepath() == null) ? 0 : getImagepath().hashCode());
        result = prime * result + ((getAreaname() == null) ? 0 : getAreaname().hashCode());
        result = prime * result + ((getSupplierstatus() == null) ? 0 : getSupplierstatus().hashCode());
        result = prime * result + ((getWebsiteurl() == null) ? 0 : getWebsiteurl().hashCode());
        result = prime * result + ((getRepresentpeoplephone() == null) ? 0 : getRepresentpeoplephone().hashCode());
        result = prime * result + ((getValiddate() == null) ? 0 : getValiddate().hashCode());
        result = prime * result + ((getTaxcode() == null) ? 0 : getTaxcode().hashCode());
        result = prime * result + ((getFullareaname() == null) ? 0 : getFullareaname().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", sysno=").append(sysno);
        sb.append(", businesstype=").append(businesstype);
        sb.append(", suppliersysno=").append(suppliersysno);
        sb.append(", suppliername=").append(suppliername);
        sb.append(", type=").append(type);
        sb.append(", socialcreditnumber=").append(socialcreditnumber);
        sb.append(", bizregistercode=").append(bizregistercode);
        sb.append(", organizationcode=").append(organizationcode);
        sb.append(", representpeoplename=").append(representpeoplename);
        sb.append(", establishdate=").append(establishdate);
        sb.append(", registermoney=").append(registermoney);
        sb.append(", employeenumber=").append(employeenumber);
        sb.append(", phonenumber=").append(phonenumber);
        sb.append(", address=").append(address);
        sb.append(", mainbusiness=").append(mainbusiness);
        sb.append(", areacode=").append(areacode);
        sb.append(", longitude=").append(longitude);
        sb.append(", latitude=").append(latitude);
        sb.append(", inusersysno=").append(inusersysno);
        sb.append(", inusername=").append(inusername);
        sb.append(", indate=").append(indate);
        sb.append(", editusersysno=").append(editusersysno);
        sb.append(", editusername=").append(editusername);
        sb.append(", editdate=").append(editdate);
        sb.append(", imagepath=").append(imagepath);
        sb.append(", areaname=").append(areaname);
        sb.append(", supplierstatus=").append(supplierstatus);
        sb.append(", websiteurl=").append(websiteurl);
        sb.append(", representpeoplephone=").append(representpeoplephone);
        sb.append(", validdate=").append(validdate);
        sb.append(", taxcode=").append(taxcode);
        sb.append(", fullareaname=").append(fullareaname);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}
