<template>
  <div>
    <ModalBien v-bind:revele="revele" v-bind:submit="submit" :agentId="agentId"></ModalBien>
    <DeleteBien v-bind:toggle="toggle" v-bind:bienDelete="bienDelete" :Iddelete="Iddelete"></DeleteBien>

      <component v-bind:is="component"></component>
      <div class="loading" v-if="loading">
    <ComponentLoading/>
      </div>
      <div class="contenu" v-else>
                <div class="boutton addbtn" @click="submit()">
                    <p>Ajouter un bien</p>
                </div>
                <div class="contenu_card">
                 
                   
                       
                       
                         <div class="carnet">

                         <div class="alert" v-if="alert">
                           {{alert}}
                          </div>
                            
                             <div class="table-container" v-else>
                              
                                 <h1 class="heading">
                                     La liste des biens Immobiliers
                                 </h1>
                        
                                 <table class="table">
                                         <thead>
                                             <tr>
                                                 <th>Nom du bien</th>
                                                 <th>Prix</th>
                                                 <th>Localite</th>
                                                 <th>Action</th>
                                             </tr>
                                         </thead>
                                         <tbody v-for="bien in biens" :key="bien.id">
                                             <tr >
                                                 <td  data-label="Nom du bien et Image">
                                                    <div  class="doctor">
                                                        <div class="images">
                                                        <img :src="bien.images[0]" alt="">
                                                    </div>
                                                    <p>{{bien.nom_bien}}</p>
                                                    </div>
                                                   

                                                 </td>
                                                 <td data-label="Prix">{{bien.prix}}FCFA

                                                    
                                                 </td>
                                                 <td data-label="Ville">{{bien.ville}} {{bien.commune}}</td>
                                                
                                                 <td  data-label="Actions">
                                                    <div  class="doctors">
                                                    <i class="fa-solid fa-eye"  @click="detail(bien.id)" ></i>
                                                    <i class="fa-solid fa-pen-to-square" @click="redirect(bien.id)"></i>
                                                    <i class="fa-solid fa-trash" @click="bienDelete(bien.id)"></i>
                                                    </div>
                                                   
                                                 </td>
                                               
                                             </tr>
                                           
                                         </tbody>
                                     </table>
                             </div>
                             
                                 
                        </div>
                    
                    
                </div>
                

            </div>
            
  </div>
</template>

<script>
import dataBien from '@/database/requeteBien';
import ModalBien from './ModalBien.vue';
import UpdateBien from './ComponentUpdateBien.vue';
import DeleteBien from './DeleteBien.vue';
import ComponentLoading from '../ComponentClient/ComponentLoading.vue';

export default {
    name:'ComponentBien',
    props:['bien','Iddelete','agentId'],
    components:{
    ModalBien,
    UpdateBien,
    DeleteBien,
    ComponentLoading

},
    data(){
    return{
        revele:false,
        toggle:false,
        component:'',
        biens:'',
        Iddelete:'',
        alert:'',
        agentId:'',
        loading:true
       
    }
},
methods:{
    submit(){
        this.revele = !this.revele
        this.agentId = "001"
    },
    redirect(id){
        this.$router.push(`/dashbord/updatebien/${id}`)  
    },
    bienDelete(id){
        this.toggle = !this.toggle
        this.Iddelete = id

    },
    detail(id){
        this.$router.push(`/dashbord/bien/${id}`)

    }
 
},
async mounted(){
    let bien = await dataBien.AfficherBien()
    if (bien.success) {
        this.biens=bien.success
        this.loading  = false

        
    } else if (bien.alert) {
        this.alert=bien.alert
        this.loading  = false
        
    } else {
        console.log('err 404');
        
    }
   
    }

}
</script>

<style lang="css" scoped>

.contenu{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    height:calc(100vh - 64px);
}

.boutton{
   margin-top: 10px;
    text-align: center;
    border: 1px solid;
    padding: 1rem 1.5rem;
    border-radius: 20px;
    font-size: 17px;
    background-color: #2288ff;
    color: white;
    font-family: 'Roboto Serif', serif;
}


.boutton:hover{
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}

.contenu_card{
    width: 100%;
    height: 100%;
    /* border: 1px solid black; */
    margin-top: 10px;
    padding: 3px 3Px 0;
}

.content {
      width: 100%;
      height: 100%;
     /* border: 1px solid black;*/
      padding: 10px;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 8px;
      position: relative;
  }
   
  .carnet {
      border: solid 1px #B3B3B3;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      align-items: center;
      position: relative;
  }
  .table-container{
      padding: 0 10px;
      margin: 40px auto 0;
      width: 100%;
  }
  
  .heading{
      font-size: 40px;
      text-align: center;
      color: #3c3f44;
      margin-bottom: 40px;
  }
  .table{
      width: 100%;
      border-collapse: collapse;
  }
  .table thead{
      background-color: rgb(15,142,240)
  }
  
  .table thead tr th{
      font-size: 14px;
      font-weight: 600;
      letter-spacing:0.35px;
      color:#fff;
      opacity:1;
      padding:12px;
      vertical-align: top;
      border:1px solid #3c3f44;
  
  }
  
  .table tbody tr td{
      font-size: 14px;
      letter-spacing: 0.35px;
      font-weight: normal;
      color: #3c3f44;
      padding: 8px;
      text-align: center;
      border: 1px solid #3c3f44;
  }
  span{
      width: 100%;
  }
  .images{
    width: 40px;
    height: 40px;
   
}
.images img{
    width: 100%;
    height: 100%;
}

  .doctor{
     display: flex;
     justify-content: space-around;
     align-items: center;
  
  }
  .doctors{
     display: flex;
     justify-content: space-around;
     align-items: center;
  
  }
  .alert{
      border: 1px solid #B3B3B3;
      text-align: center;
      font-size: 30px;
      position: absolute;
      top: 44%;
      width: 100%;
      max-width: 900px;
      padding: 60px 0;
  }

  .fa-trash{
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: red;
    border: 1px solid red;

  }
  .fa-eye{
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #B3B3B3;
    border-radius: 1px solid #b3b3b3;
  }
  .fa-eye:hover{
    background-color: white;
    color:  #b3b3b3;
    border: 1px solid #B3B3B3;
  }
  .fa-trash:hover{
    background-color: white;
    color: red;
    
  }
  .fa-pen-to-square{
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: #2288ff;
    border: 1px solid #2288ff;
  }
  .fa-pen-to-square:hover{
    background-color: white;
    color: #2288ff;

  }

  @media (max-width: 768px) {
      .table thead{
          display: none;
      }
      .table .table tbody,.table tr,.table td{
          display: block;
          width: 100%;
      }
      .table tr{
          margin-bottom: 15px;
      }
      .table tbody tr td{
          text-align: right;
          padding-left: 50%;
          position: relative;
      }
      .table td:before{
          content:attr(data-label);
          position: absolute;
          left: 0;
          width: 50%;
          padding-left: 15px;
          font-weight: 600;
          font-size:14px;
          text-align:left
      }

      .heading{
        font-size: 30px;
      }  
      
      .doctor{
        justify-content: flex-end;
      }
      .images{
        margin-right: 10px;
      }

      .addbtn{
        display: none;
    }

  }


</style>