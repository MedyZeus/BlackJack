import Player from "./Player.js";
import Card from "./Card.js";
export default class Board {
    constructor(el) {
        this._el = el;
        this._elForm = document.querySelector('form');
        this._elChamp = this._elForm.querySelector('.champNB');
        this._elSubmit = this._elForm.querySelector('#submit');
        this._elListJoueurs = document.querySelector('.joueurs');
        this._joueursTab = [];

        this.init();
    }
    
    id = 0;
    
    init() {
        this._elSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            
            this.id = 0;
            this._elListJoueurs.innerHTML = '';
            
            let valeurNB = this._elChamp.value;

            if (!isNaN(valeurNB) && valeurNB > 0) {
                let plyr = { total: 0 };
                
                for (let i = 0; i < valeurNB; i++) {
                    this._joueursTab.push(this.injectPlayer(plyr))
                }
                this.enleverFormulaire()

            }
        }.bind(this))
    }

    /* get pointsTotaux() {
        return this._total;
    } */

    injectPlayer(player) {
        let playerDOM = `
                    <div class="player ${this.id++}">
                        <h3>Joueur ${this.id}</h3>
                        <ul class="cartesList"></ul>
                        <span class="total">Total: 0</span><br>
                        <button id="jouer">Jouer</button>
                        <button id="stop">Stop</button>
                    </div><hr>
        `
        this._elListJoueurs.insertAdjacentHTML('beforeend', playerDOM);

        new Player(this._elListJoueurs.lastElementChild);
    }

    enleverFormulaire() {
        document.querySelector('form').classList.add('hidden');
    }



    
}
