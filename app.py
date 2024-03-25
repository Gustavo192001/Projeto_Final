from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# Configurações do banco de dados
db = mysql.connector.connect(
    host="localhost",
    user="seu_usuario",
    password="sua_senha",
    database="seu_banco_de_dados"
)

# Rota para a página de cadastro
@app.route('/')
def index():
    return render_template('cadastro.html')

# Rota para lidar com o cadastro de usuário
@app.route('/cadastrar', methods=['POST'])
def cadastrar():
    nome = request.form['nome']
    email = request.form['email']
    # Adicione aqui os outros campos do formulário

    cursor = db.cursor()
    query = "INSERT INTO usuarios (nome, email) VALUES (%s, %s)"
    cursor.execute(query, (nome, email))
    db.commit()

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
