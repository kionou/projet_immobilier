<template>
    <div>
      
       <div class="modal-container">
          <div class="modal">
             <h1>Modifier  des biens immobiliers</h1>
             <form >
            <div class="form_groupe">

                <div class="data-v" >
                    <small v-if="v$.nom_bien.$error">{{v$.nom_bien.$errors[0].$message}} </small>
                    <input type="text" placeholder="Non du bien" v-model="nom_bien">
                </div>

                <div class="data-v">
                    <small v-if="v$.prix.$error">{{v$.prix.$errors[0].$message}} </small>
                    <input type="text" placeholder="Prix du bien" v-model="prix">
                </div>
            </div>
             <div class="form_groupe">
                <div class="data-v">
                    <small v-if="v$.piece.$error">{{v$.piece.$errors[0].$message}} </small>
                    <input type="text" placeholder="Nombre de pieces" v-model="piece">
                </div>
                <div class="data-v">
                    <small v-if="v$.superficie.$error">{{v$.superficie.$errors[0].$message}} </small>
                    <input type="text" placeholder="superficie" v-model="superficie">
                </div>
            </div>
             <div class="form_groupe">
                <div class="data-v">
                    <small v-if="v$.chambre.$error">{{v$.chambre.$errors[0].$message}} </small>
                    <input type="text" placeholder="Nombre de chambre" v-model="chambre">
                </div>
                <div class="data-v">
                    <small v-if="v$.douche.$error">{{v$.douche.$errors[0].$message}} </small>
                    <input type="text" placeholder="Nombre de douche" v-model="douche">
                </div>
            </div>
             <div class="form_groupe">
                <div class="data-v">
                    <small v-if="v$.ville.$error">{{v$.ville.$errors[0].$message}} </small>
                    <input type="text" placeholder="Ville " v-model="ville">
                </div>
                <div class="data-v">
                    <small v-if="v$.commune.$error">{{v$.commune.$errors[0].$message}} </small>
                    <input type="text" placeholder="Commune" v-model="commune">
                </div>
            </div>
            <div class="textArea">
                <small v-if="v$.description.$error">{{v$.description.$errors[0].$message}} </small>
                <textarea name="" id="" cols="71" rows="4" placeholder="Description" v-model="description"></textarea>
            </div>
            <div class="textArea">
                <small v-if="v$.service.$error">{{v$.service.$errors[0].$message}} </small>
                <textarea name="" id="" cols="71" rows="4"  placeholder="service" v-model="service"></textarea>
            </div>

            <input type="hidden"   v-model="user_id">
           <label class="custom-file-upload">
             <input type="file" @change="upload" multiple/>
             <i class="fa fa-cloud-upload"></i> 
                T??l??chargement personnalis??
            </label>

            <div class="boutton">
                    <button  :disabled="isActive" @click.prevent="valider">Ajouter un bien</button>
                </div>
           </form>
          
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import dataBien  from '@/database/requeteBien'
  import {storage} from '@/database/Connect'
  import { ref,  uploadBytes, getDownloadURL } from "firebase/storage";
  import useVuelidate from '@vuelidate/core'
import {require, lgmin,lgmax,ValidNumeri} from '@/functions/rules'

  export default {
      
      name:'UpdateBien',
      props:['id'],
      components:{
     
      },
     data() {
      return {
        isActive:false,
          nom_bien:'',
          prix:'',
          piece:'',
          superficie:'',
          chambre:'',
          douche:'',
          ville:'',
          commune:'',
          description:'',
          service:'',
          image:'',
          v$:useVuelidate(),
     
          
      }
     },
     validations: {
             
             nom_bien:{
                         require,
                         lgmin:lgmin(5),
                         lgmax:lgmax(20)
                     },
                     prix:{
                         require,
                         ValidNumeri,
                         lgmin:lgmin(6),
                         lgmax:lgmax(10)
                         
                     },
                     piece:{
                         require,
                         ValidNumeri,
                         lgmin:lgmin(1),
                         lgmax:lgmax(2)
                        
                     },
                     superficie:{
                         require,
                         ValidNumeri,
                         lgmin:lgmin(3),
                         lgmax:lgmax(5)
              
                     },
                     chambre:{
                         require,
                         ValidNumeri,
                         lgmin:lgmin(1),
                         lgmax:lgmax(2)
                     },
                     douche:{
                         require,
                         ValidNumeri,
                         lgmin:lgmin(1),
                         lgmax:lgmax(2)
                     },
                     ville:{
                         require,
                         lgmin:lgmin(4),
                         lgmax:lgmax(30)
                     },
                     commune:{
                         require,
                         lgmin:lgmin(4),
                         lgmax:lgmax(30)
                     },
                     description:{
                         require,
                         lgmin:lgmin(30),
                         lgmax:lgmax(500)
                     },
                     service:{
                         require,
                         lgmin:lgmin(30),
                         lgmax:lgmax(500)
                     },
              },
     methods: {
     async valider(){
        this.v$.$touch()
         if (this.v$.$errors.length == 0 ){
            let DataBien={
             nom_bien:this.nom_bien,
             prix:this.prix,
             piece:this.piece,
             superficie:this.superficie,
             chambre:this.chambre,
             douche:this.douche,
             ville:this.ville,
             commune:this.commune,
             description:this.description,
             service:this.service,
             images:this.image,
             user_id:this.user_id,
             status:this.status
          }
       let bien =  await dataBien.UpdateBien(this.id,DataBien)
       if (bien.success) {
          this.$router.go(-1)

          
       } else {
          console.log('error 404');
          
       }
         }
   
  
      },
     
  
  async upload (e)  {
    this.isActive = true
      const promises = [];
     Object.values(e.target.files).forEach((element)=>{
      const file=element
      const metadata = {
        contentType: "image/jpeg",
      }
      const storageRef = ref(storage, "temp/" + file.name);
      promises.push(uploadBytes(storageRef, file, metadata).then(uploadResult => {return getDownloadURL(uploadResult.ref)}))
  
  }); 
    
    const photos = await Promise.all(promises);
    if (photos) {
        this.isActive = false
    } 
    this.image = photos  
    }
     
     },
    async mounted() {
        let bien = await dataBien.GetBienId(this.id)
        if (bien.success) {
            
            this.nom_bien = bien.success.nom_bien,
            this.prix = bien.success.prix,
            this.piece = bien.success.piece,
            this.superficie = bien.success.superficie,
            this.chambre = bien.success.chambre,
            this.douche = bien.success.douche,
            this.ville = bien.success.ville,
            this.commune = bien.success.commune,
            this.description = bien.success.description,
            this.service = bien.success.service,
            this.user_id = bien.success.user_id,
            this.status = bien.success.status
            
 
          
            
        } else {
            
        }

      
     },
  
  
  }
  </script>
  
  <style lang="css" scoped>
  
  .modal-container {
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: center;
    justify-content: center;
     background-color: #fafafa;

  
  }
  
  .modal-container .modal {
     
      max-width: 850px;
      width: 98%;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white;
     
  }
  small{
    color: #f8001b;
}
  
.form_groupe{
    display: flex;
    /* border: 1px solid red; */
    justify-content: center;
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
  .textArea{
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
      padding: 15px 12px;
      cursor: pointer;
      margin-bottom: 9px;
  }
  .data-v{
    display: flex;
    flex-direction: column;

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
@media (max-width:735px) {
    input{
        max-width: 32.5rem;
        width: 98%;
        margin-left: 0px;
        margin-right: 0px;
    }

    textarea{
        font-size: smaller;
        max-width: 520px;
        width: 98%;
    }
    h1{
        font-size: 20px;
    }
}
  
  </style>