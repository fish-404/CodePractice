/*
 * Solution to Elevator Saga Game
 * Game Link: http://play.elevatorsaga.com/
 * Status: Pending
 */

{
    init: function(elevators, floors) {
        // Traverse elevators
        for (let elevator of elevators) {
            /* Triggerd when elevator has no task */
            elevator.on("idle", function() {
                elevator.goToFloor(0, true);
            });
            
            /* Triggerd when someone pressed floor button inside elevator */
            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.destinationQueue.push(floorNum);
                elevator.destinationQueue = elevator.destinationQueue.sort();
                elevator.checkDestinationQueue();
            });
            
            /* Triggered when elevator passing a floor */
            elevator.on("passing_floor", function(floorNum, direction) {
                if (direction == "up") {
                    elevator.goingDownIndicator(false);
                } 
                else {
                    elevator.goingUpIndicator(false);
                }
            });
            
            /* Triggered when elevator stops at a floor */
            elevator.on("stopped_at_floor", function(floorNum) {
                if (elevator.getPressedFloors().length == 0) {
                    elevator.goingUpIndicator(true);
                    elevator.goingDownIndicator(true);
                }
                else if (elevator.destinationQueue.length == 0) {
                    console.log(floors[0].floorNum());
                }
            });
        }

        // Traverse floors 
        for (let floor of floors) {
            /* Triggerd when someone press up botton */
            floor.on("up_button_pressed", function() {
                for (elevator of elevators) {
                    if (elevator.destinationDirection() == "up") {
                        if (elevator.getPressedFloors().length == 0) {
                            elevator.goToFloor(floor.floorNum(), true);
                        }
                        else {
                            elevator.goToFloor(floor.floorNum());
                        }
                    }
                    else if (elevator.destinationQueue.length == 0) {
                        elevator.goToFloor(floor.floorNum());
                        break;
                    }
                    else {
                        elevator.goToFloor(floor.floorNum());
                    }
                }
            });
            
            /* Triggerd when someone press down botton */
            floor.on("down_button_pressed", function() {
                for (elevator of elevators) {
                    if (elevator.destinationDirection() == "down") {
                        if (elevator.getPressedFloors().length == 0) {
                            elevator.goToFloor(floor.floorNum(), true);
                        }
                        else {
                            elevator.goToFloor(floor.floorNum());
                        }
                    }
                    else if (elevator.destinationQueue.length == 0) {
                        elevator.goToFloor(floor.floorNum());
                        break;
                    }
                    else {
                        elevator.goToFloor(floor.floorNum());
                    }
                }
            });
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
