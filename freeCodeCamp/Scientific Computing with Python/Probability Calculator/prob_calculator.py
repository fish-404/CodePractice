import copy
import random
import collections
# Consider using the modules imported above.

def getHats(hats):
    contents = []
    for key, value in hats.items():
      for i in range(value):
        contents.append(key)
    return contents

def getRandomNums(numRange, n):
  return random.sample(range(0, numRange), n)

def deleteElements(to_delete, contents):
  for offset, index in enumerate(to_delete):
    index -= offset
    del contents[index]
  return contents


class Hat():
  def __init__(self, **kwargs):
    self.contents = getHats(kwargs)

  def compare(self, num):
    if num > len(self.contents):
      return True

  def draw(self, num):
    if self.compare(num):
      self.contents = []
      return self.contents
    else:
      draw = []
      randomNums = getRandomNums(len(self.contents), num)
      for i in randomNums:
        draw.append(self.contents[i])
      deleteElements(randomNums, self.contents)
      return draw

def isSatisfy(expect, result):
  for key, value in expect.items():
    try :
      if result[key] < value:
        return False
    except KeyError:
      return False
  return True

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  satisfy = 0

  for i in range(num_experiments):
    hatCopy = copy.deepcopy(hat)
    if hatCopy.compare(num_balls_drawn):
      return 1
    result = dict(collections.Counter(hatCopy.draw(num_balls_drawn)))
    if isSatisfy(expected_balls, result):
      satisfy += 1

  return satisfy / num_experiments


