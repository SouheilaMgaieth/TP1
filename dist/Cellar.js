"use strict";
var Cellar = /** @class */ (function () {
    function Cellar() {
        this.bottles = [];
    }
    Cellar.prototype.addBottle = function (name, price) {
        var b = { name: name, price: price };
        this.bottles.length++;
        this.bottles[this.bottles.length - 1] = b;
    };
    return Cellar;
}());
var c = new Cellar();
c.addBottle("Bonjour", 120000);
console.log(c.bottles[0].name, c.bottles[0].price);
