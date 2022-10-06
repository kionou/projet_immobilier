<template>
  <div>
    <!-- <div class="loading" v-if="loading">
       <ComponentLoading/>
    </div> -->
    <div class="container" >
      <div class="images">
      <p class="texte">profil</p>
      </div>
      <div class="content">
        <div class="cadre-profil">
          <div class="profil-header">
            <div class="image">
             <img src="@/assets/images/image.jpg" alt="">
            </div>
            <div class="body-text">
               
                <p>Kionou mamadou</p>
              </div>
              <div class="body-text">
                <i class="fa-solid fa-envelope"></i>
                <p>Kionumamamadou00</p>
              </div>
              <div class="body-text">
              <i class="fa-solid fa-phone"></i>
              <p> 0797687657854</p>
              </div>

          </div>
         
  
        </div>
        <div class="info">
          <h3>Modifier les Informations</h3>
          <div class="tableau">
            <form >
                <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}} </small>
                <div class="form-control">
                  <label for="commune"> Nom</label>
                  <input type="text" name="nom" v-model="nom">
                </div>

                <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}} </small>
                <div class="form-control">
                  <label for="commune"> Prenom</label>
                  <input type="text" name="prenom" v-model="prenom">
                </div>

                
             
              <div class="form_groupe">
               <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
               <label class="labe"> Adresse Email:<input type="email" name="Adresse Email" v-model="email" /></label>

               <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}} </small>
               <label> Numéro:<input type="tel" name="tel" v-model="numero" /></label>
             </div>
                           <div class="form-control">
                                <label for="commune"> Commune</label>
                                <input type="text" name="commune" id="">
                            </div>
                            <div class="form-control">
                                <label for="numero"> Numero</label>
                                <input type="number" name="numero" id="">
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
         
          <div  class="boutton " >
                     <button class="update"   @click="update()">Modifier</button>
                     <button class="delete"   >Supprimer</button>
            </div>
        </div>
  
      </div>
      
    </div>
  </div>
  
  </template>
  
  <script>
    import ComponentLoading from './ComponentLoading.vue';
    import useVuelidate from '@vuelidate/core'
  import {require, lgmin,lgmax,ValidEmail,ValidNumeri} from '@/functions/rules'

  export default {
    component:{
      ComponentLoading
    },
    data() {
      return {
        loading:false,
        isActive:false,
          nom:'',
          prenom:'',
          email:'',
          numero:'',
          image:'',
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
     async valider(){
      this.loading= true
         
         // this.v$.$validate()
         this.v$.$touch()
         if (this.v$.$errors.length == 0 ){
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
  
  
  }
  </script>
  
  <style lang="css" scoped>
    .container{
      width:100%;
      height:100vh;
      border:1px solid red;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #ccc;
      margin-top: 20px;
  
    }

    .labe{
      display: inline-block;
    }
    .images{
    background: url('@/assets/images/3.jpg') no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    text-align: center;
    bottom: 0;
    border: 1px solid blue;
    width: 100%;
    height: 30vh;
    position: relative;
    }

  .texte{
    position: absolute;
    bottom: 10%;
    left: 4%;
    color: white;
    font-size: 37px;
  }
  
    .content{
      border: 1px solid blue;
      width: 100%;
      /* height: 40vh; */
      padding: 70px 70px 70px;
      display: flex;
      /* box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white; */
    }
  
    .cadre-profil{
      border: 1px solid black;
      max-width: 250px;
      width: 98%;
      height: 500px;
    
    }
    .profil-header{
      color: white;
    background: #48a0dc;
    padding: 0px 20px 20px 20px;
    text-align: center;
    }
    .image img{
      display: inline-block;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid rgba(255, 255, 255, 0.4);
    width: 90px;
    height: 90px;
    margin-top: -40px;
    margin-bottom: 30px;
    box-shadow: 0px 10px 25px rgb(0 0 0 / 16%);
    transition: all 0.4s;
    }
  .body-text{
    display: flex;
    margin-bottom: 11px;
    justify-content: space-around;
    /* border: 1px solid #ccc; */
    flex-direction: column;
    padding: 3px;
  }
  
    .info{
      border: 1px solid red;
      width: 100%;
      margin-left: 60px;
    }
    h3{
      font-size: 30px;
      padding-bottom: 15px;
    }
    .tableau{
      border: 1px solid black;
      height: auto;
      padding: 10px;
      display: flex;
      justify-content: center;
    }

    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  small{
    color: #f8001b;
}
.form_groupe{
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

  input {
      margin-bottom: 27px;
      height: 2.5rem;
      max-width: 20rem;
      /* width: 98%; */
      padding: 5px;
      font-size: 18px;
      outline: none;
      border: 1px solid #ccc;
      font-family: 'Roboto Serif',
          serif;
  }
  
label{
  text-align: end;
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
          padding: 10px;
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
    .tableau-heaeder{
      /* border: 1px solid blue; */
      font-weight: 700;
      font-size: 25px;
      line-height: 4rem;
      text-align: left;
    }
  
    .tableau-content{
      /* border: 1px solid gray; */
      font-size: 17px;
      line-height: 4rem;
      text-align: initial;
    }
  
    .boutton{
  
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          padding: 15px 0;
          justify-content: space-evenly;
      
  
      }
      .update {
          width: 8rem;
          height: 3rem;
          text-align: center;
          border: none;
          background-color: #2288ff;
          color: white;
          border-radius: 5px;
          font-size: 20px;
          font-family: 'Roboto Serif',
              serif;
      }
  
      .update:hover {
          background-color: white;
          color: #2288ff;
          border: 1px solid #2288ff;
          cursor: pointer;
      }
  
      .delete {
          width: 8rem;
          height: 3rem;
          text-align: center;
          border: none;
          background-color: red;
          color: white;
          border-radius: 5px;
          font-size: 20px;
          font-family: 'Roboto Serif',
              serif;
      }
  
      .delete:hover {
          background-color: white;
          color: red;
          border: 1px solid red;
          cursor: pointer;
      }

      .form-control{
    width: 100%;
    padding: 10px;
    font-size: 17px;
}
.form-control label{
    width: 100px;
    display: inline-block;
    padding: 2px 20px 2px 2px;
}
.form-control input{
    width: 15rem;
    height: 34px;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    font-family: 'Roboto Serif', serif;
    font-size: 17px;
}
    
  
  </style>