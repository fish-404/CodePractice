{
    init: function(elevators, floors) {
        for (let elevator of elevators) {
            elevator.on("idle", function() {
                elevator.goToFloor(0, true);
            });
            
            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.destinationQueue.push(floorNum);
                elevator.destinationQueue = elevator.destinationQueue.sort();
                elevator.checkDestinationQueue();
            });
            
            elevator.on("passing_floor", function(floorNum, direction) {
                if (direction == "up") {
                    elevator.goingDownIndicator(false);
                } 
                else {
                    elevator.goingUpIndicator(false);
                }
            });
            
            elevator.on("stopped_at_floor", function(floorNum) {
                if (elevator.getPressedFloors().length == 0) {
                    elevator.goingUpIndicator(true);
                    elevator.goingDownIndicator(true);
                }
            });
        }

        for (let floor = 0; floor < floors.length; floor++) {
            floors[floor].on("up_button_pressed", function() {
                for (elevator of elevators) {
                    if (elevator.destinationDirection() == "up") {
                        if (elevator.getPressedFloors().length == 0) {
                            elevator.goToFloor(floor, true);
                        }
                        else {
                            elevator.goToFloor(floor);
                        }
                    }
                    else if (elevator.destinationQueue.length == 0) {
                        elevator.goToFloor(floor);
                        break;
                    }
                    else {
                        elevator.goToFloor(floor);
                    }
                }
            });
            floors[floor].on("down_button_pressed", function() {
                for (elevator of elevators) {
                    if (elevator.destinationDirection() == "down") {
                        if (elevator.getPressedFloors().length == 0) {
                            elevator.goToFloor(floor, true);
                        }
                        else {
                            elevator.goToFloor(floor);
                        }
                    }
                    else if (elevator.destinationQueue.length == 0) {
                        elevator.goToFloor(floor);
                        break;
                    }
                    else {
                        elevator.goToFloor(floor);
                    }
                }
            });
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
