from typing import TypedDict, Union, Any, Dict, List, Tuple
from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, comment

def getSum(a: int, b: int) -> int:
  """Return the sum of two integers."""
  return a + b


# Examples of Ternary Operators and shorthands:

# Condition:
# diff = my_list[i] - my_list[i - 1] if i - 1 >= 0 else 0

# List interation:
# numbers = [1, -2, 3, -4, 5]
# positives = [num if num > 0 else 0 for num in numbers]

# Dictionary iteration
# original_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
# even_dict = {key: value for key, value in original_dict.items() if value % 2 == 0}

# Lambda function:
# getSumLambda = lambda a, b: a + b

# JSON.stringify(...) > json.dumps(...)
# JSON.parse(...) > json.loads(...)