from typing import Union, Any, Dict, List, Tuple

from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, EXIT
# For debugging: EXIT(comment('EXIT'))


def isFloatParsable(val: Any) -> bool:
  ''' Function to ... 
    Import: from src.shared.isFloatParsable import isFloatParsable
    Test: python -m src.shared.isFloatParsable
  '''
  try:
    float(val)
    return True
  except:
    return False


if __name__ == "__main__":
  import numpy as np

  input = '-0.8333333333333334'
  output = isFloatParsable(input)
  expected = True

  # PRINTP({
  #     'output': output,
  #     'expected': expected,
  #     'floatNum': float(input)
  # }, comment())

  assert output == expected
