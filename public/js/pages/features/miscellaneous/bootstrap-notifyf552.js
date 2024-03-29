"use strict";
var KTBootstrapNotifyDemo = {
    init: function () {
        $("[data-switch=true]").bootstrapSwitch(), $("#kt_notify_btn").click((function () {
            var t = {message: "New order has been placed"};
            $("#kt_notify_title").prop("checked") && (t.title = "Notification Title"), "" != $("#kt_notify_icon").val() && (t.icon = "icon " + $("#kt_notify_icon").val()), $("#kt_notify_url").prop("checked") && (t.url = "www.keenthemes.com", t.target = "_blank");
            var e = $.notify(t, {
                type: $("#kt_notify_state").val(),
                allow_dismiss: $("#kt_notify_dismiss").prop("checked"),
                newest_on_top: $("#kt_notify_top").prop("checked"),
                mouse_over: $("#kt_notify_pause").prop("checked"),
                showProgressbar: $("#kt_notify_progress").prop("checked"),
                spacing: $("#kt_notify_spacing").val(),
                timer: $("#kt_notify_timer").val(),
                placement: {from: $("#kt_notify_placement_from").val(), align: $("#kt_notify_placement_align").val()},
                offset: {x: $("#kt_notify_offset_x").val(), y: $("#kt_notify_offset_y").val()},
                delay: $("#kt_notify_delay").val(),
                z_index: $("#kt_notify_zindex").val(),
                animate: {
                    enter: "animate__animated animate__" + $("#kt_notify_animate_enter").val(),
                    exit: "animate__animated animate__" + $("#kt_notify_animate_exit").val()
                }
            });
            $("#kt_notify_progress").prop("checked") && (setTimeout((function () {
                e.update("message", "<strong>Saving</strong> Page Data."), e.update("type", "primary"), e.update("progress", 20)
            }), 1e3), setTimeout((function () {
                e.update("message", "<strong>Saving</strong> User Data."), e.update("type", "warning"), e.update("progress", 40)
            }), 2e3), setTimeout((function () {
                e.update("message", "<strong>Saving</strong> Profile Data."), e.update("type", "danger"), e.update("progress", 65)
            }), 3e3), setTimeout((function () {
                e.update("message", "<strong>Checking</strong> for errors."), e.update("type", "success"), e.update("progress", 100)
            }), 4e3))
        }))
    }
};
jQuery(document).ready((function () {
    KTBootstrapNotifyDemo.init()
}));