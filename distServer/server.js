/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/images/bomb.png":
/*!************************************!*\
  !*** ./src/assets/images/bomb.png ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/assets/images/logo_img_base.png":
/*!*********************************************!*\
  !*** ./src/assets/images/logo_img_base.png ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/atoms/GDButton/styles.css":
/*!**************************************************!*\
  !*** ./src/components/atoms/GDButton/styles.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/atoms/GDLogo/styles.css":
/*!************************************************!*\
  !*** ./src/components/atoms/GDLogo/styles.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/atoms/GDTextInput/styles.css":
/*!*****************************************************!*\
  !*** ./src/components/atoms/GDTextInput/styles.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/atoms/LoadingIndicator/styles.css":
/*!**********************************************************!*\
  !*** ./src/components/atoms/LoadingIndicator/styles.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/molecules/GDFormikForm/styles.css":
/*!**********************************************************!*\
  !*** ./src/components/molecules/GDFormikForm/styles.css ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/molecules/LanguageSelector/LanguageSelector.css":
/*!************************************************************************!*\
  !*** ./src/components/molecules/LanguageSelector/LanguageSelector.css ***!
  \************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/molecules/Modal/styles.css":
/*!***************************************************!*\
  !*** ./src/components/molecules/Modal/styles.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/molecules/ThemeSwitch/styles.css":
/*!*********************************************************!*\
  !*** ./src/components/molecules/ThemeSwitch/styles.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/organisms/App/App.css":
/*!**********************************************!*\
  !*** ./src/components/organisms/App/App.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/organisms/Error/styles.css":
/*!***************************************************!*\
  !*** ./src/components/organisms/Error/styles.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/organisms/ErrorBoundary/styles.css":
/*!***********************************************************!*\
  !*** ./src/components/organisms/ErrorBoundary/styles.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/organisms/NavHeader/styles.css":
/*!*******************************************************!*\
  !*** ./src/components/organisms/NavHeader/styles.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Forum/styles.css":
/*!************************************!*\
  !*** ./src/pages/Forum/styles.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/LeaderBoard/styles.css":
/*!******************************************!*\
  !*** ./src/pages/LeaderBoard/styles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Login/styles.css":
/*!************************************!*\
  !*** ./src/pages/Login/styles.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Main/styles.css":
/*!***********************************!*\
  !*** ./src/pages/Main/styles.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/NewPost/styles.css":
/*!**************************************!*\
  !*** ./src/pages/NewPost/styles.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Profile/styles.css":
/*!**************************************!*\
  !*** ./src/pages/Profile/styles.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/ProfileEdit/styles.css":
/*!******************************************!*\
  !*** ./src/pages/ProfileEdit/styles.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Registration/styles.css":
/*!*******************************************!*\
  !*** ./src/pages/Registration/styles.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/Topic/styles.css":
/*!************************************!*\
  !*** ./src/pages/Topic/styles.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/api/auth.ts":
/*!*************************!*\
  !*** ./src/api/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authAPI = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const typescript_is_1 = __webpack_require__(/*! typescript-is */ "typescript-is");
const api_wrapper_1 = __webpack_require__(/*! ../utils/api-wrapper */ "./src/utils/api-wrapper.ts");
const config_1 = __webpack_require__(/*! ./config */ "./src/api/config.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/api/types.ts");
exports.authAPI = {
    login: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'post',
                url: config_1.PATHS.auth.signIn,
                data,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _4068(object) { ; if (object !== "OK")
                return { message: "validation failed at " + path.join(".") + ": expected string 'OK'", path: path.slice(), reason: { type: "string-literal", value: "OK" } };
            else
                return null; } var error = _4068(object); return error; })) {
                localStorage.setItem(config_1.AUTH_TOKEN_NAME, 'OK');
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    logout: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'post',
                url: config_1.PATHS.auth.logout,
                authRequired: false,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _4068(object) { ; if (object !== "OK")
                return { message: "validation failed at " + path.join(".") + ": expected string 'OK'", path: path.slice(), reason: { type: "string-literal", value: "OK" } };
            else
                return null; } var error = _4068(object); return error; })) {
                localStorage.removeItem(config_1.AUTH_TOKEN_NAME);
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    register: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'post',
                url: config_1.PATHS.auth.signUp,
                data,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _4074(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("id" in object) {
                    path.push("id");
                    var error = _number(object["id"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'id' in object", path: path.slice(), reason: { type: "missing-property", property: "id" } };
            } return null; } var error = _4074(object); return error; })) {
                if (response.data.id) {
                    localStorage.setItem(config_1.AUTH_TOKEN_NAME, 'OK');
                }
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    isAuth: () => {
        const token = localStorage.getItem(config_1.AUTH_TOKEN_NAME);
        return Boolean(token);
    },
    getUserInfo: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'get',
                url: config_1.PATHS.auth.userInfo,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _null(object) { ; if (object !== null)
                return { message: "validation failed at " + path.join(".") + ": expected null", path: path.slice(), reason: { type: "null" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__null__string_eu(object) { if (object === null)
                return null;
            else
                return _string(object); } function _3946(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("id" in object) {
                    path.push("id");
                    var error = _number(object["id"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'id' in object", path: path.slice(), reason: { type: "missing-property", property: "id" } };
            } {
                if ("first_name" in object) {
                    path.push("first_name");
                    var error = su__null__string_eu(object["first_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'first_name' in object", path: path.slice(), reason: { type: "missing-property", property: "first_name" } };
            } {
                if ("second_name" in object) {
                    path.push("second_name");
                    var error = su__null__string_eu(object["second_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'second_name' in object", path: path.slice(), reason: { type: "missing-property", property: "second_name" } };
            } {
                if ("display_name" in object) {
                    path.push("display_name");
                    var error = su__null__string_eu(object["display_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'display_name' in object", path: path.slice(), reason: { type: "missing-property", property: "display_name" } };
            } {
                if ("login" in object) {
                    path.push("login");
                    var error = _string(object["login"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'login' in object", path: path.slice(), reason: { type: "missing-property", property: "login" } };
            } {
                if ("email" in object) {
                    path.push("email");
                    var error = _string(object["email"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'email' in object", path: path.slice(), reason: { type: "missing-property", property: "email" } };
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = _string(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'phone' in object", path: path.slice(), reason: { type: "missing-property", property: "phone" } };
            } {
                if ("avatar" in object) {
                    path.push("avatar");
                    var error = su__null__string_eu(object["avatar"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'avatar' in object", path: path.slice(), reason: { type: "missing-property", property: "avatar" } };
            } return null; } var error = _3946(object); return error; })) {
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
};


/***/ }),

/***/ "./src/api/config.ts":
/*!***************************!*\
  !*** ./src/api/config.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PATHS = exports.API_BASE_URL = exports.AUTH_TOKEN_NAME = void 0;
exports.AUTH_TOKEN_NAME = 'bomberman_auth_token';
exports.API_BASE_URL = 'https://ya-praktikum.tech/api/v2';
exports.PATHS = {
    auth: {
        signIn: `${exports.API_BASE_URL}/auth/signin`,
        signUp: `${exports.API_BASE_URL}/auth/signup`,
        logout: `${exports.API_BASE_URL}/auth/logout`,
        userInfo: `${exports.API_BASE_URL}/auth/user`,
    },
    users: {
        updateProfile: `${exports.API_BASE_URL}/user/profile`,
        changePassword: `${exports.API_BASE_URL}/user/password`,
        uploadAvatar: `${exports.API_BASE_URL}/user/profile/avatar`,
    },
    leaderboard: {
        addLeader: `${exports.API_BASE_URL}/leaderboard`,
        getLeaderboard: `${exports.API_BASE_URL}/leaderboard/all`,
    },
    resources: {
        getUrl: `${exports.API_BASE_URL}/resources`,
    },
};


/***/ }),

/***/ "./src/api/leaderboard.ts":
/*!********************************!*\
  !*** ./src/api/leaderboard.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.leaderboardAPI = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const typescript_is_1 = __webpack_require__(/*! typescript-is */ "typescript-is");
const types_1 = __webpack_require__(/*! api/types */ "./src/api/types.ts");
const api_wrapper_1 = __webpack_require__(/*! ../utils/api-wrapper */ "./src/utils/api-wrapper.ts");
const config_1 = __webpack_require__(/*! ./config */ "./src/api/config.ts");
exports.leaderboardAPI = {
    addLeader: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'post',
                url: config_1.PATHS.leaderboard.addLeader,
                data,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _4068(object) { ; if (object !== "OK")
                return { message: "validation failed at " + path.join(".") + ": expected string 'OK'", path: path.slice(), reason: { type: "string-literal", value: "OK" } };
            else
                return null; } var error = _4068(object); return error; })) {
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    getLeaderboard: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'post',
                url: config_1.PATHS.leaderboard.getLeaderboard,
                data,
                authRequired: false,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _8167(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("user" in object) {
                    path.push("user");
                    var error = _string(object["user"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'user' in object", path: path.slice(), reason: { type: "missing-property", property: "user" } };
            } {
                if ("scoreFieldGD" in object) {
                    path.push("scoreFieldGD");
                    var error = _number(object["scoreFieldGD"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'scoreFieldGD' in object", path: path.slice(), reason: { type: "missing-property", property: "scoreFieldGD" } };
            } return null; } function _8097(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("data" in object) {
                    path.push("data");
                    var error = _8167(object["data"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'data' in object", path: path.slice(), reason: { type: "missing-property", property: "data" } };
            } return null; } function sa__8097_ea_8097(object) { ; if (!Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an array", path: path.slice(), reason: { type: "array" } }; for (let i = 0; i < object.length; i++) {
                path.push("[" + i + "]");
                var error = _8097(object[i]);
                path.pop();
                if (error)
                    return error;
            } return null; } var error = sa__8097_ea_8097(object); return error; })) {
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
};


/***/ }),

/***/ "./src/api/resources.ts":
/*!******************************!*\
  !*** ./src/api/resources.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resourcesAPI = void 0;
const config_1 = __webpack_require__(/*! ./config */ "./src/api/config.ts");
exports.resourcesAPI = {
    getResourceURL(url) {
        const temp = url.startsWith('/') ? url : `/${url}`;
        return `${config_1.PATHS.resources.getUrl}/${temp}`;
    },
};


/***/ }),

/***/ "./src/api/types.ts":
/*!**************************!*\
  !*** ./src/api/types.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseStatus = exports.ERROR_RESPONSE_DATA = void 0;
exports.ERROR_RESPONSE_DATA = 'Invalid response data!';
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["SUCCESS"] = 0] = "SUCCESS";
    ResponseStatus[ResponseStatus["FAILED"] = 1] = "FAILED";
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));


/***/ }),

/***/ "./src/api/users.ts":
/*!**************************!*\
  !*** ./src/api/users.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.usersAPI = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const typescript_is_1 = __webpack_require__(/*! typescript-is */ "typescript-is");
const api_wrapper_1 = __webpack_require__(/*! utils/api-wrapper */ "./src/utils/api-wrapper.ts");
const config_1 = __webpack_require__(/*! ./config */ "./src/api/config.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/api/types.ts");
exports.usersAPI = {
    update: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'put',
                url: config_1.PATHS.users.updateProfile,
                data,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _null(object) { ; if (object !== null)
                return { message: "validation failed at " + path.join(".") + ": expected null", path: path.slice(), reason: { type: "null" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__null__string_eu(object) { if (object === null)
                return null;
            else
                return _string(object); } function _3946(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("id" in object) {
                    path.push("id");
                    var error = _number(object["id"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'id' in object", path: path.slice(), reason: { type: "missing-property", property: "id" } };
            } {
                if ("first_name" in object) {
                    path.push("first_name");
                    var error = su__null__string_eu(object["first_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'first_name' in object", path: path.slice(), reason: { type: "missing-property", property: "first_name" } };
            } {
                if ("second_name" in object) {
                    path.push("second_name");
                    var error = su__null__string_eu(object["second_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'second_name' in object", path: path.slice(), reason: { type: "missing-property", property: "second_name" } };
            } {
                if ("display_name" in object) {
                    path.push("display_name");
                    var error = su__null__string_eu(object["display_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'display_name' in object", path: path.slice(), reason: { type: "missing-property", property: "display_name" } };
            } {
                if ("login" in object) {
                    path.push("login");
                    var error = _string(object["login"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'login' in object", path: path.slice(), reason: { type: "missing-property", property: "login" } };
            } {
                if ("email" in object) {
                    path.push("email");
                    var error = _string(object["email"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'email' in object", path: path.slice(), reason: { type: "missing-property", property: "email" } };
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = _string(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'phone' in object", path: path.slice(), reason: { type: "missing-property", property: "phone" } };
            } {
                if ("avatar" in object) {
                    path.push("avatar");
                    var error = su__null__string_eu(object["avatar"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'avatar' in object", path: path.slice(), reason: { type: "missing-property", property: "avatar" } };
            } return null; } var error = _3946(object); return error; })) {
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    changePassword: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'put',
                url: config_1.PATHS.users.changePassword,
                data,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _4068(object) { ; if (object !== "OK")
                return { message: "validation failed at " + path.join(".") + ": expected string 'OK'", path: path.slice(), reason: { type: "string-literal", value: "OK" } };
            else
                return null; } var error = _4068(object); return error; })) {
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
    changeAvatar: (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api_wrapper_1.callApi({
                method: 'put',
                url: config_1.PATHS.users.uploadAvatar,
                data,
                formData: true,
                authRequired: true,
            });
            if (response.data && typescript_is_1.is(response.data, object => { var path = ["$"]; function _number(object) { ; if (typeof object !== "number")
                return { message: "validation failed at " + path.join(".") + ": expected a number", path: path.slice(), reason: { type: "number" } };
            else
                return null; } function _null(object) { ; if (object !== null)
                return { message: "validation failed at " + path.join(".") + ": expected null", path: path.slice(), reason: { type: "null" } };
            else
                return null; } function _string(object) { ; if (typeof object !== "string")
                return { message: "validation failed at " + path.join(".") + ": expected a string", path: path.slice(), reason: { type: "string" } };
            else
                return null; } function su__null__string_eu(object) { if (object === null)
                return null;
            else
                return _string(object); } function _3946(object) { ; if (typeof object !== "object" || object === null || Array.isArray(object))
                return { message: "validation failed at " + path.join(".") + ": expected an object", path: path.slice(), reason: { type: "object" } }; {
                if ("id" in object) {
                    path.push("id");
                    var error = _number(object["id"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'id' in object", path: path.slice(), reason: { type: "missing-property", property: "id" } };
            } {
                if ("first_name" in object) {
                    path.push("first_name");
                    var error = su__null__string_eu(object["first_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'first_name' in object", path: path.slice(), reason: { type: "missing-property", property: "first_name" } };
            } {
                if ("second_name" in object) {
                    path.push("second_name");
                    var error = su__null__string_eu(object["second_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'second_name' in object", path: path.slice(), reason: { type: "missing-property", property: "second_name" } };
            } {
                if ("display_name" in object) {
                    path.push("display_name");
                    var error = su__null__string_eu(object["display_name"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'display_name' in object", path: path.slice(), reason: { type: "missing-property", property: "display_name" } };
            } {
                if ("login" in object) {
                    path.push("login");
                    var error = _string(object["login"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'login' in object", path: path.slice(), reason: { type: "missing-property", property: "login" } };
            } {
                if ("email" in object) {
                    path.push("email");
                    var error = _string(object["email"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'email' in object", path: path.slice(), reason: { type: "missing-property", property: "email" } };
            } {
                if ("phone" in object) {
                    path.push("phone");
                    var error = _string(object["phone"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'phone' in object", path: path.slice(), reason: { type: "missing-property", property: "phone" } };
            } {
                if ("avatar" in object) {
                    path.push("avatar");
                    var error = su__null__string_eu(object["avatar"]);
                    path.pop();
                    if (error)
                        return error;
                }
                else
                    return { message: "validation failed at " + path.join(".") + ": expected 'avatar' in object", path: path.slice(), reason: { type: "missing-property", property: "avatar" } };
            } return null; } var error = _3946(object); return error; })) {
                return response.data;
            }
            throw new Error(types_1.ERROR_RESPONSE_DATA);
        }
        catch (error) {
            throw new Error(error.message);
        }
    }),
};


/***/ }),

/***/ "./src/components/atoms/GDButton/GDButton.tsx":
/*!****************************************************!*\
  !*** ./src/components/atoms/GDButton/GDButton.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GDButton = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/atoms/GDButton/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const GDButton = ({ title, onClick, styleOption = 'primary', className, size = 'm', type = 'button', disabled = false, }) => (react_1.default.createElement("button", { type: type, onClick: onClick, disabled: disabled, className: classnames_1.default(['btn', `btn-${styleOption}`, `size_${size}`, className]) }, title));
exports.GDButton = GDButton;


/***/ }),

/***/ "./src/components/atoms/GDLogo/GDLogo.tsx":
/*!************************************************!*\
  !*** ./src/components/atoms/GDLogo/GDLogo.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GDLogo = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/atoms/GDLogo/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const GDLogo = ({ logoImage }) => (react_1.default.createElement("div", { className: "logo" },
    react_1.default.createElement("span", { className: "logo__text logo__text_big" },
        "B",
        react_1.default.createElement("img", { className: "logo__image", src: logoImage, alt: "logo" }),
        "MB"),
    react_1.default.createElement("span", { className: "logo__text logo__text_small" }, "ATTACK")));
exports.GDLogo = GDLogo;


/***/ }),

/***/ "./src/components/atoms/GDTextInput/GDTextInput.tsx":
/*!**********************************************************!*\
  !*** ./src/components/atoms/GDTextInput/GDTextInput.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GDTextInput = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/atoms/GDTextInput/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const GDTextInput = ({ className, placeholder, title, id, type = 'text', value, onChange, onBlur, onFocus, isInvalid, }) => {
    const titleString = `${title}:`;
    return (react_1.default.createElement("label", { htmlFor: id, className: classnames_1.default(isInvalid && 'input-label_invalid', 'input-label') },
        titleString,
        react_1.default.createElement("input", { placeholder: placeholder, className: classnames_1.default('input-field', isInvalid && 'input-field_invalid', className), type: type, id: id, name: id, value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus })));
};
exports.GDTextInput = GDTextInput;


/***/ }),

/***/ "./src/components/atoms/LoadingIndicator/LoadingIndicator.tsx":
/*!********************************************************************!*\
  !*** ./src/components/atoms/LoadingIndicator/LoadingIndicator.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadingIndicator = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/atoms/LoadingIndicator/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const bomb_png_1 = tslib_1.__importDefault(__webpack_require__(/*! assets/images/bomb.png */ "./src/assets/images/bomb.png"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const requestStatusSelectors_1 = __webpack_require__(/*! store/requestStatus/requestStatusSelectors */ "./src/store/requestStatus/requestStatusSelectors.ts");
const LoadingIndicator = () => {
    const isLoadingShown = react_redux_1.useSelector(requestStatusSelectors_1.selectIsLoadingShown);
    return (isLoadingShown
        ? (react_1.default.createElement("div", { className: classnames_1.default('loading-indicator') },
            react_1.default.createElement("img", { className: classnames_1.default(['loading-indicator__image', 'rotating']), src: bomb_png_1.default, alt: "bomb" }))) : null);
};
exports.LoadingIndicator = LoadingIndicator;


/***/ }),

/***/ "./src/components/molecules/BackButton/BackButton.tsx":
/*!************************************************************!*\
  !*** ./src/components/molecules/BackButton/BackButton.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BackButton = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const BackButton = () => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    return (react_1.default.createElement(GDButton_1.GDButton, { title: t('back'), styleOption: "secondary", size: "l", onClick: () => history.goBack() }));
};
exports.BackButton = BackButton;


/***/ }),

/***/ "./src/components/molecules/GDFormikForm/GDFormikForm.tsx":
/*!****************************************************************!*\
  !*** ./src/components/molecules/GDFormikForm/GDFormikForm.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GDFormikForm = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/molecules/GDFormikForm/styles.css");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const formik_1 = __webpack_require__(/*! formik */ "formik");
const GDTextInput_1 = __webpack_require__(/*! components/atoms/GDTextInput/GDTextInput */ "./src/components/atoms/GDTextInput/GDTextInput.tsx");
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const GDFormikForm = ({ fields, initialValues, validationSchema, textSubmitButton = 'submit', onSubmit, }) => {
    const { t } = react_i18next_1.useTranslation();
    const [activeInputID, setActiveInputID] = react_1.useState('');
    const initial = react_1.useMemo(() => initialValues || fields.reduce((values, field) => {
        values[field.id] = '';
        return values;
    }, {}), [fields, initialValues]);
    const formik = formik_1.useFormik({
        initialValues: initial,
        validateOnBlur: true,
        validateOnChange: true,
        validateOnMount: true,
        onSubmit,
        validationSchema: () => validationSchema,
        enableReinitialize: true,
    });
    return (react_1.default.createElement("form", { className: classnames_1.default('form'), onSubmit: formik.handleSubmit },
        fields.map(({ id, title, type, placeholder, className, }) => (react_1.default.createElement(GDTextInput_1.GDTextInput, { id: id, title: t(title), type: type, placeholder: placeholder, value: formik.values[id], onChange: formik.handleChange, onBlur: formik.handleBlur, className: className, isInvalid: !!(formik.touched[id] && formik.errors[id] && !formik.isValid), onFocus: (event) => setActiveInputID(event.target.id), key: id }))),
        react_1.default.createElement("p", { className: "form__error-label" }, formik.touched[activeInputID] && formik.errors[activeInputID]),
        react_1.default.createElement(GDButton_1.GDButton, { className: "form__submit-button", title: textSubmitButton, styleOption: "primary", size: "l", type: "submit" })));
};
exports.GDFormikForm = GDFormikForm;


/***/ }),

/***/ "./src/components/molecules/LanguageSelector/LanguageSelector.tsx":
/*!************************************************************************!*\
  !*** ./src/components/molecules/LanguageSelector/LanguageSelector.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LanguageSelector = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./LanguageSelector.css */ "./src/components/molecules/LanguageSelector/LanguageSelector.css");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const LanguageSelector = () => {
    const { i18n } = react_i18next_1.useTranslation();
    const changeLanguage = react_1.useCallback((lang) => () => {
        i18n.changeLanguage(lang);
    }, [i18n]);
    const renderLanguageButton = react_1.useCallback((lang) => (react_1.default.createElement("button", { type: "button", onClick: changeLanguage(lang), className: classnames_1.default([
            'language-selector__button',
            { 'language-selector__button_active': i18n.language === lang },
        ]) },
        react_1.default.createElement("span", null, lang))), [i18n, changeLanguage]);
    return (react_1.default.createElement("div", null,
        renderLanguageButton('en'),
        renderLanguageButton('ru')));
};
exports.LanguageSelector = LanguageSelector;


/***/ }),

/***/ "./src/components/molecules/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/components/molecules/Menu/Menu.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Menu = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const Menu = ({ items, itemsClassName, itemsStyleOption, itemsSize = 'l', direction = 'vertical', className, }) => (react_1.default.createElement("div", { className: classnames_1.default(['menu', `menu-${direction}`, className]) }, items.map(({ title, onClick }) => (react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default(['menu__item', itemsClassName]), title: title, size: itemsSize, styleOption: itemsStyleOption, onClick: onClick, key: title })))));
exports.Menu = Menu;


/***/ }),

/***/ "./src/components/molecules/Modal/Modal.tsx":
/*!**************************************************!*\
  !*** ./src/components/molecules/Modal/Modal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/molecules/Modal/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const Modal = ({ title = '', type = 'info', onSubmit, onReject, customActions, display = 'hidden', hide, className, }) => {
    const { t } = react_i18next_1.useTranslation();
    const actionHandler = (callback) => () => {
        if (callback) {
            callback();
        }
        if (hide) {
            hide();
        }
    };
    const typeSwitch = () => {
        switch (type) {
            case 'info':
                return (react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default('modal__button'), title: t('ok'), styleOption: "secondary", size: "l", onClick: actionHandler(onSubmit) }));
            case 'confirm':
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default('modal__button'), title: t('ok'), styleOption: "secondary", size: "l", onClick: actionHandler(onSubmit) }),
                    react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default('modal__button'), title: t('cancel'), styleOption: "secondary", size: "l", onClick: actionHandler(onReject) })));
            case 'y/n':
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default('modal__button'), title: t('yes'), styleOption: "secondary", size: "l", onClick: actionHandler(onSubmit) }),
                    react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default('modal__button'), title: t('no'), styleOption: "secondary", size: "l", onClick: actionHandler(onReject) })));
            case 'banner':
                return react_1.default.createElement(react_1.default.Fragment, null);
            case 'custom':
                return customActions === null || customActions === void 0 ? void 0 : customActions.map(({ actionTitle, callback }) => (react_1.default.createElement(GDButton_1.GDButton, { className: classnames_1.default('modal__button'), title: actionTitle, styleOption: "secondary", size: "l", onClick: actionHandler(callback) })));
            default: return react_1.default.createElement(react_1.default.Fragment, null);
        }
    };
    return (react_1.default.createElement("div", { className: classnames_1.default(['modal', `modal__${display}`, className]) },
        react_1.default.createElement("div", { className: "modal__banner" },
            react_1.default.createElement("span", { className: "modal__banner-title" }, title),
            react_1.default.createElement("div", { className: "modal__options-container" }, typeSwitch()))));
};
exports.Modal = Modal;


/***/ }),

/***/ "./src/components/molecules/Modal/useModal.tsx":
/*!*****************************************************!*\
  !*** ./src/components/molecules/Modal/useModal.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useModal = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const useModal = (props = {}) => {
    const [title, setTitle] = react_1.useState(props.title);
    const [display, setDisplay] = react_1.useState(props.display);
    const [type, setType] = react_1.useState(props.type);
    const hide = () => setDisplay('hidden');
    const show = (newTitle, newType) => {
        if (newTitle) {
            setTitle(newTitle);
        }
        if (newType) {
            setType(newType);
        }
        else if (type === 'banner') {
            setType('info');
        }
        setDisplay('active');
    };
    return {
        bind: Object.assign(Object.assign({}, props), { title, type, display, hide }),
        hide,
        show,
    };
};
exports.useModal = useModal;


/***/ }),

/***/ "./src/components/molecules/ThemeSwitch/ThemeSwitch.tsx":
/*!**************************************************************!*\
  !*** ./src/components/molecules/ThemeSwitch/ThemeSwitch.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThemeSwitch = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/molecules/ThemeSwitch/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const ThemeSwitch = () => {
    const toggleThemeBounded = useBoundAction_1.useBoundAction(userSlice_1.toggleTheme);
    return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react_1.default.createElement("label", { className: classnames_1.default('theme-switcher__switch') },
        react_1.default.createElement("input", { type: "checkbox", onClick: toggleThemeBounded }),
        react_1.default.createElement("span", { className: classnames_1.default(['theme-switcher__slider', 'theme-switcher__slider_round']) })));
};
exports.ThemeSwitch = ThemeSwitch;


/***/ }),

/***/ "./src/components/organisms/App/App.tsx":
/*!**********************************************!*\
  !*** ./src/components/organisms/App/App.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./App.css */ "./src/components/organisms/App/App.css");
const root_1 = __webpack_require__(/*! react-hot-loader/root */ "react-hot-loader/root");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const Forum_1 = __webpack_require__(/*! pages/Forum/Forum */ "./src/pages/Forum/Forum.tsx");
const Game_1 = __webpack_require__(/*! pages/Game/Game */ "./src/pages/Game/Game.tsx");
const LeaderBoard_1 = __webpack_require__(/*! pages/LeaderBoard/LeaderBoard */ "./src/pages/LeaderBoard/LeaderBoard.tsx");
const Login_1 = __webpack_require__(/*! pages/Login/Login */ "./src/pages/Login/Login.tsx");
const Profile_1 = __webpack_require__(/*! pages/Profile/Profile */ "./src/pages/Profile/Profile.tsx");
const ProfileEdit_1 = __webpack_require__(/*! pages/ProfileEdit/ProfileEdit */ "./src/pages/ProfileEdit/ProfileEdit.tsx");
const Registration_1 = __webpack_require__(/*! pages/Registration/Registration */ "./src/pages/Registration/Registration.tsx");
const Error_1 = __webpack_require__(/*! pages/Error/Error */ "./src/pages/Error/Error.tsx");
const ProfilePasswordEdit_1 = __webpack_require__(/*! pages/ProfilePasswordEdit/ProfilePasswordEdit */ "./src/pages/ProfilePasswordEdit/ProfilePasswordEdit.tsx");
const Topic_1 = __webpack_require__(/*! pages/Topic/Topic */ "./src/pages/Topic/Topic.tsx");
const NewPost_1 = __webpack_require__(/*! pages/NewPost/NewPost */ "./src/pages/NewPost/NewPost.tsx");
const Main_1 = __webpack_require__(/*! pages/Main/Main */ "./src/pages/Main/Main.tsx");
const NavHeader_1 = __webpack_require__(/*! components/organisms/NavHeader/NavHeader */ "./src/components/organisms/NavHeader/NavHeader.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const ErrorBoundary_1 = __webpack_require__(/*! components/organisms/ErrorBoundary/ErrorBoundary */ "./src/components/organisms/ErrorBoundary/ErrorBoundary.tsx");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSelectors_1 = __webpack_require__(/*! store/user/userSelectors */ "./src/store/user/userSelectors.ts");
const PrivateRoute_1 = __webpack_require__(/*! components/organisms/PrivateRoute/PrivateRoute */ "./src/components/organisms/PrivateRoute/PrivateRoute.tsx");
const LoadingIndicator_1 = __webpack_require__(/*! components/atoms/LoadingIndicator/LoadingIndicator */ "./src/components/atoms/LoadingIndicator/LoadingIndicator.tsx");
exports.App = root_1.hot(() => {
    const theme = react_redux_1.useSelector(userSelectors_1.selectTheme);
    return (react_1.default.createElement("div", { className: classnames_1.default(['app-container', `theme_${theme}`]) },
        react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
            react_1.default.createElement(NavHeader_1.NavHeader, null)),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { exact: true, path: "/", to: "/login", component: () => react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Main_1.Main, null)) }),
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/login", to: "/", redirectIfAuth: true, component: () => react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Login_1.Login, null)) }),
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/registration", to: "/", redirectIfAuth: true, component: () => react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Registration_1.Registration, null)) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/forum" },
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Forum_1.Forum, null))),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/game" },
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Game_1.Game, null))),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/leaderboard" },
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(LeaderBoard_1.LeaderBoard, null))),
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/profile", to: "/login", component: () => react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Profile_1.Profile, null)) }),
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/profile-edit", to: "/login", component: () => react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(ProfileEdit_1.ProfileEdit, null)) }),
            react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/profile-password-edit", to: "/login", component: () => react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(ProfilePasswordEdit_1.ProfilePasswordEdit, null)) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/topic" },
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Topic_1.Topic, null))),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/new-post" },
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(NewPost_1.NewPost, null))),
            react_1.default.createElement(react_router_dom_1.Route, { path: "*" },
                react_1.default.createElement(ErrorBoundary_1.ErrorBoundary, null,
                    react_1.default.createElement(Error_1.Error, null)))),
        react_1.default.createElement(LoadingIndicator_1.LoadingIndicator, null)));
});


/***/ }),

/***/ "./src/components/organisms/Error/Error.tsx":
/*!**************************************************!*\
  !*** ./src/components/organisms/Error/Error.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Error = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/organisms/Error/styles.css");
const bomb_png_1 = tslib_1.__importDefault(__webpack_require__(/*! assets/images/bomb.png */ "./src/assets/images/bomb.png"));
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const Error = ({ errNumber }) => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    const backClickHandler = () => {
        history.goBack();
    };
    const errorCanShowBomb = `${errNumber}`[1] === '0' && `${errNumber}`.length > 2;
    return (react_1.default.createElement("div", { className: classnames_1.default('error-page') },
        errNumber === 404 ? (react_1.default.createElement("div", { className: classnames_1.default('error-page-info') },
            react_1.default.createElement("h2", { className: classnames_1.default('error-page-info__helptext') }, t('on_no')),
            react_1.default.createElement("h1", { className: classnames_1.default('error-page-info__number') },
                "4",
                react_1.default.createElement("img", { className: "error-page-info__bomb-image", src: bomb_png_1.default, alt: "logo" }),
                "4"),
            react_1.default.createElement("h2", { className: classnames_1.default('error-page-info__helptext') }, t('this_page_was_destroyed')))) : (react_1.default.createElement("div", { className: classnames_1.default('error-page-info') },
            react_1.default.createElement("h2", { className: classnames_1.default('error-page-info__helptext') }, t('oops')),
            react_1.default.createElement("h2", { className: classnames_1.default('error-page-info__helptext') }, t('something_went_wrong')),
            errorCanShowBomb ? (react_1.default.createElement("h1", { className: classnames_1.default('error-page-info__number') },
                `${errNumber}`[0],
                react_1.default.createElement("img", { className: "error-page-info__bomb-image", src: bomb_png_1.default, alt: "logo" }),
                `${errNumber}`[2])) : (react_1.default.createElement("h1", { className: classnames_1.default('error-page-info__number') }, errNumber)),
            react_1.default.createElement("h2", { className: classnames_1.default('error-page-info__helptext') }, t('we_are_looking_to_see_what_happened')))),
        react_1.default.createElement("div", { className: classnames_1.default('error-page__footer') },
            react_1.default.createElement(GDButton_1.GDButton, { title: t('back'), styleOption: "secondary", size: "l", onClick: backClickHandler }))));
};
exports.Error = Error;


/***/ }),

/***/ "./src/components/organisms/ErrorBoundary/ErrorBoundary.tsx":
/*!******************************************************************!*\
  !*** ./src/components/organisms/ErrorBoundary/ErrorBoundary.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorBoundary = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/organisms/ErrorBoundary/styles.css");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
class ErrorBoundaryBeforeTranslation extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // eslint-disable-next-line no-console
        console.error('Uncaught error:', error, errorInfo);
    }
    render() {
        const { hasError } = this.state;
        const { children, t } = this.props;
        if (hasError) {
            return (react_1.default.createElement("h1", { className: classnames_1.default('render-error__text') }, t('something_went_wrong')));
        }
        return children;
    }
}
exports.ErrorBoundary = react_i18next_1.withTranslation()(ErrorBoundaryBeforeTranslation);


/***/ }),

/***/ "./src/components/organisms/FormUpdateAvatar/FormUpdateAvatar.tsx":
/*!************************************************************************!*\
  !*** ./src/components/organisms/FormUpdateAvatar/FormUpdateAvatar.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormUpdateAvatar = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const FormUpdateAvatar = () => {
    const { t } = react_i18next_1.useTranslation();
    const changeAvatarAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.changeAvatarAsync);
    const formAvatar = react_1.useRef(null);
    const changeAvatarHandler = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (formAvatar === null || formAvatar === void 0 ? void 0 : formAvatar.current) {
            const formData = new FormData(formAvatar.current);
            changeAvatarAsyncBounded(formData);
        }
    });
    return (react_1.default.createElement("form", { ref: formAvatar },
        react_1.default.createElement("label", { htmlFor: "avatar", className: classnames_1.default(['btn', 'btn-secondary', 'size_l', 'profile__upload_avatar__label']) },
            t('upload_avatar'),
            react_1.default.createElement("input", { type: "file", name: "avatar", id: "avatar", onChange: changeAvatarHandler }))));
};
exports.FormUpdateAvatar = FormUpdateAvatar;


/***/ }),

/***/ "./src/components/organisms/NavHeader/NavHeader.tsx":
/*!**********************************************************!*\
  !*** ./src/components/organisms/NavHeader/NavHeader.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NavHeader = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/components/organisms/NavHeader/styles.css");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const LanguageSelector_1 = __webpack_require__(/*! components/molecules/LanguageSelector/LanguageSelector */ "./src/components/molecules/LanguageSelector/LanguageSelector.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const ThemeSwitch_1 = __webpack_require__(/*! components/molecules/ThemeSwitch/ThemeSwitch */ "./src/components/molecules/ThemeSwitch/ThemeSwitch.tsx");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const NavHeader = () => {
    const { t } = react_i18next_1.useTranslation();
    const location = react_router_dom_1.useLocation();
    const { pathname } = location;
    const { isAuth } = react_redux_1.useSelector(userSlice_1.getUserState);
    return (react_1.default.createElement("div", { className: classnames_1.default('nav-header') },
        react_1.default.createElement(ThemeSwitch_1.ThemeSwitch, null),
        react_1.default.createElement("div", null,
            isAuth
                ? (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/' }) }, t('main')),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/profile", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/profile' }) }, t('profile'))))
                : (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/login' }) }, t('login')),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/registration", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/registration' }) }, t('registration')))),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/game", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/game' }) }, t('game')),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/forum", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/forum' }) }, t('forum')),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/leaderboard", className: classnames_1.default('nav-header__link', { 'nav-header__link_active': pathname === '/leaderboard' }) }, t('leaderboard'))),
        react_1.default.createElement(LanguageSelector_1.LanguageSelector, null)));
};
exports.NavHeader = NavHeader;


/***/ }),

/***/ "./src/components/organisms/PrivateRoute/PrivateRoute.tsx":
/*!****************************************************************!*\
  !*** ./src/components/organisms/PrivateRoute/PrivateRoute.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrivateRoute = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const PrivateRoute = (_a) => {
    var { to, redirectIfAuth = false, component } = _a, rest = tslib_1.__rest(_a, ["to", "redirectIfAuth", "component"]);
    const { isAuth } = react_redux_1.useSelector(userSlice_1.getUserState);
    return isAuth === redirectIfAuth
        ? react_1.default.createElement(react_router_dom_1.Redirect, { to: to })
        : react_1.default.createElement(react_router_dom_1.Route, Object.assign({ component: component }, rest));
};
exports.PrivateRoute = PrivateRoute;


/***/ }),

/***/ "./src/hooks/useBoundAction.ts":
/*!*************************************!*\
  !*** ./src/hooks/useBoundAction.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useBoundAction = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const useBoundAction = (actionCreator) => {
    const dispatch = react_redux_1.useDispatch();
    return react_1.useCallback((...args) => (dispatch(actionCreator(...args))), [dispatch, actionCreator]);
};
exports.useBoundAction = useBoundAction;


/***/ }),

/***/ "./src/hooks/useMountEffect.ts":
/*!*************************************!*\
  !*** ./src/hooks/useMountEffect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMountEffect = void 0;
const react_1 = __webpack_require__(/*! react */ "react");
const useMountEffect = (callback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    react_1.useEffect(callback, []);
};
exports.useMountEffect = useMountEffect;


/***/ }),

/***/ "./src/pages/Error/Error.tsx":
/*!***********************************!*\
  !*** ./src/pages/Error/Error.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Error = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const Error_1 = __webpack_require__(/*! components/organisms/Error/Error */ "./src/components/organisms/Error/Error.tsx");
const Error = () => (react_1.default.createElement(Error_1.Error, { errNumber: 404 }));
exports.Error = Error;


/***/ }),

/***/ "./src/pages/Forum/Forum.tsx":
/*!***********************************!*\
  !*** ./src/pages/Forum/Forum.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Forum = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/Forum/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const constants_1 = __webpack_require__(/*! pages/Forum/constants */ "./src/pages/Forum/constants.tsx");
const Forum = ({ className }) => {
    const { t } = react_i18next_1.useTranslation();
    const listHeader = constants_1.topicsListHeader.map((item) => t(item));
    const history = react_router_dom_1.useHistory();
    return (react_1.default.createElement("div", { className: classnames_1.default(['page', className]) },
        react_1.default.createElement("h1", { className: "page__title" }, t('forum')),
        react_1.default.createElement("div", { className: "forum" },
            react_1.default.createElement("span", { className: "forum__header" }, listHeader.map((item) => react_1.default.createElement(GDButton_1.GDButton, { title: item, styleOption: "secondary", size: "l" }))),
            react_1.default.createElement("div", { className: "forum__topics-list" }, constants_1.dummyTopics.map(({ topic, author, postCount, viewsCount, lastReplay, }) => (react_1.default.createElement("span", { className: "forum__topic-list-item" },
                react_1.default.createElement("span", { className: "forum__topic-list-item_align-left" }, topic),
                react_1.default.createElement("span", null, author),
                react_1.default.createElement("span", null, postCount),
                react_1.default.createElement("span", null, viewsCount),
                react_1.default.createElement("time", null, lastReplay)))))),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null),
            react_1.default.createElement(GDButton_1.GDButton, { title: t('start_new_topic'), styleOption: "secondary", size: "l", onClick: () => history.push('/topic') }))));
};
exports.Forum = Forum;


/***/ }),

/***/ "./src/pages/Forum/constants.tsx":
/*!***************************************!*\
  !*** ./src/pages/Forum/constants.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dummyTopics = exports.topicsListHeader = void 0;
exports.topicsListHeader = [
    'topic',
    'author',
    'posts',
    'views',
    'last_reply',
];
exports.dummyTopics = [
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
    {
        topic: 'topic',
        author: 'nickname',
        postCount: 1,
        viewsCount: 1,
        lastReplay: 'today',
    },
];


/***/ }),

/***/ "./src/pages/Game/Game.tsx":
/*!*********************************!*\
  !*** ./src/pages/Game/Game.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
// import { Game as GameComponent } from 'components/organisms/Game/Game';
const Game = () => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("div", null, "game")));
exports.Game = Game;


/***/ }),

/***/ "./src/pages/LeaderBoard/LeaderBoard.tsx":
/*!***********************************************!*\
  !*** ./src/pages/LeaderBoard/LeaderBoard.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LeaderBoard = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/LeaderBoard/styles.css");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const constants_1 = __webpack_require__(/*! pages/LeaderBoard/constants */ "./src/pages/LeaderBoard/constants.ts");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const leaderboardActions_1 = __webpack_require__(/*! store/leaderboard/leaderboardActions */ "./src/store/leaderboard/leaderboardActions.ts");
const useMountEffect_1 = __webpack_require__(/*! hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const leaderboardSelectors_1 = __webpack_require__(/*! store/leaderboard/leaderboardSelectors */ "./src/store/leaderboard/leaderboardSelectors.ts");
const LeaderBoard = () => {
    const { t } = react_i18next_1.useTranslation();
    const dots = react_1.useMemo(() => new Array(constants_1.SEPARATOR_LENGTH + 1).join(constants_1.SEPARATOR), []);
    const getLeaderboardAsyncBounded = useBoundAction_1.useBoundAction(leaderboardActions_1.getLeaderboardAsync);
    const { leaderboard } = react_redux_1.useSelector(leaderboardSelectors_1.selectLeaderboard);
    const splitDigits = (value) => (value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
    useMountEffect_1.useMountEffect(() => getLeaderboardAsyncBounded({
        ratingFieldName: 'scoreFieldGD',
        cursor: 0,
        limit: constants_1.RECORDS_PER_PAGE,
    }));
    return (react_1.default.createElement("div", { className: classnames_1.default(['page']) },
        react_1.default.createElement("h1", { className: "page__title" }, t('leaderboard')),
        react_1.default.createElement("div", { className: "page__content" },
            leaderboard.length === 0 && react_1.default.createElement("p", null, t('no_data')),
            react_1.default.createElement("ul", { className: "leaderboard-page__list" }, leaderboard.map(({ user, scoreFieldGD }, index) => (react_1.default.createElement("li", { className: "leaderboard-page__list-item", key: user },
                react_1.default.createElement("span", { className: "leaderboard-page__list-nickname" }, `${index + 1}. ${user}`),
                react_1.default.createElement("span", { className: "leaderboard-page__list-dots" }, dots),
                react_1.default.createElement("span", { className: "leaderboard-page__list-score" }, splitDigits(scoreFieldGD))))))),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null))));
};
exports.LeaderBoard = LeaderBoard;


/***/ }),

/***/ "./src/pages/LeaderBoard/constants.ts":
/*!********************************************!*\
  !*** ./src/pages/LeaderBoard/constants.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RECORDS_PER_PAGE = exports.SEPARATOR_LENGTH = exports.SEPARATOR = void 0;
exports.SEPARATOR = '. ';
exports.SEPARATOR_LENGTH = 30;
exports.RECORDS_PER_PAGE = 10;


/***/ }),

/***/ "./src/pages/Login/Login.tsx":
/*!***********************************!*\
  !*** ./src/pages/Login/Login.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Login = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/Login/styles.css");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const GDLogo_1 = __webpack_require__(/*! components/atoms/GDLogo/GDLogo */ "./src/components/atoms/GDLogo/GDLogo.tsx");
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const logo_img_base_png_1 = tslib_1.__importDefault(__webpack_require__(/*! assets/images/logo_img_base.png */ "./src/assets/images/logo_img_base.png"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const Modal_1 = __webpack_require__(/*! components/molecules/Modal/Modal */ "./src/components/molecules/Modal/Modal.tsx");
const useModal_1 = __webpack_require__(/*! components/molecules/Modal/useModal */ "./src/components/molecules/Modal/useModal.tsx");
const GDFormikForm_1 = __webpack_require__(/*! components/molecules/GDFormikForm/GDFormikForm */ "./src/components/molecules/GDFormikForm/GDFormikForm.tsx");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/Login/constants.ts");
const Login = () => {
    const { t } = react_i18next_1.useTranslation();
    const modal = useModal_1.useModal();
    const validationSchema = react_1.useMemo(() => constants_1.validationSchemaConstructor(t), [t]);
    const { error, isLoading } = react_redux_1.useSelector(userSlice_1.getUserState);
    const loginAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.loginAsync);
    const submitHandler = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        loginAsyncBounded(data);
    });
    react_1.useMemo(() => {
        var _a;
        if (error) {
            modal.show((_a = error.message) !== null && _a !== void 0 ? _a : '');
        }
        else {
            modal.hide();
        }
    }, [error, isLoading, t]);
    const textNoAccount = t('no_account_?');
    const textRegister = t('register_!');
    const textJustPlay = t('just_play_!');
    const actionComponent = (react_1.default.createElement("div", { className: "login-page__signup-container" },
        react_1.default.createElement("span", { className: "login-page__text-label" }, textNoAccount),
        react_1.default.createElement("div", { className: "login-page__link-container" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/registration" },
                react_1.default.createElement(GDButton_1.GDButton, { className: "login-page__link", title: textRegister, styleOption: "secondary", size: "l" })),
            react_1.default.createElement("span", { className: "login-page__text-label" }, t('or')),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/game" },
                react_1.default.createElement(GDButton_1.GDButton, { className: "login-page__link", title: textJustPlay, styleOption: "secondary", size: "l" })))));
    return (react_1.default.createElement("div", { className: "page login-page" },
        react_1.default.createElement(Modal_1.Modal, Object.assign({}, modal.bind)),
        react_1.default.createElement(GDLogo_1.GDLogo, { logoImage: logo_img_base_png_1.default }),
        react_1.default.createElement(GDFormikForm_1.GDFormikForm, { fields: Object.values(constants_1.loginFormFields), validationSchema: validationSchema, textSubmitButton: t('submit'), onSubmit: submitHandler }),
        actionComponent));
};
exports.Login = Login;


/***/ }),

/***/ "./src/pages/Login/constants.ts":
/*!**************************************!*\
  !*** ./src/pages/Login/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchemaConstructor = exports.loginFormFields = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Yup = tslib_1.__importStar(__webpack_require__(/*! yup */ "yup"));
exports.loginFormFields = {
    login: { id: 'login', title: 'login' },
    password: { id: 'password', title: 'password', type: 'password' },
};
const validationSchemaConstructor = (t) => Yup.object().shape({
    login: Yup.string().required(t('required')),
    password: Yup.string().required(t('required')),
});
exports.validationSchemaConstructor = validationSchemaConstructor;


/***/ }),

/***/ "./src/pages/Main/Main.tsx":
/*!*********************************!*\
  !*** ./src/pages/Main/Main.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Main = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/Main/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const logo_img_base_png_1 = tslib_1.__importDefault(__webpack_require__(/*! assets/images/logo_img_base.png */ "./src/assets/images/logo_img_base.png"));
const GDLogo_1 = __webpack_require__(/*! components/atoms/GDLogo/GDLogo */ "./src/components/atoms/GDLogo/GDLogo.tsx");
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const Menu_1 = __webpack_require__(/*! components/molecules/Menu/Menu */ "./src/components/molecules/Menu/Menu.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const Main = ({ className }) => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    const logoutAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.logoutAsync);
    const onPlayClickHandler = () => history.push('/game');
    const logoutHandler = () => logoutAsyncBounded();
    const items = [
        { title: 'settings', onClick: () => history.push('/') },
        { title: 'profile', onClick: () => history.push('/profile') },
        { title: 'leaderboard', onClick: () => history.push('/leaderboard') },
        { title: 'forum', onClick: () => history.push('/') },
    ];
    items.forEach((item) => {
        item.title = t(item.title);
    });
    return (react_1.default.createElement("div", { className: classnames_1.default(['page', 'start-page', className]) },
        react_1.default.createElement(GDLogo_1.GDLogo, { logoImage: logo_img_base_png_1.default }),
        react_1.default.createElement(GDButton_1.GDButton, { title: `${t('play')} !`, size: "h", styleOption: "secondary", onClick: onPlayClickHandler }),
        react_1.default.createElement(Menu_1.Menu, { className: "start-page__menu", items: items, itemsStyleOption: "secondary", itemsSize: "l", itemsClassName: "start-page__menu-item" }),
        react_1.default.createElement(GDButton_1.GDButton, { title: t('logout'), styleOption: "secondary", size: "l", onClick: logoutHandler })));
};
exports.Main = Main;


/***/ }),

/***/ "./src/pages/NewPost/NewPost.tsx":
/*!***************************************!*\
  !*** ./src/pages/NewPost/NewPost.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NewPost = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/NewPost/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const NewPost = ({ className }) => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    return (react_1.default.createElement("div", { className: classnames_1.default(['page', className]) },
        react_1.default.createElement("h1", { className: "page__title" }, t('forum')),
        react_1.default.createElement("div", { className: "post" },
            react_1.default.createElement("div", { className: "post__title-container" },
                react_1.default.createElement("span", { className: "post__title" }, "topic title"),
                react_1.default.createElement("span", { className: "post__title" }, t('new_post'))),
            react_1.default.createElement("div", { className: "post__input-container" },
                react_1.default.createElement("textarea", { className: "post__text", placeholder: `${t('type_your_message_here')}...` }))),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null),
            react_1.default.createElement(GDButton_1.GDButton, { title: ":)", styleOption: "secondary", size: "l" }),
            react_1.default.createElement(GDButton_1.GDButton, { title: `${t('post')} !`, styleOption: "secondary", size: "l", onClick: () => history.push('/topic') }))));
};
exports.NewPost = NewPost;


/***/ }),

/***/ "./src/pages/Profile/Profile.tsx":
/*!***************************************!*\
  !*** ./src/pages/Profile/Profile.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Profile = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/Profile/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const useMountEffect_1 = __webpack_require__(/*! hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSelectors_1 = __webpack_require__(/*! store/user/userSelectors */ "./src/store/user/userSelectors.ts");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const Profile = ({ className }) => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    const getUserInfoAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.getUserInfoAsync);
    const { avatarSrc, login, first_name, phone, second_name, email, } = react_redux_1.useSelector(userSelectors_1.selectUserInfo);
    useMountEffect_1.useMountEffect(() => getUserInfoAsyncBounded());
    return (react_1.default.createElement("div", { className: classnames_1.default(['page', className]) },
        react_1.default.createElement("h1", { className: "page__title" }, t('profile')),
        react_1.default.createElement("div", { className: "page__content" },
            react_1.default.createElement("div", { className: "profile-page__info" },
                react_1.default.createElement("div", { className: "profile-page__avatar-container" },
                    react_1.default.createElement("img", { className: "profile-page__avatar", src: avatarSrc, alt: t('avatar') })),
                react_1.default.createElement("div", { className: "profile-page__info-container" },
                    react_1.default.createElement("span", { className: "profile-page__nick-name" }, login),
                    react_1.default.createElement("span", { className: "profile-page__name" }, first_name),
                    react_1.default.createElement("span", { className: "profile-page__last-name" }, second_name),
                    react_1.default.createElement("span", { className: "profile-page__phone" }, phone),
                    react_1.default.createElement("span", { className: "profile-page__email" }, email))),
            react_1.default.createElement(GDButton_1.GDButton, { title: t('edit'), styleOption: "primary", onClick: () => history.push('/profile-edit') })),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null))));
};
exports.Profile = Profile;


/***/ }),

/***/ "./src/pages/ProfileEdit/ProfileEdit.tsx":
/*!***********************************************!*\
  !*** ./src/pages/ProfileEdit/ProfileEdit.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileEdit = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/ProfileEdit/styles.css");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const FormUpdateAvatar_1 = __webpack_require__(/*! components/organisms/FormUpdateAvatar/FormUpdateAvatar */ "./src/components/organisms/FormUpdateAvatar/FormUpdateAvatar.tsx");
const useMountEffect_1 = __webpack_require__(/*! hooks/useMountEffect */ "./src/hooks/useMountEffect.ts");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const useModal_1 = __webpack_require__(/*! components/molecules/Modal/useModal */ "./src/components/molecules/Modal/useModal.tsx");
const Modal_1 = __webpack_require__(/*! components/molecules/Modal/Modal */ "./src/components/molecules/Modal/Modal.tsx");
const GDFormikForm_1 = __webpack_require__(/*! components/molecules/GDFormikForm/GDFormikForm */ "./src/components/molecules/GDFormikForm/GDFormikForm.tsx");
const constants_1 = __webpack_require__(/*! pages/ProfileEdit/constants */ "./src/pages/ProfileEdit/constants.tsx");
const ProfileEdit = () => {
    const { t } = react_i18next_1.useTranslation();
    const modal = useModal_1.useModal();
    const validationSchema = react_1.useMemo(() => constants_1.validationSchemaConstructor(t), [t]);
    const getUserInfoAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.getUserInfoAsync);
    const clearRequestBounded = useBoundAction_1.useBoundAction(userSlice_1.userActions.clearRequestState);
    const updateUserInfoAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.updateUserAsync);
    const { userInfo, isLoading, isUpdatedSuccessful, error, } = react_redux_1.useSelector(userSlice_1.getUserState);
    useMountEffect_1.useMountEffect(() => getUserInfoAsyncBounded());
    const submitHandler = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const requestData = Object.assign(Object.assign({}, data), { login: userInfo.login });
        updateUserInfoAsyncBounded(requestData);
    });
    react_1.useMemo(() => {
        var _a;
        if (isUpdatedSuccessful) {
            modal.show(t('updated_successfully'));
        }
        else if (error) {
            modal.show((_a = error.message) !== null && _a !== void 0 ? _a : '');
        }
        else {
            modal.hide();
        }
    }, [isUpdatedSuccessful, isLoading, error, t]);
    react_1.useEffect(() => () => { clearRequestBounded(); }, [clearRequestBounded]);
    return (react_1.default.createElement("div", { className: "page" },
        react_1.default.createElement(Modal_1.Modal, Object.assign({}, modal.bind)),
        react_1.default.createElement("h1", { className: "page__title" }, t('profile_edit')),
        react_1.default.createElement(GDFormikForm_1.GDFormikForm, { fields: Object.values(constants_1.editProfileFormFields), initialValues: userInfo, validationSchema: validationSchema, textSubmitButton: t('submit'), onSubmit: submitHandler }),
        react_1.default.createElement("div", { className: "userInfo-edit-actions" },
            react_1.default.createElement(FormUpdateAvatar_1.FormUpdateAvatar, null),
            react_1.default.createElement(react_router_dom_1.Link, { to: "/profile-password-edit" },
                react_1.default.createElement(GDButton_1.GDButton, { title: t('change_password'), size: "l", styleOption: "secondary" }))),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null))));
};
exports.ProfileEdit = ProfileEdit;


/***/ }),

/***/ "./src/pages/ProfileEdit/constants.tsx":
/*!*********************************************!*\
  !*** ./src/pages/ProfileEdit/constants.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchemaConstructor = exports.editProfileFormFields = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Yup = tslib_1.__importStar(__webpack_require__(/*! yup */ "yup"));
exports.editProfileFormFields = {
    first_name: { id: 'first_name', title: 'name' },
    second_name: { id: 'second_name', title: 'last_name' },
    display_name: { id: 'display_name', title: 'nickname' },
    email: { id: 'email', title: 'e-mail', type: 'email' },
    phone: { id: 'phone', title: 'phone', type: 'tel' },
};
const validationSchemaConstructor = (t) => Yup.object().shape({
    first_name: Yup.string()
        .typeError(t('letters_only'))
        .required(t('required'))
        .max(25, t('too_long')),
    email: Yup.string()
        .required(t('required'))
        .email(t('invalid_format')),
    second_name: Yup.string()
        .typeError(t('letters_only'))
        .required(t('required'))
        .max(25, t('too_long')),
    display_name: Yup.string()
        .max(25, t('too_long')),
    phone: Yup.string()
        .required(t('required')),
});
exports.validationSchemaConstructor = validationSchemaConstructor;


/***/ }),

/***/ "./src/pages/ProfilePasswordEdit/ProfilePasswordEdit.tsx":
/*!***************************************************************!*\
  !*** ./src/pages/ProfilePasswordEdit/ProfilePasswordEdit.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfilePasswordEdit = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const constants_1 = __webpack_require__(/*! pages/ProfilePasswordEdit/constants */ "./src/pages/ProfilePasswordEdit/constants.tsx");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const useModal_1 = __webpack_require__(/*! components/molecules/Modal/useModal */ "./src/components/molecules/Modal/useModal.tsx");
const Modal_1 = __webpack_require__(/*! components/molecules/Modal/Modal */ "./src/components/molecules/Modal/Modal.tsx");
const GDFormikForm_1 = __webpack_require__(/*! components/molecules/GDFormikForm/GDFormikForm */ "./src/components/molecules/GDFormikForm/GDFormikForm.tsx");
const ProfilePasswordEdit = ({ className }) => {
    const { t } = react_i18next_1.useTranslation();
    const modal = useModal_1.useModal();
    const validationSchema = react_1.useMemo(() => constants_1.validationSchemaConstructor(t), [t]);
    const changePassAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.changePasswordAsync);
    const clearRequestBounded = useBoundAction_1.useBoundAction(userSlice_1.userActions.clearRequestState);
    const { isLoading, isUpdatedSuccessful, error } = react_redux_1.useSelector(userSlice_1.getUserState);
    const submitHandler = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const requestData = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };
        changePassAsyncBounded(requestData);
    });
    react_1.useMemo(() => {
        var _a;
        if (isUpdatedSuccessful) {
            modal.show(t('updated_successfully'));
        }
        else if (error) {
            modal.show((_a = error.message) !== null && _a !== void 0 ? _a : '');
        }
        else {
            modal.hide();
        }
    }, [isUpdatedSuccessful, error, isLoading, t]);
    react_1.useEffect(() => () => { clearRequestBounded(); }, [clearRequestBounded]);
    return (react_1.default.createElement("div", { className: classnames_1.default(['page', className]) },
        react_1.default.createElement(Modal_1.Modal, Object.assign({}, modal.bind)),
        react_1.default.createElement("h1", { className: "page__title" }, t('password_edit')),
        react_1.default.createElement("div", { className: "page__content" },
            react_1.default.createElement(GDFormikForm_1.GDFormikForm, { fields: Object.values(constants_1.editProfilePasswordFields), validationSchema: validationSchema, textSubmitButton: t('submit'), onSubmit: submitHandler })),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null))));
};
exports.ProfilePasswordEdit = ProfilePasswordEdit;


/***/ }),

/***/ "./src/pages/ProfilePasswordEdit/constants.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/ProfilePasswordEdit/constants.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchemaConstructor = exports.editProfilePasswordFields = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Yup = tslib_1.__importStar(__webpack_require__(/*! yup */ "yup"));
exports.editProfilePasswordFields = {
    oldPassword: { id: 'oldPassword', title: 'password', type: 'password' },
    newPassword: { id: 'newPassword', title: 'new_password', type: 'password' },
    verifyPassword: { id: 'verifyPassword', title: 'repeat', type: 'password' },
};
const validationSchemaConstructor = (t) => Yup.object().shape({
    oldPassword: Yup.string()
        .required(t('required'))
        .min(5, t('too_short'))
        .max(15, t('too_long')),
    newPassword: Yup.string()
        .required(t('required'))
        .min(8, t('too_short'))
        .max(25, t('too_long')),
    verifyPassword: Yup.string()
        .required(t('required'))
        .oneOf([Yup.ref('newPassword')], t('passwords_not_matches'))
        .min(8, t('too_short'))
        .max(25, t('too_long')),
});
exports.validationSchemaConstructor = validationSchemaConstructor;


/***/ }),

/***/ "./src/pages/Registration/Registration.tsx":
/*!*************************************************!*\
  !*** ./src/pages/Registration/Registration.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registration = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/Registration/styles.css");
const react_1 = tslib_1.__importStar(__webpack_require__(/*! react */ "react"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const useBoundAction_1 = __webpack_require__(/*! hooks/useBoundAction */ "./src/hooks/useBoundAction.ts");
const userActions_1 = __webpack_require__(/*! store/user/userActions */ "./src/store/user/userActions.ts");
const Modal_1 = __webpack_require__(/*! components/molecules/Modal/Modal */ "./src/components/molecules/Modal/Modal.tsx");
const useModal_1 = __webpack_require__(/*! components/molecules/Modal/useModal */ "./src/components/molecules/Modal/useModal.tsx");
const GDFormikForm_1 = __webpack_require__(/*! components/molecules/GDFormikForm/GDFormikForm */ "./src/components/molecules/GDFormikForm/GDFormikForm.tsx");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/pages/Registration/constants.ts");
const Registration = () => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    const modal = useModal_1.useModal();
    const validationSchema = react_1.useMemo(() => constants_1.validationSchemaConstructor(t), [t]);
    const { error, isLoading } = react_redux_1.useSelector(userSlice_1.getUserState);
    const registerAsyncBounded = useBoundAction_1.useBoundAction(userActions_1.registerAsync);
    const submitHandler = (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        registerAsyncBounded(data);
    });
    react_1.useMemo(() => {
        var _a;
        if (error) {
            modal.show((_a = error.message) !== null && _a !== void 0 ? _a : '');
        }
        else {
            modal.hide();
        }
    }, [error, isLoading, history, t]);
    const backHandler = () => {
        history.goBack();
    };
    return (react_1.default.createElement("div", { className: "page" },
        react_1.default.createElement(Modal_1.Modal, Object.assign({}, modal.bind)),
        react_1.default.createElement("div", { className: "page__header" },
            react_1.default.createElement("h1", { className: "page__title" }, t('registration'))),
        react_1.default.createElement(GDFormikForm_1.GDFormikForm, { fields: Object.values(constants_1.registerFormFields), validationSchema: validationSchema, textSubmitButton: t('submit'), onSubmit: submitHandler }),
        react_1.default.createElement("div", { className: "page__footer" },
            react_1.default.createElement(GDButton_1.GDButton, { className: "page__footer-item", title: "back", styleOption: "secondary", size: "l", onClick: backHandler }))));
};
exports.Registration = Registration;


/***/ }),

/***/ "./src/pages/Registration/constants.ts":
/*!*********************************************!*\
  !*** ./src/pages/Registration/constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchemaConstructor = exports.registerFormFields = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const Yup = tslib_1.__importStar(__webpack_require__(/*! yup */ "yup"));
exports.registerFormFields = {
    login: { id: 'login', title: 'login' },
    email: { id: 'email', title: 'e-mail', type: 'email' },
    first_name: { id: 'first_name', title: 'first_name' },
    second_name: { id: 'second_name', title: 'last_name' },
    phone: { id: 'phone', title: 'phone', type: 'tel' },
    password: { id: 'password', title: 'password', type: 'password' },
    verify_password: { id: 'verify_password', title: 'repeat', type: 'password' },
};
// eslint-disable-next-line max-len
const phoneRegExp = /^((\+[1-9]{1,4}[\\-]*)|(\([0-9]{2,3}\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[\\-]*[0-9]{3,4}?$/;
const validationSchemaConstructor = (t) => Yup.object().shape({
    login: Yup.string()
        .required(t('required'))
        .min(5, t('too_short'))
        .max(15, t('too_long')),
    email: Yup.string()
        .required(t('required'))
        .email(t('invalid_format')),
    first_name: Yup.string()
        .typeError(t('letters_only'))
        .required(t('required'))
        .max(25, t('too_long')),
    second_name: Yup.string()
        .typeError(t('letters_only'))
        .required(t('required'))
        .max(25, t('too_long')),
    phone: Yup.string()
        .required(t('required'))
        .matches(phoneRegExp, t('invalid_format')),
    password: Yup.string()
        .required(t('required'))
        .min(8, t('too_short'))
        .max(25, t('too_long')),
    verify_password: Yup.string()
        .required(t('required'))
        .oneOf([Yup.ref('password')], t('passwords_not_matches'))
        .min(8, t('too_short'))
        .max(25, t('too_long')),
});
exports.validationSchemaConstructor = validationSchemaConstructor;


/***/ }),

/***/ "./src/pages/Topic/Topic.tsx":
/*!***********************************!*\
  !*** ./src/pages/Topic/Topic.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Topic = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! ./styles.css */ "./src/pages/Topic/styles.css");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const GDButton_1 = __webpack_require__(/*! components/atoms/GDButton/GDButton */ "./src/components/atoms/GDButton/GDButton.tsx");
const classnames_1 = tslib_1.__importDefault(__webpack_require__(/*! classnames */ "classnames"));
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const BackButton_1 = __webpack_require__(/*! components/molecules/BackButton/BackButton */ "./src/components/molecules/BackButton/BackButton.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const constants_1 = __webpack_require__(/*! pages/Topic/constants */ "./src/pages/Topic/constants.tsx");
const Topic = ({ className }) => {
    const { t } = react_i18next_1.useTranslation();
    const history = react_router_dom_1.useHistory();
    return (react_1.default.createElement("div", { className: classnames_1.default(['page', className]) },
        react_1.default.createElement("h1", { className: "page__title" }, t('forum')),
        react_1.default.createElement("div", { className: "topic" },
            react_1.default.createElement("span", { className: "topic__title" }, constants_1.dummyTopicTitle),
            react_1.default.createElement("div", { className: "topic__posts-list" }, constants_1.dummyPosts.map(({ nickname, avatar, date, message, }) => (react_1.default.createElement("span", { className: "topic__post" },
                react_1.default.createElement("div", { className: "topic__author-container" },
                    react_1.default.createElement("div", { className: "topic__avatar-container" },
                        react_1.default.createElement("img", { className: "topic__avatar", src: avatar, alt: "avatar" })),
                    react_1.default.createElement("span", null, nickname)),
                react_1.default.createElement("div", { className: "topic__content-container" },
                    react_1.default.createElement("span", null, date),
                    react_1.default.createElement("span", null, message))))))),
        react_1.default.createElement("div", { className: "page__footer-buttons" },
            react_1.default.createElement(BackButton_1.BackButton, null),
            react_1.default.createElement(GDButton_1.GDButton, { title: t('new_post'), styleOption: "secondary", size: "l", onClick: () => history.push('/new-post') }))));
};
exports.Topic = Topic;


/***/ }),

/***/ "./src/pages/Topic/constants.tsx":
/*!***************************************!*\
  !*** ./src/pages/Topic/constants.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dummyPosts = exports.dummyTopicTitle = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const logo_img_base_png_1 = tslib_1.__importDefault(__webpack_require__(/*! assets/images/logo_img_base.png */ "./src/assets/images/logo_img_base.png"));
exports.dummyTopicTitle = 'Topic title';
exports.dummyPosts = [
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
    {
        nickname: 'nickname',
        avatar: logo_img_base_png_1.default,
        date: 'date',
        message: 'Test message',
    },
];


/***/ }),

/***/ "./src/server/serverRenderMiddleware.tsx":
/*!***********************************************!*\
  !*** ./src/server/serverRenderMiddleware.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serverRenderMiddleware = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const server_1 = __webpack_require__(/*! react-dom/server */ "react-dom/server");
const react_1 = tslib_1.__importDefault(__webpack_require__(/*! react */ "react"));
const App_1 = __webpack_require__(/*! components/organisms/App/App */ "./src/components/organisms/App/App.tsx");
const store_1 = __webpack_require__(/*! store/store */ "./src/store/store.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
function makeHTMLPage(content) {
    return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Rendered on server</title>
          </head>
          <body>
              <div id="root">${content}</div>
              <script src="/main.js"></script>
          </body>
          </html>
      `;
}
const serverRenderMiddleware = (req, res) => {
    const location = req.url;
    const context = {};
    console.log('rendering on server', location, context);
    const jsx = (react_1.default.createElement(react_redux_1.Provider, { store: store_1.store },
        react_1.default.createElement(react_router_dom_1.StaticRouter, { context: context, location: location },
            react_1.default.createElement(App_1.App, null))));
    if (context.url) {
        res.redirect(context.url);
        return;
    }
    const appContentHTML = server_1.renderToString(jsx);
    res.send(makeHTMLPage(appContentHTML));
};
exports.serverRenderMiddleware = serverRenderMiddleware;


/***/ }),

/***/ "./src/store/leaderboard/leaderboardActions.ts":
/*!*****************************************************!*\
  !*** ./src/store/leaderboard/leaderboardActions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLeaderboardAsync = exports.addLeaderAsync = exports.LeaderboardActionType = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const leaderboard_1 = __webpack_require__(/*! api/leaderboard */ "./src/api/leaderboard.ts");
const requestStatusActions_1 = __webpack_require__(/*! store/requestStatus/requestStatusActions */ "./src/store/requestStatus/requestStatusActions.ts");
var LeaderboardActionType;
(function (LeaderboardActionType) {
    LeaderboardActionType["GET_LEADERBOARD"] = "leaderboard/getLeaderboardAsync";
    LeaderboardActionType["ADD_LEADER"] = "leaderboard/addLeaderAsync";
})(LeaderboardActionType = exports.LeaderboardActionType || (exports.LeaderboardActionType = {}));
exports.addLeaderAsync = toolkit_1.createAsyncThunk(LeaderboardActionType.ADD_LEADER, (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const leaderboard = yield leaderboard_1.leaderboardAPI.addLeader(data);
    return leaderboard;
}));
exports.getLeaderboardAsync = toolkit_1.createAsyncThunk(LeaderboardActionType.GET_LEADERBOARD, (data, thunkAPI) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    thunkAPI.dispatch(requestStatusActions_1.setIsLoadingShown(true));
    try {
        const leaderboard = yield leaderboard_1.leaderboardAPI.getLeaderboard(data);
        return leaderboard;
    }
    finally {
        thunkAPI.dispatch(requestStatusActions_1.setIsLoadingShown(false));
    }
}));


/***/ }),

/***/ "./src/store/leaderboard/leaderboardSelectors.ts":
/*!*******************************************************!*\
  !*** ./src/store/leaderboard/leaderboardSelectors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectLeaderboard = void 0;
const selectLeaderboard = (state) => state.leaderboard;
exports.selectLeaderboard = selectLeaderboard;


/***/ }),

/***/ "./src/store/leaderboard/leaderboardSlice.ts":
/*!***************************************************!*\
  !*** ./src/store/leaderboard/leaderboardSlice.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.leaderboardReducer = exports.leaderboardSlice = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const initialState = {
    leaderboard: [],
};
exports.leaderboardSlice = toolkit_1.createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        update(state, action) {
            state.leaderboard = action.payload;
        },
    },
});
exports.leaderboardReducer = exports.leaderboardSlice.reducer;


/***/ }),

/***/ "./src/store/requestStatus/requestStatusActions.ts":
/*!*********************************************************!*\
  !*** ./src/store/requestStatus/requestStatusActions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setIsLoadingShown = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
exports.setIsLoadingShown = toolkit_1.createAction('setIsLoadingShown');


/***/ }),

/***/ "./src/store/requestStatus/requestStatusSelectors.ts":
/*!***********************************************************!*\
  !*** ./src/store/requestStatus/requestStatusSelectors.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectIsLoadingShown = void 0;
const selectIsLoadingShown = (state) => state.requestStatus.isLoadingShown;
exports.selectIsLoadingShown = selectIsLoadingShown;


/***/ }),

/***/ "./src/store/requestStatus/requestStatusSlice.ts":
/*!*******************************************************!*\
  !*** ./src/store/requestStatus/requestStatusSlice.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requestStatusReducer = exports.requestStatusSlice = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const requestStatusActions_1 = __webpack_require__(/*! ./requestStatusActions */ "./src/store/requestStatus/requestStatusActions.ts");
const initialState = {
    isLoadingShown: false,
};
exports.requestStatusSlice = toolkit_1.createSlice({
    name: 'requestStatus',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestStatusActions_1.setIsLoadingShown, (state, action) => {
            state.isLoadingShown = action.payload;
        });
    },
});
exports.requestStatusReducer = exports.requestStatusSlice.reducer;


/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = exports.history = exports.isServer = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const leaderboardSlice_1 = __webpack_require__(/*! store/leaderboard/leaderboardSlice */ "./src/store/leaderboard/leaderboardSlice.ts");
const connected_react_router_1 = __webpack_require__(/*! connected-react-router */ "connected-react-router");
const history_1 = __webpack_require__(/*! history */ "history");
const requestStatusSlice_1 = __webpack_require__(/*! ./requestStatus/requestStatusSlice */ "./src/store/requestStatus/requestStatusSlice.ts");
const userSlice_1 = __webpack_require__(/*! ./user/userSlice */ "./src/store/user/userSlice.ts");
exports.isServer = !(typeof window !== 'undefined'
    && window.document
    && window.document.createElement);
exports.history = exports.isServer
    ? history_1.createMemoryHistory({ initialEntries: ['/'] })
    : history_1.createBrowserHistory();
const createRootReducer = (hist) => toolkit_1.combineReducers({
    router: connected_react_router_1.connectRouter(hist),
    user: userSlice_1.userReducer,
    requestStatus: requestStatusSlice_1.requestStatusReducer,
    leaderboard: leaderboardSlice_1.leaderboardReducer,
});
exports.store = toolkit_1.configureStore({
    reducer: createRootReducer(exports.history),
});


/***/ }),

/***/ "./src/store/user/userActions.ts":
/*!***************************************!*\
  !*** ./src/store/user/userActions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.changeAvatarAsync = exports.changePasswordAsync = exports.updateUserAsync = exports.registerAsync = exports.logoutAsync = exports.loginAsync = exports.getUserInfoAsync = exports.UserActionType = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const auth_1 = __webpack_require__(/*! api/auth */ "./src/api/auth.ts");
const users_1 = __webpack_require__(/*! api/users */ "./src/api/users.ts");
const requestStatusActions_1 = __webpack_require__(/*! store/requestStatus/requestStatusActions */ "./src/store/requestStatus/requestStatusActions.ts");
var UserActionType;
(function (UserActionType) {
    UserActionType["INFO"] = "user/getUserInfoAsync";
    UserActionType["LOGIN"] = "user/loginAsync";
    UserActionType["LOGOUT"] = "user/logoutAsync";
    UserActionType["REGISTER"] = "user/registerAsync";
    UserActionType["UPDATE"] = "user/updateUserAsync";
    UserActionType["CHANGE_PASSWORD"] = "user/changePasswordAsync";
    UserActionType["CHANGE_AVATAR"] = "user/changeAvatarAsync";
})(UserActionType = exports.UserActionType || (exports.UserActionType = {}));
exports.getUserInfoAsync = toolkit_1.createAsyncThunk(UserActionType.INFO, (nodata, thunkAPI) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    thunkAPI.dispatch(requestStatusActions_1.setIsLoadingShown(true));
    try {
        const userInfo = yield auth_1.authAPI.getUserInfo();
        return userInfo;
    }
    finally {
        thunkAPI.dispatch(requestStatusActions_1.setIsLoadingShown(false));
    }
}));
exports.loginAsync = toolkit_1.createAsyncThunk(UserActionType.LOGIN, (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_1.authAPI.login(data);
    return result;
}));
exports.logoutAsync = toolkit_1.createAsyncThunk(UserActionType.LOGOUT, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_1.authAPI.logout();
    return result;
}));
exports.registerAsync = toolkit_1.createAsyncThunk(UserActionType.REGISTER, (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_1.authAPI.register(data);
    return result;
}));
exports.updateUserAsync = toolkit_1.createAsyncThunk(UserActionType.UPDATE, (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_1.usersAPI.update(data);
    return result;
}));
exports.changePasswordAsync = toolkit_1.createAsyncThunk(UserActionType.CHANGE_PASSWORD, (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_1.usersAPI.changePassword(data);
    return result;
}));
exports.changeAvatarAsync = toolkit_1.createAsyncThunk(UserActionType.CHANGE_AVATAR, (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_1.usersAPI.changeAvatar(data);
    return result;
}));


/***/ }),

/***/ "./src/store/user/userSelectors.ts":
/*!*****************************************!*\
  !*** ./src/store/user/userSelectors.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectTheme = exports.selectUserInfo = void 0;
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const selectUser = (state) => state.user;
exports.selectUserInfo = toolkit_1.createSelector(selectUser, (user) => user.userInfo);
exports.selectTheme = toolkit_1.createSelector(selectUser, (user) => user.theme);


/***/ }),

/***/ "./src/store/user/userSlice.ts":
/*!*************************************!*\
  !*** ./src/store/user/userSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUserState = exports.selectUserInfo = exports.userActions = exports.toggleTheme = exports.userReducer = exports.userSlice = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const toolkit_1 = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
const config_1 = __webpack_require__(/*! api/config */ "./src/api/config.ts");
const resources_1 = __webpack_require__(/*! api/resources */ "./src/api/resources.ts");
const logo_img_base_png_1 = tslib_1.__importDefault(__webpack_require__(/*! assets/images/logo_img_base.png */ "./src/assets/images/logo_img_base.png"));
const userActions_1 = __webpack_require__(/*! ./userActions */ "./src/store/user/userActions.ts");
const initialState = {
    userInfo: {
        id: 0,
        first_name: null,
        second_name: null,
        display_name: null,
        login: '',
        email: '',
        phone: '',
        avatar: null,
        avatarSrc: logo_img_base_png_1.default,
    },
    theme: 'dark',
    // isAuth: Boolean(localStorage.getItem(AUTH_TOKEN_NAME)),
    isAuth: false,
    isLoading: false,
    isUpdatedSuccessful: false,
    error: null,
};
function isPendingAction(action) {
    return action.type.endsWith('/pending');
}
function isRejectedAction(action) {
    return action.type.endsWith('/rejected');
}
function isFulfilledAction(action) {
    return action.type.endsWith('/fulfilled');
}
const setAuth = (state, auth) => {
    if (auth) {
        localStorage.setItem(config_1.AUTH_TOKEN_NAME, '1');
    }
    else {
        localStorage.removeItem(config_1.AUTH_TOKEN_NAME);
    }
    state.isAuth = auth;
};
const saveUserData = (state, payload) => {
    const avatarSrc = payload.avatar
        ? resources_1.resourcesAPI.getResourceURL(payload.avatar)
        : logo_img_base_png_1.default;
    state.userInfo = Object.assign(Object.assign({}, payload), { avatarSrc });
};
exports.userSlice = toolkit_1.createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        logout(state) {
            setAuth(state, false);
        },
        update(state, action) {
            saveUserData(state, action.payload);
        },
        clearRequestState(state) {
            state.error = null;
            state.isLoading = false;
            state.isUpdatedSuccessful = false;
        },
    },
    extraReducers: (builder) => {
        // auth cases
        builder.addCase(userActions_1.getUserInfoAsync.fulfilled, (state, action) => {
            saveUserData(state, action.payload);
        });
        builder.addCase(userActions_1.loginAsync.fulfilled, (state) => setAuth(state, true));
        builder.addCase(userActions_1.logoutAsync.fulfilled, (state) => setAuth(state, false));
        builder.addCase(userActions_1.registerAsync.fulfilled, (state) => setAuth(state, true));
        // updated cases
        builder.addCase(userActions_1.updateUserAsync.fulfilled, (state, action) => {
            saveUserData(state, action.payload);
            state.isUpdatedSuccessful = true;
        });
        builder.addCase(userActions_1.updateUserAsync.pending, (state) => { state.isUpdatedSuccessful = false; });
        builder.addCase(userActions_1.changePasswordAsync.fulfilled, (state) => { state.isUpdatedSuccessful = true; });
        builder.addCase(userActions_1.changePasswordAsync.pending, (state) => { state.isUpdatedSuccessful = false; });
        builder.addCase(userActions_1.changePasswordAsync.rejected, (state) => { state.isUpdatedSuccessful = false; });
        builder.addCase(userActions_1.changeAvatarAsync.fulfilled, (state, action) => {
            saveUserData(state, action.payload);
            state.isUpdatedSuccessful = true;
        });
        builder.addCase(userActions_1.changeAvatarAsync.pending, (state) => { state.isUpdatedSuccessful = false; });
        builder.addCase(userActions_1.changeAvatarAsync.rejected, (state) => { state.isUpdatedSuccessful = false; });
        // global matchers
        builder.addMatcher(isPendingAction, (state) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addMatcher(isRejectedAction, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        });
        builder.addMatcher(isFulfilledAction, (state) => {
            state.error = null;
            state.isLoading = false;
        });
    },
});
exports.userReducer = exports.userSlice.reducer;
exports.toggleTheme = exports.userSlice.actions.toggleTheme;
exports.userActions = exports.userSlice.actions;
const selectUserInfo = (state) => state.user.userInfo;
exports.selectUserInfo = selectUserInfo;
const getUserState = (state) => state.user;
exports.getUserState = getUserState;


/***/ }),

/***/ "./src/utils/api-wrapper.ts":
/*!**********************************!*\
  !*** ./src/utils/api-wrapper.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.callApi = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const axios_1 = tslib_1.__importDefault(__webpack_require__(/*! axios */ "axios"));
const types_1 = __webpack_require__(/*! api/types */ "./src/api/types.ts");
const config_1 = __webpack_require__(/*! api/config */ "./src/api/config.ts");
const store_1 = __webpack_require__(/*! store/store */ "./src/store/store.ts");
const userSlice_1 = __webpack_require__(/*! store/user/userSlice */ "./src/store/user/userSlice.ts");
const axiosInstance = axios_1.default.create({});
const callApi = ({ method, url, data, params, authRequired = false, formData = false, }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const authToken = (localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem(config_1.AUTH_TOKEN_NAME)) || '';
    const response = {
        status: types_1.ResponseStatus.SUCCESS,
        data: null,
    };
    const requestConfig = {
        headers: {},
        method,
        url,
        withCredentials: true,
        validateStatus(status) {
            if (status < 400) {
                return true;
            }
            if (status === 401) {
                store_1.store.dispatch(userSlice_1.userActions.logout());
            }
            return false;
        },
    };
    if (authRequired && authToken) {
        requestConfig.headers.Authorization = `Token ${authToken}`;
    }
    if (formData) {
        requestConfig.headers['Content-Type'] = 'multipart/form-data';
    }
    if (data) {
        requestConfig.data = data;
    }
    if (params) {
        requestConfig.params = params;
    }
    yield axiosInstance(requestConfig)
        .then((resp) => {
        if (resp.data) {
            response.data = resp.data;
        }
    })
        .catch((error) => {
        var _a, _b;
        if ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.reason) {
            throw new Error(error.response.data.reason);
        }
        else {
            throw new Error(error.message);
        }
    });
    return response;
});
exports.callApi = callApi;


/***/ }),

/***/ "./webpapck/client.config.ts":
/*!***********************************!*\
  !*** ./webpapck/client.config.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const webpack_1 = tslib_1.__importDefault(__webpack_require__(/*! webpack */ "webpack"));
const path_1 = tslib_1.__importDefault(__webpack_require__(/*! path */ "path"));
const copy_webpack_plugin_1 = tslib_1.__importDefault(__webpack_require__(/*! copy-webpack-plugin */ "copy-webpack-plugin"));
// import WorkboxPlugin from 'workbox-webpack-plugin';
const env_1 = __webpack_require__(/*! ./env */ "./webpapck/env.ts");
const file_1 = tslib_1.__importDefault(__webpack_require__(/*! ./loaders/file */ "./webpapck/loaders/file.ts"));
const css_1 = tslib_1.__importDefault(__webpack_require__(/*! ./loaders/css */ "./webpapck/loaders/css.ts"));
const js_1 = tslib_1.__importDefault(__webpack_require__(/*! ./loaders/js */ "./webpapck/loaders/js.ts"));
const config = {
    name: 'client',
    target: 'web',
    entry: [
        env_1.IS_DEV && 'react-hot-loader/patch',
        // Entry для работы HMR
        env_1.IS_DEV && 'webpack-hot-middleware/client',
        env_1.IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path_1.default.join(env_1.SRC_DIR, 'index'),
    ].filter(Boolean),
    output: {
        path: env_1.DIST_DIR,
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        modules: [env_1.SRC_DIR, 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            js_1.default.client,
            file_1.default.client,
            css_1.default.client,
        ],
    },
    plugins: [
        new copy_webpack_plugin_1.default({
            patterns: [
                { from: path_1.default.join(env_1.SRC_DIR, 'locales'), to: 'locales' },
            ],
        }),
        new webpack_1.default.HotModuleReplacementPlugin(),
        // new WorkboxPlugin.GenerateSW({
        //   clientsClaim: true,
        //   skipWaiting: true,
        // }),
    ],
    devtool: 'source-map',
};
exports.default = config;


/***/ }),

/***/ "./webpapck/env.ts":
/*!*************************!*\
  !*** ./webpapck/env.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SERVER_OUT_DIR = exports.DIST_DIR = exports.SRC_DIR = exports.IS_DEV = void 0;
const path = __webpack_require__(/*! path */ "path");
exports.IS_DEV = process.env.NODE_ENV !== 'production';
exports.SRC_DIR = path.join(__dirname, '..', 'src');
exports.DIST_DIR = path.join(__dirname, '..', 'dist');
exports.SERVER_OUT_DIR = path.join(__dirname, '..', 'distServer');


/***/ }),

/***/ "./webpapck/loaders/css.ts":
/*!*********************************!*\
  !*** ./webpapck/loaders/css.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = {
    client: {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
    server: {
        test: /\.css$/,
        loader: 'null-loader',
    },
};


/***/ }),

/***/ "./webpapck/loaders/file.ts":
/*!**********************************!*\
  !*** ./webpapck/loaders/file.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;
exports.default = {
    client: {
        test: fileRegex,
        type: 'asset/resource',
    },
    server: {
        test: fileRegex,
        loader: 'null-loader',
    },
};


/***/ }),

/***/ "./webpapck/loaders/js.ts":
/*!********************************!*\
  !*** ./webpapck/loaders/js.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = {
    client: {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                compiler: 'ttypescript',
            },
        },
        exclude: /node_modules/,
    },
    server: {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                compiler: 'ttypescript',
            },
        },
        exclude: /node_modules/,
    },
};


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("connected-react-router");

/***/ }),

/***/ "copy-webpack-plugin":
/*!**************************************!*\
  !*** external "copy-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("copy-webpack-plugin");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("history");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("tslib");

/***/ }),

/***/ "typescript-is":
/*!********************************!*\
  !*** external "typescript-is" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("typescript-is");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const path_1 = tslib_1.__importDefault(__webpack_require__(/*! path */ "path"));
const express_1 = tslib_1.__importDefault(__webpack_require__(/*! express */ "express"));
const webpack_1 = tslib_1.__importDefault(__webpack_require__(/*! webpack */ "webpack"));
const webpack_dev_middleware_1 = tslib_1.__importDefault(__webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware"));
const webpack_hot_middleware_1 = tslib_1.__importDefault(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware"));
const serverRenderMiddleware_1 = __webpack_require__(/*! ./serverRenderMiddleware */ "./src/server/serverRenderMiddleware.tsx");
const client_config_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../webpapck/client.config */ "./webpapck/client.config.ts"));
const app = express_1.default();
const port = process.env.PORT || 8080;
const compiler = webpack_1.default(Object.assign(Object.assign({}, client_config_1.default), { mode: 'development' }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use(webpack_dev_middleware_1.default(compiler, {
    publicPath: '/',
    serverSideRender: true,
    stats: 'detailed',
}));
app.use(webpack_hot_middleware_1.default(compiler, { path: '/__webpack_hmr' }));
app.get(['/', '/leaderboard', '/profile'], serverRenderMiddleware_1.serverRenderMiddleware);
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('listening on port ', port);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=server.js.map