titleLen = 30

def __str__(string):
    return string


def handleDescription(*description):
    if description[0] == ():
        return ""
    else:
        return str(description[0])[2:-3]


class Category:
    def __str__(self):
        result = self.name.center(titleLen, '*') + '\n'
        for item in self.ledger:
            result += "{0:<23}{1:>7.2f}".format(item['description'][:23],
                                                item['amount']) + '\n'
        result += "Total: " + str(self.fund)

        return result

    def __init__(self, category):
        self.name = category
        self.ledger = []
        self.fund = 0
        self.spent = 0

    def check_funds(self, amount):
      if amount > self.fund:
        return False
      else:
        return True

    def deposit(self, amount, *description):
        self.ledger.append({
          'amount': amount
          , 'description': handleDescription(description)
        })
        self.fund += amount

    def withdraw(self, amount, *description):
        if self.check_funds(amount):
            self.ledger.append({
              'amount': -amount
              , 'description': handleDescription(description)
            })
            self.fund -= amount
            self.spent += amount
            return True
        else:
          return False

    def get_balance(self):
        return self.fund

    def transfer(self, amount, category):
        if self.check_funds(amount):
            self.withdraw(amount, "Transfer to " + category.name)
            category.deposit(amount, "Transfer from " + self.name)
            return True
        else:
            return False

def createEmptyChart():
  chart = []
  chart.append("Percentage spent by category")
  for i in range(100, -10, -10):
    chart.append("{:>3d}".format(i)+"| ")
  return chart

def addChartBar(categories):
  total = 0
  chart = createEmptyChart()
  for item in categories: 
    total += item.spent
  for item in categories:
    percent = int(item.spent/total*10)
    for i in range(10, -1, -1):
      if percent < i:
        chart[11-i] += " " * 3
      else:
        chart[11-i] += "o  "
  chart.append(" "*4 +"-"*(len(categories)*3+1))
  return chart

def addCategoriesName(categories):
  nameLens = [len(x.name) for x in categories]
  maxLen = max(nameLens)
  names = [" "*5]*maxLen
  for i in range(len(categories)):
    for j in range(maxLen):
      if j < nameLens[i]:
        names[j] += categories[i].name[j] + " " * 2
      else:
        names[j] += " " * 3
  return names

def create_spend_chart(categories):
  finalChart = addChartBar(categories)
  finalChart.extend(addCategoriesName(categories))
  return '\n'.join(finalChart)
