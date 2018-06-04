/***
Wrapper/Helper Class for datagrid based on jQuery Datatable Plugin
***/
var Datatable = function () {

    var tableOptions; // main options
    var dataTable; // datatable object
    var table; // actual table jquery object
    var tableContainer; // actual table container object
    var tableWrapper; // actual table wrapper jquery object
    var tableInitialized = false;
    var ajaxParams = {}; // set filter mode
    var the;
    return {

        //main function to initiate the module
        init: function (options) {
            if (!$().dataTable) {
                return;
            }

            the = this;
            // default settings
            options = $.extend(true, {
                src: "", // actual table  
                filterApplyAction: "filter",
                filterCancelAction: "filter_cancel",
                resetGroupActionInputOnSuccess: true,
                loadingMessage: 'Loading...',
                dataTable: {
                    "dom": "t<'pagination-box clear'<'pagination-records fl clear'lis><'pagination-btnBox fr'p>>", // datatable layout
                    "pageLength": 10, // default records per page
                    "language": { // language settings
                        //// data tables spesific
                        "lengthMenu": "<span class='page-tip'>每页显示</span><span class='seperator'></span> _MENU_ ",
                        "info": "<span class='seperator'></span>共 _TOTAL_ 条记录",
                        "infoEmpty": "",
                        "emptyTable": "暂无数据",
                        "zeroRecords": "暂无数据",
                        "sInfoFiltered": '',
                        select: {
                            rows: {
                                _: "<span class='seperator'>&nbsp;&nbsp;</span><span class='page-tip'>选中 %d 行</span>",
                                0:''
                            }
                        },
                        "paginate": {
                            "previous": "上一页",
                            "next": "下一页",
                            "last": "最后一页",
                            "first": "第一页",
                            "page": "",
                            "pageOf": ""
                        }
                    },

                    "orderCellsTop": true,
                    "columnDefs": [{ // define columns sorting options(by default all columns are sortable extept the first checkbox column)
                        'orderable': false,
                        'targets': [0]
                    }],
                    columns: [
                        {
                            orderable: false,
                            render: function (data, type, full, row) {
                                return data===undefined ? '':data ;
                            }
                        }
                    ],
                    ordering:false,//关闭排序
                    "autoWidth": false, // disable fixed width and enable fluid table
                    "processing": false, // enable/disable display message box on record load
                    "serverSide": true, // enable/disable server side ajax loading
                    stateSave: false,
                    'deferLoading':'',
                    "ajax": { // define ajax settings
                        "url": "", // ajax URL
                        "type": "POST", // request type
                        "timeout": 20000,
                        "data": function (data) { // add request parameters before submit
                            $.each(ajaxParams, function (key, value) {
                                data[key] = value;
                            });
                        },
                        "dataSrc": function (res) { // Manipulate the data returned from the server
                            if (res.Success === false) {
                                //ajax出错时，返回空数据
                                return [];
                            }
                            if (res.customActionStatus) {
                                if (tableOptions.resetGroupActionInputOnSuccess) {
                                    $('.table-group-action-input', tableWrapper).val("");
                                }
                            }
                            if (tableOptions.onSuccess) {
                                tableOptions.onSuccess.call(undefined, the, res);
                            }
                            return res.aaData;
                        },
                        "error": function () { // handle general connection errors
                            if (tableOptions.onError) {
                                tableOptions.onError.call(undefined, the);
                            }
                        }
                    },

                    "drawCallback": function (oSettings) { // run some code on table redraw
                        if (tableInitialized === false) { // check if table has been initialized
                            tableInitialized = true; // set table initialized
                            table.show(); // display table
                        }
                        if (tableOptions.rowClick) {
                            options.src.find('tbody > tr').click(function (e) {
                                var flag = false;
                                if (e.target.tagName.toLocaleLowerCase() === 'input') {
                                    if (e.target.type.toLocaleLowerCase() === 'checkbox' || e.target.type.toLocaleLowerCase() === 'radio') {

                                    } else {
                                        flag = true;
                                    }
                                } else if (e.target.tagName.toLocaleLowerCase() === 'a') {

                                } else {
                                    flag = true;
                                }
                                if (flag) {
                                    tableOptions.rowClick.call(the, this, dataTable.row($(this)).data());
                                }
                            });
                        }
                        // callback for ajax data load
                        if (tableOptions.onDataLoad) {
                            tableOptions.onDataLoad.call(undefined, the);
                        }
                    },
                    "createdRow": function (row, data, dataIndex) {
                        if (tableOptions.render) {
                            var html = tableOptions.render.call(the, data, dataIndex);
                            $(row).find('td').empty();
                            $(row).find('td').append(html);
                        }
                    }
                }
            }, options);
            tableOptions = options;
            //排序字段
            if (tableOptions.order) {
                tableOptions.dataTable.ordering = true;
                tableOptions.dataTable.columns[0].sName = tableOptions.order[0];
                tableOptions.dataTable.order = [[0, tableOptions.order[1]]]
            }
            // create table's jquery object
            table = $(options.src);
            tableContainer = table.parents(".table-container");

            // apply the special class that used to restyle the default datatable
            var tmp = $.fn.dataTableExt.oStdClasses;

            $.fn.dataTableExt.oStdClasses.sWrapper = $.fn.dataTableExt.oStdClasses.sWrapper + " dataTables_extended_wrapper";
            $.fn.dataTableExt.oStdClasses.sFilterInput = "form-control input-xs input-sm input-inline";
            $.fn.dataTableExt.oStdClasses.sLengthSelect = "form-control input-xs input-sm input-inline";

            // initialize a datatable
            dataTable = table.DataTable(options.dataTable);

            // revert back to default
            $.fn.dataTableExt.oStdClasses.sWrapper = tmp.sWrapper;
            $.fn.dataTableExt.oStdClasses.sFilterInput = tmp.sFilterInput;
            $.fn.dataTableExt.oStdClasses.sLengthSelect = tmp.sLengthSelect;

            // get table wrapper
            tableWrapper = table.parents('.dataTables_wrapper');

            // build table group actions panel
            if ($('.table-actions-wrapper', tableContainer).size() === 1) {
                $('.table-group-actions', tableWrapper).html($('.table-actions-wrapper', tableContainer).html()); // place the panel inside the wrapper
                $('.table-actions-wrapper', tableContainer).remove(); // remove the template container
            }
        },

        setAjaxParam: function (name, value) {
            ajaxParams[name] = value;
        },

        addAjaxParam: function (name, value) {
            if (!ajaxParams[name]) {
                ajaxParams[name] = [];
            }

            skip = false;
            for (var i = 0; i < (ajaxParams[name]).length; i++) { // check for duplicates
                if (ajaxParams[name][i] === value) {
                    skip = true;
                }
            }

            if (skip === false) {
                ajaxParams[name].push(value);
            }
        },

        clearAjaxParams: function () {
            ajaxParams = {};
        },

        getDataTable: function () {
            return dataTable;
        },

        getTableWrapper: function () {
            return tableWrapper;
        },

        gettableContainer: function () {
            return tableContainer;
        },

        getTable: function () {
            return table;
        },
        reload: function () {
            dataTable.ajax.reload(null, true);
        },
        refresh: function () {
            dataTable.ajax.reload(null, false);
        },
        addRowData: function (data) {
            dataTable.rows.add(data).draw();
        },
        //获取当前记录数
        getRowsCount: function () {
            return the.getDataTable().context[0]._iRecordsTotal;
        },
        getSelectedRows: function () {//获取选中行的dom
            
        },
        getSelectedRowsData: function () {//获取选中行的数据
            var rows = [];
            $('tbody > tr.selected', table).each(function () {
                rows.push(dataTable.row($(this)).data());
            });
            return rows;
        },
        getDataTableRowData: function (tr) {//获取选中行的数据
          return  dataTable.row($(tr)).data();
        }
    };

};