
$(function () {

});




/*设置、获取、删除url参数*/
(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    $.setUrlParam = function (uri, name, value) {
        var re = new RegExp("([?&])" + name + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + name + "=" + value + '$2');
        }
        else {
            return uri + separator + name + "=" + value;
        }
    }
    $.removeUrlParam = function (url, name) {
        //prefer to use l.search if you have a location/link object
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {

            var prefix = encodeURIComponent(name) + '=';
            var pars = urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            url = urlparts[0] + '?' + pars.join('&');
            return url;
        } else {
            return url;
        }
    };


    //页面导出Excel:
    $.exportExcel = function (action, params) {
        var form = $("<form>");//定义一个form表单
        form.attr("style", "display:none");
        form.attr("target", "");
        form.attr("method", "post");
        form.attr("action", action);
        $("body").append(form);//将表单放置在web中
        if (params && params.length > 0) {

            for (var i = 0 ; i < params.length; i++) {
                var input1 = $("<input>");
                input1.attr("type", "hidden");
                input1.attr("name", params[i].name);
                input1.attr("value", params[i].value);
                form.append(input1);
            }
        }
        form.submit();//表单提交 
    };

    //该方法还在扩展中，非正式方法，请勿使用
    $.exportExcelAjax = function (action, params) {
        var i = 0,
            value = '',
            len = params.length,
            max = len - 1;
        if (len) {
            for (; i < len; i += 1) {
                if (i != max) {
                    value += params[i].name + '=' + params[i].value + '&';
                } else {
                    value += params[i].name + '=' + params[i].value;
                }
            }
        }
        $.ajax({
            url: action,
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: value,
            cache: false,
            beforeSend: function () {
                $.showLoading();
            },
            Success: function () {
                $.hideLoading();
            }
        });
    };


    $.largeIntegerAddition = function (bigNum1, bigNum2) {

        var carry = 0,  // 进位
            bigNum1Split = bigNum1.split('').reverse(),
            bigNum2Split = bigNum2.split('').reverse(),
            result = '',
            maxNumSize = bigNum1Split.length > bigNum2Split.length ? bigNum1Split.length : bigNum2Split.length;

        for (var i = 0; i < maxNumSize; i++) {
            var n1 = bigNum1Split[i] ? +bigNum1Split[i] : 0,
                n2 = bigNum2Split[i] ? +bigNum2Split[i] : 0,
                sum = (n1 + n2 + carry).toString();
            if (sum.length > 1) {
                carry = +sum.slice(0, 1);
                result = sum.slice(1, 2) + result;
            } else {
                carry = 0;
                result = sum + result;
            }
        }

        if (carry !== 0) {
            result = carry + result;
        }
        return result;
    };

    $.NumberPadLeft = function (num, n) {
        var len = num.toString().length;
        while (len < n) {
            num = "0" + num;
            len++;
        }
        return num;
    };
    /**
** 加法函数，用来得到精确的加法结果
** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
** 调用：NumberAdd(arg1,arg2)
** 返回值：arg1加上arg2的精确结果
**/
    $.NumberAdd = function (arg1, arg2) {
        var r1, r2, m, c;
        try {
            //数字一的小数位
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            //数字二小数位
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }

        c = Math.abs(r1 - r2);

        m = Math.pow(10, Math.max(r1, r2));

        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = (arg1.toString().replace(".", ""));
                arg2 = (arg2.toString().replace(".", ""));
                for (var i = 0; i < c; i++) {
                    arg2 += "0";
                }
            } else {
                arg1 = (arg1.toString().replace(".", ""));
                for (var i = 0; i < c; i++) {
                    arg1 += "0";
                }
                arg2 = (arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = (arg1.toString().replace(".", ""));
            arg2 = (arg2.toString().replace(".", ""));
        }
        var totalValue = $.largeIntegerAddition.apply(this, [arg1, arg2]);
        var totalLength = totalValue.length;

        var rightLength = r1 > r2 ? r1 : r2;

        return totalValue.substr(0, totalLength - rightLength) + (rightLength ? ("." + totalValue.substr(totalLength - rightLength, rightLength)) : "");
    }
})(jQuery);
/*
* jQuery bindEntity
* -------------------------------------------------- */
(function ($) {
    //form : Jquery Object
    //data : JSON
    $.bindEntity = function (form, data) {
        if (!data) return;
        function _getValue(dataModel, data2) {
            var name = dataModel.shift();
            if (data2[name] && (typeof (data2[name]) == "object")) {
                return _getValue(dataModel, data2[name]);
            } else {
                return data2[name];
            }
        }

        form.find("[data-model]").each(function () {
            var model = $(this).attr("data-model").split(".");
            var val = _getValue(model, data);
            if ($(this).is("select") && $(this).prop("multiple")) {
                if (val) {
                    $(this).val(val.split(","));
                }
            } else {
                //字符串去除前后空格
                if (typeof val == "string") {
                    val = $.trim(val);
                }
                $(this).val(val);
            }
        });
        var bsSelect = $('.bs-select');
        if (bsSelect.length > 0 && bsSelect.selectpicker) {
            bsSelect.selectpicker('refresh');
        }
    };

    //form : Jquery Object
    function buildEntity(form) {
        var obj = {};
        form.find("[data-model]").each(function () {
            var name = $(this).attr("data-model");
            var names = name.split(".");
            var temp;
            var val;
            if ($(this).attr("type") == "checkbox"
				|| $(this).attr("type") == "radio") {
                if ($(this).prop("checked")) {
                    val = $(this).val();
                }
            }
            else {
                val = $.trim($(this).val());
            }
            if (names.length > 1) {
                for (var i = 0; i < names.length; i++) {
                    if (temp) {
                        if (!temp[names[i]]) {
                            if (i == (names.length - 1)) temp[names[i]] = val;
                            else temp[names[i]] = {};
                        }
                        temp = temp[names[i]];
                    } else {
                        if (!obj[names[i]]) {
                            if (i == (names.length - 1)) obj[names[i]] = val;
                            else obj[names[i]] = {};
                        }
                        temp = obj[names[i]];
                    }
                }
            } else {
                obj[name] = val;
            }

        });
        return obj;
    }

    $.buildEntity = buildEntity;





})(jQuery);


/*
* jQuery ajaxSetup
* -------------------------------------------------- */
(function ($) {


    $.ajaxSetup({
        cache: false,
        beforeSend: function () {
            $.showLoading();

        }
		, complete: function (p1, p2) {

		    $.hideLoading();
		    if (p1 && p1.responseJSON && p1.responseJSON.Success == false) {
		        if (p1.responseJSON.Code == 0) {
		            $.showWarning(p1.responseJSON.Message);
		        }

		        else if (p1.responseJSON.Code == 100) {
		            window.location = "/Home/Index";
		        }

		        else if (p1.responseJSON.Code == 200) {
		            $.showWarning("没有权限进行该操作");
		        }

		        else if (p1.responseJSON.Code == 300) {
		            $.showWarning("检测到非法输入（例如：html标签），不能提交。");
		        }
		        else if (p1.responseJSON.Code == 32000) {

		        }
		        else {
		            $.showError("服务器程序错误,请稍后再试");
		        }
		    }
		}
		 , error: function (data, status, throwError) {
		     if (throwError != '') {
		         $.showWarning("网络错误,请检查网络连接是否正常或您安装的相关插件阻止了网络连接。");
		     }
		 }
    });
})(jQuery);

/*
* 下拉树插件
*  options
*   url: ajax数据地址(必填)
*   treeId: 树插件ID(必填)
*   iptText: 文本显示的id,name,data-model(必填)
*   iptValue: 值的id,name,data-model(必填)
*   icon: 图标(可选，默认为fa fa-folder)
*   multiple: 是否复选(可选，默认为false)
*   completeName: 是否显示完整path路径, 默认fasle
*   partiallySelect: 根据返回值判断是否选择该节点，默认false
*   childrenSelect: 当选中顶层节点时，是否选中其所有子节点，默认为false
*   hiddenValue: 隐藏域里填写的值，从数据的entity获得，默认为SysNo
*   change: 树选择发生改变的事件，默认为空
*   loaded: 树加载完成的事件，默认为空
*   notempty:{
		flag:是否集成bootvalidator(单选模式可选，默认false),
		message:错误提示信息
	}
* 方法:
	getSelectData:获取选中节点对象集合
	setSelectData: 初始选中方法 传一个对象或对象数组 必须有id，text
	refresh: 控件清空方法
	hasSelected: 判断是否有节点选中
* -------------------------------------------------- */
(function ($) {
    var selectedData = {};
    //复选模式
    var multipleMode = function (ele) {
        var $this = ele;
        var settings = $this.data('DropdownTree');
        var $dt_tagdiv = $("<div></div>").addClass('bootstrap-tagsinput').css({ "min-height": "34px", "border-radius": "3px", "padding-right": "20px" }).attr({ 'data-toggle': 'dropdown', 'aria-haspopup': true, 'aria-expanded': true }).prop("id", settings.iptText).appendTo($this),
			$dt_dm = $('<div></div>').addClass('dropdown-menu').attr('aria-labelledby', 'dropdownMenu1').css({ 'width': 'auto', 'min-width': '100%', "padding": "5px 20px", "max-height": "400px", "overflow": "auto" }).appendTo($this),
			$dt_iptValue = $('<input>').attr('data-model', settings.iptValue).prop({ 'type': 'hidden', 'id': settings.iptValue, 'name': settings.iptValue }).appendTo($this),
			$dt_ipt_i = $('<i></i>').addClass('dropdowntree input-icon fa fa-caret-down').css('pointer-events', 'none').appendTo($this),
			$dt_tree = $('<div></div>').prop('id', settings.treeId).appendTo($dt_dm);
        var handleSelect = function (selectNode) {
            var selectNodeObj = selectNode.original;
            if (!selectNodeObj.entity) {
                selectNodeObj.entity = selectNode.data;
            }
            !selectedData[settings.treeId] && (selectedData[settings.treeId] = []);
            //如果选中的是根节点并且childrenSelect为true，则循环选中其所有子节点
            if (selectNode.parent === '#' && settings.childrenSelect) {
                if (selectNode.children && selectNode.children.length > 0) {
                    selectNode.children.forEach(function (childId) {
                        var node = $dt_tree.jstree()._model.data[childId];
                        handleSelect(node);
                    });
                }
            }
            else {
                !isRepeated(selectNodeObj.id, selectedData[settings.treeId]) && selectedData[settings.treeId].push(selectNodeObj);
                addTags(selectedData[settings.treeId], $dt_tagdiv, settings);
                $dt_iptValue.val(getSelectedId(selectedData[settings.treeId], settings.hiddenValue));
            }
        };

        $('#' + settings.treeId).on('click', function (e) {
            e.stopPropagation();
        });
        $dt_tree.on('select_node.jstree', function () {
            var selectNode = $dt_tree.jstree().get_selected(true)[0];
            handleSelect(selectNode);
        });
        $dt_tagdiv.on('click', 'span', function (e) {
            e.preventDefault();
            e.stopPropagation();
        }).on('click', 'span *[data-role="remove"]', function (e) {
            if (settings.disabled) {
                return
            }
            var delNode = $(this).data('id');
            var delNodeObj = getNodeById(selectedData[settings.treeId], delNode);
            selectedData[settings.treeId].splice($.inArray(delNodeObj, selectedData[settings.treeId]), 1);
            $(this).parent().remove();
            settings.tagremove();
        });
    };

    //单选模式
    var singleMode = function (ele) {
        var $this = ele;
        var settings = $this.data('DropdownTree');
        var $dt_span = $('<span></span>').addClass('input-icon icon-right').appendTo($this).css('display', 'block'),
			$dt_iptText = $('<input>').addClass('form-control btn_dropdown_input').attr({ 'data-toggle': 'dropdown', 'data-model': settings.iptText, 'aria-haspopup': true, 'aria-expanded': true }).prop({ 'id': settings.iptText, 'name': settings.iptText, 'readOnly': true }).css({ "border": "1px solid #DEDEDE", "cursor": "pointer", "padding-left": "15px" }).attr("placeholder", settings.defaultTitle).appendTo($dt_span),
			$dt_ipt_i = $('<i></i>').addClass('fa fa-caret-down').css('pointer-events', 'none').appendTo($dt_span),
			$dt_dm = $('<div></div>').addClass('dropdown-menu').attr('aria-labelledby', 'dropdownMenu1').css({ 'width': 'auto', 'min-width': '100%', "padding": "5px 20px", "max-height": "400px", "overflow": "auto" }).appendTo($dt_span),
			$dt_iptValue = $('<input>').attr('data-model', settings.iptValue).prop('type', 'hidden').prop('id', settings.iptValue).prop('name', settings.iptValue).appendTo($dt_span),
            $dt_tree = $('<div></div>').prop('id', settings.treeId).appendTo($dt_dm);

        var validator = $this.parents('form').data('bootstrapValidator');

        $dt_tree.on('select_node.jstree', function () {
            var selectObj = $dt_tree.jstree().get_selected(true)[0];
            settings.completeName ? $dt_iptText.val(getCompleteName(selectObj, $dt_tree)) : $dt_iptText.val(selectObj.text);
            if (!settings.oneload) {
                !selectObj.original.entity[settings.hiddenValue] && $dt_iptValue.val("") || $dt_iptValue.val(selectObj.original.entity[settings.hiddenValue]);
            } else {
                $dt_iptValue.val(selectObj.id);
            }
            settings.notempty.flag && validator && validator.revalidateField(settings.iptText);
            selectedData[settings.treeId] = selectObj.original;
        });
        if (settings.notempty.flag) {
            $dt_iptText.attr('data-bv-notempty', true).attr('data-bv-notempty-message', settings.notempty.message);

            validator && validator.addField(settings.iptText);
        }
        if (settings.partiallySelect) {
            $dt_tree.on('click', '.jstree-disabled', function (e) {
                e.preventDefault();
                e.stopPropagation();
            });
        }
    };

    //复选模式添加tag
    var addTags = function (arr, ele, settings) {
        ele.empty();
        arr.forEach(function (obj) {
            var $tag = $('<span></span>').addClass('tag label label-info').css({ "max-width": "90%" }).prop('title', obj.text).appendTo(ele),
				$tagspan = $('<span></span>').css({ "display": "block", "overflow": "hidden", "white-space": "nowrap", "text-overflow": "ellipsis" }).text(obj.text).appendTo($tag),
                $tag_remove = $('<span></span>').attr({ "data-id": obj.id, "data-role": "remove" }).appendTo($tag);
            $tag.css({ paddingRight: settings.disabled ? '10px' : null });
            $tag_remove.toggle(!settings.disabled);
        });
    };

    //获取完整节点名称
    var getCompleteName = function (obj, ele) {
        var nodeArr = ele.jstree().get_path(obj);
        var completename = "";
        nodeArr.forEach(function (name) {
            completename += name + '-';
        });
        return completename.substring(0, completename.length - 1);;
    };

    //遍历树根据数据判断节点是否能被选中
    var judgeTreeSelect = function (data, ele) {
        var $this = ele;
        var settings = $this.data('DropdownTree');
        //childrenSelect为true，则顶级节点始终可以选择
        var childrenSelect = settings.childrenSelect;
        data.forEach(function (obj) {
            if (!obj.enabled) {
                if (!(obj.parent === '#' && childrenSelect)) {
                    $('#' + settings.treeId).jstree().disable_node(obj);
                }
            }
        })
    };

    //根据id获取node对象
    var getNodeById = function (arr, id) {
        var data = {}, idstr = id.toString();
        arr.forEach(function (obj) {
            if (idstr == obj.id) {
                data = obj;
            }
        });
        return data;
    };

    //根据select对象的hiddenValue集合
    var getSelectedId = function (arr, str) {
        var data = [];
        for (var i = 0; i < arr.length; i++) {
            if (!arr[i].entity[str]) {
                break;
            } else {
                data.push(arr[i].entity[str]);
            }
        }
        return data;
    };

    //判断是否重复
    var isRepeated = function (id, arr) {
        var ids = [];
        arr.forEach(function (obj) {
            ids.push(obj.id);
        });
        if (ids.indexOf(id) > -1) {
            return true
        } else {
            return false
        }
    };

    //检索功能
    var searchFunc = function (ele) {
        var $this = ele,
            settings = $this.data('DropdownTree'),
            to = false;
        var $dt_tree_q = $('<input>').prop('id', settings.treeId + '_q')
            .addClass('form-control m5')
            .attr("placeholder", "请输入关键字...")
            .insertBefore($('#' + settings.treeId));
        $dt_tree_q.on('click', function (e) {
            e.stopPropagation();
        }).keyup(function () {
            if (to) { clearTimeout(to); }
            to = setTimeout(function () {
                var v = $.trim($dt_tree_q.val());
                $('#' + settings.treeId).jstree(true).search(v);
            }, 250);
        });
    };

    //服务端检索功能
    var searchRemote = function (ele) {
        var $this = ele,
            settings = $this.data('DropdownTree'),
            $dt_tree_query = $('<div>').addClass('position-r').insertBefore($('#' + settings.treeId)),
            $dt_tree_q = $('<input>').prop('id', settings.treeId + '_q')
            .addClass('form-control m5')
            .attr("placeholder", "请输入关键字，按回车搜索...")
            .appendTo($dt_tree_query),
            $close_btn = $('<span>').css({
                'position': 'absolute',
                'right': '3px',
                'top': '6px',
                'font-size': '18px',
                'color': '#666666',
                'cursor': 'pointer'
            }).addClass('close').text('×').appendTo($dt_tree_query);
        $dt_tree_q.on('click', function (e) {
            e.stopPropagation();
        }).keyup(function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (e.keyCode === 13 || e.keyCode === 8) {
                var keyword = $.trim($dt_tree_q.val());
                if (keyword === "" && e.keyCode === 8) {
                    searchBack(ele);
                } else if (keyword === "" && e.keyCode === 13) {
                    return false;
                } else {
                    if (settings.searchRemoteUrl) {
                        var queryPrefix = "?";
                        if (settings.searchRemoteUrl.indexOf("?") >= 0) {
                            queryPrefix = "&";
                        }
                        $('#' + settings.treeId).jstree().settings.core.data.url = settings.searchRemoteUrl + queryPrefix + "keywords=" + keyword;
                        $('#' + settings.treeId).jstree().refresh();
                    }

                }
            }
            return false;
        });
        $close_btn.on('click', function (e) {
            e.stopPropagation();
            $dt_tree_q.val('');
            searchBack(ele);
        });
    };

    var searchBack = function (ele) {
        var $this = ele,
            settings = $this.data('DropdownTree');
        var treeInstance = $('#' + settings.treeId).jstree();
        treeInstance.settings.core.data.url = settings.url;
        treeInstance.refresh(false, true);
        treeInstance.clear_search();
    };

    //曝露方法
    var methods = {
        init: function (options) {
            return this.each(function () {
                var $this = $(this);
                var settings = $this.data('DropdownTree');
                if (typeof (settings) == 'undefined') {
                    defaults = {
                        'url': '',
                        'treeId': '',
                        'iptText': '',
                        'iptValue': '',
                        'icon': 'fa fa-folder',
                        'multiple': false,
                        'completeName': false,
                        'partiallySelect': false,
                        'hiddenValue': 'SysNo',
                        'loaded': function () { },
                        'change': function () { },
                        'tagremove': function () { },
                        'disabled': false,
                        'oneload': false,
                        'disabled': false,
                        'defaultTitle': '',
                        'search': false,
                        'searchRemote': false,
                        'searchRemoteUrl': '',
                        'notempty': {
                            flag: false,
                            message: ''
                        }
                    };
                    settings = $.extend({}, defaults, options);
                    $this.data('DropdownTree', settings);
                } else {
                    settings = $.extend({}, settings, options);
                }
                var jt_plugins = ["types", "search"];
                $this.addClass('dropdown');
                if (settings.multiple) {//复选
                    multipleMode($this);
                } else {//单选
                    singleMode($this);
                }
                settings.searchRemote && searchRemote($this);
                //0805 -> 0818
                //settings.search && searchFunc($this);
                settings.disabled && $('#' + settings.iptText).attr('data-toggle', '');
                $('#' + settings.treeId).jstree({
                    'core': {
                        'data': {
                            "url": settings.url,
                            "data": function (node) {
                                var specifiedSysNo = settings.specifiedSysNo;
                                var isMaintain = settings.isMaintain;
                                var data = null;
                                if (node.id == "#" && specifiedSysNo) {
                                    data = { "id": specifiedSysNo, "isSpecified": "yes" };
                                    data.limitCategorys = settings.limitCategorys;
                                    data.limitThisCompanyCode = settings.limitThisCompanyCode;
                                    data.isMaintain = isMaintain;
                                    return data;
                                }
                                data = { "id": node.id, "isSpecified": "no" };
                                data.limitCategorys = settings.limitCategorys;
                                data.limitThisCompanyCode = settings.limitThisCompanyCode;
                                data.isMaintain = isMaintain;
                                return data;
                            },
                            "success": function (data) {
                                if (settings.partiallySelect) {
                                    $('#' + settings.treeId).on('redraw.jstree', function () {
                                        settings.partiallySelect && judgeTreeSelect(data, $this);
                                    });
                                }
                            }
                        }
                    },
                    "plugins": jt_plugins,
                    "types": {
                        "default": {
                            "icon": settings.icon
                        }
                    }
                }).on('click', '.jstree-ocl', function (e) {
                    e.stopPropagation();
                }).on('ready.jstree', function () {
                    settings.loaded();
                }).on('changed.jstree', function () {
                    settings.change();
                }).on('refresh.jstree', function (e, obj) {
                    //查询不到数据时给出友好提示
                    var json = obj.instance.get_json();
                    var parent = obj.instance.element;
                    var emptyDom = parent.find('p[data-tips="jstree"]');
                    if (json.length == 0) {
                        if (emptyDom.length == 0) {
                            parent.append('<p data-tips="jstree">抱歉，未查询到相关数据！</p>');
                        }
                        else {
                            emptyDom.show();
                        }
                    }
                    else {
                        emptyDom.hide();
                    }

                    //如果有关键字，再执行一次客户端搜索
                    var keyword = $.trim($('#' + settings.treeId + '_q').val());
                    if (settings.searchRemote && keyword.length > 0) {
                        $('#' + settings.treeId).jstree().search(keyword);
                    }
                });
            });
        },

        //destroy
        destroy: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            if (settings && $('#' + settings.treeId).length > 0) {
                delete selectedData[settings.treeId];
                $this.removeData('DropdownTree');
                $this.empty();
            }

            return true
        },

        //获取选中节点对象集合
        getSelectData: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            return selectedData[settings.treeId];
        },

        //初始设值方法（选中）
        setSelectData: function (obj) {
            if (typeof (obj) != "object") {
                //console.error("传入参数错误");
                return false
            }
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            selectedData[settings.treeId] = obj;
            if (settings.multiple) {
                addTags(obj, $('#' + settings.iptText), settings);
                $('#' + settings.iptValue).val(getSelectedId(obj, settings.hiddenValue));
            } else {
                if (!obj.entity[settings.hiddenValue]) {
                    return false
                } else {
                    $('#' + settings.iptText).val(obj.text);
                    $('#' + settings.iptValue).val(obj.entity[settings.hiddenValue]);
                }
            }
            return true
        },

        //refresh方法 清空text和value
        refresh: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            if (settings) {
                if (!settings.multiple) {
                    $('#' + settings.iptText).attr("placeholder", settings.defaultTitle);
                    $('#' + settings.iptValue).val('');
                } else {
                    $('#' + settings.iptText).empty();
                    $('#' + settings.iptValue).val('');
                }
                selectedData[settings.treeId] = [];
                $('#' + settings.treeId).jstree().deselect_all();
                if (settings.searchRemote) {
                    searchBack(this);
                }
            }
            return true
        },

        //判断有没有node选中的方法
        hasSelected: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            if (!selectedData[settings.treeId]) {
                return false
            } else {
                return true
            }
        },

        //设置为不可编辑状态 disable
        setTreeDisable: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            settings.disabled = true;
            $('#' + settings.iptText).attr('data-toggle', '').css("cursor", "no-drop");
            return true
        },

        //设置为不可编辑状态 enable
        setTreeEnable: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            settings.disabled = false;
            $('#' + settings.iptText).attr('data-toggle', 'dropdown').css("cursor", "pointer");;
            return true
        },

        //默认初始选择，选择第一个节点数据
        defaultSelect: function () {
            var $this = $(this);
            var settings = $this.data('DropdownTree');
            var id = $("#" + settings.treeId).find("li[role='treeitem']:first").attr("id");
            $this.DropdownTree('setSelectData', $("#" + settings.treeId).jstree().get_node(id).original);
            return true
        }
    };


    $.fn.DropdownTree = function () {
        var method = arguments[0];
        if (methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);
        } else if (typeof (method) == 'object' || !method) {
            method = methods.init;
        } else {
            //console.error('方法 ' + method + ' 在DropdownTree中不存在');
            return this;
        }
        return method.apply(this, arguments);
    };
})(jQuery);


//公共全局代码
var $BaseCommon = $;

$BaseCommon.ClearStr = function (strObj, defaultValue) {
    if (defaultValue === undefined) {
        defaultValue = "";
    }
    if (strObj === null) {
        return "";
    }
    return strObj ? strObj : defaultValue;
}
$BaseCommon.StrRealLength = function (str) {
    if (!str)
        return 0;
    return str.replace(/[^\x00-\xff]/g, "NB").length;
}
$BaseCommon.FormatMoneny = function (s) {

    s = $.ClearStr(s).toString();

    if (!s) {
        return "";
    }
    if (/[^0-9\.]/.test(s)) return "";
    s = s.replace(/^(\d*)$/, "$1.");
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    s = s.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(s))
        s = s.replace(re, "$1,$2");
    s = s.replace(/,(\d\d)$/, ".$1");
    return s.replace(/^\./, "0.");
}
//基础验证-通用验证函数
//domObjects：页面jquery对象
//baseMessage：基础验证提示消息
//extendVaild:验证扩展
$BaseCommon.PageVaild = function (domObjects, baseMessage, extendVaild) {
    //字符串是否纯数字
    this.IsNumber = function (strNumber) {
        if (strNumber && !/^[0-9]\d*$/.test(strNumber)) {
            return "必须为数字";
        }
        return "";
    };
    //邮件验证
    this.IsEmail = function (strEmail) {
        if (strEmail && !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(strEmail)) {
            return "格式不正确";
        }
        return "";
    };
    //浮点小数验证
    this.IsDecimal = function (strDecimal) {
        if (strDecimal && !/^\d+\.?\d{0,2}$/.test(strDecimal)) {
            return "不是小数或整数";
        }
        return "";
    },
    this.IsLengthDecimal = function (strDecimal, leftLenth, rightLength) {
        var countLeft = leftLenth - 1;
        var countRight = rightLength;
        var rexLeft = new RegExp("^([1-9]{1}[0-9]{0," + countLeft + "}|0{1}?)([.]{1}[0-9]*){0,1}$");
        var rexRight = new RegExp("^([1-9]{1}[0-9]*|0{1}?)([.]{1}[0-9]{0," + countRight + "}){0,1}$");
        var rex = new RegExp("^([1-9]{1}[0-9]*|0{1}?)([.]{1}[0-9]*){0,1}$");
        if (strDecimal && !rex.test(strDecimal)) {
            return "不是小数或整数！";
        }
        if (strDecimal && !rexLeft.test(strDecimal)) {
            return "整数部分不可超过" + leftLenth + "位！";
        }
        if (strDecimal && !rexRight.test(strDecimal)) {
            return "小数部分不可超过" + rightLength + "位！";
        }

        return "";
    },
    //是否固定办公电话
    this.IsPhone = function (strPhone) {
        if (strPhone && !/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(strPhone)) {
            return "格式不正确";
        }
        return "";
    },
    //是否传真电话
     this.IsFaxPhone = function (strFaxPhone) {
         if (strFaxPhone && ! /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(strFaxPhone)) {
             return "格式不正确";
         }
         return "";
     },
    //网站地址验证
      this.isUrl = function (strUrl) {
          var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
              + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"
              + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
              + "|" // 允许IP和DOMAIN（域名）
              + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
              + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
              + "[a-z]{2,6})" // first level domain- .com or .museum
              + "(:[0-9]{1,4})?" // 端口- :80
              + "((/?)|" // a slash isn't required if there is no file name
              + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
          var re = new RegExp(strRegex);
          //re.test()
          return re.test(strUrl) ? "" : "格式不正确";
      },
    //是否手机号码
    this.IsMobilePhone = function (strMobilePhone) {
        if (strMobilePhone && !   /^((\+?86)|(\(\+86\)))?1\d{10}$/.test(strMobilePhone)) {
            return "格式不正确";
        }
        return "";
    }
    //页面验证
    this.BaseVaild = function () {
        var isVaild = true;
        var baseObj = this;
        domObjects.each(function () {
            var $this = $(this);
            var isRequired = !($this.attr("drequired") === undefined);
            var inputValue = $.trim($this.val());
            //数据格式标签
            var inputDataType = $this.attr("datav");

            var inputName = $.trim($this.parents("li:eq(0)").children("span:eq(0)").html());
            if (inputName) {
                inputName = $.trim(inputName.replace(":", "").replace("：", ""));
            }
            else {
                inputName = $this.attr('placeholder');
                if (inputName) {
                    inputName = $.trim(inputName.replace(":", "").replace("：", ""));
                    inputName = $.trim(inputName.replace("请输入", "").replace("请选择", ""));
                }
            }


            var maxlength = $this.attr("maxlength");
            var minlength = $this.attr("minlength");


            //元素类型
            var inputType = $this.attr("type");
            if (!inputType && $this.find("option").length > 0) {
                inputType = "select";
            }

            //是否可为空验证
            if ((isRequired || minlength) && !inputValue) {
                var message = baseMessage + inputName + '不可为空！';
                if (inputType === "select") {
                    message = "请选择" + baseMessage + inputName;
                }
                $.showError(message);
                $this.focus();
                isVaild = false;
                return false;
            }

            //最小长度验证
            if (inputValue && inputValue.length < minlength) {
                $.showError(baseMessage + inputName + '最小长度为' + minlength + '！');
                $this.focus();
                isVaild = false;
                return false;
            }

            //最大长度验证
            if (maxlength && inputValue && inputValue.length > maxlength) {
                $.showError(baseMessage + inputName + '长度不能超过' + maxlength + "!");
                $this.focus();
                isVaild = false;
                return false;
            }

            //数据格式验证
            if (inputValue && inputDataType) {
                var messageStr = baseObj["Is" + inputDataType](inputValue);
                if (messageStr) {
                    $.showError(baseMessage + inputName + messageStr + "!");
                    $this.focus();
                    isVaild = false;
                    return false;
                }
            }
            return true;
        });
        return isVaild;
    };

    return this;
};

$BaseCommon.PageVaildFun = $BaseCommon.PageVaild();

//sting扩展
String.prototype.IsNullStr = function () {
    return this.length ? this.toString() : "";
};

//string 扩展类似C# string.Format()方法
String.prototype.format = function (args) {
    if (arguments.length > 0) {
        var result = this;
        if (arguments.length == 1 && args != undefined && args != null && typeof (args) == "object") {
            for (var key in args) {
                var reg = new RegExp("({" + key + "})", "g"),
                    value = args[key];
                if (value == null || value == undefined) {
                    value = '';
                }
                result = result.replace(reg, value);
            }
        }
        else {
            for (var i = 0, value, reg; i < arguments.length; i++) {
                value = arguments[i];
                reg = new RegExp("({[" + i + "]})", "g");
                if (value == null || value == undefined) {
                    value = '';
                }
                result = result.replace(reg, value);
            }
        }
        return result;
    }
    else {
        return this;
    }
}