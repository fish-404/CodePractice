def to24Format(start):
  newTime = start[:-2].split(':')
  newTime = [int(x.strip()) for x in newTime]

  if start[-2:] == "PM":
    newTime[0] += 12

  return newTime

def getDaysString(days):
  if days == 1:
    return " (next day)"
  elif days > 1:
    return " ({} days later)".format(days)
  else:
    return ""

def handleHour(hour):
  if hour % 12 == 0:
    return 12
  else:
    return hour % 12

def handleAP(hour):
  if hour % 24 < 12:
    return " AM"
  else:
    return " PM"

def to12Format(newTime):
  result = ""

  result += "{}:{:0>2d}".format(handleHour(newTime[0]), newTime[1])
  
  if newTime[0] % 24 < 12: 
    result += " AM"
  else:
    result += " PM"

  return result

def handleDays(days, startDay):
  dayName = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  day = dayName[(dayName.index(startDay.lower()) + days) % 7]

  return day[0].upper() + day[1:]

def handelResult(newTime, *startDay):
  result = ""

  result += to12Format(newTime)

  days = newTime[0] // 24

  if startDay[0] != ():
    result += ", " + handleDays(days, str(startDay)[3:-5])

  return result + getDaysString(days)


def handleAdd(start, duration, *startDay):
  newTime = to24Format(start)
  duration = duration.split(':')
  duration = [int(x) for x in duration]
  
  newTime[0] += duration[0]
  newTime[1] += duration[1]

  if newTime[1] >= 60:
    newTime[1] -= 60
    newTime[0] += 1

  return handelResult(newTime, *startDay)

def add_time(start, duration, *startDay):
  return handleAdd(start, duration, startDay)
