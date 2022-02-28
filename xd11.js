function ejecircio_array(){
var nombres = ["nacho","colo","tuso"]
var edades= [21,100,32]
var e = edades[0]
var t = edades[1]
var y= edades[2]
var suma = e+t+y
for(var i=0; i<=nombres.length-1;i++){
console.log(nombres[i])
console.log(edades[i])
console.log(nombres[i]+ " tiene "+edades[i]+" años ")}
console.log("el promedio de los 3 es "+suma/3)


} ejecircio_array()