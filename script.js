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