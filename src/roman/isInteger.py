from typing import TypedDict, Union, Any, Dict, List, Tuple
from src.sharedPy.getItPrinted import getItPrinted as PRINT

def isInteger(**kwargs) -> bool:
  ''' Description: Function check if num is integer
    Import: from src.roman.isInteger import isInteger
    Run: python -m src.roman.isInteger
  '''
  try:
    return isinstance(kwargs['num'], (float, int)) and kwargs['num'] % 1 == 0
  except:
    return False


''' Testing and debugging '''
if __name__ == "__main__":
  import numpy as np
  
  kwargsList = [
    {'num':0, 'expected': True},
    {'num': 1, 'expected': True},
    {'num': 123, 'expected': True},
    {'num': 123.0, 'expected': True},
    {'num': 123.1, 'expected': False}
  ]
  
  for kwargs in kwargsList:
    if not isinstance(kwargs, dict):
      raise ValueError("kwargs must be a dictionary")
    output: bool = isInteger(**kwargs)
    num = kwargs['num']
    expected = kwargs['expected']
    # PRINT({'num': num, 'expected': expected, 'output': output}, 'isInteger')
    np.testing.assert_equal(output,
                            expected,
                            verbose=True)
