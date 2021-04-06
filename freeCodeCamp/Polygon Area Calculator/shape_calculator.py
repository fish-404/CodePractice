class Rectangle:
  def __init__(self, width, height):
    self.set_width(width)
    self.set_height(height)

  def __str__(self):
    return "Rectangle(width={}, height={})".format(self.width, self.height)

  def set_width(self, width):
    self.width = width
  
  def set_height(self, height):
    self.height = height
  
  def get_area(self):
    return self.width * self.height

  def get_perimeter(self):
    return 2*self.width + 2*self.height
  
  def get_diagonal(self):
    return (self.width ** 2 + self.height**2) **.5

  def isValid(self):
    if self.width > 50 or self.height > 50:
      return False
    else:
      return True 

  def get_picture(self):
    if self.isValid():
      return self.height*(self.width*'*'+'\n')
    else:
      return "Too big for picture."

  def get_amount_inside(self, shape):
    return self.width // shape.width * self.height // shape.height

class Square(Rectangle):
  def __init__(self, side):
    super(Square, self).__init__(side, side)

  def __str__(self):
    return "Square(side={})".format(self.width)

  def set_side(self, side):
    self.width = side
    self.height = side

  def set_width(self, side):
    self.set_side(side)
  
  def set_height(self, side):
    self.set_side(side)
