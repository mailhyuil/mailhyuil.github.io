# python flask

## install

```sh
# install python3 globally
apt install python3
# install pip3 globally
apt install python3-pip

# working directory에 venv 생성
# python -m venv <env_name>
python -m venv .venv

# activate venv
<env_name>/bin/activate # window
source <env_name>/bin/activate # mac

# deactivate venv
deactivate

# install flask
python -m pip install flask
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
