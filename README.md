# 🍽️ AI Recipe Finder

A simple **Flask** web application that lets users search for meals based on ingredients and view detailed recipes using [TheMealDB API](https://www.themealdb.com/api.php).

---

## 🚀 Features

- Search meals by ingredient.  
- View detailed recipe information including instructions, ingredients, and images.  
- Dynamic and responsive user interface (requires an `index.html` template).  

---

## 🛠 Tech Stack

- **Backend**: Python, Flask  
- **API**: [TheMealDB API](https://www.themealdb.com/api.php)  
- **Frontend**: HTML, CSS, JavaScript (via `templates/index.html`)  
- **HTTP Requests**: Python `requests` library  

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/ai-recipe-finder.git
cd ai-recipe-finder
Create a virtual environment:

bash

python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
Install dependencies:

bash

pip install -r requirements.txt
Run the Flask app:

bash

python app.py
Open your browser and visit: http://127.0.0.1:5000
'''


# 📝 Usage
Enter an ingredient in the search box.

Browse the list of meals returned by TheMealDB API.

Click a meal to view detailed recipe information.

📄 License
This project is licensed under the MIT License.
