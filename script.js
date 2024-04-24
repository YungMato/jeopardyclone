var themen1 = ["Blau", "Rot", "Schwarz","Lila", "Gelb", "Weiß"];
var fragenKatalog1 = [
    "Welche Farbe ist blau?","Welche Farbe ist Blau2","Welche Farbe ist Blau3","Welche Farbe ist Blau4", "Welche Farbe ist Blau5",
    "Welche Farbe ist rot?","Welche Farbe ist rot2","Welche Farbe ist rot3","Welche Farbe ist rot4", "Welche Farbe ist rot5",
    "Welche Farbe ist schwarz?","Welche Farbe ist schwarz2","Welche Farbe ist schwarz3","Welche Farbe ist schwarz4", "Welche Farbe ist schwarz5",
    "Welche Farbe ist lila?","Welche Farbe ist lila2","Welche Farbe ist lila3","Welche Farbe ist lila4", "Welche Farbe ist lila5",
    "Welche Farbe ist gelb?","Welche Farbe ist gelb2","Welche Farbe ist gelb3","Welche Farbe ist gelb4", "Welche Farbe ist gelb5",
    "Welche Farbe ist weiß?","Welche Farbe ist weiß2","Welche Farbe ist weiß3","Welche Farbe ist weiß4", "Welche Farbe ist weiß5"
];

var wrongAudio = new Audio("/sound/wrong.mp3");
var rightAudio = new Audio("/sound/right.mp3")

var aktiveThemen = themen1;
var aktiveFragen = fragenKatalog1;
p1Points = 0;
p2Points = 0;
p3Points = 0;
p4Points = 0;
activeValue = 0;

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

    activeValue = value*20;
}

function prepareThemenFelder(){

    for(var i = 0; i < 6; i++){
       $(".kategorie").eq(i).html(aktiveThemen[i]);
    }
}

function addPoints(richtig){

    var player = $("#playerActive").parent()[0].id;

    if(richtig == true){
        rightAudio.play();

        switch(player){
            case "p1":
                p1Points += activeValue;
                $("#playerActive").parent().children().eq(1).html(p1Points);
                break;
            case "p2":
                p2Points += activeValue;
                $("#playerActive").parent().children().eq(1).html(p2Points);
                break;
            case "p3":
                p3Points += activeValue;
                $("#playerActive").parent().children().eq(1).html(p3Points);
                break;
            case "p4":
                p4Points += activeValue;
                $("#playerActive").parent().children().eq(1).html(p4Points);
                break;
            default:
                break;
        }
    } else {
        wrongAudio.play();
    }

    nextPlayer(player.substring(1,2));
    changeFeld();
}

function nextPlayer(curPlayer){
    console.log(curPlayer);
    $("#playerActive").removeAttr("id");

    if(curPlayer == 4) curPlayer = 0;
    $("#players").children().eq(curPlayer).children().eq(0).attr("id","playerActive");

}