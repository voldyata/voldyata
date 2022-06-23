addEventListener('DOMContentLoaded', () => {
  upddateNaturopata();
})

function upddateNaturopata() {
  /* fetch("http://localhost:5000/naturopata/listar").then(res => {
       return res.json()
   }).then(json => {
       let naturopata = json;
       let boxs = ''
       console.log(naturopata)
       i = json.total
       var total = i;
       console.log(total)
       naturopata.naturopata.forEach((natu) => {
           console.log(natu)
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
       document.getElementById("box").innerHTML = boxs
       document.getElementById("numeroNatu").innerHTML = json.total
   })*/


}

/*function upddateNaturopata() {
    fetch("http://localhost:5000/usuario/listar").then(res => {
        return res.json()
    }).then(json => {
        let usuario = json;
        let boxs = ''
        console.log(usuario)
        i = json.total
        var totalususuario = i;
        usuario.forEach((natu) => {
            console.log(natu)
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
        document.getElementById("box").innerHTML = boxs
        document.getElementById("numUsuario").innerHTML = json.totalususuario
    }) 
}*/