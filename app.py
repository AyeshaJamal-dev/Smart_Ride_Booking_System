from flask import Flask, render_template, request

app = Flask(__name__)

# ---------------- HOME ----------------
@app.route('/')
def home():
    return render_template('index.html')

# ---------------- SERVICES ----------------
@app.route('/services')
def services():
    return render_template('services.html')

# ---------------- CONTACT ----------------
@app.route('/contact')
def contact():
    return render_template('contact.html')

# ---------------- LOGIN ----------------
@app.route('/user-login')
def user_login():
    return render_template('user_login.html')

@app.route('/driver-login')
def driver_login():
    return render_template('driver_login.html')

# ---------------- SIGNUP ----------------
@app.route('/user-signup')
def user_signup():
    return render_template('user_signup.html')

@app.route('/driver-signup')
def driver_signup():
    return render_template('driver_signup.html')


# ---------------- RIDE CONFIRM PAGE ----------------
@app.route('/ride-confirmed')
def ride_confirmed():

    pickup = request.args.get('pickup')
    dropoff = request.args.get('dropoff')
    ride = request.args.get('ride')
    extra = request.args.get('extra')

    return render_template(
        'ride_confirmed.html',
        pickup=pickup,
        dropoff=dropoff,
        ride=ride,
        extra=extra
    )


if __name__ == '__main__':
    app.run(debug=True)