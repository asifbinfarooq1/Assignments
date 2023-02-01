function equation() {

    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const c = Number(document.getElementById("c").value);
    dicreaminent = (b * b) - (4 * a * c)
    if (dicreaminent > 0) {
        const x1 = (-b + Math.sqrt(dicreaminent)) / (2 * a);
        const x2 = (-b - Math.sqrt(dicreaminent)) / (2 * a);
        document.getElementById("result").innerHTML = (`The solutions are x1= ${x1} and x2= ${x2}`)
    }
    else if (dicreaminent === 0) {
        const x = -b / (2 * a);
        document.getElementById("result").innerHTML = (`The solution is x = ${x}`)
    }
    else {
        document.getElementById("result").innerHTML = ("Solution is not available")
    }
}