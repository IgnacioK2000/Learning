function algo(){
    var array = [3, 93, 100, 12, 24]

    var cont = 0;
    for(var i = 0; i <= array.length; i++,-1){
       if(array[i] === undefined){
           console.log("win")
        }
       else{
          cont= cont + array[i]
        }
    }

    console.log(cont)
}
algo()