document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const lembrar = document.getElementById('lembrar').checked;

    // Implementar lógica de autenticação aqui

    console.log({
        usuario,
        senha,
        lembrar
    });

    alert('Login realizado com sucesso!');

    // Redirecionar ou realizar outras ações após o login
});
