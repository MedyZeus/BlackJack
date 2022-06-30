import Card from "./Card.js";
import Game from "./Game.js";
export default class Player extends Game{
    constructor(carte) {
        super();
        this._carte = carte;
        this._total = 0;
        this._id = 0;
        this._cardsTab = [];
        this._elDivJoueur = document.querySelector('.player');
        this._elJouer = this._elDivJoueur.querySelector('#jouer');
        this._elStop = document.querySelector('#stop');
        this._cartesList = this._elDivJoueur.querySelector('.cartesList');
        this._types = ['Pique', 'Carreau', 'Trèfle', 'Cœur'];
        this._nums = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

        this.init();
    }

    init() {
        this._elJouer.addEventListener('click', function() {
            let carte = { numero: this._nums[Math.floor(Math.random() * 13) + 1], 
                type: this._types[Math.floor(Math.random() * 4)]};
            this.injectCard(carte);
            this._total += carte.numero;
            this._elDivJoueur.querySelector('.total').innerHTML = `Total: ${this._total}`;
        }.bind(this))
    }

    /* get pointsTotaux() {
        return this._total;
    } */

    enleverFormulaire() {
        document.querySelector('form').classList.add('hidden');
    }

    injectCard(carte) {
        let cardDOM = `<li>${carte.numero} de ${carte.type}</li>`;
        this._cartesList.insertAdjacentHTML('beforeend', cardDOM);
        new Card(this._cartesList.lastElementChild);
    }

    }


// dom de card