from typing import TypedDict, Union, Any, Dict, List, Tuple
from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, comment
from src.roman.algorythms.is060Integer import is060Integer
import math

def is070Prime(**kwargs) -> bool:
  ''' Description: Function check if num is prime
    Import: from src.roman.algorythms.isPrime import isPrime
    Run: python -m src.roman.algorythms.isPrime
  '''
  try:
    if kwargs['num'] <= 1:
      return False
    
    half = math.ceil(kwargs['num'] / 2)
    for item in range(2, half):
      if is060Integer(num=kwargs['num']/item):
        return False
    
    return isinstance(kwargs['num'], (int))
  except:
    return False


''' Testing and debugging '''
if __name__ == "__main__":
  import numpy as np
  
  kwargsList = [
    {'num': 0, 'expected': False},
    {'num': 1, 'expected': False},
    {'num': 6, 'expected': False},
    {'num': 9, 'expected': False},
    
    {'num': 2, 'expected': True},
    {'num': 3, 'expected': True},
    {'num': 5, 'expected': True},
    {'num': 7, 'expected': True},
    {'num': 11, 'expected': True}
  ]
  
  for kwargs in kwargsList:
    if not isinstance(kwargs, dict):
      raise ValueError("kwargs must be a dictionary")
    output: bool = is070Prime(**kwargs)
    num = kwargs['num']
    expected = kwargs['expected']
    # PRINT({'num': num, 'expected': expected, 'output': output}, 'isPrime')
    np.testing.assert_equal(output,
                            expected,
                            verbose=True)
