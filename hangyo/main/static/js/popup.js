var popup_resetinfo = document.querySelector(".popup_resetinfo"); 
var btn_resetinfo = document.querySelector(".btn_resetinfo"); 
var popup_checkbalance = document.querySelector(".popup_checkbalance");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                p_checkbalance = document.querySelector(".popup_checkbalance");
var btn_checkbalance = document.querySelector(".btn_checkbalance");
var closeButton_1 = document.querySelector(".close-button_1");
var closeButton_2 = document.querySelector(".close-button_2");
var closeButton_Iknow = document.querySelector(".close-button_Iknow");

function toggle_resetinfo(){
    popup_resetinfo.classList.toggle("show-popup_resetinfo");
}

function btn_resetinfo_OnClick(event) {
    if (event.target === popup_resetinfo) {
        toggle_resetinfo();
    }
}

function toggle_checkbalance(){
    popup_checkbalance.classList.toggle("show-popup_checkbalance");
}

function btn_checkbalance_OnClick(event) {
    if (event.target === popup_checkbalance) {
        toggle_checkbalance();
    }
}

btn_resetinfo.addEventListener("click", toggle_resetinfo);
closeButton_1.addEventListener("click", toggle_resetinfo);
btn_checkbalance.addEventListener("click", toggle_checkbalance);
closeButton_2.addEventListener("click", toggle_checkbalance);
closeButton_Iknow.addEventListener("click", toggle_checkbalance);
// 팝업창 밖에 부분 눌렀을 때 팝업창 꺼짐
window.addEventListener("click", btn_resetinfo_OnClick);
window.addEventListener("click", btn_checkbalance_OnClick);