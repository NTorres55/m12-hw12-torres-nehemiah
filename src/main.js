// create parent class
class Desserts {
  constructor (type, calories) {
    this.type = type;
    this.calories = calories;
  }
}
// create subclass and add 2 new properties
class IceCream extends Desserts {
  constructor(types, calories, flavor, scoops) {
    super(types, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }
// create method in subclass
  includeSpoon() {
    if(this.type === 'Vanilla') {
      console.log('Here is your spoon!');
    }
  }
}

const vanillaIceCream = new IceCream('IceCream', 340, 'Vanilla', 3);
  console.log(vanillaIceCream);
