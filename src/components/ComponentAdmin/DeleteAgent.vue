<template>
     <div class="loading" v-if="loading">
       <ComponentLoading/>
     </div>
    <div>
       <div class="modal-container" id="modal" v-if="toggle" @click.self="agentDelete">
        

              <div class="container">
                <!-- vous voulez-vous supprimer ce agent ? -->
                <p>{{texte}}</p>

                <!-- <div class="boutton">
                    <button @click="supp">Oui</button>
                    <button @click='close'>Non</button>
                   
                </div> -->
                <form action="">
                    <input type="password" name="password" v-model="password" placeholder="Mot de passe">
                    <small class="validation">{{error}}</small>
                    <button @click.prevent="supp">valider</button>
                </form>

          </div>
          
        
      </div>
    </div>
  </template>
  
  <script>
    import dataAgent from '@/database/requeteAgent'
    import connectUser from '@/database/authentificationUser'
    import ComponentLoading from '../ComponentClient/ComponentLoading.vue'
    import { auth } from '@/database/Connect';
    import { onAuthStateChanged } from '@firebase/auth';
  export default {
      name:'DeleteBien',
      props:['toggle','agentDelete','Iddelete','texte','email'],
      components:{
        ComponentLoading
      },
      data() {
        return {
            password:'',
            error:'',
            loading:false,
            displayName:''
        }
      },
      methods: {
     async supp(){
         this.loading =true
        if (this.displayName === "user") {
             let user = await connectUser.DeleteUser(this.email,this.password , this.Iddelete)
             
            if(user.success){
               this.$router.push('/login')
              
            }else if (user.alert){
               this.$router.push('/login')
              
            }else{
                this.error = 'le Mot de passe est incorrect !'
            }

            
        } else if (this.displayName === "agent" || this.displayName === "admin"  ) {
            let agent = await dataAgent.DeleteAgent(this.email,this.password , this.Iddelete)

            if(agent.erreur){
    
                this.error = 'le Mot de passe est incorrect !'
            }

            if(agent.docRef.success){
               this.$router.go()
              
            }else if (agent.docRef.alert){
               this.$router.go()
              
            }
            
            
        }
       

        },
        close(){
            this.toggle = false
        }
        
      },
      mounted() {
        onAuthStateChanged(auth,(user)=>{
        if (user != null) {
            this.displayName = user.displayName
            this.connect = user
            
            
        } else {
            console.log('user no connect');
           
        }
            
        })

      },
  
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
.boutton{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
}
  
button {
    margin-top: 20px;
      padding: 8px 12px;
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
      max-width: 330px;
      width:98%;
      height: 270px;
      border: 1px solid #2288ff;
      background-color: white;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px;
     
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input{
   
    padding: 5px;
    margin-top: 20px;
    border-radius: 5px;
    padding: 5px;
    font-family: 'Roboto Serif', serif;
    font-size: 17px;
    outline: none;
    border: 1px solid #ccc;
  }

  input:focus{
      border: 1px solid #2288ff;
      outline-offset: 0px;
      outline: none;
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