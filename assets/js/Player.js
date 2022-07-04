import Card from "./Card.js";
import Game from "./Game.js";
export default class Player {
    constructor(el) {
        this._el = el;
        this._elDivJoueur = document.querySelector('.player');
        this._elJouer = this._elDivJoueur.querySelector('#jouer');
        this._elStop = this._elDivJoueur.querySelector('#stop');
        this._cartesList = this._elDivJoueur.querySelector('.cartesList');
        this._total = 0;


        this.init();
    }

    init() {
        this.jouer();
        this.stop();
    }
    
    jouer() {        
        this._elJouer.addEventListener('click', function() {
            let carte = new Card();
            this.injectCard(carte);
            this._total += carte.getValeur();
            this._elDivJoueur.querySelector('.total').innerHTML = 'Total: ' + this._total;
            if (this._total > 21) {
                this._elDivJoueur.querySelector('.total').innerHTML = `Total: ${this._total}<br>Vous avez perdu!`;
                this._elDivJoueur.classList.add('busted');
                this._elDivJoueur.classList.add('stop');
            }
        }.bind(this))
    }

    stop() {
        this._elStop.addEventListener('click', function() {
            this._elDivJoueur.classList.add('stop');
        }.bind(this))
    }

    enleverFormulaire() {
        document.querySelector('form').classList.add('hidden');
    }

    injectCard(carte) {
        let cardDOM = carte.setContenuCarte();
        this._cartesList.insertAdjacentHTML('beforeend', cardDOM);
        new Card(this._cartesList.lastElementChild);
    }
    }


// dom de card