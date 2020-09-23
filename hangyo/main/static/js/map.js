var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(35.234104, 129.078411),
    level: 3
};
// public static final MapView.CurrentLocationTrackingMode TrackingModeOnWithHeading
var map = new kakao.maps.Map(container, options);

//마커 속성
var imageSrc = "/static/image/marker_store.png",
    imageSize = new kakao.maps.Size(55,64), 
    imageOption = {offset: new kakao.maps.Point(27, 69)}; //좌표랑 일치시킬 마커내의 좌표
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
//현위치 마커속성
var imageSrc1 = "/static/image/marker_me.png",
    imageSize1 = new kakao.maps.Size(20,20), 
    imageOption1 = {offset: new kakao.maps.Point(27, 69)}; //좌표랑 일치시킬 마커내의 좌표
var markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize1, imageOption1)

//현재위치 마커표시
if (navigator.geolocation) {
// 접속위치 얻어오기
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon);
        
        displayMarker(locPosition, message); 
            
    });
    
} else { //GeoLocation을 사용할 수 없을때
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}     
function displayMarker(locPosition, message) {

// 마커 생성
var marker1 = new kakao.maps.Marker({  
    map: map, 
    image:markerImage1,
    position: locPosition
}); 

marker1.setMap(map);  

var iwContent1 = message, // 표시 내용
    iwRemoveable1 = true;

// 지도 중심좌표 현재위치 이동
map.setCenter(locPosition);      
}    



// 버튼생성 후 특정 위치로 부드럽게 이동
function panTo(lat,lon) { 
    var moveLatLon = new kakao.maps.LatLng(lat,lon);
    map.panTo(moveLatLon);}       
// 지도 줌
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
//마커 관련 툴
var positions = [
    {
    content: '<div>부산대</div>', 
    latlng: new kakao.maps.LatLng(35.234104, 129.078411)
    },
    {
    content: '<div>카페드팽</div>', 
    latlng: new kakao.maps.LatLng(35.230288, 129.084147)
    },
    {
    content: '<div>벅구냥냥펀치</div>', 
    latlng: new kakao.maps.LatLng(35.231172, 129.085223)
    }
];

// 마커 생성
for (var i = 0; i < positions.length; i ++) {
    var marker = new kakao.maps.Marker({
        position: positions[i].latlng, 
        image: markerImage, 
        clickable: true
    });
    var iwRemoveable = true; // true일 때 X버튼 생성
    // 인포윈도우를 생성
    var infowindow = new kakao.maps.InfoWindow({
        content : positions[i].content,
        removable : iwRemoveable
    });
    marker.setMap(map);  
    kakao.maps.event.addListener(marker, 'click', clickListener(map,marker,infowindow));
}
function clickListener(map,marker,infowindow){
    return function(){
        infowindow.open(map, marker,infowindow);
    };
}