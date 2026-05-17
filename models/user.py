class User:

    def __init__(self, name, phone):
        self.name = name
        self.phone = phone

    def request_ride(self):
        return "Ride Requested"