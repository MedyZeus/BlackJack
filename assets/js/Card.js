export default class Card {
    constructor() {
        this.init();
        let i = Math.floor(Math.random() * 13);
        //console.log(i);
        this._numero = this.nums[i];
        this._type = this.types[i % 4];
        this._valeur = this.valeurs[i];
    }

    types = ['Pique', 'Carreau', 'Trèfle', 'Cœur'];
    nums = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    valeurs = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    
    init() {
        this.setContenuCarte();
        this.getValeur();
    }

    setContenuCarte() {
        return `<li>${this._numero} de ${this._type}</li>`;
    }

    getValeur() {
        return this._valeur;
    }

    
/*
    getValeur() {
        for (let i = 0; i < this._nums.length; i++) {
            switch (this._nums[i]) {
                case 'Ace':
                    this._total += 11;
                    break;
                case 'Valet':
                    this._total += 10;
                    break;
                case 'Dame':
                    this._total += 10;
                    break;
                case 'Roi':
                    this._total += 10;
                    break;
                default:
                    this._total += this._nums[i];
                    break;}
                }
            return this._total;}
*/
}