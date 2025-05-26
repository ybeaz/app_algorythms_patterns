import unittest
import coverage
from src.roman.algorythms.get120GreatestDivisorTwoNumbers import get120GreatestDivisorTwoNumbers

class TestGet120GreatestDivisorTwoNumbers(unittest.TestCase):
    ''' Description: Function check if num is integer
      Run: python -m src.roman.algorythms.__tests__.get120GreatestDivisorTwoNumbersTest
    '''
    def test_greatest_common_divisor(self):
        self.assertEqual(get120GreatestDivisorTwoNumbers(12, 18), 6)
        self.assertEqual(get120GreatestDivisorTwoNumbers(24, 30), 6)
        self.assertEqual(get120GreatestDivisorTwoNumbers(48, 18), 6)

    def test_coprime_numbers(self):
        self.assertEqual(get120GreatestDivisorTwoNumbers(11, 13), 1)
        self.assertEqual(get120GreatestDivisorTwoNumbers(17, 23), 1)

    def test_multiple_of_each_other(self):
        self.assertEqual(get120GreatestDivisorTwoNumbers(12, 24), 12)
        self.assertEqual(get120GreatestDivisorTwoNumbers(18, 36), 18)

    def test_one_of_the_numbers_is_one(self):
        self.assertEqual(get120GreatestDivisorTwoNumbers(1, 12), 1)
        self.assertEqual(get120GreatestDivisorTwoNumbers(12, 1), 1)

    def test_one_of_the_numbers_is_zero(self):
        self.assertEqual(get120GreatestDivisorTwoNumbers(0, 12), 1)
        self.assertEqual(get120GreatestDivisorTwoNumbers(12, 0), 1)

    def test_non_integer_input(self):
        with self.assertRaises(ValueError):
            get120GreatestDivisorTwoNumbers(12, 3.5) # type: ignore
        with self.assertRaises(ValueError):
            get120GreatestDivisorTwoNumbers(3.5, 12) # type: ignore

if __name__ == '__main__':
    cov = coverage.Coverage(omit=['src/roman/algorythms/get120GreatestDivisorTwoNumbers.py:1-5']) # seems does not work
    cov.start()
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(unittest.makeSuite(TestGet120GreatestDivisorTwoNumbers))
    cov.stop()
    cov.report(show_missing=True)