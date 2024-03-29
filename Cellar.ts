interface  Bottle {
    name: string;
    price: number;
}

class Cellar {

    bottles: Bottle[] = [];

    addBottle(name: string, price: number): void {
        var b = {name: name, price: price};
        this.bottles.length++;
        this.bottles[this.bottles.length - 1] = b;
    };

    getBottle(name: string) {
        var i = 0;
        while (i < this.bottles.length) {
            if (this.bottles[i].name === name) {
                return [this.bottles[i].name, this.bottles[i].price];
            } else
                i++;
        }
        return "Not found";
    };

    getTotalPrice(): number {
        var sum = 0;
        for (var i = 0; i < this.bottles.length; i++) {
            sum = sum + this.bottles[i].price;
        }
        return sum;
    };

}
var c = new Cellar();
c.addBottle("Bonjour", 120000);
c.addBottle("Bonsoir", 100000);
console.log(c.bottles[0].name, c.bottles[0].price);
console.log(c.getBottle("Bonjour"));
console.log(c.getBottle("Coucou"));
console.log(c.getTotalPrice());
