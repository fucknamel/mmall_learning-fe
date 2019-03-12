/*
 * @Author: LKH 
 * @Date: 2019-03-09 10:18:44 
 * @Last Modified by: LKH
 * @Last Modified time: 2019-03-09 11:15:13
 */

 var _mm = require('util/mm.js');

 var _user = {
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url : _mm.getServerUrl('/user/get_user_info.do'),
            method : 'POST',
            success : resolve,
            error : reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url : _mm.getServerUrl('/user/logout.do'),
            method : 'POST',
            success : resolve,
            error : reject
        });
    }
 }
 module.exports = _user;