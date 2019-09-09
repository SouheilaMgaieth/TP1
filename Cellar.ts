interface Bottle {
    name: string;
    price: any ;
}

class Cellar {
    bottles: Bottle[] = [];
    addBottle(name: string, price: any): void {
        let b: Bottle = {name: name, price:price};
        this.bottles.length++;
        this.bottles[this.bottles.length - 1] = b;
    }

    getBottle(name: string) {
        let i = 0;
        while(i< this.bottles.length)
        {
            if(this.bottles[i].name === name) {
                return [this.bottles[i].name, this.bottles[i].price];
            }
            else
                i++;
        }
        return "Not found";
    }

    getTotalPrice(): number {
        let sum = 0;
        for(let i = 0; i < this.bottles.length; i++) {
            sum = sum + this.bottles[i].price;
        }
        return sum;
    }
}




let c = new Cellar();
c.addBottle("Bonjour", 120000);
c.addBottle("Bonsoir", 100000);
console.log(c.bottles[0].name,c.bottles[0].price);
console.log(c.getBottle("Bonjour"));
console.log(c.getBottle("Coucou"));
console.log(c.getTotalPrice());
