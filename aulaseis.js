for(i = 0; i < 10; i++){
    console.log(i)
}
let objeto = {casa: 'verde', portao: 'azul', parede:'branca'};
for(let variavel in objeto){
    console.log('obj: ' + variavel + " - cor - "+ objeto[variavel])

}

let objeto2 = [
    {casa: 'azul', portao: 'azul', parede:'preta'},
    {casa: 'roxa', portao: 'azul', parede:'branca'},
    {casa: 'carmim', portao: 'versailes', parede:'cinza'}
]
for(let casa of objeto2){
    console.log(" Mansao - " + casa.casa + " - Portão " + casa.portao)

}