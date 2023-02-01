function area() {
    const a = 2, b = 3, c = 4;
    let perameters = (a + b + c) / 2;
    let calculatedArea = Math.sqrt(perameters * (perameters - a) * (perameters - b) * (perameters - c))
    document.getElementById('result').innerHTML = `Calculated Area is: ${calculatedArea}`;

}