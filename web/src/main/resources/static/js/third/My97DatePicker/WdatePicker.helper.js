(function ($) {
    $.isVal = function (obj) {
        return /textarea|input/.test($(obj)[0].tagName.toLocaleLowerCase());
    };
    $.WdatePicker = function (options) {
        options = $.extend(true, {
            src: '',
            minDate: "1900-01-01 00:00:00",
            maxDate: "9999-12-31 23:59:59",
            startDate: '',
            dateFmt: 'yyyy-MM-dd',
            curVal: '',
            onpicked: function () { },
            oncleared: function () { }
        }, options);
        var $src = $(options.src);
        var isVal = $.isVal($src);
        var tmpVal = (isVal ? $src.val() : $src.text());
        if (tmpVal == '') {
            isVal ? $src.val(options.curVal) : $src.text(options.curVal);
        }
        $src.click(function () {
            WdatePicker({
                minDate: options.minDate,
                maxDate: options.maxDate,
                startDate: options.startDate,
                dateFmt: options.dateFmt,
                onpicked: function () {
                    var val = (isVal ? $src.val() : $src.text());
                    options.onpicked.call(this, val);
                },
                oncleared: options.oncleared
            });
        });
    };
    $.WdatePickerSection = function (beginEle, endEle) {
        var isValB = $.isVal(beginEle);
        var isValE = $.isVal(endEle);
        $.WdatePicker({
            src: beginEle,
            maxDate: moment().format('YYYY-MM-DD'),
            onpicked: function (d) {
                var val = (isValE ? $(endEle).val() : $(endEle).text());
                if (val != '') {
                    if (d > val) {
                        $.showWarning("开始时间不能大于结束时间");
                        isValB ? $(beginEle).val('') : $(beginEle).text('');
                    }
                }
            }
        });
        $.WdatePicker({
            src: endEle,
            maxDate: moment().format('YYYY-MM-DD'),
            onpicked: function (d) {
                var val = (isValB ? $(beginEle).val() : $(beginEle).text());
                if (val != '') {
                    if (d < val) {
                        $.showWarning("结束时间不能小于开始时间");
                        isValE ? $(endEle).val('') : $(endEle).text('');
                    }
                }
            }
        });
    };

    $.WdatePickerGroup = function (options) {
        var settings = {
            beginEle: "",//必填
            endEle: "",//必填
            beginDefaultDate: "",
            endDefaultDate: "",
            beginMinDate: "",
            beginMaxDate: "",
            endMinDate: "",
            endMaxDate: "",
            messageTitle: "",
            startTitle: "",
            endTitle: "",
            dateFmt: "yyyy-MM-dd",
            onpicked: function () { }
        };
        if (options) {
            $.extend(settings, options);
        }

        var isValB = $.isVal(settings.beginEle);
        var isValE = $.isVal(settings.endEle);
        $.WdatePicker({
            src: settings.beginEle,
            maxDate: settings.beginMaxDate,
            minDate: settings.beginMinDate,
            curVal: settings.beginDefaultDate,
            dateFmt: settings.dateFmt,
            onpicked: function (d) {
                var self = this;
                var val = (isValE ? $(settings.endEle).val() : $(settings.endEle).text()); 
                var begin = (isValB ? $(settings.beginEle).val() : $(settings.beginEle).text());
                settings.onpicked.call(this, begin, val);
                if (val != '') {
                    if (d > val) {
                        if (settings.startTitle.length == 0) {
                            $.showWarning(settings.messageTitle + "开始时间不能大于结束时间");
                        }
                        else {
                            $.showWarning(settings.startTitle + "不能大于" + settings.endTitle);
                        }
                        isValB ? $(settings.beginEle).val('') : $(settings.beginEle).text('');
                    }
                }
            }
        });
        $.WdatePicker({
            src: settings.endEle,
            maxDate: settings.endMaxDate,
            minDate: settings.endMinDate,
            curVal: settings.endDefaultDate,
            dateFmt: settings.dateFmt,
            onpicked: function (d) {
                var self = this;
                var val = (isValB ? $(settings.beginEle).val() : $(settings.beginEle).text());
                var end = (isValE ? $(settings.endEle).val() : $(settings.endEle).text());
                settings.onpicked.call(this, val, end);
                if (val != '') {
                    if (d < val) {
                        if (settings.startTitle.length == 0) {
                            $.showWarning(settings.messageTitle + "结束时间不能小于开始时间");
                        }
                        else {
                            $.showWarning(settings.endTitle + "不能小于" + settings.startTitle);
                        }

                        isValE ? $(settings.endEle).val('') : $(settings.endEle).text('');
                    }
                }
            }
        });
    }

    $.GetAddDayStr = function (dateValue, addDayNum) {
        var dateNow = new Date(dateValue.substring(0, 4), dateValue.substring(5, 7) - 1, dateValue.substring(8, 10));
        var dateResult = dateNow.getTime() + addDayNum * 24 * 60 * 60 * 1000;
        var result = new Date(dateResult);
        var month = result.getMonth() + 1;
        var day = result.getDate();
        return result.getFullYear() + "-" + (month >= 10 ? month : "0" + month) + "-" + (day >= 10 ? day : "0" + day);
    }
})(jQuery);