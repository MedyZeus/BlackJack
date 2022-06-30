export default class Card {
    constructor(el) {
        this._el = el;
        this._types = ['Pique', 'Carreau', 'Trèfle', 'Cœur '];
        this._nums = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        this._cartesTab = [];
        

        this.init();
    }

    init() {
        this.getAllCards();
        this.getOneCard();
    }

    getAllCards() {
        for (let i = 0; i < this._types.length; i++) {
            for (let j = 0; j < this._nums.length; j++) {
                this._cartesTab.push(this._types[i] + '-' + this._nums[j]);
            }
        }
    }

    getOneCard() {
        for (let i = 0, c = this._cartesTab.length; i < c; i++) {
            let j = Math.floor(Math.random() * c)
            let temp = this._cartesTab[i];
            this._cartesTab[i] = this._cartesTab[j];
            this._cartesTab[j] = temp
        }
        /* console.log(this._cartesTab); */
    }

    }


