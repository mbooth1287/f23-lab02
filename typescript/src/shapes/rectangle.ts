function Rectangle(width: number, height: number): Shape {
    return {computeArea: function ()  {
        return width * height
    }}
}

export { Rectangle }