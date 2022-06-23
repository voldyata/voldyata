

addEventListener('DOMContentLoaded', () => {
  updateanuncios();
})

function updateanuncios(){
fetch("http://localhost:5000/anuncio/listar").then(res =>{
 return res.json()
}).then(json =>{
 let elements=''
 posts = json
 posts.forEach(post => {
   console.log(post)
 let element = `  <div class="col-sm-6 col-lg-4 mx-auto">
          <div class ="box">
            <div class="img-box">
              <img src="images/José Nguepe.jpg">
            </div>
            <div class="detail-box">
              
              <h5>
                Anuncio:${post.conteudo} <br>
                
                Naturopata:${post.naturopatum.nome} <br>
               
              </h5>
             
            </div>
          </div>
        </div> `
        elements += element
   
 });
     document.getElementById("box").innerHTML = elements

})

}


function newanuncio() {
 let Naturopata = document.getElementById("naturopata").value;
 let conteudo = document.getElementById("conteudo").value ;
 const Anuncio ={conteudo,Naturopata};

 const options ={
   method:"POST",
   Headers : new Headers({'content-type':'application/json'}),
   body :JSON.stringify(Anuncio)
 }
 fetch("http://localhost:5000/anuncio/cadastrar").then(res =>{
   console.log(res);
   updateanuncios();
 })
}
