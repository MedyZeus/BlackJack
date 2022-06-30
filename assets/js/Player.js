import Card from "./Card.js";
import Game from "./Game.js";
export default class Player extends Game{
    constructor(carte) {
        super();
        this._carte = carte;
        this._total = 0;
        this._id = 0;
        /* this._elDivJoueur = document.querySelector('.player');
        this._elJouer = this._elDivJoueur.querySelector('#jouer');
        this._elStop = document.querySelector('#stop'); */ 

        this.init();
    }


}


// dom de card