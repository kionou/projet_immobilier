<template>
    <div>
        <ComponentModal v-bind:success="success" v-bind:valider="valider" :texte="texte"></ComponentModal>
    <DeleteBien v-bind:toggle="toggle" v-bind:bienDelete="bienDelete" :Iddelete="Iddelete"></DeleteBien>   
          <div class="container-fluid"  >
            <div class="containers" ref="scroll">
                <div class="modifier" v-if="bien.status == 'true'">
                    <div class="boutton">
                    <p class="text">Ce bien est déjà en location</p>

                    </div>
                </div>
                <div class="container">
                  <div class="texte">
                      <p>Location {{bien.nom_bien}} {{bien.superficie}}m2, {{bien.ville}} {{bien.commune}} </p>
                  </div>
                  <div class="ImageHeader">
                      <div class="image">
                          <img :src="bien.images" alt="">
                      </div>
                  </div>
              </div>
              <div class="container-info">
                  <div class="info-right">
                      <h1 class="info-texte">LOCATION {{bien.nom_bien}} {{bien.ville}}</h1>
                      <h3  class="info-texte">{{bien.commune}}</h3>
                      <p  class="info-texte">{{bien.nom_bien}} {{bien.piece}}pieces</p>
                      <div class="icon">
                          <div class="icon-content">
                              <i class="fas fa-door-closed"></i>
                              <samp> {{bien.chambre}} chambres </samp>
                          </div>
                          <div class="icon-content">
                              <i class="fas fa-bath"></i>
                              <samp> {{bien.douche}} douches</samp>
                          </div>
                      </div>
                      <div class="icon">
                          <div class="icon-content">
                            <i class="fas fa-window-frame"></i>
                              <samp> {{bien.piece}} pieces</samp>
                          </div>
                          <div class="icon-content">
                               <i class="fas fa-expand"></i>
                              <samp> {{bien.superficie}} m2</samp>
                          </div>
                      </div>
                  </div>
                  <div class="info-left">
                      <h5>Loyer {{bien.prix}} F CFA/mois charges comprises</h5>
                  </div>
              </div>
              <div class="container-desc">
                  <div class="description">
                      <h5>Description du bien</h5>
                      <p>{{bien.description}}</p>
                  </div>
                  <div id="trait_dessus">
        
                  </div>
                  <div id="trait_dessus">
                
                  </div>
                  <div class="proximite">
                      <h5>Services à proximité</h5>
                      <p>{{bien.service}} </p>
                  </div>
              </div>
              <div class="container-image">
                
                  <div class="Images" v-for="image in bien.images" :key="image.id">
                      <img :src="image" alt="">
                  </div>
              
              </div>
              <div class="boutton" v-if="bien.user_id == '001'">
                <button class="update" @click="vendre()">Vendu</button>
              </div>

              <div v-else class="modifier">
                <div  class="boutton" v-if="bien.status != 'true'">
                    <button class="update"  @click="valider()"> En location</button>
                    <button class="update" @click="update()">Modifier</button>
                    <button class="delete" @click="bienDelete(bien.id)"  >Supprimer</button>
                </div>
                <div  class="boutton vendu" v-else >
                   
                    <button class="update" :disabled="isActive"   @click="vendre()"> En location</button>
                    <button class="update" :disabled="isActive"  @click="update()">Modifier</button>
                    <button class="delete" :disabled="isActive"  >Supprimer</button>
                </div>
               
              </div>

            </div>
                
          </div>
    </div>
  </template>
  
  <script>
    import dataBien from '@/database/requeteBien';
    import ComponentModal from '../ComponentAdmin/ComponentModal.vue';
    import DeleteBien from '../ComponentAdmin/DeleteBien.vue';
  export default {
      name:"BienDetail",
      props:['id'],
      components:{
        ComponentModal,
        DeleteBien
      },
      data() {
        return {
            bien:'',
            isActive:true,
            texte:'',
            toggle:false,
            success:false,
            Iddelete:''
            
        }
      },
      methods: {
      async  valider(){
            console.log(this.id);
            let bien = await dataBien.UpdateBienVendu(this.id)
            if (bien.success) {
            console.log('sdd',bien)
            this.success = !this.success
                
            } else {
                
            }

        },
        bienDelete(){
        this.toggle = !this.toggle
        this.Iddelete = this.id

    },
        update(){
            this.$router.push(`/dashbord/updatebien/${this.id}`) 

        }
   
      },
    async  mounted() {

  
        this.$refs.scroll.scrollTop= this.$refs.scroll.scrollHeight;
        this.$refs.scroll.scrollTo(0,document.body.scrollHeight)

        let bien = await dataBien.GetBienId(this.id)
        if (bien.success) {
            this.bien = bien.success
            console.log('sdd',bien.success.user_id)
            this.texte = `Vous aviez mis ${bien.success.nom_bien} en location`
            
        }
   
      },
      
  
  }
  </script>
  
  <style lang="css" scoped>
      .ImageHeader{
      /* border: 1px solid red; */
      width: 100%;
      height: auto;
      bottom: 0;
      border-radius: 10px;
  
  }
  
  .container-fluid{
    
      width: 100%;
      height: 92.5vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    background-color: #f4f4fa;
      overflow-y: scroll;
      scrollbar-width: thin;
      /* border: 1px solid red; */
  
  }
  .containers{
    /* border: 1px solid blue; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    padding: 10px 0;

  }
  .trait-blue{
      height: 50px;
      background-color: #2288ff;
      width: 100%;
  }
  
  .container{
      width: 80%;
      height: auto;
      /* border: 1px solid blue; */
      background-color: white;
      padding: 10px;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      margin: 30px 0;
  }

  .texte{
      font-family: 'Roboto Serif', serif;
      height: 42px;
      text-align: left;
}
  
  .texte p{
      font-size: large;
      margin-top: revert;
  }
  
  .image img{
      width: 100%;
      /* height: 100vh; */
      vertical-align: middle;
      border-radius: 10px;
  }
  
  .container-info{
      margin-top: 30px;
      width: 80%;
      height: auto;
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white;
  
  }
  
  .info-right{
      width: 70%;
      height: auto;
      /* border: 1px solid green; */
      text-align: center;
      padding: 10PX;
  }
  .icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
     
  }
  
  .icon-content {
      display: flex;
      font-size: 17px;
      font-family: 'Roboto Serif', serif;
      margin-right: 16px;
      width: 161px;
      height: 40px;
      border-radius: 10px;
      background-color: white;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 20%);
  
  }
  
  .info-texte{
      margin-bottom: 10px;
      text-transform: uppercase;
  }
  
  .info-left {
      width: 30%;
      /* height: 110%; */
      /* border: 1px solid blueviolet; */
      padding: 10px;
      font-size: 26px;
      color: #2288ff;
  }
  
  .container-desc {
      margin-top: 30px;
      width: 80%;
      height: auto;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white;
      padding: 10px;
      text-align: center;
      font-size: 20px;
  
  }
  
  #trait_dessus {
      border-top: 1px solid #d2d2d4;
      width: 100%;
      padding: 6px;
      margin-top: 20px;
  
  }
  
  .container-desc h5{
      text-decoration: underline;
      margin-bottom: 10px;
  }
  
  .container-image {
      margin-top: 30px;
      width: 80%;
      height: auto;
      /* border: 1px solid red; */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white;
      padding: 20px;
  
  }
  
  .Images{
      width: 400px;
      height: 400px;
      border: 1px solid #2288ff;
      margin-right: 9px;
      margin-bottom: 20px;
      padding: 5px;
  }
  
  .Images img {
      width: 100%;
      height: 100%;
  }
  .modifier{
    width: 80%;
    display: flex;
    justify-content: center;
  }
.modifier .text{
   font-size: larger;
    color: red;
}
.vendu .update{
    background-color: hsla(206,100%,73.3%,1);
}
.vendu .update:hover{
    background-color: hsla(206,100%,73.3%,1);
    color:white ;
   cursor: not-allowed;
   pointer-events: all !important;
   border: none;

}
.vendu .delete{
    background-color: hsl(11deg 92% 73%);
}
.vendu .delete:hover{
    background-color: hsl(11deg 92% 73%);
    color:white ;
   cursor: not-allowed;
   pointer-events: all !important;
   border: none;

}
    .boutton{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 15px 0;
        justify-content: space-evenly;
        box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
        background-color: white;

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
    
 

  @media (max-width:700px) {
      .container-info{
          flex-direction: column;
      }
  
      .info-left{
          width: 54%;
          font-size: 23px;
      }
  } 
  
  
  </style>