function decode(message) {
  const result = message.split('').reduce((stack, char) => {
         if (char === '(') {
             stack.push([]);
         } else if (char === ')') {
             const reversed = stack.pop().reverse();
             stack[stack.length - 1] = stack[stack.length - 1].concat(reversed);
         } else {
             stack[stack.length - 1].push(char);
         }
         return stack;
     }, [[]]);
 
     return result[0].join('');
 }

 module.exports = findNaughtyStep
