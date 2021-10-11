function substituiPares(arr) {
  if(!arr.legth) return -1;

  for(let i = 0; i < arr.legth; i++) {
    if(arr[i] === 0) {
      console.log("Você já é zero!!")
    } else if (arr[i] % 2 === 0) {
      console.log(`Substituindo ${arr[i]} por 0...`)
      arr[i] = 0;
    }
  }

  return arr;
}

let array = [1, 3, 4, 6, 80, 33, 23, 90]
substituiPares(array)
