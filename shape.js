// 1. Create an object called shape that has the type property and a
// getType() method.
// 2. Define a Triangle() constructor function whose prototype is
// shape. Objects created with Triangle() should have three own
// properties—a, b, and c, representing the lengths of the sides of a
// triangle.
// 3. Add a new method to the prototype called getPerimeter().


let Shape = {
    type: "circle",
    getype: function() {
        return this.type;
    }
};

Shape.triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
};

Shape.perimeter = function() {
    return this.a +this.b + this.c;
};

Shape.triangle(4,5,6);

console.log(Shape.perimeter());