addEventListener('DOMContentLoaded', () => {
  upddateNaturopata();
  listarUsuario()
  listarMedicamento()
  showData()
})

function listarUsuario() {
  fetch("http://localhost:5000/usuario/listar").then(res => {
    return res.json()
  }).then(json => {
    let naturopata = json;
    let boxs = ''
    //console.log(naturopata)
    i = json.total
    var total = i;
    naturopata.usuario.forEach((natu) => {
      //console.log(natu)
      let box = ` 
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class ="box">
            <div class="img-box">
              <img src="images/José Nguepe.jpg">
            </div>
            <div class="detail-box">
              <h5>
                Nome:${natu.nome} <br>
                e-mail:${natu.email} <br>
                Telefone:${natu.telefone}<br>
              
              </h5>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="detalhes(${natu.id})">
                  ver mais
              </button>
            </div>
          </div>
        </div>`
      boxs += box

    });
    //document.getElementById("box").innerHTML = boxs
    document.getElementById("numUsuario").innerHTML = json.total
  })
}

function showData() {
  let token = localStorage.getItem('tokenAdmin')
  var tokenD = jwt_decode(token);
  let nomeAdmin = document.getElementById("nameADM")
  let nomeAdmin1 = document.getElementById("nameADM1")
  let email = document.getElementById("email")

  email.innerHTML = tokenD.email
  nomeAdmin.innerHTML = tokenD.nome
  nomeAdmin1.innerHTML = tokenD.nome

}

function upddateNaturopata() {
  fetch("http://localhost:5000/naturopata/listar").then(res => {
    return res.json()
  }).then(json => {
    let naturopata = json;
    let boxs = ''
    // console.log(naturopata)
    i = json.total
    var total = i;
    //console.log(total)
    naturopata.naturopata.forEach((natu) => {
      //console.log(natu)
      let box = ` 
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class ="box">
            <div class="img-box">
              <img src="images/José Nguepe.jpg">
            </div>
            <div class="detail-box">
              <h5>
                Nome:${natu.nome} <br>
                e-mail:${natu.email} <br>
                Telefone:${natu.telefone}<br>
              
              </h5>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="detalhes(${natu.id})">
                  ver mais
              </button>
            </div>
          </div>
        </div>`
      boxs += box

    });
    //document.getElementById("box").innerHTML = boxs
    document.getElementById("numeroNatu").innerHTML = json.total
  })
}

function listarMedicamento() {
  fetch("http://localhost:5000/medicamento/listar").then(res => {
    return res.json()
  }).then(json => {
    let medicamento = json;
    let boxs = ''
    i = json.total
    var total = i;
    //console.log(total)
    medicamento.forEach((medicamento) => {
      console.log(medicamento)
      let box = ` 
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class ="box">
            <div class="img-box">
              <img src="images/José Nguepe.jpg">
            </div>
            <div class="detail-box">
              <h5>
                Nome:${medicamento.nome} <br>
                preço:${medicamento.preco} <br>  
              </h5>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="detalhes(${natu.id})">
                  ver mais
              </button>
            </div>
          </div>
        </div>`
      boxs += box

    });
    document.getElementById("box").innerHTML = boxs
    document.getElementById("numeroMedicamento").innerHTML = json.total
  })
}