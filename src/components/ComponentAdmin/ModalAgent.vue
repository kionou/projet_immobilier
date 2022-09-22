<template>
  <div>
     <div class="modal-container" id="modal" v-if="revele" @click.self="submit">
       
         
            <div class="container">

            <form >
                    <h3>Ajouter un agent</h3>

                <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}} </small>
                <input type="text " placeholder="Nom" v-model="nom">

                <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}} </small>
                <input type="text" placeholder="Prenom" v-model="prenom">

                <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
                <input type="email" name="email" placeholder="Adresse Email" v-model="email"> 

                <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}} </small>
                <input type="tel" placeholder="Numero Téléphonique" v-model="numero">

                <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}} </small>
                <input type="password" name="password" placeholder="Mot de passe" v-model="password">
              
                  
                <button @click.prevent='valider' >Enregistrer</button>
            </form>
          
        </div>
        
      
    </div>
  </div>
</template>

<script>
    import dataAgent from '@/database/requeteAgent'
    import useVuelidate from '@vuelidate/core'
import {require, lgmin,lgmax,ValidEmail,ValidNumeri} from '@/functions/rules'
export default {
    name:'ModalAgent',
    props:['revele','submit'],
        data() {
        return {
                nom:'',
                prenom:'',
                email:'',
                numero:'',
                password:'',
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

   async  valider(){
         
            // this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
               
             let   DataUser={
                    nom:this.nom,
                    prenom:this.prenom,
                    email:this.email,
                    numero:this.numero,
                    password:this.password
                }
                console.log(DataUser);
                let agent = await dataAgent.InsertionAgent(DataUser)
                console.log(agent);
                if (agent.success) {
                    this.$router.push('/')
                    
                } else {
                    
                }
    
            }
           

        }

}

}
</script>

<style lang="css" scoped>

.modal-container {
 
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 6;
    opacity: 1;
}
small{
    color: #f8001b;
}


input {
    margin-bottom: 2rem;
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


button {
    width: 9rem;
    height: 3rem;
    margin-bottom: 10px;
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


.container {
    position: absolute;
    left: 50%;
    top: 56%;
    transform: translate(-50%, -50%);
    max-width: 370px;
    width: 98%;
    height: auto;
    border: 1px solid #2288ff;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
   
}

h3{

    padding: 13px;
    font-size: 18px
}



form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
}



.validation {
    color: #f8001b;
}

@media (max-width: 900px) {
    body {
        width: 100%;

    }

    form {
        padding: 10px;
    }
}

@media (max-width: 768px) {
    body {
        width: 100%;

    }

  

    form {
        padding: 10px;
        width: 90%;
        height: 230px;
        /* border: 1px solid red; */
        align-items: center;
        align-content: center;
    }

    input {
        height: 6rem;
        width: 35rem;
    }

    button {
        width: 16rem;
        height: 5rem;
    }
}

@media (max-width: 400px) {
    .container {
        width: 305px;
        height: 529px;
    }

    input {
        width: 27rem;
    }
}

</style>