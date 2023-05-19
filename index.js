class Circle {
    constructor(radius) {
        this.radius = radius;
        this.pi = Math.PI
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.pi * this.diameter
    }

    get area() {
        return this.pi * Math.pow(this.radius, 2)
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * this.pi)
    }

    set area(area) {
        this.radius = Math.sqrt(area / this.pi)
    }


}