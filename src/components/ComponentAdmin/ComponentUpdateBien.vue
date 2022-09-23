<template>
    <div>
       <div class="modal-container" >
          <div class="modal">
             <h1>Modifier  des biens immobiliers</h1>
             <form action="">
              <div class="form_groupe">
                  <input type="text" placeholder="Non du bien" v-model="nom_bien">
                  <input type="text" placeholder="Prix du bien" v-model="prix">
              </div>
               <div class="form_groupe">
                  <input type="text" placeholder="Nombre de pieces" v-model="piece">
                  <input type="text" placeholder="superficie" v-model="superficie">
              </div>
               <div class="form_groupe">
                  <input type="text" placeholder="Nombre de chambre" v-model="chambre">
                  <input type="text" placeholder="Nombre de douche" v-model="douche">
              </div>
               <div class="form_groupe">
                  <input type="text" placeholder="Ville " v-model="ville">
                  <input type="text" placeholder="Commune" v-model="commune">
                
              </div>
              <div class="textArea">
                  <textarea name="" id="" cols="71" rows="4" placeholder="Description" v-model="description"></textarea>
              </div>
              <div class="textArea">
                  <textarea name="" id="" cols="71" rows="4"  placeholder="service" v-model="service"></textarea>
              </div>
              <input type="hidden"   v-model="user_id">
             
  
             <label class="custom-file-upload">
              <input type="file" @change="upload" multiple/>
              <i class="fa fa-cloud-upload"></i> 
                  Téléchargement personnalisé
              </label>
  
              <div class="boutton">
                      <button @click.prevent="valider">Modifier un bien</button>
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
  export default {
      
      name:'UpdateBien',
      props:['id'],
     data() {
      return {
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
          image:''
          
      }
     },
     methods: {
     async valider(){
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
             user_id:this.user_id
          }
          console.log(DataBien);
    //    let bien =  await dataBien.UpdateBien(this.id,DataBien)
    //    if (bien.success) {
    //       this.$router.push('/')
          
    //    } else {
    //       console.log('error 404');
          
    //    }
  
      },
     
  
  async upload (e)  {
      const promises = [];
     Object.values(e.target.files).forEach((element)=>{
      console.log(element.name);
      const file=element
      const metadata = {
        contentType: "image/jpeg",
      }
      const storageRef = ref(storage, "temp/" + file.name);
      promises.push(uploadBytes(storageRef, file, metadata).then(uploadResult => {return getDownloadURL(uploadResult.ref)}))
  
  }); 
    
    const photos = await Promise.all(promises);
    this.image = photos
    console.log(this.image);
  
  
  
  
      
      
    
  
  
  
  
  //     let file =e.target.files[0]
  //       const name = new Date().getTime() + file.name;
  
  //       console.log(name);
  //       const storageRef = ref(storage, file.name)
  //       const uploadTask = uploadBytesResumable(storageRef,file);
  
  //       uploadTask.on('state_changed', 
  //      (snapshot) => {
     
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //     switch (snapshot.state) {
  //       case 'paused':
  //         console.log('Upload is paused');
  //         break;
  //       case 'running':
  //         console.log('Upload is running');
  //         break;
  //     }
  //   }, 
  //   (error) => {
     
  //   }, 
  //   () => {
   
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //     });
  //   }
  // );
  
  
      }
     
     },
    async mounted() {
        let bien = await dataBien.GetBienId(this.id)
        console.log(bien.success.prix);
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
            this.user_id = bien.success.user_id
            
          
            
        } else {
            
        }
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
     
    max-width: 900px;
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
      padding: 15px 12px;
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
  
  </style>