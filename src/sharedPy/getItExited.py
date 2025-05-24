import sys

from src.sharedPy.getDebugLine import getDebugLine as comment


kwargsDefault = {'sign': '🛑'}


def getItExited(comment=comment(), **kwargs) -> None:
  ''' Function to provide system exit-stop while running the code
    Import: from src.shared.getItExited import getItExited as EXIT
    Testing: python -m src.shared.getItExited
  '''

  kwargs = {**kwargsDefault, **kwargs}
  sign = kwargs['sign']
  string = ''.join(['\n', sign, '  ', comment, '\n'])
  sys.exit(string)
