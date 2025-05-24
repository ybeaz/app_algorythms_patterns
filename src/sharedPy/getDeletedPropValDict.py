from src.sharedPy.isDictKey import isDictKey


def getDeletedPropValDict(dictIn: dict, prop: str) -> dict:
  """ Description: Function to delete a key in dict
    Import: from src.shared.getDeletedPropValDict import getDeletedPropValDict
  """
  dictOut = dict(dictIn)
  if isDictKey(dictOut, prop):
    dictOut.pop(prop, None)
  return dictOut
