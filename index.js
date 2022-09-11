// Your code here
class Polygon{
    constructor(arrayofintegers){
        this.arrayofintegers = arrayofintegers
    }

    get countSides(){
       return this.arrayofintegers.length
    }

    get perimeter(){
       return this.arrayofintegers.reduce((prev, cur) => prev + cur);
    }
}

class Triangle extends Polygon{

    get isValid(){
        if (!Array.isArray(this.arrayofintegers)) return;
        if (this.arrayofintegers.length !== 3) return;
        let side1 = this.arrayofintegers[0]
        let side2 = this.arrayofintegers[1]
        let side3 = this.arrayofintegers[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {

    get isValid() {
      if (!Array.isArray(this.arrayofintegers)) return;
      if (this.arrayofintegers.length !== 4) return;
      let side1 = this.arrayofintegers[0]
      let side2 = this.arrayofintegers[1]
      let side3 = this.arrayofintegers[2]
      let side4 = this.arrayofintegers[3]
      return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
  
    get area() {
      if (!Array.isArray(this.arrayofintegers)) return;
      if (this.arrayofintegers.length !== 4) return;
      return this.arrayofintegers[0] * this.arrayofintegers[0]
    }
  }