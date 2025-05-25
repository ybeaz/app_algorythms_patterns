from typing import TypedDict, Union, Any, Dict, List, Tuple
from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, comment

def getUniqArr(**kwargs) -> list:
  ''' Description: Function check if num is integer
    Import: from src.roman.getUniqArr import getUniqArr
    Run: python -m src.roman.getUniqArr
  '''
  if isinstance(kwargs['arr'], list) != True: raise ValueError('Input is not an array')
  if len(kwargs['arr']) == 0: return kwargs['arr']
  obj = { key: True for key in kwargs['arr']}
  output = [key for key in obj]
  return output


''' Testing and debugging '''
if __name__ == "__main__":
  import numpy as np
  
  kwargsList = [
    # {'arr': None, 'expected': None},
    {'arr': [0, None, None, 0, -1, '', '', -1], 'expected': [0, None, -1, '']},
    {'arr': [1, 2, 1, 'min', 'max', 'max', 'min'], 'expected': [1, 2, 'min', 'max']},
  ]
  
  for kwargs in kwargsList:
    if not isinstance(kwargs, dict):
      raise ValueError("kwargs must be a dictionary")
    output: list = getUniqArr(**kwargs)
    num = kwargs['arr']
    expected = kwargs['expected']
    # PRINT({'arr': num, 'expected': expected, 'output': output}, comment())
    np.testing.assert_equal(output,
                            expected,
                            verbose=True)


