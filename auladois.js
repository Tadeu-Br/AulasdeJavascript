const string = ""
const number = 10
const boolean = true
const object = { titulo: "Entadas", modulo: "Javascript"}
const array = [{fruta: "banana"},{fruta: "quiabo"}]

console.log(typeof array)
console.log(array.length)
console.log(array[0].fruta)
console.log(array[1].fruta)


array.forEach(element => {
    console.log(element.fruta)
})