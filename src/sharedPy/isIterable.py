
def isIterable(obj):
  """ Description: Function to check if obj iterable
    Import from src.shared.isIterable import isIterable
  """
  try:
    obj = iter(obj)
    return True
  except:
    # raise TypeError("obj is not iterable")
    return False
