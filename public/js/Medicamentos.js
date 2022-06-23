addEventListener('DOMContentLoaded', () => {
  updateanuncios();
})

function updateanuncios() {
  fetch("http://localhost:5000/medicamento/listar").then(res => {
    return res.json()
  }).then(json => {
    let elements = ''
    posts = json
    console.log(posts)
    posts.medicamento.forEach(post => {
      console.log(post)
      let element = ` 
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class ="box">
            <div class="img-box">
              <img src="images/José Nguepe.jpg">
            </div>
            <div class="detail-box">
              <h5>
                 ${post.nome} <br>
                ${post.preco} <br>
              </h5>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="comentarios(${post.id})">
                  Comentar
              </button>
            </div>
          </div>
        </div>`
      elements += element
    });
    document.getElementById("box").innerHTML = elements
  })
}

function pesquisar() {
  let pesquisar = document.getElementById("pesquisa").value
  document.getElementById("box").innerHTML = " "
  fetch("http://localhost:5000/medicamento/nome/" + pesquisar).then(res => {
    return res.json()
  }).then(json => {
    let elements = ''
    posts = json
    console.log(posts)
    posts.forEach(post => {
      console.log(post)
      let element = ` 
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class ="box">
            <div class="img-box">
              <img src="images/José Nguepe.jpg">
            </div>
            <div class="detail-box">
              <h5>
                 ${post.nome} <br>
                ${post.preco} <br>
              </h5>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="comentarios(${post.id})">
                  Comentar
              </button>
            </div>
          </div>
        </div>`
      elements += element
    });
    document.getElementById("box").innerHTML = elements
  })
}

function comentarios(id) {
  /* fetch("http://localhost:5000/comentario/encontrar/" + id).then(res => {
     return res.json()
   }).then(json => {
     console.log(json)
     let elements = ''
     var posts = json
     posts.forEach(post => {
       let element = ` 
       ${post[id].nome}`
       elements += element
     });
     console.log(element)
     //document.getElementById("modal").innerHTML = elements
       posts.forEach(post => {
         console.log(post)
         let element = `${post.nome}`
         elements += element
       });
     console.log(json)
     document.getElementById("modal").innerHTML = elements
   })*/
  fetch("http://localhost:5000/comentario/encontrar/" + id).then(res => {
    return res.json()
  }).then(json => {
    console.log(json)
    for (let i = 0; i <= json.length; i++) {
      console.log(json.Comentarios[i].conteudo)
    }
  })
}