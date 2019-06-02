var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();

var szam = Math.floor(Math.random() * 100) + 1;
var tippdb = 0;
var tippmin = 0;
var tippmax = 100;
var s = "\n", s1 = " és ", s2 = " közötti", s3 = ". tipp = ";

document.getElementById("btn1").onclick = modosit;
document.getElementById("btn2").onclick = reset;

function modosit() {
    tippdb++;
    var x = document.myForm.tippsz.value;
    if (x <= 0 || x >= 100) {
        document.myForm.leiras.value = tippdb + s3 + x + s + "A keresett szám 0 és 100 között van!!";
    } else if (x < szam) {
        if (tippmin < x) {
            tippmin = x;
        }
        document.myForm.gensz.value = tippmin + s1 + tippmax + s2;
        document.myForm.leiras.value = tippdb + s3 + x + s + "A tipp kisebb, mint a generált szám.";
    } else if (x > szam) {
        if (tippmax > x) {
            tippmax = x;
        }
        document.myForm.gensz.value = tippmin + s1 + tippmax + s2;
        document.myForm.leiras.value = tippdb + s3 + x + s + "A tipp nagyobb, mint a gondolt szám";
    } else if (x == szam) {
        document.myForm.gensz.value = x;
        document.myForm.leiras.value = tippdb + s3 + x + s + "Gratulálok eltaláltad!";
    }
}

function reset() {
    tippdb = 0;
    tippmin = 0;
    tippmax = 100;
    document.myForm.gensz.value = "0 és 100 közötti";
    document.myForm.tippsz.value = "";
    document.myForm.leiras.value = "";
    szam = Math.floor(Math.random() * 100) + 1;
}