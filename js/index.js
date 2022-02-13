/*
 * @Author: James Wang
 * @Date: 2022-02-12
 * @LastEditTime: 2022-02-12 01:21:41
 * @LastEditors: Please set LastEditors
 * @Description: Login control
 * @FilePath: \birthday-present\js\index.js
 */
$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  //修改姓名和密码请改此处
  if (userName == "abc" && pwd == "888") { //默认姓名和密码为abc/888
    event.preventDefault();
    $("form").fadeOut(350);
    $(".wrapper").addClass("form-success");
    setTimeout(function () {
      location.href = "birthday-cake.html";
    }, 2000);
  } else {
    alert("亲爱的再想想。");
  }
});
