erro.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style2.css">
    <title>Hahaha, Você Não conseguiu!</title>
</head>

<body>
    <header>
        Hahaha, Você Não conseguiu! 🤣🤣🤣
    </header>
    <br>
    <main>
        <p>Errar a senha não tem graça... ou será que tem? 🤣🤣🤣</p>
        <button onclick="window.location.href='./login.html'">Tentar Novamente</button>
    </main>
    <img src="https://i.pinimg.com/474x/b3/a6/b9/b3a6b98c248934c31d3dd872f8133dee.jpg" alt="Imagem engraçada">
    <footer>
        <h2>By Instrutor </h2>
    </footer>
    <script src="script.js"></script>
</body>

</html>







hahahah.html



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tela Principal</title>
</head>

<body>
    <header>
        <h1>Tela Principal</h1>
    </header>
    <main>
        <p>Bem vindo!</p>
        <button onclick="window.location.href='./erro.html'">Entrar</button>
    </main>
    <footer>
        
        <h2>By Instrutor</h2>
    </footer>
    <script src="script.js"></script>
</body>



login.html


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Tela de Login</title>
</head>
<body>
    <header>
        <h1>Tela de Login</h1>
    </header>

    <main>
        <form id="login">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required>
            
            <label for="senha">Senha</label>

            <input type="password" name="senha" placeholder="Digite seu email">
             <button type="button" onclick="window.location.href='./erro.html'">Entrar</button>
        </form>
       
    </main>

    <footer>
        <h2>By vitoria</h2>
    </footer>

    <script src="script.js"></script>
</body>


</html>






script.js


window.onload = function() {
    if (window.location.pathname === '/home' || window.location.pathname === '/') {
    
        window.location.href = '/erro';
    }
    window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || window.location.pathname === '/home') 

        window.location.href = '/login';
    }
window.onload = function() {
          
            if (window.location.pathname === '/home' || window.location.pathname === '/') {
                window.location.href = '/erro'; 
            }
            document.addEventListener("keydown", function(event) {
    if (event.key === "F12" || event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
        alert("Console desativado!");
    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Botão direito desativado!");
});

    const emailCorreto = "professor@gmail.com";
    const senhaCorreta = "naolembro ";

    if (email === emailCorreto && password === senhaCorreta) {
        window.location.href = "home.html";
    } else {
        alert("Email e/ou senha incorretos.");
    }
}
if (process.env.NODE_ENV === 'production') {
    console.log = function () {};
}

var script = document.createElement('script');
script.src = 'path/to/your/script.js';
document.head.appendChild(script);


setInterval(function () {
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        alert("Inspeção detectada! A página será fechada.");
        window.location.href = "about:blank";
    }
}, 1000)
    }

module.exports = {
  devtool: false, 
};




style.css
body {
            font-family: 'Comic Sans MS', sans-serif;
            text-align: center;
            background-color: #ffcc00;
            color: #ff0000;
            overflow: hidden;
            animation: shake 0.5s ease-in-out infinite alternate;
        }

        header {
            font-size: 3rem;
            margin-top: 50px;
            animation: blink 0.6s linear infinite;
            color: #ff0000;
            text-shadow: 2px 2px 10px #ff0000;
        }

        h1 {
            font-size: 4rem;
            font-weight: bold;
            color: #ff0000;
            text-shadow: 3px 3px 20px #ff0000, 0 0 25px red, 0 0 5px darkred;
        }

        main {
            background-color: #fff;
            padding: 20px;
            margin: 20px;
            border: 2px solid #ff0000;
            border-radius: 10px;
            font-size: 2rem;
            font-weight: bold;
            animation: zoom 0.5s ease-in-out infinite alternate;
        }

        p {
            color: #ff0000;
            font-size: 2rem;
            font-weight: bolder;
        }

        button {
            background-color: #ff0000;
            color: white;
            padding: 15px 30px;
            font-size: 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 30px;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #cc0000;
        }

        img {
            width: 400px;
            height: auto;
            margin-top: 50px;
            border: 5px solid #ff0000;
            border-radius: 15px;
            box-shadow: 0 0 25px rgba(255, 0, 0, 0.8);
        }

        footer {
            font-size: 1.5rem;
            color: #ff0000;
            margin-top: 50px;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 1px 1px 5px #ff0000;
        }

        @keyframes shake {
            0% {
                transform: rotate(0deg);
            }

            25% {
                transform: rotate(10deg);
            }

            50% {
                transform: rotate(0deg);
            }

            75% {
                transform: rotate(-10deg);
            }

            100% {
                transform: rotate(0deg);
            }
        }

        @keyframes blink {
            0% {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @keyframes zoom {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(1);
            }}








style2.css

body {
            font-family: 'Comic Sans MS', sans-serif;
            text-align: center;
            background-color: #ffcc00;
            color: #ff0000;
            overflow: hidden;
            animation: shake 0.5s ease-in-out infinite alternate;
        }

        header {
            font-size: 3rem;
            margin-top: 50px;
            animation: blink 0.6s linear infinite;
            color: #ff0000;
            text-shadow: 2px 2px 10px #ff0000;
        }

        h1 {
            font-size: 4rem;
            font-weight: bold;
            color: #ff0000;
            text-shadow: 3px 3px 20px #ff0000, 0 0 25px red, 0 0 5px darkred;
        }

        main {
            background-color: #fff;
            padding: 20px;
            margin: 20px;
            border: 2px solid #ff0000;
            border-radius: 10px;
            font-size: 2rem;
            font-weight: bold;
            animation: zoom 0.5s ease-in-out infinite alternate;
        }

        p {
            color: #ff0000;
            font-size: 2rem;
            font-weight: bolder;
        }

        button {
            background-color: #ff0000;
            color: white;
            padding: 15px 30px;
            font-size: 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 30px;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #cc0000;
        }

        img {
            width: 400px;
            height: auto;
            margin-top: 50px;
            border: 5px solid #ff0000;
            border-radius: 15px;
            box-shadow: 0 0 25px rgba(255, 0, 0, 0.8);
        }

        footer {
            font-size: 1.5rem;
            color: #ff0000;
            margin-top: 50px;
            text-transform: uppercase;
            font-weight: bold;
            text-shadow: 1px 1px 5px #ff0000;
        }

        @keyframes shake {
            0% {
                transform: rotate(0deg);
            }

            25% {
                transform: rotate(10deg);
            }

            50% {
                transform: rotate(0deg);
            }

            75% {
                transform: rotate(-10deg);
            }

            100% {
                transform: rotate(0deg);
            }
        }

        @keyframes blink {
            0% {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @keyframes zoom {
            0% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(1);
            }}



