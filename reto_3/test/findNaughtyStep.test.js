const findNaughtyStep = require("../findNaughtyStep");


  describe('findNaughtyStep', () => {
    test('empty sequences', () => {
      expect(findNaughtyStep('', '')).toBe('');
    });
  
    test('additional step at the end', () => {
      expect(findNaughtyStep('abcd', 'abcde')).toBe('e');
    });
  
    test('additional step in the middle', () => {
      expect(findNaughtyStep('stepfor', 'stepor')).toBe('f');
    });
  
    test('no difference', () => {
      expect(findNaughtyStep('abcde', 'abcde')).toBe('');
    });
  
    test('additional step in the middle with numbers', () => {
      expect(findNaughtyStep('123', '12X3')).toBe('X');
    });
  

  });
