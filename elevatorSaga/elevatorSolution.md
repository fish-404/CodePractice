
# Solution 

Wating to compelete...

## Some self test information
* stopped_at_floor event is triggered before floor_button_pressed, so you decide which floor should be next here.

## For Each elevator/Floor
### Elevator
Each elevator has four events:
* idel: Triggered when elevator has no task
* floor_button_pressed: Triggered when some press the button inside elevator
* passing_floor: Triggered when elevator pass a floor
* stopped_at_floor: Triggered when elevator stop at a floor
#### idle

#### floor_button_pressed
Q1: How to insert this floor? Should every floor be insert into queue? 
A1: Insert all to queue. 

Q2: How to decide which floor should be next?


#### passing_floor
T1: You can get elevator direction here by get indicator.
#### stopped_at_floor
T1: Change indicator when elevator at top and bottom floor.

Q1: If the elevator is empty, what should you do? How to detect this?
A1.1: If pressed floor is empty, regard elevator is empty. 
A1.2: If elevator is empty, both `up` and `down` indicator should be activite.

Q2: How do you decide next floor to go?
A2: Maybe not decide here.



### Floor
Each floor has two events, up_button_pressed and down_button_pressed. We just need analyse one since they are similar.
#### up_button_pressed / down_button_pressed
Q1: How do you add the floor to destination?
A1: You must add all floor pressed to destination queue, or you may missing one. The pressed status may only once. 
