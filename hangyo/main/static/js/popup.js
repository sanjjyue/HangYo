// 정보 재설정
var info = document.querySelector(".info"); 
var btn_info = document.querySelector(".btn_info"); 
var btn_close_info = document.querySelector(".btn_close_info");
var btn_saveinfo = document.querySelector(".btn_saveinfo")

function toggle_info(){
    info.classList.toggle("pop-info");
}

function btn_info_OnClick(event) {
    if (event.target === info) {
        toggle_info();
    }
}

btn_info.addEventListener("click", toggle_info);
btn_close_info.addEventListener("click", toggle_info);
btn_saveinfo.addEventListener("click", toggle_info);
window.addEventListener("click", btn_info_OnClick);

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
