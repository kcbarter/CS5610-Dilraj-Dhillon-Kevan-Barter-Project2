import React from "react";
import "../css/Rules.css";

export default function Rules(){
    return(
        <p id="rules">
            During the game, you and an AI will take turns (the player always goes first).  On your turn, you will select a square on your opponent’s board.  
            On your opponent’s turn, the AI will randomly select a square on your grid.  If you or your opponent hit a ship, then mark that board with a color and symbol.  
            If you or your opponent miss, then mark a spot on the board to remind the players where on the board they have attempted.  
            The AI will not try to hit the same place more than once and the user should not be able to select the same spot more than once.  
        </p>
    )
}