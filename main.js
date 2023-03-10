import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";


import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";


const $root = document.querySelector("#root");


$root.insertAdjacentHTML (
    "beforeend", 
    `
     ${ScoreBoard()}
     ${BoardGame(6)}  
    `
);