"use strict";


class userForm {
    loginFormCallback(data) {
        ApiConnector.login(data,response => {
            if (response.success) {
                location.reload();
            }
            else {
                setLoginError(response.error);
            }
        });
    }

    registerFormCallback(data) {
        ApiConnector.login(data,response => {
            if (response.success) {
                location.reload();
            }
            else {
                setLoginError(response.error);
            }
        });
    }
}

