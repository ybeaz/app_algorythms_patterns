def isObjectAttribute(obj: object, attribute: str) -> bool:
  ''' Function to detect whether dictionary has an attribute 
    Import: from src.shared.isObjectAttribute import isObjectAttribute
    Test: python -m src.shared.isObjectAttribute
  '''
  try:
    return hasattr(obj, attribute) and True
  except AttributeError:
    return False
