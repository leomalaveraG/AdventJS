function manufacture(gifts, materials) {
  return gifts.filter(gift =>
   gift.split('').every(material => materials.includes(material))

 );
}

// Ejemplos de uso
const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesap';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]
