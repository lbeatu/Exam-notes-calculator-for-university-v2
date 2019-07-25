var notSonuc = document.getElementById("notSonuc");
var progressValue = document.getElementById("progressValue");
var dersSayisi = document.getElementById("dersSayisi");
var selectNote = document.getElementById("selectNote");
var harfNotu = new Array("FF", "FD", "DD", "DC", "CC", "CB", "BB", "BA", "AA");






function hesapNotu() {
  document.getElementById("spinners").style.display = "none";
  document.getElementById("Hesapla").innerHTML = "Yeni ders ekle";

  // var new_element_div = document.createElement("DIV");
  // var btn = document.createElement('BUTTON');
  // new_element_div.classList.add("btn");

  for (var i = 0; i <= dersSayisi.value - 1; i++) {
    var page = document.createElement("DIV");
    page.className = "form-group mx-sm-3 mb-2";
    page.id = "pageHesap";
    page.value = i + 1;
    var elementSelectHarf = document.createElement("select");
    elementSelectHarf.className = "select-style";

    elementSelectHarf.id = "elementSelectHarf";
    var elementInput = document.createElement("input");
    elementInput.className = "form-control";
    elementInput.placeholder = "Ders adı girin(Zorunlu Değil)";
    var elementSelectKredi = document.createElement("select");
    elementSelectKredi.className = "select-styleKredi";
    elementSelectKredi.id = "elementSelectKredi";
    var labelInfo = document.createElement("label");
    labelInfo.innerHTML = i + 1 + "-";
    var exitButton = document.createElement("button");
    exitButton.className = "btn btn-light";
    exitButton.textContent = "x";
    exitButton.type = "button";
    exitButton.value = i + 1;
    exitButton.id = "exitButton";


    for (var j = 8; j >= 0; j--) {
      var opt = document.createElement('option');
      opt.value = j + 1;
      opt.innerHTML = j + 1 + " kredi";
      elementSelectKredi.appendChild(opt);
      var opt1 = document.createElement('option');
      opt1.value = j / 2;
      opt1.innerHTML = harfNotu[j];
      elementSelectHarf.appendChild(opt1);

    }

    page.appendChild(labelInfo);
    page.appendChild(elementInput);
    page.appendChild(elementSelectHarf);
    page.appendChild(elementSelectKredi);
    page.appendChild(exitButton);
    selectNote.appendChild(page);

    elementSelectHarf.addEventListener('change', function () {
      notHesapla();
    });
    elementSelectKredi.addEventListener('change', function () {
      notHesapla();
    });
    exitButton.addEventListener('click', function () {
      this.parentElement.remove()
      notHesapla();
    });

  }

}

function ayrintiHesapla() {
  document.getElementById("spinners").style.display = "none";
  document.getElementById("ayrintiHesapla").innerHTML = "Yeni ders ekle";
  // var harfNotu = new Array("FF", "FD", "DD", "DC", "CC", "CB", "BB", "BA", "AA");
  var yüzdeDeger = new Array(70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10);

  for (var i = 0; i <= dersSayisi.value - 1; i++) {
    var pageExtendedIn = document.createElement("DIV");
    pageExtendedIn.className = "input-group mb-3 mx-sm-3 mb-2";
    pageExtendedIn.id = "pageExtendedIn";


    var pageExtended = document.createElement("DIV");
    pageExtended.className = "form-group mx-sm-3 mb-2";
    pageExtended.id = "pageExtended";


    var labelInfo = document.createElement("label");
    labelInfo.innerHTML = i + 1 + "-";


    var elementInputPercentLab = document.createElement("input");
    elementInputPercentLab.className = "form-control";
    elementInputPercentLab.type = "text";
    elementInputPercentLab.placeholder = "Lab Notu   ";
    elementInputPercentLab.id = "elementInputPercentLab";
    var elementSelectYüzdeLab = document.createElement("select");
    elementSelectYüzdeLab.className = "select-style1 input-group-append";
    elementSelectYüzdeLab.id = "elementSelectYüzdeLab";
    var elementInputPercentProj = document.createElement("input");
    elementInputPercentProj.className = "form-control";
    elementInputPercentProj.placeholder = "Proje Notu";
    elementInputPercentProj.id = "elementInputPercentProj";
    var elementSelectYüzdeProje = document.createElement("select");
    elementSelectYüzdeProje.className = "select-style1 input-group-append";
    elementSelectYüzdeProje.id = "elementSelectYüzdeProje";
    var pageExtendedOn = document.createElement("DIV");
    pageExtendedOn.className = "input-group mb-3 mx-sm-3 mb-2";
    pageExtendedOn.id = "pageExtendedOn";

    var elementInputPercentVize = document.createElement("input");
    elementInputPercentVize.className = "form-control";
    elementInputPercentVize.placeholder = "Vize notu ";
    elementInputPercentVize.id = "elementInputPercentVize";
    var elementSelectYüzdeVize = document.createElement("select");
    elementSelectYüzdeVize.className = "select-style1 input-group-append";
    elementSelectYüzdeVize.id = "elementSelectYüzdeVize";
    var elementInputPercentFinal = document.createElement("input");
    elementInputPercentFinal.className = "form-control";
    elementInputPercentFinal.placeholder = "Final notu ";
    elementInputPercentFinal.id = "elementInputPercentFinal";
    var elementSelectYüzdeFinal = document.createElement("select");
    elementSelectYüzdeFinal.className = "select-style1 input-group-append";
    elementSelectYüzdeFinal.id = "elementSelectYüzdeFinal";
    var pageExtendedBet = document.createElement("DIV");
    pageExtendedBet.className = "input-group mb-3 mx-sm-3 mb-2";
    pageExtendedBet.id = "pageExtendedBet";

    var harfSonuc = document.createElement("h4");
    harfSonuc.innerHTML = "Harf Notu:";
    var mySpan = document.createElement("span");
    mySpan.className = "badge badge-danger";
    mySpan.innerHTML = "Bekleniyor...";
    mySpan.id="mySpan";
    harfSonuc.appendChild(mySpan);
    var exitButton = document.createElement("button");
    exitButton.className = "btn btn-light";
    exitButton.textContent = "x";
    exitButton.type = "button";
    exitButton.value = i + 1;
    exitButton.id = "exitButton";


    var elementSelectKredi = document.createElement("select");
    elementSelectKredi.className = "select-styleKredi";
    elementSelectKredi.id = "elementSelectKredi";


  
    for (var j = 13; j > 0; j--) {
      var opt = document.createElement('option');
      opt.value = j + 1;
      opt.innerHTML = yüzdeDeger[j - 1];
      var opt1 = document.createElement('option');
      opt1.value = j + 1;
      opt1.innerHTML = yüzdeDeger[j - 1];
      var opt2 = document.createElement('option');
      opt2.value = j + 1;
      opt2.innerHTML = yüzdeDeger[j - 1];
      var opt3 = document.createElement('option');
      opt3.value = j + 1;
      opt3.innerHTML = yüzdeDeger[j - 1];
      var opt4 = document.createElement('option');
      opt4.value = j;
      opt4.innerHTML = j + " kredi";
      elementSelectYüzdeLab.appendChild(opt);
      elementSelectYüzdeProje.appendChild(opt1);
      elementSelectYüzdeVize.appendChild(opt2);
      elementSelectYüzdeFinal.appendChild(opt3);
      elementSelectKredi.appendChild(opt4);
    }

   
    pageExtendedIn.appendChild(labelInfo);
    pageExtendedIn.appendChild(elementInputPercentLab);
    pageExtendedIn.appendChild(elementSelectYüzdeLab);
    pageExtendedIn.appendChild(elementInputPercentProj);
    pageExtendedIn.appendChild(elementSelectYüzdeProje);

    pageExtendedOn.appendChild(elementInputPercentVize);
    pageExtendedOn.appendChild(elementSelectYüzdeVize);
    pageExtendedOn.appendChild(elementInputPercentFinal);
    pageExtendedOn.appendChild(elementSelectYüzdeFinal);
    pageExtendedBet.appendChild(harfSonuc);
    pageExtendedBet.appendChild(elementSelectKredi);
    pageExtendedBet.appendChild(exitButton);
    pageExtended.appendChild(pageExtendedIn);
    pageExtended.appendChild(pageExtendedOn);   
    pageExtended.appendChild(pageExtendedBet);    
    selectNote.appendChild(pageExtended);


    
    elementSelectKredi.addEventListener('change', function () {
      notAyrintiHesapla();
    });
    elementSelectYüzdeLab.addEventListener('change', function () {
      notAyrintiHesapla();
    });
    elementSelectYüzdeVize.addEventListener('change', function () {
      notAyrintiHesapla();
    });
    elementSelectYüzdeProje.addEventListener('change', function () {
      notAyrintiHesapla();
    });
    elementSelectYüzdeFinal.addEventListener('change', function () {
      notAyrintiHesapla();
    });
    exitButton.addEventListener('click', function () {
      this.parentElement.remove()
      notAyrintiHesapla();
    });
   
  }
}

function notHesapla() {

  //console.log(elementSelectHarf[0].options[elementSelectHarf[0].selectedIndex].value,elementSelectKredi[0].options[elementSelectKredi[0].selectedIndex].value);
  var toplamKredi = 0;
  var ortalama = 0;
  for (var i = 0; i <= elementSelectHarf.length - 1; i++) {
    toplamKredi += parseFloat(elementSelectKredi[i].options[elementSelectKredi[i].selectedIndex].value);
    ortalama += parseFloat(elementSelectHarf[i].options[elementSelectHarf[i].selectedIndex].value) * (elementSelectKredi[i].options[elementSelectKredi[i].selectedIndex].value);

  }
  var sonuc = ortalama / toplamKredi;
  notSonuc.innerHTML = sonuc;
  console.log("ders sayısı:", dersSayisi.value, "ort:", ortalama, "tkredi:", toplamKredi, "sonuc:", sonuc);
  progressValue.innerHTML = toplamKredi;

}

function notAyrintiHesapla() {

  //console.log(elementSelectHarf[0].options[elementSelectHarf[0].selectedIndex].value,elementSelectKredi[0].options[elementSelectKredi[0].selectedIndex].value);
 
  var toplamKredi = 0;
  var ortalama = 0;
  var not  =new Array(0);
  for (var i = 0; i <= elementSelectKredi.length - 1; i++) {
    (not[i] = parseFloat(elementInputPercentFinal[i].value) * (elementSelectYüzdeFinal[i].options[elementSelectYüzdeFinal[i].selectedIndex].textContent / 100) +
      (elementInputPercentVize[i].textContent) * (elementSelectYüzdeVize[i].options[elementSelectYüzdeVize[i].selectedIndex].textContent / 100) +
      (elementInputPercentLab[i].textContent) * (elementSelectYüzdeLab[i].options[elementSelectYüzdeLab[i].selectedIndex].textContent / 100) +
      (elementInputPercentProj[i].textContent) * (elementSelectYüzdeProje[i].options[elementSelectYüzdeProje[i].selectedIndex].textContent / 100));
    console.log(not[i], elementSelectYüzdeFinal[i].options[elementSelectYüzdeFinal[i].selectedIndex].textContent);
    mySpan[i].textContent="EE";
    
      if( not[i] > 90 && not[i] < 100)
        mySpan[i].textContent="AA ";        
      if( not[i] > 85 && not[i] < 89)
        mySpan[i].textContent="BA ";        
      if (not[i] > 80 && not[i] < 84)
        mySpan[i].textContent="BB ";             
      if (not[i] > 75 && not[i] < 79)
        mySpan[i].textContent="CB ";        
      if (not[i] > 65 && not[i] < 74)
        mySpan[i].textContent="CC ";        
      if (not[i] > 58 && not[i] < 64)
        mySpan[i].textContent="DC ";        
      if (not[i] > 50 && not[i] < 57)
        mySpan[i].textContent="DD ";        
      if (not[i] > 40 && not[i] < 49)
        mySpan[i].textContent="FD ";        
      if (not[i] < 39)
        mySpan[i].textContent="FF ";       

 
     
  }



   for (var i = 0; i <= elementSelectKredi.length - 1; i++) {
     toplamKredi += parseFloat(elementSelectKredi[i].options[elementSelectKredi[i].selectedIndex].value);
    ortalama += parseFloat(not[i]) * (elementSelectKredi[i].options[elementSelectKredi[i].selectedIndex].value);
    console.log();
    
  }
  var sonuc = ortalama / toplamKredi;
  notSonuc.innerHTML = sonuc;
  console.log("ders sayısı:", dersSayisi.value, "ort:", ortalama, "tkredi:", toplamKredi, "sonuc:", sonuc, "not:", not);
  progressValue.innerHTML = toplamKredi;


}