<template>
    <DeleteAgent v-bind:toggle="toggle" v-bind:agentDelete="agentDelete" :Iddelete="Iddelete" :texte="texte"></DeleteAgent>

  <div>
    <div class="loading" v-if="loading">
       <ComponentLoading/>
    </div>
    <div class="container" v-else>
      <div class="images">
      <p class="texte">profil</p>
      </div>
      <div class="contenu">
        <div class="content">
        <div class="cadre-profil">
          <div class="profil-header">
            <div class="image">
             <img :src="users.image" alt="">
            </div>
            <div class="body">
              <div class="body-text">
                <i class="fa-solid fa-user"></i>
               <p>{{users.nom }} {{users.prenom}}</p>
             </div>
             <div class="body-text">
               <i class="fa-solid fa-envelope"></i>
               <p>{{users.email}}</p>
             </div>
             <div class="body-text">
             <i class="fa-solid fa-phone"></i>
             <p> {{users.numero}}</p>
             </div>
            </div>
          

          </div>
         
  
        </div>
        <div class="info">
          <h3>Modifier les Informations</h3>
          <div class="tableau">
            <form >
                <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}} </small>
                <div class="form-control">
                  <label for="nom"> Nom</label>
                  <input type="text" name="nom" v-model="nom">
                </div>

                <small v-if="v$.prenom.$error">{{v$.prenom.$errors[0].$message}} </small>
                <div class="form-control">
                  <label for="prenom"> Prenom</label>
                  <input type="text" name="prenom" v-model="prenom">
                </div>

               <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>
                <div class="form-control">
                  <label for="email"> Adresse Email</label>
                  <input type="email"  name="Adresse Email" v-model="email" >
                </div>

               <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}} </small>
               <div class="form-control">
                  <label for="Numero"> Numéro</label>
                  <input input type="tel" name="tel" v-model="numero" >
                </div>
              <div class="dow">
                  <label class="custom-file-upload">
                  <input type="file" @change="upload" ref="input"/>
                  <i class="fa fa-cloud-upload"></i> 
                      Téléchargement personnalisé
                  </label>
              </div>
            
 
             <div class="boutton">
                <button :disabled="isActive" @click.prevent="valider">Modifier</button>
                <button class="delete"  @click.prevent="agentDelete" >Supprimer</button>

            </div>
            </form>

          </div>
        </div>
  
      </div>
      </div>
    
      
    </div>
  </div>
  
  </template>
  
  <script>
    import ComponentLoading from './ComponentLoading.vue'
    import useVuelidate from '@vuelidate/core'
  import {require, lgmin,lgmax,ValidEmail,ValidNumeri} from '@/functions/rules'
  import connectUser from '@/database/authentificationUser'
  import {storage} from '@/database/Connect'
  import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
  import DeleteAgent from '../ComponentAdmin/DeleteAgent.vue'

  export default {
    components:{
      ComponentLoading,
      DeleteAgent
    },
    props:['id'], 
    data() {
      return {
        loading:true,
        isActive:false,
        toggle:false,
          nom:'',
          prenom:'',
          email:'',
          numero:'',
          image:'',
          v$:useVuelidate(),
          users:"",
          agent:'',
         Iddelete:'',
         texte:'Voulez-vous supprimez votre compte?'
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
     },
     methods: {
     async valider(){
         
         // this.v$.$validate()
         this.v$.$touch()
         if (this.v$.$errors.length == 0 ){
      // this.loading= true
          let DataUser={
             nom:this.nom,
             prenom:this.prenom,
             email:this.email,
             numero:this.numero,
             image:this.image
      
          }
          console.log("gsdggf",DataUser);
       let agent =  await connectUser.UpdateUser(this.id,DataUser)
       if (agent.success) {
          this.$router.go()
          // this.loading= false

       } else {
          this.$router.push('/:pathMatch(.*)*')
          
       }
         }

      },
      agentDelete(){
      console.log(this.id);
        
        this.toggle = !this.toggle
        this.Iddelete = this.id

    },
     
  
  async upload (e)  {

      this.isActive = true
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
      console.log(this.id);
        let user = await connectUser.GetUserId(this.id)
        console.log(user.success);
        if (user.success) {
          this.users = user.success
            
            this.nom = user.success.nom,
            this.prenom = user.success.prenom,
            this.email = user.success.email,
            this.numero = user.success.numero,
            this.password = user.success.password
            this.loading= false

        } else {
            
        }

      
     },
  
  
  
  }
  </script>
  
  <style lang="css" scoped>
    .container{
      width:100%;
      /* height:100vh; */
      /* border:1px solid red; */
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #fafafa;

  
    }

  .images{
    background: url('@/assets/images/3.jpg') no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;
    text-align: center;
    bottom: 0;
    /* border: 1px solid blue; */
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
  .contenu{
    /* border: 1Px solid red; */

    width: 100%;
    padding: 40px
  }
  
    .content{
      /* border: 1px solid rgb(0, 255, 34); */
      width: 100%;
      /* height: 40vh; */
      padding: 70px 70px 70px;
      display: flex;
      justify-content: center;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white;
    }
  
    .cadre-profil{
      /* border: 1px solid black; */
      max-width: 278px;
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
      /* border: 1px solid red; */
      width: 100%;
      margin-left: 60px;
    }
    h3{
      font-size: 30px;
      padding-bottom: 15px;
    }
    .tableau{
      /* border: 1px solid black; */
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
    margin-top: 10px;

  }

  small{
    color: #f8001b;
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
    width: 20rem;
    height: 2.5rem;
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
  
 .dow{
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 100px;
 }
  input[type="file"] {
      display: none;
  }
  
  .custom-file-upload {
      border: 1px solid rgb(246, 245, 245);
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
    font-size: 20px;
    margin-right: 20px;
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
          justify-content: center;
          padding-left: 100px;
      
  
      }
      .delete {
          padding: 10px;
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

      @media (max-width: 997px) {
        .dow{
          padding-left: 0px;
        }

      }

  @media (max-width: 917px) {
    .form-control input{
      width:15rem;
    }
    .custom-file-upload{
      padding: 12px 2px;
    }

      }

      @media (max-width: 837px) {
        .dow{
            padding: 0;
        }
        .form-control input{
      width:20rem;
    }

    h3{
    font-size: 25px;
    padding: 15px 0;
}
.boutton{
  padding-left: 16px;
}

      }

@media (max-width: 768px) {
  .content{
    flex-direction: column;
    align-items: center;
    padding: 40px ;
}
.dow{
    padding-left: 100px;
}

        .info{
          margin-left: 0;
        }

.cadre-profil{
  max-width: none;
    width: 100%;
    height: auto;
}

.profil-header{
  display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}

.image img[data-v-4073cafd] {
   
  border-radius:0%;
    width: 120px;
    height: 120px;
    margin-top: 0px;
    margin-bottom: 0px;
}
.body[data-v-4073cafd] {

    width: 98%;
    max-width: 300px;
  

      }
.body-text{
  align-items: center;
    justify-content: space-between;
    flex-direction: row;

}

.boutton{
  padding-left: 116px;
}
    }

    @media (max-width: 768px) {
      .container{
        margin-top: 0px;
      }
    }

    
    @media (max-width: 650px) {
     
      .profil-header{
        flex-direction: column;
      }
      .body{
        margin-top: 30px;
      }
     
     
      
     }

     @media (max-width: 628px) {
     .dow{
      padding-left: 0px;
     }
   
     .boutton{
      padding-left: 0px;
     }
    
     
    }

@media (max-width: 467px) {
     
.dow{
    padding-left: 0px;
}

.boutton{
  padding-left: 16px;
}


 
}


@media (max-width: 520px) {
  .form-control input {
    width: 98%;
    max-width: 300px;
  }
  .content{
    padding: 0px;
  }

}
    
  
  </style>