"use strict";
var KTDatatablesBasicBasic = {
    init: function () {
        var t;
        (t = $("#admin_datatable")).DataTable({
            responsive: !0,
            dom: "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
            lengthMenu: [5, 10, 25, 50],
            pageLength: 10,
            language: {lengthMenu: "Display _MENU_"},
            order: [[1, "desc"]],
            headerCallback: function (t, a, l, s, e) {
                t.getElementsByTagName("th")[0].innerHTML = '<label class="checkbox checkbox-single">\n' +
                    '        <input type="checkbox" value="" class="group-checkable"/>\n' +
                    '        <span></span>\n' +
                    '    </label>'
            },
            columnDefs: [{
                targets: 0,
                width: "30px",
                className: "dt-left",
                orderable: !1,
                render: function (t, a, l, s) {
                    return '<label class="checkbox checkbox-single">\n' +
                        '        <input type="checkbox" value="" class="checkable"/>\n' +
                        '        <span></span>\n' +
                        '    </label>'
                }
            }, {
                targets: -1, title: "Actions", orderable: !1, width: "125px", render: function (t, a, l, s) {
                    return '<div class="dropdown dropdown-inline">\t                            \n' +
                        '        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\t                                \n' +
                        '            <span class="svg-icon svg-icon-md">\t                                    \n' +
                        '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\n' +
                        '                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                            \n' +
                        '                        <rect x="0" y="0" width="24" height="24"/>\t                                            \n' +
                        '                        <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\t                                        \n' +
                        '                    </g>\t                                    \n' +
                        '                </svg>\t                                \n' +
                        '            </span>\t                            \n' +
                        '        </a>\t                            \n' +
                        '        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\t                                \n' +
                        '            <ul class="navi flex-column navi-hover py-2">\t                                    \n' +
                        '                <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\t                                        \n' +
                        '                    Choose an action:\t                                    \n' +
                        '                </li>\t                                    \n' +
                        '                <li class="navi-item">\t                                        \n' +
                        '                    <a href="#" class="navi-link">\t                                            \n' +
                        '                        <span class="navi-icon"><i class="la la-print"></i></span>\t                                            \n' +
                        '                        <span class="navi-text">Print</span>\t                                        \n' +
                        '                    </a>\t                                    \n' +
                        '                </li>\t                                    \n' +
                        '                <li class="navi-item">\t                                        \n' +
                        '                    <a href="#" class="navi-link">\t                                            \n' +
                        '                        <span class="navi-icon"><i class="la la-copy"></i></span>\t                                            \n' +
                        '                        <span class="navi-text">Copy</span>\t                                        \n' +
                        '                    </a>\t                                    \n' +
                        '                </li>\t                                    \n' +
                        '                <li class="navi-item">\t                                        \n' +
                        '                    <a href="#" class="navi-link">\t                                            \n' +
                        '                        <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\t                                            \n' +
                        '                        <span class="navi-text">Excel</span>\t                                        \n' +
                        '                    </a>\t                                    \n' +
                        '                </li>\t                                    \n' +
                        '                <li class="navi-item">\t                                        \n' +
                        '                    <a href="#" class="navi-link">\t                                            \n' +
                        '                        <span class="navi-icon"><i class="la la-file-text-o"></i></span>\t                                            \n' +
                        '                        <span class="navi-text">CSV</span>\t                                        \n' +
                        '                    </a>\t                                    \n' +
                        '                </li>\t                                    \n' +
                        '                <li class="navi-item">\t                                        \n' +
                        '                    <a href="#" class="navi-link">\t                                            \n' +
                        '                        <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\t                                            \n' +
                        '                        <span class="navi-text">PDF</span>\t                                        \n' +
                        '                    </a>\t                                    \n' +
                        '                </li>\t                                \n' +
                        '            </ul>\t                            \n' +
                        '        </div>\t                        \n' +
                        '    </div>\t                        \n' +
                        '    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\t                            \n' +
                        '        <span class="svg-icon svg-icon-md">\t                                \n' +
                        '            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\n' +
                        '                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        \n' +
                        '                    <rect x="0" y="0" width="24" height="24"/>\t                                        \n' +
                        '                    <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" \n' +
                        '                          fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\t                                        \n' +
                        '                    <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\t                                    \n' +
                        '                </g>\t                                \n' +
                        '            </svg>\t                            \n' +
                        '        </span>\t                        \n' +
                        '    </a>\t                        \n' +
                        '    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t                            \n' +
                        '        <span class="svg-icon svg-icon-md">\t                                \n' +
                        '            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\n' +
                        '                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        \n' +
                        '                    <rect x="0" y="0" width="24" height="24"/>\t                                        \n' +
                        '                    <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\t                                        \n' +
                        '                    <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\t                                    \n' +
                        '                </g>\t                                \n' +
                        '            </svg>\t                            \n' +
                        '        </span>\t                        \n' +
                        '    </a>'
                }
            }, {
                targets: 8, width: "75px", render: function (t, a, l, s) {
                    var e = {
                        1: {title: "Pending", class: "label-light-success"},
                        2: {title: "Delivered", class: " label-light-danger"},
                        3: {title: "Canceled", class: " label-light-primary"},
                        4: {title: "Success", class: " label-light-success"},
                        5: {title: "Info", class: " label-light-info"},
                        6: {title: "Danger", class: " label-light-danger"},
                        7: {title: "Warning", class: " label-light-warning"}
                    };
                    return void 0 === e[t] ? t : '<span class="label label-lg font-weight-bold' + e[t].class + ' label-inline">' + e[t].title + "</span>"
                }
            }, {
                targets: 9, width: "75px", render: function (t, a, l, s) {
                    var e = {
                        1: {title: "Online", state: "danger"},
                        2: {title: "Retail", state: "primary"},
                        3: {title: "Direct", state: "success"}
                    };
                    return void 0 === e[t] ? t : '<span class="label label-' + e[t].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + e[t].state + '">' + e[t].title + "</span>"
                }
            }]
        }), t.on("change", ".group-checkable", (function () {
            var t = $(this).closest("table").find("td:first-child .checkable"), a = $(this).is(":checked");
            $(t).each((function () {
                a ? ($(this).prop("checked", !0), $(this).closest("tr").addClass("active")) : ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
            }))
        })), t.on("change", "tbody tr .checkbox", (function () {
            $(this).parents("tr").toggleClass("active")
        })), function () {
            var t = $("#kt_datatable_2");
            t.DataTable({
                responsive: !0,
                dom: "<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>",
                lengthMenu: [5, 10, 25, 50],
                pageLength: 10,
                language: {lengthMenu: "Display _MENU_"},
                order: [[1, "desc"]],
                headerCallback: function (t, a, l, s, e) {
                    t.getElementsByTagName("th")[0].innerHTML = '<label class="checkbox checkbox-single">\n' +
                        '        <input type="checkbox" value="" class="group-checkable"/>\n' +
                        '        <span></span>\n' +
                        '    </label>'
                },
                columnDefs: [{
                    targets: 0,
                    width: "30px",
                    className: "dt-left",
                    orderable: !1,
                    render: function (t, a, l, s) {
                        return '<label class="checkbox checkbox-single">\n' +
                            '        <input type="checkbox" value="" class="checkable"/>\n' +
                            '        <span></span>\n' +
                            '    </label>'
                    }
                }, {
                    targets: -1, title: "Actions", orderable: !1, width: "125px", render: function (t, a, l, s) {
                        return '<div class="dropdown dropdown-inline">\n' +
                            '        <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\n' +
                            '            <span class="svg-icon svg-icon-md">\n' +
                            '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\n' +
                            '                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
                            '                        <rect x="0" y="0" width="24" height="24"/>\n' +
                            '                        <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\n' +
                            '                    </g>\n' +
                            '                </svg>\n' +
                            '            </span>\n' +
                            '        </a>\n' +
                            '        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\n' +
                            '            <ul class="navi flex-column navi-hover py-2">\n' +
                            '                <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\n' +
                            '                    Choose an action:\n' +
                            '                </li>\n' +
                            '                <li class="navi-item">\n' +
                            '                    <a href="#" class="navi-link">\n' +
                            '                        <span class="navi-icon"><i class="la la-print"></i></span>\n' +
                            '                        <span class="navi-text">Print</span>\n' +
                            '                    </a>\n' +
                            '                </li>\n' +
                            '                <li class="navi-item">\n' +
                            '                    <a href="#" class="navi-link">\n' +
                            '                        <span class="navi-icon"><i class="la la-copy"></i></span>\n' +
                            '                        <span class="navi-text">Copy</span>\t                                        \n' +
                            '                    </a>\t                                    \n' +
                            '                </li>\t                                    \n' +
                            '                <li class="navi-item">\t                                        \n' +
                            '                    <a href="#" class="navi-link">\t                                            \n' +
                            '                        <span class="navi-icon"><i class="la la-file-excel-o"></i></span>\t                                            \n' +
                            '                        <span class="navi-text">Excel</span>\t                                        \n' +
                            '                    </a>\t                                    \n' +
                            '                </li>\t                                    \n' +
                            '                <li class="navi-item">\t                                        \n' +
                            '                    <a href="#" class="navi-link">\t                                            \n' +
                            '                        <span class="navi-icon"><i class="la la-file-text-o"></i></span>\t                                            \n' +
                            '                        <span class="navi-text">CSV</span>\t                                        \n' +
                            '                    </a>\t                                    \n' +
                            '                </li>\t                                    \n' +
                            '                <li class="navi-item">\t                                        \n' +
                            '                    <a href="#" class="navi-link">\t                                            \n' +
                            '                        <span class="navi-icon"><i class="la la-file-pdf-o"></i></span>\t                                            \n' +
                            '                        <span class="navi-text">PDF</span>\t                                        \n' +
                            '                    </a>\t                                    \n' +
                            '                </li>\t                                \n' +
                            '            </ul>\t                            \n' +
                            '        </div>\t                        \n' +
                            '    </div>\t                        \n' +
                            '    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\t                            \n' +
                            '        <span class="svg-icon svg-icon-md">\t                                \n' +
                            '            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\n' +
                            '                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        \n' +
                            '                    <rect x="0" y="0" width="24" height="24"/>\t                                        \n' +
                            '                    <path d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z" \n' +
                            '                          fill="#000000" fill-rule="nonzero" transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "/>\n' +
                            '                    <rect fill="#000000" opacity="0.3" x="5" y="20" width="15" height="2" rx="1"/>\t                                    \n' +
                            '                </g>\t                                \n' +
                            '            </svg>\t                            \n' +
                            '        </span>\t                        \n' +
                            '    </a>\t                        \n' +
                            '    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\t                            \n' +
                            '        <span class="svg-icon svg-icon-md">\t                                \n' +
                            '            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\n' +
                            '                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\t                                        \n' +
                            '                    <rect x="0" y="0" width="24" height="24"/>\t                                        \n' +
                            '                    <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\t\n' +
                            '                    <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\n' +
                            '                </g>\t                                \n' +
                            '            </svg>\t                            \n' +
                            '        </span>\n' +
                            '    </a>'
                    }
                }, {
                    targets: 8, width: "75px", render: function (t, a, l, s) {
                        var e = {
                            1: {title: "Pending", class: "label-light-success"},
                            2: {title: "Delivered", class: " label-light-danger"},
                            3: {title: "Canceled", class: " label-light-primary"},
                            4: {title: "Success", class: " label-light-success"},
                            5: {title: "Info", class: " label-light-info"},
                            6: {title: "Danger", class: " label-light-danger"},
                            7: {title: "Warning", class: " label-light-warning"}
                        };
                        return void 0 === e[t] ? t : '<span class="label label-lg font-weight-bold' + e[t].class + ' label-inline">' + e[t].title + "</span>"
                    }
                }, {
                    targets: 9, width: "75px", render: function (t, a, l, s) {
                        var e = {
                            1: {title: "Online", state: "danger"},
                            2: {title: "Retail", state: "primary"},
                            3: {title: "Direct", state: "success"}
                        };
                        return void 0 === e[t] ? t : '<span class="label label-' + e[t].state + ' label-dot mr-2"></span><span class="font-weight-bold text-' + e[t].state + '">' + e[t].title + "</span>"
                    }
                }]
            }), t.on("change", ".group-checkable", (function () {
                var t = $(this).closest("table").find("td:first-child .checkable"), a = $(this).is(":checked");
                $(t).each((function () {
                    a ? ($(this).prop("checked", !0), $(this).closest("tr").addClass("active")) : ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
                }))
            })), t.on("change", "tbody tr .checkbox", (function () {
                $(this).parents("tr").toggleClass("active")
            }))
        }()
    }
};
jQuery(document).ready((function () {
    KTDatatablesBasicBasic.init()
}));
