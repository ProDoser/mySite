var t = [];
var winner ="";

function ai() {
    var id = Math.floor(Math.random() * 9); /* AI decides which cell to choose */
    t[id] ? ai() : move(id, 'ai'); /* AI makes a move */
}

function player(id){

    move(id, 'player');
}

function checkEnd() {

    /*check conditions when game is over */
    if (t[0]=='player' && t[1]=='player' && t[2]=='player' || t[3]=='player' && t[4]=='player' && t[5]=='player'){
        winner = "Well done! You win!"; return true;
    }
    if (t[6]=='player' && t[7]=='player' && t[8]=='player' || t[0]=='player' && t[3]=='player' && t[6]=='player'){
        winner = "Well done! You win!"; return true;
    }
    if (t[1]=='player' && t[4]=='player' && t[7]=='player' || t[2]=='player' && t[5]=='player' && t[8]=='player'){
        winner = "Well done! You win!"; return true;
    }
    if (t[0]=='player' && t[4]=='player' && t[8]=='player' || t[6]=='player' && t[4]=='player' && t[2]=='player'){
        winner = "Well done! You win!"; return true;
    }
    if (t[0]=='ai' && t[1]=='ai' && t[2]=='ai' || t[3]=='ai' && t[4]=='ai' && t[5]=='ai'){
        winner = "Computer win!"; return true;
    }
    if (t[6]=='ai' && t[7]=='ai' && t[8]=='ai' || t[0]=='ai' && t[3]=='ai' && t[6]=='ai'){
        winner = "Computer win!"; return true;
    }
    if (t[1]=='ai' && t[4]=='ai' && t[7]=='ai' || t[2]=='ai' && t[5]=='ai' && t[8]=='ai'){
        winner = "Computer win!"; return true;
    }
    if (t[0]=='ai' && t[4]=='ai' && t[8]=='ai' || t[6]=='ai' && t[4]=='ai' && t[2]=='ai'){
        winner = "Computer win!"; return true;
    }
    if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]){
        winner = "Tie... Try once again!";
        return true;
    }
}

function move(id, role) {
    if(t[id]) return false;
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role; /*player's move */
    !checkEnd() ? (role == 'player') ? ai() : null : reset(); /* check if there is a winner or not*/
}

function reset() {
    alert(winner);
    for (var i=0; i< t.length; i++){
        document.getElementById(i).className = 'cell'; /*set def class to each cell*/
    }
    t = [];} /*clear the array and restart the game! */


