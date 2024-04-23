var themen1 = ["Blau", "Rot", "Schwarz","Lila", "Gelb", "Weiß"];
var fragenKatalog1 = [
    "Welche Farbe ist blau?","Welche Farbe ist Blau2","Welche Farbe ist Blau3","Welche Farbe ist Blau4", "Welche Farbe ist Blau5",
    "Welche Farbe ist rot?","Welche Farbe ist rot2","Welche Farbe ist rot3","Welche Farbe ist rot4", "Welche Farbe ist rot5",
    "Welche Farbe ist schwarz?","Welche Farbe ist schwarz2","Welche Farbe ist schwarz3","Welche Farbe ist schwarz4", "Welche Farbe ist schwarz5",
    "Welche Farbe ist lila?","Welche Farbe ist lila2","Welche Farbe ist lila3","Welche Farbe ist lila4", "Welche Farbe ist lila5",
    "Welche Farbe ist gelb?","Welche Farbe ist gelb2","Welche Farbe ist gelb3","Welche Farbe ist gelb4", "Welche Farbe ist gelb5",
    "Welche Farbe ist weiß?","Welche Farbe ist weiß2","Welche Farbe ist weiß3","Welche Farbe ist weiß4", "Welche Farbe ist weiß5"
];


var aktiveThemen = themen1;
var aktiveFragen = fragenKatalog1;

$( document ).ready(function() {

    SetPlayField();
    
});

function SetPlayField(){
    prepareThemenFelder();
    $("#frageFeld").toggle();

    $(".feld").on("click", function () {
        var clickedBtnID = $(this).attr('id'); 
        
        $(this).addClass("frageActive");
        changeFeld();
        showFrage(this.id);
    });
}

function changeFeld(){
    $("#playfield").toggle();
    $("#frageFeld").toggle();
}

function showFrage(feld){
    var thema = parseInt(feld.substring(1,2));
    var value = parseInt(feld.substring(3,4));
    var frage = (thema * 5 + value) - 1;

    $("#thema").html(themen1[thema]);
    $("#frage").html(fragenKatalog1[frage]);
    $("#punkte").html(value*20 + " Punkte");
}

function prepareThemenFelder(){

    for(var i = 0; i < 6; i++){
       $(".kategorie").eq(i).html(aktiveThemen[i]);
    }
}

function addPoints(){
    
}