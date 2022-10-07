<template>
  <div class="toi">
    <div class="ImageHeader">
          <div class="cadre">
            <div class="image">
              <img src="@/assets/images/logopng.png" alt="">
            </div>
            <div class="text-content">
              <h1>INSCRIPTION</h1>
              <p>Inscrivez vous pour beneficier de nos produits.</p>
            </div>
            <small>
                {{erreur}}
            </small>
          
            <form >
              <div class="name"> 
            
                <div id="inputs">
                    <input type="text" class="input" name="nom" placeholder="Nom" v-model="nom">
                    <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}} </small>
                </div>
               <div id="inputs">
                <input type="text" class="input" name="prenom" placeholder="Premon" v-model="prenom">
                <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}} </small>
                
               </div>
              </div>
              <div class="mail">
                <div class="mail1">
                  <input type="email" class="input1" name="email" placeholder="Adresse Email" v-model="email">
                  <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
                
                </div>
                <div class="mail1">
                 <input type="tel" class="input1" name="numero" placeholder="Numéro téléphone" v-model="numero">
                 <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}} </small>
                 
                </div>
              </div>
              <div class="name">
                  <input type="password" class="input" name="password" placeholder="Mot de passe" v-model="password">
                   <input type="password" class="input" name="confirmer_password" placeholder="Confirmer le Mot de passe">
              </div>
              <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}} </small>
                <button @click.prevent="submit" id="open" >Enregister</button>
            </form>
          </div>
       
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {require, lgmin,lgmax,ValidEmail,ValidNumeri} from '@/functions/rules'
import connectUser from '@/database/authentificationUser'
export default {
    data() {
        return {
                nom:'',
                prenom:'',
                email:'',
                numero:'',
                password:'',
                erreur:'',
              v$:useVuelidate(),
            
        }
    },
    validations: {
        
             
          
        nom:{
           require,
           lgmin:lgmin(4),
           lgmax:lgmax(20)
       },
       prenom:{
           require,
           lgmin:lgmin(4),
           lgmax:lgmax(20)
           
       },
       email:{
           require,
           ValidEmail
          
       },
       numero:{
           require,
           ValidNumeri,
           lgmin:lgmin(10),
           lgmax:lgmax(12)

       },
       password:{
           require,
           lgmin:lgmin(6),
           lgmax:lgmax(12)
       },
},
methods: {
   async submit(){
         
            // this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
               
             let   DataUser={
                    email:this.email,
                    nom:this.nom,
                    prenom:this.prenom,
                    numero:this.numero,
                    image:'https://previews.123rf.com/images/apoev/apoev1903/apoev190300009/124806570-personne-gris-espace-r%C3%A9serv%C3%A9-photo-homme-en-t-shirt-sur-fond-gris.jpg?fj=1'
                }
                let auth={
                    email:this.email,
                    password:this.password
                }
                console.log(DataUser,auth);
                let user = await connectUser.AddUser(DataUser,auth)
                
                if (user.erreur == "auth/email-already-in-use") {
                    this.erreur = "Votre Adresse Email existe  déjà donc veillez-vous connecté."
                    
                } else {
                    
                }

            }
           

        }
},

}
</script>

<style lang="css" scoped>
    .toi{
        width: 100%;
        height: auto;
        position: relative;
    }
    .ImageHeader {
    background: url('@/assets/images/4.jpg') no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    text-align: center;
    bottom: 0;
    position: relative;
    transition: all .2s linear
}
small{
    color: #f8001b;
}
.cadre{
    width: 780px;
    height: auto;
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
#inputs{
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
}

.validation{
    color: #f8001b;
}

button {
    width: 9rem;
    height: 3rem;
    margin: 10px 0;
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

  

}

@media (max-width:770px) {
.ImageHeader{
    height: 115vh;
}
.cadre {
    max-width: 430px;
    width: 98%;
    height: 630px;
}

.name {
    flex-direction: column;
    /* border: 1px solid red; */
    width: auto;
    height: auto;
    margin-bottom: 0;
}

.mail {
    /* border: 1px solid blue; */
    width: auto;
    height: auto;
}
.mail1 {
    /* border: 1px solid blue; */
   margin-bottom: 12px;
}

.input {
    width: 23rem;
    margin-bottom: 12px;
}
.input1{
        width: 23rem;
}

button{
    width: 10rem;
    height: 3rem;
}

}


</style>