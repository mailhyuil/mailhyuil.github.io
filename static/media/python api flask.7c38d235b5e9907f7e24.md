# python flask

## install

```sh
python -m venv .venv

# activate venv (mac)
source .venv/bin/activate
# activate venv (window) powershell에서 실행해야한다.
.venv\Scripts\activate

# install flask
pip install flask

# start flask
FLASK_APP=hello.py flask run
flask run --app hello.py
```

## app.py

```py
from flask import Flask

app = Flask(__name__)

# get
@app.route('/get/<param>')
def hello_world(param):
    return 'get ' + param

# post
@app.route('/post', methods=['POST'])
def post():
    return 'post'

# put
@app.route('/put', methods=['PUT'])
def put():
    return 'put'

# delete
@app.route('/delete', methods=['DELETE'])
def delete():
    return 'delete'
```
