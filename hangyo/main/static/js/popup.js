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
var btn_report = document.querySelector("#btn_report");
var close_report = document.querySelector(".btn-close-report");

function toggle_report(){
    report.classList.toggle("pop-report");
    document.getElementById("report-storesname").innerHTML= positions[selectedStoreID].content;
}

function btn_report_OnClick(event) {
    var actionUrl = "report/" + event.target.value;
    if(event.target.value){
        console.log(event.target);
        toggle_report();
        document.querySelector('.popupbox-report').action = actionUrl;
    }
}

close_report.addEventListener("click", toggle_report);