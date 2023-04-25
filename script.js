var hedefler = ["Bilgisayar mühendisliği","Akademik başarı.","ARGE.","Master.","Doktora.","Pazarlama.","Yüksek ortalama.","Yazılım mühendisliği.","Askerlik.","Yöneticilik."];

var egitimler = ["Üniversite", "Lise", "Orta okul", "ilk okul", "Ana okulu", "Kurslar", "Belgeler", "Sertifikalar", "Açık öğretim", "Doktora"];

var diller = ["C#","Java","HTML","Python","CSS","JavaScript","Assembly","C++","C","PHP"];

var kariyerler = ["İş insanı","Ücretli çalışan","Yönetici","Sosyal sorumluluk","Patron","Müdür","CEO","Sekreter","Staj","İşsiz"];

function yil() {
    let sayi = document.getElementById("sayi").value;
    let ilkDort = sayi.substr(0,4);
    var yilSayi1 = ilkDort;
    var yilSayi2 = 2023;
    var yilSonuc=yilSayi2-yilSayi1;
    document.getElementById("ilk-dort").textContent = yilSonuc;
    }

  function sonDortHane() {
    let sayi = document.getElementById("sayi").value;
    let sonDort = sayi.substr(-4);
    document.getElementById("son-dort").textContent = sonDort;
  }

  function puanHesabi() {
    let sayi = document.getElementById("sayi").value;
    let ilkDort = sayi.substr(0,4);
    let ESayi = sayi.substr(8,1);
    let FSayi = sayi.substr(9,1);
    let GSayi = sayi.substr(10,1);
    let HSayi = sayi.substr(11,1);
    var E = ESayi;
    var F = FSayi;
    var G = GSayi;
    var H = HSayi;
    var yilSayi1 = ilkDort;
    var yilSayi2 = 2023;
    var x = yilSayi2-yilSayi1;
    let puan = (ESayi ) * Math.pow(x, 3) +
             (FSayi ) * Math.pow(x, 2) +
             (GSayi) * Math.pow(x, 1) +
             (HSayi ) * Math.pow(x, 0);
    puan /= Math.pow(x, 4);
    document.getElementById("puan").textContent = puan;
    }
    function sansSayisi() {
    let sayi = document.getElementById("sayi").value;
    let ilkDort = sayi.substr(0,4);
    let ESayi = sayi.substr(8,1);
    let FSayi = sayi.substr(9,1);
    let GSayi = sayi.substr(10,1);
    let HSayi = sayi.substr(11,1);
    var E = ESayi;
    var F = FSayi;
    var G = GSayi;
    var H = HSayi;
    var yilSayi1 = ilkDort;
    var yilSayi2 = 2023;
    var x = yilSayi2-yilSayi1;
    let puan = (ESayi ) * Math.pow(x, 3) +
             (FSayi ) * Math.pow(x, 2) +
             (GSayi) * Math.pow(x, 1) +
             (HSayi ) * Math.pow(x, 0);
    puan /= Math.pow(x, 4);
    sans = 100 * (Math.random() + puan)
    document.getElementById("sans").textContent = sans;
    }
    
    function hedef() {
    let sayi = document.getElementById("sayi").value;
    let ESayi = sayi.substr(8,1);
    
    var yaz = hedefler[ESayi-1]; 
    if(ESayi==0){
      ESayi=10;
    }

    for (var i = 0; i < ESayi; i++) {
      document.getElementById('yaz').innerHTML += "<p>" + hedefler[i] + "</p>";
    }
    }

    function egitim() {
      let sayi = document.getElementById("sayi").value;
      let ESayi = sayi.substr(9,1);
      
      var yaz = egitimler[ESayi-1]; 
  
      if(ESayi==0){
        ESayi=10;
      }
      for (var i = 0; i < ESayi; i++) {
        document.getElementById('yaz').innerHTML += "<p>" + egitimler[i] + "</p>";
      }
      }

    function dil() {
      let sayi = document.getElementById("sayi").value;
      let ESayi = sayi.substr(10,1);
      
      var yaz = diller[ESayi-1]; 
      if(ESayi==0){
        ESayi=10;
      }
      for (var i = 0; i < ESayi; i++) {
        document.getElementById('yaz').innerHTML += "<p>" + diller[i] + "</p>";
      }
      }

    function kariyer() {
      let sayi = document.getElementById("sayi").value;
      let ESayi = sayi.substr(11,1);
      
      var yaz = kariyerler[ESayi-1]; 
      if(ESayi==0){
        ESayi=10;
      }
      for (var i = 0; i < ESayi; i++) {
        document.getElementById('yaz').innerHTML += "<p>" + kariyerler[i] + "</p>";
      }
      }
      

    function anasayfa() {
      let sayi = document.getElementById("sayi").value;
      let ESayi = sayi.substr(8,1);
      
      var yaz = hedefler[ESayi-1]; 
      document.getElementById("yaz").textContent = yaz;
      }

