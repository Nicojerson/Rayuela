import fs from "fs";

let listaordenada = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136];
let lectura = []

for (let i = 0; i<listaordenada.length; i ++){
    
    let lecturadei = fs.readFileSync ("parte" + listaordenada[i] + ".txt", "utf-8")
    lectura.push (lecturadei)
}
fs.writeFileSync ("TextoCompleto.txt", JSON.stringify(lectura))

for (let a=0; a<listaordenada.length; a ++){
fs.appendFileSync ("orden.txt", listaordenada[a] + "\n") // Puse append en vez de write porque la primera vez que lo hice con write solo me ponia el ultimo valor del array, porque el write sobreescribia los otros valores. Por eso pongo append
}
