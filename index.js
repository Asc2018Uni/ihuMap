// Locations of IHU
var locations = [
  [ 41.138398, 28.796783, "<h2>İbn Haldun Üniversitesi</h2>" + "<img src='images/ihu.png'>", "https://www.ihu.edu.tr/tr" ],
  [ 41.138130, 28.797599, "<h2>Rektörlük</h2>" + "<img src='images/rektorluk.png'>", "https://www.ihu.edu.tr/tr/rektorluk" ],
  [ 41.138288, 28.796262, "<h2>Kütüphane</h2>" + "<img src='images/kutuphane.png'>", "https://library.ihu.edu.tr/tr" ],
  [ 41.138095, 28.796464, "<h2>Haydar Aliyev Avrasya Araştırmaları Merkezi</h2>" + "<img src='images/arastirmaMerkezi.png'>", "https://avrasya.ihu.edu.tr/" ],
  [ 41.138504, 28.798513, "<h2>Diller Okulu</h2>" + "<img src='images/dillerOkulu.png'>", "https://sl.ihu.edu.tr/tr" ],
  [ 41.139007, 28.798251, "<h2>İnsan ve Toplum Bilimleri Fakültesi</h2>" + "<img src='images/insanVeToplum.png'>", "https://hss.ihu.edu.tr/tr" ],
  [ 41.139489, 28.797919, "<h2>Yönetim Bilimleri Fakültesi</h2>" + "<img src='images/yonetimBilimleri.png'>", "https://manf.ihu.edu.tr/tr" ],
  [ 41.139009, 28.797042, "<h2>Öğrenci Merkezi</h2>" + "<img src='images/ogrenciMerkezi.png'>", "#" ],
  [ 41.139116, 28.797321, "<h2>Simit Sarayı</a></h2>" + "<img src='images/simitsarayi.png'>", "#" ],
  [ 41.135185, 28.800813, "<h2>Erkek Öğrenci Yurt</h2>" + "<img src='images/erkekYurt.png'>", "https://sks.ihu.edu.tr/tr/ogrenci-yurtlari" ],
  [ 41.135583, 28.801785, "<h2>Kız Öğrenci Yurt</h2>" + "<img src='images/kizYurt.png'>", "https://sks.ihu.edu.tr/tr/ogrenci-yurtlari" ],
  [ 41.134014, 28.800217, "<h2>Spor Merkezi</h2>" + "<img src='images/sporMerkezi.png'>", "https://www.ihu.edu.tr/tr/spor-merkezi" ],
  [ 41.135576, 28.797083, "<h2>İbn Haldun Üniversitesi Otobüs Durağı</h2>" + "<img src='images/durak1.png'>", "https://iett.istanbul/StationDetail?dkod=183532&stationname=%C4%B0BN%20HALDUN%20%C3%9CN%C4%B0VERS%C4%B0TES%C4%B0-Basaksehir" ],
  [ 41.135270, 28.796974, "<h2>İbn Haldun Üniversitesi Otobüs Durağı</h2>" + "<img src='images/durak2.png'>", "https://iett.istanbul/StationDetail?dkod=183531&stationname=%C4%B0BN%20HALDUN%20%C3%9CN%C4%B0VERS%C4%B0TES%C4%B0-Basaksehir" ]
];

// Initialize and add the map
function initMap() {

  function markerListener(marker, infowindow, link){
    
    marker.addListener("mouseover", () => {
      if(openWindow != null){
        openWindow.close();
      }
      
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
  
      openWindow = infowindow;
    });

    marker.addListener("click", () => {
      window.open(link, "_blank");
      infowindow.close();
    });
  }

  var openWindow = null;

  // Map Center
  const center = { lat: 41.1365758, lng: 28.799227 };

  // The map, centered
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    mapTypeId: 'satellite'
  });


  for(var i = 0; i < locations.length; i++){
    var infowindow = new google.maps.InfoWindow({
      content: locations[i][2]
    });
  
    var marker = new google.maps.Marker({
      position: { lat: locations[i][0], lng: locations[i][1] },
      map: map,
    });

    markerListener(marker, infowindow, locations[i][3])
  }

}
  
window.initMap = initMap;