import Player from "./Player.js";
import Card from "./Card.js";
export default class Game {
    constructor(el) {
        this._el = el;

        this._elDivJoueur = document.querySelector('.player');
        this._elJouer = this._elDivJoueur.querySelector('#jouer');
        this._elStop = document.querySelector('#stop');

        this.init();
    }

    init() {
        this._elJouer.addEventListener('click', function(){
            
            
            
        })
    }

    debutPartie() {

    }

 




    //mets en place les listeners des boutons
 /*    btnBehaviours = () => {
        this._players.forEach((player) => {
        //desactive actions pour joueurs don't ce n'est pas le tour
        player.disableBehaviour();
        //place un listener sur le bouton play de chaque joueur
        player._play.addEventListener("click", () => {
            //actions si tour du joueur actuel
            player.playBehaviour(this._deck._cards);
            this.playerTurn(player);
            this.checkPlayerScore(player);
        });
        //place un listener sur le bouton stop de chaque joueur
        player._stop.addEventListener("click", () => {
            player.stopBehaviour();
            this.playerTurn(player);
            //deplacer joueur a l'arret vers tableau de _donePlaying
            this.removeStopPlayer(player);
        });
        });
    }; */
}