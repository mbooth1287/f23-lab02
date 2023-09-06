class Square implements Shape {
    constructor (private sidelen: number) {}
    computeArea (): number {
        return this.sidelen * this.sidelen
    }
}

function newSquare(sidelen: number): Shape {
    return new Square(sidelen)
}

export { newSquare }