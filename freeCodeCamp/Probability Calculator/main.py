# This entrypoint file to be used in development. Start by reading README.md
import prob_calculator
from unittest import main

hat = prob_calculator.Hat(blue=9, red=1, green=3, yellow=5, test=1)
probability = prob_calculator.experiment(
    hat=hat,
    expected_balls={"blue": 3,
                    "yellow": 2, 
                    "test": 1 },
    num_balls_drawn=20,
    num_experiments=10)
print("Probability:", probability)

# Run unit tests automatically
main(module='test_module', exit=False)
