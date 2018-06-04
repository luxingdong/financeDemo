$(window).resize(function () {
    $.initMenu();
});
$(function () {
    //初始化导航条
    $.initMenu();
   
    //初始化模态框
    $.initModal();
    function isIE8() {
        if (navigator.userAgent.indexOf("MSIE") > 0) {
            if (navigator.userAgent.indexOf("MSIE 8.0") > 0) {
                return true;
            }
        }
    }
    //文本框焦点状态
    $(".input-box input").focus(function () {
        $(this).parent().addClass("focus");
    });
    $(".input-box input").blur(function () {
        $(this).parent().removeClass("focus");
    });
    //详情显示完整
    $(".btn-showall").click(function () {
        $(this).parent().toggleClass("ellipsis");
        if ($(this).text() == "折叠") {
            $(this).text("展开");
            $(this).parent().removeAttr('style');
            $(this).parent().prev(".title").removeAttr('style');
        } else {
            $(this).text("折叠");
            if (isIE8()) {
                $(this).parent().css({
                    "height": "auto",
                    "min-height": "46px"
                });
            } else {
                $(this).parent().css({
                    "height": "auto",
                    "min-height": "0.46rem"
                });
            }
            
            var cHeight1 = $(this).parent().height();
            $(this).parent().prev(".title").css("height", cHeight1);
        }
    });


    $('.fold').each(function () {
        var $this = $(this);
        var tag = $this.attr('data-for');
        $this.click(function () {
            if ($this.hasClass("open")) {
                $this.find('span').text('展开');
                $this.find('.iconfont').removeClass('icon-xiangshangfanye').addClass('icon-xiangxiafanye');
                $this.removeClass('open').addClass('close');
                $('#' + tag).fadeOut(500);
            } else if ($this.hasClass('close')) {
                $this.find('span').text('收起');
                $this.find('.iconfont').removeClass('icon-xiangxiafanye').addClass('icon-xiangshangfanye');
                $this.removeClass('close').addClass('open');
                $('#' + tag).fadeIn(500);
            }
        });
    });

    //帮助中心菜单
    var qMenuTitle = $('.q-menu-title');
    qMenuTitle.on('click', function () {
        var $this = $(this);
        var qMenuName = $this.nextAll();
        !!$this.next('.hide').length ? qMenuName.removeClass('hide') : qMenuName.addClass('hide')
    });
    $('.q-menu-name-active').removeClass('hide').siblings(".q-menu-name").removeClass('hide');

    //参见单位帮助详细alertTip
    $(".label-alert-tip label i.alertTip").hover(function () {
        $(this).parent("label").find("span.alertTipMsg").show();
    }, function () {
        $(this).parent("label").find("span.alertTipMsg").hide();
    });

    var $detailsList = $(".details-list");
    $detailsList.find('.details-item').each(function () {
        var $this = $(this);
        var $text = $this.find(".details-item-text");
        $text.attr('title', $.trim($text.text()));
    });

});
/*
* 导航条
* -------------------------------------------------- */
(function ($) {
    $.initMenu = function () {
        var $items = $('.menu-box > .menu-item');
        var length = $items.length;
        var windowWidth = $(window).width();
        if (windowWidth <= 1450) {
            $('.menu-box > .menu-item').removeAttr("style"); 
            $('.menu-box > .menu-item').addClass("smallScreen");
        } else {
            $('.menu-box > .menu-item').removeClass("smallScreen");
            $('.menu-box > .menu-item').css('width', 1 / (length) * 100 + '%');
        }
        $items.hover(function () {
            $this = $(this);
            var thisWidth = $this.width();
            var thisChildWidth = $this.children('.menu-child-box').width();
            var right = (thisWidth - thisChildWidth) / 2;
            $this.children('.menu-child-box').css("right",right+"px").removeClass('hide');
        }, function () {
            $this = $(this);
            $this.children('.menu-child-box').addClass('hide');
        });
    };
})(jQuery);


/*
* 简单模仿bootstrap 模态框
* -------------------------------------------------- */
(function ($) {
    $.initModal = function () {
        var $body = $('body');
        $('.modal [data-hide="true"]', $body).each(function () {
            $this = $(this);
            $this.click(function () {
                var $bg = $body.children('.modal-bg');
                $(this).parents('.modal').eq(0).fadeOut(function () {
                    $bg.css('z-index', '');
                    if ($body.find('.modal:visible').length > 0) {
                        return;
                    }
                    $bg.fadeOut();
                    $body.css({
                        "padding-right": 0,
                        "overflow-y": "auto"
                    });
                });
            });
        });
    };
    $.showModal = function (obj, zIndex,calH) {
        var $obj = $(obj);
        var $body = $('body');
        //禁用body的滚动条，防止弹出框抖动
        $body.css({
            "overflow-y": "hidden",
            "padding-right": getScrollWidth()+'px'
        });
        var $bg = $body.children('.modal-bg');
        if ($bg.length <= 0) {
            $body.append('<div class="modal-bg"></div>');
            $bg = $body.children('.modal-bg');
        }
        if (zIndex) {
            $obj.css('z-index', zIndex + 11);
            $bg.css('z-index', zIndex);
        }
        //$obj.fadeIn(function () {
        //    var h = $obj.height();
        //    var wh = $(window).height();
        //    if (h < wh) {
        //        $obj.css('top', (wh - h) / 2);
        //    } else {
        //        $obj.css('top', 50);
        //        var $content = $obj.find('.popWin-content');
        //        $content.find("div.pd20").remove();
        //        var $contentHeight = 0;
        //        for (var i = 0; i < $content.children(":visible").length; i++) {
        //            $contentHeight += $content.children(":visible").eq(i).outerHeight(true);
        //        }
                
        //        try{
        //            //+1 解决精度问题
        //            var contentH = Math.ceil($contentHeight) + 1 +
        //                parseFloat($content.css('padding-top').replace('px', '')) +
        //                parseFloat($content.css('padding-bottom').replace('px', ''));
        //        }
        //        catch (error)
        //        {
                   
        //        }

        //        var sh = wh - 100 - $obj.find('.popWin-head').height() - $obj.find('.popWin-btn').height();
        //        $content.css({
        //            //'height': sh,
        //            'overflow-y': 'auto',
        //            'max-height': sh
        //        });
        //        if (contentH > sh) {
        //            $content.append('<div class="pd20" style="height:' + $content.css('padding-bottom') + '"></div>')
        //        } else {
        //            $content.css({
        //                'min-height': contentH
        //            });
        //        }
        //    }
        //});
        $obj.fadeIn();
        $bg.fadeIn();
    }
    $.hideModal = function (obj) {
        var $obj = $(obj);
        var $body = $('body');
        var $bg = $body.children('.modal-bg');
        $obj.fadeOut(function () {
            $bg.css('z-index', '');
            if ($body.find('.modal:visible').length > 0) {
                return;
            }
            $bg.fadeOut();
            $body.css({
                "padding-right": 0,
                "overflow-y": "auto"
            });
        });
    }
})(jQuery);
/*
弹出框
*/
(function ($) {

    var showBlockUI = function (options) {
        if (options.target) {
            var el = $(options.target);
            options.centerY = true;
            el.show(function () {
                el.block(options);
            });
            if (options.duration > 0) {
                setTimeout(function () {
                    el.unblock();
                    el.hide();
                }, options.duration);
            }

        }
    }

    var hideBlockUI = function (target) {
        if (target) {
            $(target).unblock({
                onUnblock: function () {
                    $(target).css('position', '');
                    $(target).css('zoom', '');
                    $(target).hide();
                }
            });
        }
    }

    $.isIE = function (ver) {
        var b = document.createElement('b')
        b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
        return b.getElementsByTagName('i').length === 1
    };
    $.popWin = function (options) {
        var settings = {
            title: '',
            html: '',
            big: false,
            maxWidth: false,
            showBtn: true,
            isOnlySureBtn: false,//是否只显示确认按钮
            loadCallback: function () { },
            sureCallback: function () { },
            cancelCallback: function () { }
        }
        $.extend(settings, options);
        var html1 = '<div class="popWin-box">' +
                        '<div class="popWin-head clear"><span class="popWin-title ellipsis fl">' + settings.title + '</span><span class="popWin-close fr" id="popWinClose">×</span><span id="showEcharts" style="display:none;" class="fr" title="全屏查看"></span></div>' +
                        '<div class="popWin-content">' + settings.html + '</div>' +
                        '<div class="popWin-btn"><button class="btn btn-blue-full" id="popWinSure">确定</button><button class="btn btn-default1" id="popWinCancel">取消</button></div>' +
                    '</div>';
        var target = '.popWin-block';
        $html = $(html1);
        if (!settings.showBtn) {
            $html.find('.popWin-btn').hide();
        }
        if (settings.isOnlySureBtn === true) {
            $html.find('#popWinCancel').hide();
        }
        var blockOptions = {
            target: target,
            message: $html,
            baseZ: 20000,
            css: {
                top: 50,
                border: '0',
                padding: '0',
                backgroundColor: 'none',
                cursor: 'default',
                position: 'fixed'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.6,
                cursor: 'default',
                position: 'fixed'
            },
            onBlock: function () {
                var $obj = $(target).find('.popWin-box').eq(0);
                var h = $obj.height() + 50;
                var wh = $(window).height();
                if (h >= wh) {
                    $obj.parent().css('top', 50);
                    var sh = wh - 100 - $obj.children('.popWin-head').height() - $obj.children('.popWin-btn').height();
                    $obj.find('.popWin-content').css({
                        'overflow-y': 'scroll',
                        'height': sh
                    });
                }

                settings.loadCallback.call(this);
            }
        }

        if (settings.big) {
            blockOptions.css.width = '50%';
        }
        if (settings.maxWidth) {
            blockOptions.css.width = '80%';
        }
        if ($('body > .popWin-block').length < 1) {
            $('body').append('<div class="popWin-block"></div>');
        }
        showBlockUI(blockOptions);
        $html.on('click', '#popWinClose', function () {
            hideBlockUI(target);
        });
        $html.on('click', '#popWinSure', function () {
            settings.sureCallback.call(this);
        });
        $html.on('click', '#popWinCancel', function () {
            settings.cancelCallback.call(this);
            hideBlockUI(target);
        });
    }

    $.hidePopWin = function () {
        hideBlockUI('.popWin-block');
    }
    $.showSuccess = function (msg, time) {
        if (typeof msg == 'undefined') {
            msg = '操作成功！';
        }
        var html = '<div><span class="success-box"><i class="iconfont icon-iconfonticongou"></i>&nbsp;&nbsp;' + msg + '</span></div>';
        var s = 3000;
        if (time > 0) {
            s = time;
        }
        if ($('body > .msg-block').length < 1) {
            $('body').append('<div class="msg-block"></div>');
        }
        showBlockUI({
            target: '.msg-block',
            duration: s,
            message: html,
            baseZ: 25000,
            css: {
                border: '0',
                padding: '0',
                backgroundColor: 'none',
                cursor: 'default',
                position: 'fixed'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0,
                cursor: 'default',
                position: 'fixed'
            }
        });
    };

    $.showWarning = function (msg, time) {
        var html = '<div><span class="waring-box"><i class="iconfont icon-iconfontjinggao"></i>&nbsp;&nbsp;' + msg + '</span></div>';
        var s = 3000;
        if (time > 0) {
            s = time;
        }
        if ($('body > .msg-block').length < 1) {
            $('body').append('<div class="msg-block"></div>');
        }
        showBlockUI({
            target: '.msg-block',
            duration: s,
            message: html,
            baseZ: 25000,
            css: {
                border: '0',
                padding: '0',
                backgroundColor: 'none',
                cursor: 'default',
                position: 'fixed'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0,
                cursor: 'default',
                position: 'fixed'
            }
        });
    };

    $.showError = function (msg, time) {
        var html = '<div><span class="error-box"><i class="iconfont icon-iconfontchacha"></i>&nbsp;&nbsp;' + msg + '</span></div>';
        var s = 3000;
        if (time > 0) {
            s = time;
        }
        if ($('body > .msg-block').length < 1) {
            $('body').append('<div class="msg-block"></div>');
        }
        showBlockUI({
            target: '.msg-block',
            duration: s,
            message: html,
            baseZ: 25000,
            css: {
                border: '0',
                padding: '0',
                backgroundColor: 'none',
                cursor: 'default',
                position: 'fixed'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0,
                cursor: 'default',
                position: 'fixed'
            }
        });
    };
    $.showLoading = function () {
        var html = '<div class="loading-message"><img src="/img/loading/loading-spinner-grey.gif">&nbsp;&nbsp;<span>正在处理，请稍候...</span></div>';
        if ($('body > .loading-block').length < 1) {
            $('body').append('<div class="loading-block"></div>');
        }
        $('.loading-block').show();
        showBlockUI({
            target: '.loading-block',
            message: html,
            baseZ: 30000,
            css: {
                border: '0',
                padding: '0',
                backgroundColor: 'none',
                position: 'fixed'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0,
                cursor: 'wait',
                position: 'fixed'
            }
        });
    }
    $.hideLoading = function () {
        hideBlockUI('.loading-block');
    }
})(jQuery);



/*
* 单选
* -------------------------------------------------- */
(function ($) {
    $.initRadio = function (options) {
        var settings = {
            src: '#',
            changeCallback: function () { }
        }
        $.extend(settings, options);
        $(settings.src + ' .rtb-item').each(function () {
            var $this = $(this);
            $this.click(function () {
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                    $this.siblings('.rtb-item').removeClass('active');
                    settings.changeCallback.call(this);
                }
            });
        });
    };
    $.getRadioVal = function (obj) {
        var $obj = $(obj);
        var val = $obj.find('.rtb-item.active').attr('value');
        return val;
    };
})(jQuery);


/*
* 公共方法
* -------------------------------------------------- */
(function ($) {
    $.getScrollbarWidth = function () {//获取滚动条宽度
        var oP = document.createElement('p'),
           styles = {
               width: '100px',
               height: '100px'
           }, i, clientWidth1, clientWidth2, scrollbarWidth;
        for (i in styles) oP.style[i] = styles[i];
        document.body.appendChild(oP);
        clientWidth1 = oP.clientWidth;
        oP.style.overflowY = 'scroll';
        clientWidth2 = oP.clientWidth;
        scrollbarWidth = clientWidth1 - clientWidth2;
        $(oP).remove();
        return scrollbarWidth;
    };
    $.tableEllipsis = function (obj) {
        var $table = $(obj);
        var thHeight = $table.find('th').height();
        $table.find('tbody td').each(function () {
            var $this = $(this);
            var h = $this.height();
            if (h > thHeight) {
                $this.addClass('ellipsis');
                //$this.css('display', 'table-cell');
                $this.attr('title', $.trim($this.text()));
            }
        });
    };
    //$.tableRowItemEllipsis = function (obj) {
    //    var $table = $(obj);
    //    var thHeight = $table.find('.row-item:eq(1)').height();
    //    if (!thHeight)
    //        return;
    //    $table.find('tbody td .row-item').removeClass("ellipsis");
    //    $table.find('tbody td .row-item').each(function () {
    //        var $this = $(this);
    //        var h = $this.height();
    //        if (h > thHeight) {
    //            $this.attr('title', $this.text());
    //        }
    //        $this.addClass('ellipsis');
    //    });
    //}


    $.Slider = function (options) {
        var inn;
        options = $.extend({
            src: '',
            autoplay: false,//自动切换
            interval: 8000,//自动切换时间
            duration: 2000,//过渡时间
            start: 0,
            direction: 0,//0 水平 1 垂直
            loop: true//是否循环
        }, options);
        if ($('#' + options.src + ' > li').length > 0) {
            var slider = new pageSwitch(options.src, {
                duration: options.duration,
                start: options.start,
                direction: options.direction,
                loop: options.loop,
                mouse: false,
                ease: 'ease',
                transition: 'scroll'
            });
            if (options.autoplay) {
                inn = setInterval(function () {
                    slider.next();
                }, options.interval);
                $('#' + options.src).hover(function () {
                    clearInterval(inn);
                }, function () {
                    inn = setInterval(function () {
                        slider.next();
                    }, options.interval);
                });
                slider.clearTimer = function () {
                    clearInterval(inn);
                }
                slider.oppenTimer = function () {
                    inn = setInterval(function () {
                        slider.next();
                    }, options.interval);
                }
            }
            return slider;
        } else {
            return null;
        }
    }

})(jQuery);



/*
* search Tab
* -------------------------------------------------- */
(function ($) {
    $.initSearchTab = function (options) {
        var settings = {
            isMulti: false,
            tagName: '',
            SelectedFirst: true,
            selectedCallback:null
        }
        if (options) {
            $.extend(settings, options);
        }
        var $tags = $("[data-tag='" + settings.tagName + "']");
        if (settings.SelectedFirst) {
            $tags.eq(0).addClass("selected");
        }
        if (!settings.isMulti) {
            $tags.addClass('radio');
        }
        var foldable = $tags.parent().attr('data-foldable') || 'true';//父级元素加上data-foldable=“false”将不在进行是否折叠的计算
        if ($tags.length && $tags.length > 0 && foldable == 'true') {
            var itemW = 0;
            var $box = $($tags[0]).parents('.condition-list').eq(0);
            var boxW = $box.width();
            var boxH = $box.height();
            $tags.each(function (index, o) {
                itemW += $(o).length > 0 ? $(o).outerWidth(true) : 0;
            });
            if (itemW > boxW) {
                $box.addClass('has-fold close');
                var $fold = $('<div class="fold"><i class="iconfont icon-xiangxiafanye"></i><span>展开</span></div>');
                $box.prepend($fold);
                $fold.click(function () {
                    if ($box.hasClass('close')) {
                        $fold.find('span').text('收起');
                        $fold.find('i').removeClass('icon-xiangxiafanye').addClass('icon-xiangshangfanye');
                        $box.removeClass('close');
                        $box.css('height', 'auto');
                    } else {
                        $fold.find('span').text('展开');
                        $fold.find('i').removeClass('icon-xiangshangfanye').addClass('icon-xiangxiafanye')
                        $box.addClass('close');
                        $box.removeAttr('style');
                    }
                });
            } else {
                $box.removeClass('has-fold');
            }
        }
        $tags.click(function () {
            var $this = $(this);
            var selectValue = $this.attr("data-code");
            if (selectValue === '-1') {
                $tags.removeClass("selected").removeAttr("data-selected");
                $this.addClass("selected");
            }
            else {
                var isChecked = $this.attr("data-selected");
                if (isChecked && settings.isMulti) {
                    $this.removeClass("selected").removeAttr("data-selected");
                    return;
                }
                if (!settings.isMulti) {
                    $tags.removeClass("selected").removeAttr("data-selected");
                } else {
                    if (settings.SelectedFirst) {
                        $tags.eq(0).removeClass("selected");
                    }
                }
                $this.addClass("selected").attr("data-selected", "true");
            }
            if (settings.selectedCallback &&typeof(settings.selectedCallback)=='function') {
                settings.selectedCallback(selectValue);
            }
        });
    };
    $.getSearchTabVal = function (tagName) {
        var ary = new Array();
        $("[data-tag='" + tagName + "'][data-selected]").each(function () {
            var value = $(this).attr("data-code");
            if (value != -1) {
                ary.push(value);
            }
        });
        return ary;
    }
})(jQuery);

function getScrollWidth() {
    var noScroll, scroll, oDiv = document.createElement("DIV");
    oDiv.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
    noScroll = document.body.appendChild(oDiv).clientWidth;
    oDiv.style.overflowY = "scroll";
    scroll = oDiv.clientWidth;
    document.body.removeChild(oDiv);
    return noScroll - scroll;
}