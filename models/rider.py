class Ride:

    def __init__(self, pickup, dropoff):
        self.pickup = pickup
        self.dropoff = dropoff

    def calculate_fare(self):
        return 500