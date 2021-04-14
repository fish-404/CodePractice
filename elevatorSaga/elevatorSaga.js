/*
 * Solution to Elevator Saga Game
 * Game Link: http://play.elevatorsaga.com/
 * Status: Pending
 * Problem: A NaN is pushed into queue
 */

{
    init: function(elevators, floors) {
        // Whenever the elevator is idle (has no more queued destinations) ...
        for (let elevator of elevators) {
            elevator.destinationQueue = [];
            
            elevator.on("idle", function() {
                elevator.goToFloor(0);
            });
            elevator.on("floor_button_pressed", function(floorNum) {
                if (floorNum != elevator.currentFloor())
                    elevator.destinationQueue.push(floorNum);
                console.log("test", elevator.destinationQueue);
                elevator.checkDestinationQueue(); 
                elevator.destinationQueue.sort();
                if (elevator.goingUpIndicator()) {
                    if (elevator.destinationQueue[-1] < elevator.currentFloor()) {
                        elevator.goingUpIndicator(false);
                        elevator.goingDownIndicator(true);
                        elevator.goToFloor(elevator.destinationQueue[-1], true);
                    }
                    else {
                        elevator.goToFloor(elevator.destinationQueue.find(f => f > elevator.currentFloor()), true);
                    }
                }
                else {
                    if (elevator.destinationQueue[0] > elevator.currentFloor()) {
                        elevator.goingUpIndicator(true);
                        elevator.goingDownIndicator(false);
                        elevator.goToFloor(elevator.destinationQueue[0], true);
                    }
                    else {
                        elevator.goToFloor(elevator.destinationQueue.find(f => f < elevator.currentFloor()), true);
                    }
                }
            });
            elevator.on("passing_floor", function(floorNum, direction) {
                if (direction == "up") {
                    elevator.goingDownIndicator(false);
                } else { // "down"
                    elevator.goingUpIndicator(false);
                }
            });
            elevator.on("stopped_at_floor", function(floorNum) {
                console.log(elevator.destinationQueue);
                if (elevator.getPressedFloors().length == 0 || elevator.destinationQueue.length == 0) {
                    elevator.goingUpIndicator(true);
                    elevator.goingDownIndicator(true);
                }
                if (elevator.currentFloor() == 0) {
                    elevator.goingDownIndicator(false);
                    elevator.goingUpIndicator(true);
                }
                else if (elevator.currentFloor() == floors.length) {
                    elevator.goingUpIndicator(false);
                    elevator.goingDownIndicator(true);
                }
            });
        }

        for (let floor of floors) {
            floor.on("up_button_pressed", function() {

            });
            
            floor.on("down_button_pressed", function() {

            });
        }
    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}
