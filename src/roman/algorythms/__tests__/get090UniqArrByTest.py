import unittest
import coverage
from src.sharedPy.getItPrinted import getItPrinted as PRINT, PRINTP, comment
from src.roman.algorythms.get090UniqArrBy import get090UniqArrBy

class TestGetUniqArrBy(unittest.TestCase):
  ''' Description: Function check if num is integer
    Run: python -m src.roman.algorythms.__tests__.get090UniqArrByTest
  '''
  def test_getUniqArrBy(self):
    # Test case 1: Unique objects based on provided properties
    input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 2, 'name': 'Jane', 'age': 30},
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 3, 'name': 'Bob', 'age': 35}
    ]
    expected_output = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 2, 'name': 'Jane', 'age': 30},
        {'id': 3, 'name': 'Bob', 'age': 35}
    ]
    output = get090UniqArrBy(['id', 'name'], input_data)
    self.assertEqual(output, expected_output)
    # PRINT(output, comment())
    # Test case 2: Empty input data
    input_data = []
    expected_output = []
    output = get090UniqArrBy(['id', 'name'], input_data)
    self.assertEqual(output, expected_output)

    # Test case 3: Input data with duplicate objects
    input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 1, 'name': 'John', 'age': 25}
    ]
    expected_output = [
        {'id': 1, 'name': 'John', 'age': 25}
    ]
    output = get090UniqArrBy( ['id', 'name'], input_data)
    self.assertEqual(output, expected_output)

  def test_getUniqArrBy_empty_props(self):
    input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 2, 'name': 'Jane', 'age': 30},
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 3, 'name': 'Bob', 'age': 35}
    ]
    props = []
    expected_output = input_data
    output = get090UniqArrBy(props, input_data)
    self.assertEqual(output, expected_output)

  def test_getUniqArrBy_none_props(self):
    input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 2, 'name': 'Jane', 'age': 30},
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 3, 'name': 'Bob', 'age': 35}
    ]
    props = None
    with self.assertRaises(ValueError):
      get090UniqArrBy(props, input_data) # type: ignore

  def test_getUniqArrBy_invalid_props(self):
    input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 2, 'name': 'Jane', 'age': 30},
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 3, 'name': 'Bob', 'age': 35}
    ]
    props = 'invalid'
    with self.assertRaises(ValueError):
      get090UniqArrBy(props, input_data) # type: ignore

  def test_getUniqArrBy_empty_input_data(self):
    props = ['id', 'name']
    input_data = []
    expected_output = []
    output = get090UniqArrBy(props, input_data)
    self.assertEqual(output, expected_output)

  def test_getUniqArrBy_none_input_data(self):
    props = ['id', 'name']
    input_data = None
    with self.assertRaises(ValueError):
      get090UniqArrBy(props, input_data) # type: ignore

  def test_getUniqArrBy_invalid_input_data(self):
    props = ['id', 'name']
    input_data = 'invalid'
    with self.assertRaises(ValueError):
      get090UniqArrBy(props, input_data) # type: ignore

  def test_getUniqArrBy_nested_objects(self):
    props = ['id', 'name']
    input_data = [
        {'id': 1, 'name': 'John', 'address': {'street': '123 Main St'}},
        {'id': 2, 'name': 'Jane', 'address': {'street': '456 Elm St'}},
        {'id': 1, 'name': 'John', 'address': {'street': '123 Main St'}},
        {'id': 3, 'name': 'Bob', 'address': {'street': '789 Oak St'}}
    ]
    expected_output = [
        {'id': 1, 'name': 'John', 'address': {'street': '123 Main St'}},
        {'id': 2, 'name': 'Jane', 'address': {'street': '456 Elm St'}},
        {'id': 3, 'name': 'Bob', 'address': {'street': '789 Oak St'}}
    ]
    output = get090UniqArrBy(props, input_data)
    self.assertEqual(output, expected_output)
    
  def test_getUniqArrBy_dict_collision(self):
    props = ['id', 'name']
    input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 1, 'name': 'Jane', 'age': 30}
    ]
    expected_output = input_data
    output = get090UniqArrBy(props, input_data)
    self.assertEqual(output, expected_output)

  def test_getUniqArrBy_dict_collision_with_empty_props(self):
      props = []
      input_data = [
          {'id': 1, 'name': 'John', 'age': 25},
          {'id': 1, 'name': 'Jane', 'age': 30}
      ]
      expected_output = input_data
      output = get090UniqArrBy(props, input_data)
      self.assertEqual(output, expected_output)

  def test_getUniqArrBy_dict_collision_with_none_props(self):
      props = None
      input_data = [
          {'id': 1, 'name': 'John', 'age': 25},
          {'id': 1, 'name': 'Jane', 'age': 30}
      ]
      with self.assertRaises(ValueError):
          get090UniqArrBy(props, input_data)  # type: ignore

  def test_getUniqArrBy_dict_collision_with_invalid_props(self):
      props = 'invalid'
      input_data = [
        {'id': 1, 'name': 'John', 'age': 25},
        {'id': 1, 'name': 'Jane', 'age': 30}
      ]
      with self.assertRaises(ValueError):
          get090UniqArrBy(props, input_data)  # type: ignore

if __name__ == '__main__':
    cov = coverage.Coverage(omit=['src/roman/algorythms/get090UniqArrBy.py:1-5']) # seems does not work
    cov.start()
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(unittest.makeSuite(TestGetUniqArrBy))
    cov.stop()
    cov.report(show_missing=True)