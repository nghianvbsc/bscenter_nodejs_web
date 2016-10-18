function signUp(data) {
    ajax_post('/api/sign-up', data, function (data) {
        //handle sign up success
        console.log(data);
        if (!data.error) {
            showMsgSus(data.messages);
            setTimeout(function () {
                window.location.href = "/services.html";
            }, 1500);
        } else {
            showMsgErrs(data.messages);
        }
        hideLoading();
    }, function (error) {
        //handle sign up error
        console.log(error);
    })
}