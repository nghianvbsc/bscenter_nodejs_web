function ajax_get(url, data, successFn, failFn) {
    $.ajax({
        url: url,
        data: data,
        type: 'get',
        success: function (result) {
            if (successFn != null) {
                successFn(result);
            }
        },
        error: function (error) {
            if (failFn != null) {
                failFn(error);
            }
        }
    })
}

function ajax_post(url, data, successFn, failFn) {
    $.ajax({
        url: url,
        data: data,
        type: 'post',
        success: function (result) {
            if (successFn != null) {
                successFn(result);
            }
        },
        error: function (error) {
            if (failFn != null) {
                failFn(error);
            }
        }
    })
}

function scrollBodyToTop() {
    $("html, body").animate({scrollTop: 0}, "slow");
}

/**
 * coppy data in input to clipboard
 * @param input
 */
function coppyToClipboard(input) {
    $(input).text();
    $(input).focus();
    $(input).select();
    document.execCommand('copy');
    $(".copied").text("Text Copied").show().fadeOut(1200);

    new PNotify({
        title: 'Coppy Success',
        text: 'Affiliate link has in clipboard, use Ctrl + V or right click ->paste to show!',
        type: 'success',
        icon: 'font-icon font-icon-check-circle',
        addclass: 'alert-with-icon'
    });
}

/**
 * hiển thị loading kèm message
 * @param message - default: Please wait ...
 */
function loading(message) {
    if (message == null || message == "") {
        message = "Please wait ...";
    }

    $('#loading').show();
    $('#loading').block({
        message: '<div class="blockui-default-message">' + message + '</div>',
        overlayCSS: {
            background: 'rgba(34, 43, 47, 0.6)',
            opacity: 1,
            cursor: 'wait'
        },
        css: {
            width: 'auto'
        },
        blockMsgClass: 'block-msg-message-loader'
    });
}

/**
 * ẩn laoding
 */
function hideLoading() {
    $('#loading').hide();
    $('#loading').unblock();
}

/**
 * hiển thị lỗi lên parent
 * @param errors - array string
 * @param parent - hiển thị lỗi lên view này
 */
function showMsgErrs(errors, parent) {
    if (parent == null || typeof parent == undefined || typeof parent == "undefined") {
        parent = 'notifies';
    }

    var htmlErrors = [];

    $.each(errors, function (index, error) {
        var itemHtml = '<div class="alert alert-danger alert-fill alert-close alert-dismissible fade in" role="alert">'
            + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
            + '<span aria-hidden="true">×</span>'
            + '</button>' + error
            + '</div>';
        htmlErrors.push(itemHtml);
    });

    $('#' + parent).empty();
    $.each(htmlErrors, function (index, item) {
        $('#' + parent).append(item);
    });
    scrollBodyToTop();
}


/**
 * hiển thị message success lên parent
 * @param msgs - array string
 * @param parent - hiển thị msg lên view này
 */
function showMsgSus(msgs, parent) {
    if (parent == null || typeof parent == undefined || typeof parent == "undefined") {
        parent = 'notifies';
    }

    var htmlMsgs = [];
    $.each(msgs, function (index, msg) {
        var itemHtml = '<div class="alert alert-success alert-fill alert-close alert-dismissible fade in" role="alert">'
            + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
            + '<span aria-hidden="true">×</span>'
            + '</button>' + msg
            + '</div>';
        htmlMsgs.push(itemHtml);
    });

    $('#' + parent).empty();
    $.each(htmlMsgs, function (index, item) {
        $('#' + parent).append(item);
    });
    scrollBodyToTop();
}

