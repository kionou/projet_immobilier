<template>
    <div>
       <div class="modal-container" >
          <div class="modal">
             <h1>Modifier  </h1>
             <form action="">
               <p>dfs</p>
                  <input type="text" placeholder="Non" v-model="nom">
                 
                  <input type="text" placeholder="Prenom" v-model="prenom">
              
               <div class="form_groupe">
                  <input type="email" placeholder="Adresse Email" v-model="email">
                  <input type="tel" placeholder="Numero" v-model="numero">
              </div>

             <label class="custom-file-upload">
              <input type="file" @change="upload" ref="input"/>
              <i class="fa fa-cloud-upload"></i> 
                  Téléchargement personnalisé
              </label>
  
              <div class="boutton">
                      <button :disabled="isActive" @click.prevent="valider">Modifier</button>
                  </div>
             </form>
          
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import dataAgent from '@/database/requeteAgent';
  import {storage} from '@/database/Connect'
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
  export default {
      
      name:'UpdateBien',
      props:['id'],
     data() {
      return {
        isActive:false,
          nom:'',
          prenom:'',
          email:'',
          numero:'',
          image:''
          
      }
     },
     methods: {
     async valider(){
          let DataAgent={
             nom:this.nom,
             prenom:this.prenom,
             email:this.email,
             numero:this.numero,
             image:this.image
      
          }
          console.log(DataAgent);
       let agent =  await dataAgent.UpdateAgent(this.id,DataAgent)
       if (agent.success) {
          this.$router.go(-1)
          
       } else {
          console.log('error 404');
          
       }
  
      },
     
  
  async upload (e)  {

      let file =e.target.files[0]
        const name = new Date().getTime() + file.name;
  
        console.log(name);
        const storageRef = ref(storage, file.name)
        const uploadTask = uploadBytesResumable(storageRef,file);
  
        uploadTask.on('state_changed', 
       (snapshot) => {
     
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
     
    }, 
    () => {
   
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        if (downloadURL) {
        this.isActive = false
    } 
        this.image = downloadURL
        console.log('File available at', downloadURL);
      });
    }
  );
  
  
      }
     
     },
    async mounted() {
        let agent = await dataAgent.GetAgnetId(this.id)
        console.log(agent.success);
        if (agent.success) {
            
            this.nom = agent.success.nom,
            this.prenom = agent.success.prenom,
            this.email = agent.success.email,
            this.numero = agent.success.numero,
            this.password = agent.success.password
        } else {
            
        }

        this.$refs.input.addEventListener('click',()=>{
            this.isActive = true
        })
     },
  
  
  }
  </script>
  
  <style lang="css" scoped>
  
  .modal-container {
      height: 100vh;
      width: 100%;
      border: 1px solid red;
  
  }
  
  .modal-container .modal {
     
    max-width: 400px;
    width: 98%;
      margin: 0 10px;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    background-color: white;
  }
  
  input {
      margin-bottom: 13px;
      margin-right: 9px;
      margin-left: 10px;
      height: 2.5rem;
      width: 20rem;
      padding: 5px;
      font-size: 18px;
      outline: none;
      border: 1px solid #ccc;
      font-family: 'Roboto Serif',
          serif;
  }
  
  textarea{
      margin-bottom: 10px;
      padding: 5px;
      outline: none;
          font-size: 17px;
       border: 1px solid #ccc;
      font-family: 'Roboto Serif',
              serif;
  }
  
  input:focus ,textarea:focus {
      border: 1px solid #2288ff;
      outline-offset: 0px;
      outline: none;
  }
  
  form{
      margin-top: 10px;
  }
  input[type="file"] {
      display: none;
  }
  
  .custom-file-upload {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 15px 34px;
      cursor: pointer;
      margin-bottom: 9px;
  }
  button{
          padding: 12px;
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

  button:disabled,
button[disabled]{
    background-color: hsla(206,100%,73.3%,1);
    color:white ;
   cursor: not-allowed;
   pointer-events: all !important;
   border: none;
}
  
  </style>