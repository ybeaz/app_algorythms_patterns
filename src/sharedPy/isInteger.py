
def isInteger(value):
  """ Description: Function to check if num is integer
    Import: from src.shared.isInteger import isInteger
  """

  try:
    return value - int(value) == 0
  except:
    return False
