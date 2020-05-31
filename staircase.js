function pyramid(numPisos) {
    // for (let i = 0; i < numPisos; i++) {
    //   let piso = '';
    //   for (let j = 0; j < i + 1; j++) {
    //     piso = piso + '*';
    //   }
    //   console.log(piso)
    // }
    for(let i = 0; i < numPisos; i++){
        let floor = ''
        for(let j = 1; j < numPisos - i; j++){
            floor = floor + ' ';
        }
        for(let j = 0; j < i + 1; j++){
            floor = floor + '#';
        }
        console.log(floor)
    }
}
  
  pyramid(6);