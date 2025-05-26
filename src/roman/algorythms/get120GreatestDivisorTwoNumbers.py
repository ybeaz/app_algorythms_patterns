from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, comment

def get120GreatestDivisorTwoNumbers(a: int, b: int) -> int:
  ''' Description: Function return the greatest common divisor
    Import: from src.roman.algorythms.get120GreatestDivisorTwoNumbers import get120GreatestDivisorTwoNumbers
    Run: python -m src.roman.algorythms.get120GreatestDivisorTwoNumbers
  '''
  if a % 1 != 0 or b % 1 != 0:
    raise ValueError('Input is not an integer')
  
  numMin = b if a > b else a
  numMax = max(a, b)
  output = 1
  
  for index in reversed(range(1, numMin + 1)):
    if numMin / index % 1 == 0 and numMax / index % 1 == 0:
      output = index
      break
  
  return output

''' Testing and debugging '''
if __name__ == "__main__":
  output = get120GreatestDivisorTwoNumbers(6, 4)
  PRINT(output, comment())