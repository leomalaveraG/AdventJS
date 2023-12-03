function findFirstRepeated(gifts) {
  let nums = new Set()
  for(let i =0; i<=gifts.length; i++){
      const num = gifts[i];
        if (nums.has(num)) {
            return num;
        }
        nums.add(num)
  
  }
  
  return -1
}

// Caso de prueba 1: Números repetidos, devuelve el primer número repetido
const testCase1 = [1, 2, 3, 4, 5, 2, 6, 7];
console.log(findFirstRepeatedNumber(testCase1)); // Salida esperada: 2

// Caso de prueba 2: Sin números repetidos, devuelve -1
const testCase2 = [11, 22, 33, 44, 55];
console.log(findFirstRepeatedNumber(testCase2)); // Salida esperada: -1

// Caso de prueba 3: Números repetidos al final de la lista, devuelve el primer número repetido
const testCase3 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2];
console.log(findFirstRepeatedNumber(testCase3)); // Salida esperada: 2

// Caso de prueba 4: Lista vacía, devuelve -1
const testCase4 = [];
console.log(findFirstRepeatedNumber(testCase4)); // Salida esperada: -1

// Caso de prueba 5: Números repetidos al principio de la lista, devuelve el primer número repetido
const testCase5 = [5, 5, 3, 4, 2, 1];
console.log(findFirstRepeatedNumber(testCase5)); // Salida esperada: 5