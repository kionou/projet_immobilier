<template>
  <div>
    <div class="ImageHeader">
        <section class="content">
          <div class="cadre">
            <div class="image">
              <img src="@/assets/images/logopng.png" alt="">
            </div>
            <div class="text-content">
              <h1>INSCRIPTION</h1>
              <p>Inscrivez vous pour beneficier de nos produits.</p>
            </div>
          
            <form action="" method="post">
              <div class="name"> 
                <div>
                    <input type="text" class="input" name="nom" placeholder="Nom">
                   
                </div>
               <div>
                <input type="text" class="input" name="prenom" placeholder="Premon">
                
               </div>
              </div>
              <div class="mail">
                <div class="mail1">
                  <input type="email" class="input1" name="email" placeholder="Adresse Email">
                
                </div>
                <div class="mail1">
                 <input type="tel" class="input1" name="numero" placeholder="Numéro téléphone">
                 
                </div>
              </div>
              <div class="name">
                  <input type="password" class="input" name="password" placeholder="Mot de passe">
                   <input type="password" class="input" name="confirmer_password" placeholder="Confirmer le Mot de passe">
              </div>
               
                <button name="modal" value="true" id="open" >Enregister</button>
            </form>
          </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
    .ImageHeader {
    background: url('@/assets/images/4.jpg') no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    text-align: center;
    bottom: 0;
    border-radius: 10px;
    position: relative;
    transition: all .2s linear
}

.cadre{
    width: 780px;
    height: 627px;
    border: 1px solid #2288ff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.image{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #2288ff;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.image img{
    width: 100px;
    height: 100px;
}


.text-content{
    text-align: center;
    padding: 5px;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
    
}

.input{
    margin-bottom: 0;
    margin-right: 10px;
    height: 3rem;
    width: 20rem;
    padding: 5px;
    font-size: 18px;
    outline: none;
    border: 1px solid;
    font-family: 'Roboto Serif',
    serif;
}

input:focus {
    border: 1px solid #2288ff;
    outline-offset: 0px;
    outline: none;
}

.input1 {
    margin-bottom: 0rem;
    height: 3rem;
    width: 652px;
    padding: 5px;
    font-size: 18px;
    outline: none;
    border: 1px solid;
    font-family: 'Roboto Serif',
    serif;
    margin-right: 11px;
}
.mail1{
    margin-bottom: 25px;
}

.validation{
    color: #f8001b;
}

button {
    width: 9rem;
    height: 3rem;
    /* margin: 10px 0; */
    text-align: center;
    border: none;
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Roboto Serif',
        serif;
}

button:hover {
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}

.name{
    display: flex;
    /* border: 1px  solid red; */
    width: auto;
    /* height: 82px; */
    align-items: center;
    align-content: center;
    margin-bottom: 25px;
}
.name1 {
    display: flex;
    /* border: 1px  solid red; */
    width: auto;
    /* height: 82px; */
    align-items: center;
    align-content: center;
    margin-top: 25px;
}

.mail{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* border: 1px solid blue; */
    width: 100%;
    height: auto;
    /* align-items: center;
    align-content: center; */
}

.modal-container{
    display:none;
    /* justify-content: center;
    align-items: center; */
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
    /* transform: scale(0); */
    z-index: 6;
    opacity: 1;
}

.modal-container .modal{
    height: 300px;
    max-width: 350px;
    margin: 0 10px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

.modal-container .modal p {
    font-size: 19px;
    margin-top: 23px;
}

.modal-container .modal .fa-times{
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 25px;
    cursor: pointer;
    color: #2288ff;
}

.btnredirect{
    width: 9rem;
    height: 3rem;
    margin-top: 32px ;
    text-align: center;
    border: none;
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Roboto Serif',
    serif;
}

.btnredirect:hover{
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}



@media  (max-width:900px){

    body{
        height: 100%;
    }
    .cadre{
        width: 744px;
       /* height: 678px; */

    }
    
}

@media (max-width:1024px) {

    body {
        height: 100%;
    }

    .cadre {
      top: 58%;

    }

}

@media (max-width:770px) {

.cadre {
    width: 500px;
}

.name {
    flex-direction: column;
    /* border: 1px solid red; */
    width: auto;
    height: auto;
}

.mail {
    /* border: 1px solid blue; */
    width: auto;
    height: auto;
}

.input {
    width: 40rem;
    margin-bottom: 12px;
}
.input1{
        width: 353px;
}

button{
    width: 23rem;
    height: 5rem;
}

}

@media (max-width:770px) {
    .cadre{
        width: 445px;
    }
}
</style>