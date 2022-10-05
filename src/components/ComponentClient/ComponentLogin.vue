<template>
  <div>
    <div class="ImageHeader">
        <div class="container">
            <div class="image">
                <img src="@/assets/images/logopng.png" alt="">
            </div>
         
            <div class="texte">
                <h2>CONNEXION</h2>
            </div>
            <small>
                {{erreur}}
            </small>
            <form >
                     <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
                <input type="email" name="email" placeholder="Adresse Email" v-model="email">
                     <small v-if="v$.password.$error">{{v$.password.$errors[0].$message}} </small>        
                <input type="password" name="password" placeholder="Mot de passe" v-model="password">
                <button  @click.prevent="submit">Connecter</button>
            </form>
            <div class="texte">
                <p>Vous aviez pas de compte? <span class="sanp" @click="redirect">Cliquer ici</span> </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
     import useVuelidate from '@vuelidate/core'
    import {require, lgmin,lgmax,ValidEmail} from '@/functions/rules'
    import connectUser from '@/database/authentificationUser'
    import { auth } from '@/database/Connect';
    import { onAuthStateChanged } from '@firebase/auth'
export default {
    name:"Componentlogin",
    data() {
        return {
                email:'',
             password:'',
             v$:useVuelidate(),
             erreur:''
            
        }
    },
          validations: {
             email:{
               require,
                ValidEmail
            },
            password:{
              require,
                lgmin:lgmin(6),
                lgmax:lgmax(12)
         
                
            },
    },
    methods: {
        MessageErreur(into){
            if (into === "auth/wrong-password") {
                console.log('pazssword');
                this.erreur = 'Mot de passe incorrect'
                
            } else {
                console.log('email');
                this.erreur = "Email ou le Mot de passe est incorrect !"
            } 

        },
        redirect(){
            this.$router.push('/sign')
        },
          async  submit(){
            console.log('rrr')
            console.log('fsqjfblqkf',this.v$.$errors.length);
            // this.v$.$validate()
            this.v$.$touch()
            if (this.v$.$errors.length == 0 ) {
                // this.revele = !this.revele
             let   DataUser={
                    email:this.email,
                    password:this.password
                }
                console.log(DataUser);
                let connection = await connectUser.Userconnect(DataUser)
                if (connection.erreur ) {
                  this.MessageErreur(connection.erreur)
                 } 

                 if (connection.user) {
                   this.$router.push('/profil')   

                    
                 } else if (connection.agent) {
                  this.$router.push(`/agent/${connection.agent.user.uid}`) 
                 }
                 if (connection.admin) {
                    this.$router.push('/dashbord')   

                    
                 }
            }
        }
    },
    created() {
    onAuthStateChanged(auth,(user)=>{
        if (user.displayName === "admin") {
            this.$router.push('/dashbord')  

        }  else if(user.displayName === "agent"){
            this.$router.push(`/agent/${user.uid}`) 

        }
        if(user.displayName === "user"){
            this.$router.push('/profil')  

        }
            
        })
  },

}
</script>

<style lang="css" scoped>
.ImageHeader {
    background: url('@/assets/images/4.jpg') no-repeat center;
    background-size: 100% 100%;
    height: 100vh;
    width: 100%;
    text-align: center;
    bottom: 0;
    position: relative;
}
  small{
    color: #f8001b;
  }

input {
    margin-bottom: 2rem;
    height: 3rem;
    max-width: 335px;
    width: 147%;
    padding: 5px;
    font-size: 18px;
    outline: none;
    border: 1px solid ;
    font-family: 'Roboto Serif',
    serif;
}

input:focus {
    border: 1px solid #2288ff;
    outline-offset: 0px;
    outline: none;
}


button{
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
button:hover{
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}


.container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 370px;
    height: 555px;
    border: 1px solid #2288ff;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
}


.image{
    border: 1px solid #2288ff ; 
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 15px 0;
    /* background-color: aqua; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.image img{
    width:100px ;
    height: 100px;
    padding: 1px;
}

.texte{
    text-align: center;
    padding: 10px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
}

.sanp{
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto Serif',
    serif;
    text-decoration: none;
    padding: 5px;
}
.sanp:hover {
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}

.validation{
    color: #f8001b;
}

@media  (max-width: 900px){
    body{
        width: 100%;

    }
    form{
        padding: 10px;
    }
}

@media (max-width: 768px) {
    body {
        width: 100%;

    }

    .texte{
            font-size: 16px;
    }

    form {
        padding: 10px;
        width: 90%;
        height: 230px;
        /* border: 1px solid red; */
        align-items: center;
        align-content: center;
    }

   

    button{
            width: 9rem;
            height: 3rem;
    }
}

@media (max-width: 400px) {
   .container{
       width: 305px;
       height: 529px;
   }
   .image{
    width: 100px;
    height: 100px;
   }
input{
    width: 104%;
}
.sanp{
    font-size: 12px;
}
.texte{
    font-size: 13px;
}
 
}

</style>