from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# API URL for TheMealDB API
API_URL = 'https://www.themealdb.com/api/json/v1/1/'

@app.route('/')
def index():
    return render_template('index.html')

# Route to search meals based on ingredient
@app.route('/search')
def search():
    ingredient = request.args.get('ingredient')
    if not ingredient:
        return jsonify({'meals': []})

    url = f"{API_URL}filter.php?i={ingredient}"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

# Route to get meal details by meal ID
@app.route('/recipe/<meal_id>')
def recipe(meal_id):
    url = f"{API_URL}lookup.php?i={meal_id}"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
