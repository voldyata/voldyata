var header = new Headers()

function entrada() {
    var email = document.getElementById("email").value
    var senha = document.getElementById("password").value

    let post = {
        email,
        senha
    };

    const config = {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(post)
    }
    fetch("http://localhost:5000/usuario/login", config).then(res => {
        res.json().then((data) => {
            console.log(data.selectedUser)
            if (data.selectedUser.tipo_usuario == "Admin") {

                window.location.assign("NiceAdmin/Admin.html")
                localStorage.setItem('tokenAdmin', data.token)
            } else if (data.selectedUser.tipo_usuario == "Paciente") {
                window.location.assign("doctors.html")
                localStorage.setItem('tokenGestor', data.token)
            }
        })
    })
}

function registrar() {
    let nome = document.getElementById("nomeR").value
    let email = document.getElementById("emailR").value
    let senha = document.getElementById("passwordR").value
    let senha2 = document.getElementById("password2R").value

    if (senha != senha2) {
        alert("skfldasd")
    } else {
        let post = {
            nome,
            email,
            senha,
            tipo_usuario: "Paciente"
        };

        const config = {
            method: "POST",
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify(post)
        }

        fetch("http://localhost:5000/usuario/cadastrar", config).then(res => {
            alert("jjkkj")
        })
    }
}


/*function criar() {
    var email = document.getElementById("email").value
    var senha = document.getElementById("password").value

    let post = {
        email,
        senha
    };

    const config = {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json'
        }),
        body: JSON.stringify(post)
    }
    fetch("http://localhost:5000/usuario/cadastrar", config).then(res => {
        console.log(res)

    })
}
criar()*/