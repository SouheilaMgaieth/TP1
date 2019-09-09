var Cellar = /** @class */ (function () {
    function Cellar() {
        this.bottles = [];
    }
    Cellar.prototype.addBottle = function (name, price) {
        var b = { name: name, price: price };
        this.bottles.length++;
        this.bottles[this.bottles.length - 1] = b;
    };
    Cellar.prototype.getBottle = function (name) {
        var i = 0;
        while (i < this.bottles.length) {
            if (this.bottles[i].name === name) {
                return [this.bottles[i].name, this.bottles[i].price];
            }
            else
                i++;
        }
        return "Not found";
    };
    Cellar.prototype.getTotalPrice = function () {
        var sum = 0;
        for (var i = 0; i < this.bottles.length; i++) {
            sum = sum + this.bottles[i].price;
        }
        return sum;
    };
    return Cellar;
}());
var c = new Cellar();
c.addBottle("Bonjour", 120000);
c.addBottle("Bonsoir", 100000);
console.log(c.bottles[0].name, c.bottles[0].price);
console.log(c.getBottle("Bonjour"));
console.log(c.getBottle("Coucou"));
console.log(c.getTotalPrice());
