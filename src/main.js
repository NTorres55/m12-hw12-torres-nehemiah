// create parent class
class Desserts {
  constructor (type, calories) {
    this.type = type;
    this.calories = calories;
  }
}
class IceCream extends Desserts {
  constructor(types, calories, flavor, scoops) {
    super(types, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }
}
