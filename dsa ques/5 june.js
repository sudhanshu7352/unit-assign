//js classes
//Create a Polygon class that has the following properties:

// A constructor that takes an array of integer values describing the lengths of the polygon's sides.
// A perimeter() method that returns the polygon's perimeter.

class Polygon{
    constructor(side){
        this.side =side
    }
    perimeter(){
        let sum=0
        for(let i=0;i<this.side.length;i++){
            sum +=this.side[i]
        }
        return sum
    }
}
//class inheritance
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
 Rectangle.prototype.area=function(){
     return this.w*this.h
 }
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
  class Square extends Rectangle{
      constructor(a){
          super(a,a)
      }
  }
  //throw error
  /*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a>0){
        return "YES"
    }
    else if(a===0){
        throw new Error("Zero Error")
    }
    else if(a<0){
        throw new Error("Negative Error")
    }
}
