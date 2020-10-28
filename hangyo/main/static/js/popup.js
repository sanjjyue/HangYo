// 잔액 확인
var checkbalance = document.querySelector(".checkbalance");
var btn_checkbalance = document.querySelector(".btn_checkbalance"); 
var btn_close_checkbalance = document.querySelector(".btn_close_checkbalance");
var btn_iknow = document.querySelector(".btn_iknow");

function toggle_checkbalance(){
    checkbalance.classList.toggle("pop-checkbalance");
}

function btn_checkbalance_OnClick(event) {
    if (event.target === checkbalance) {
        toggle_checkbalance();
    }
}

btn_checkbalance.addEventListener("click", toggle_checkbalance);
btn_close_checkbalance.addEventListener("click", toggle_checkbalance);
btn_iknow.addEventListener("click", toggle_checkbalance);
window.addEventListener("click", btn_checkbalance_OnClick);

// 정보 재설정
var resetinfo = document.querySelector(".resetinfo"); 
var btn_resetinfo = document.querySelector(".btn_resetinfo"); 
var btn_close_resetinfo = document.querySelector(".btn_close_resetinfo");
var btn_saveinfo = document.querySelector(".btn_saveinfo")

function toggle_resetinfo(){
    resetinfo.classList.toggle("pop-resetinfo");
}

function btn_resetinfo_OnClick(event) {
    if (event.target === resetinfo) {
        toggle_resetinfo();
    }
}

btn_resetinfo.addEventListener("click", toggle_resetinfo);
btn_close_resetinfo.addEventListener("click", toggle_resetinfo);
btn_saveinfo.addEventListener("click", toggle_resetinfo);
window.addEventListener("click", btn_resetinfo_OnClick);

// 가맹점정보
var storeinfo = document.querySelector(".storeinfo");
var btn_storeinfo = document.querySelector(".btn_storeinfo");

// function toggle_storeinfo(){
//     storeinfo.classList.toggle("pop-storeinfo");
// }

// function btn_storeinfo_OnClick(event) {
//     if (event.target === storeinfo) {
//         toggle_storeinfo();
//     }
// }

// btn_storeinfo.addEventListener("click", toggle_storeinfo);
// window.addEventListener("click", btn_storeinfo_OnClick);

// 제보하기
var report = document.querySelector(".report");
var btn_report = document.querySelector(".btn_report");

function toggle_report(){
    report.classList.toggle("pop-report");
}

function btn_report_OnClick(event) {
    if (event.target === report) {
        toggle_report();
    }
}

btn_report.addEventListener("click", toggle_report);
window.addEventListener("click", btn_report_OnClick);
