from typing import TypedDict, Union, Any, Dict, List, Tuple
import json
from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, comment

def get090UniqArrBy(props: List, arr: List):
  if(isinstance(arr, list) != True):
    raise ValueError("arr: must be a List")
  if(isinstance(props, list) != True):
    raise ValueError("props: must be a List")
  if(props == []): return arr
  if(arr == []): return []
  dict: Dict = {}
  for _, item in enumerate(arr):
    collage = '_'.join([json.dumps(item[key]) for _, key in enumerate(props)])
    if not collage in dict:
      dict[collage] = item
  return [dict[key] for key in dict]

        # input_data = [
        #     {'id': 1, 'name': 'John', 'age': 25},
        #     {'id': 2, 'name': 'Jane', 'age': 30},
        #     {'id': 1, 'name': 'John', 'age': 25},
        #     {'id': 3, 'name': 'Bob', 'age': 35}
        # ]