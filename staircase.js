function staircase(n) {
    for(let i = 0; i < n; i++){
        let floor = ''
        for(let j = 1; j < n - i; j++){
            floor = floor + ' ';
        }
        for(let j = 0; j < i + 1; j++){
            floor = floor + '#';
        }
        console.log(floor)
    }
}
  
staircase(6);