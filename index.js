import express from 'express';

const PORT = 3000;
const HOST = 'localhost';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>Cadastro GamerDEV</title>
        <style>
            body {
                background: url(https://images5.alphacoders.com/332/thumb-1920-332868.jpg);
                color: #00ffcc;
                font-family: Arial, sans-serif;
                text-align: center;
                padding-top: 50px;
            }
            .card {
                background: #16213e;
                padding: 30px;
                border-radius: 15px;
                width: 350px;
                margin: auto;
                box-shadow: 0 0 20px #00ffcc;
            }
            input, select {
                width: 90%;
                padding: 10px;
                margin: 10px 0;
                border: none;
                border-radius: 5px;
            }
            button {
                background: #00ffcc;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: bold;
            }
            button:hover {
                background: #00ccaa;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h2>Cadastro GamerDEV</h2>
            <form action="/cadastro" method="POST">
                <input type="text" name="nickname" placeholder="Nickname" required>
                <input type="email" name="email" placeholder="Email" required>

                <select name="plataforma" required>
                    <option value="">Plataforma</option>
                    <option>PC</option>
                    <option>PlayStation</option>
                    <option>Xbox</option>
                    <option>Nintendo</option>
                </select>

                <input type="text" name="jogoFavorito" placeholder="Jogo Favorito" required>

                <button type="submit">Criar Conta</button>
            </form>
        </div>
    </body>
    </html>
    `);
});

app.post('/cadastro', (req, res) => {
    const { nickname, email, plataforma, jogoFavorito } = req.body;

    res.send(`
    <html>
    <body style="background:#0f0f0f;color:#00ffcc;text-align:center;padding-top:50px;">
        <h2>Cadastro Concluído!</h2>
        <p><strong>Nickname:</strong> ${nickname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plataforma:</strong> ${plataforma}</p>
        <p><strong>Jogo Favorito:</strong> ${jogoFavorito}</p>
        <br>
        <a href="/cadastro" style="color:#00ffcc;">Voltar</a>
    </body>
    </html>
    `);
});
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://${HOST}:${PORT}`);
    });
}

export default app;