<template>
  <div>
    <ModalBien v-bind:revele="revele" v-bind:submit="submit"></ModalBien>
      <component v-bind:is="component"></component>
      <div class="contenu">
                <div class="boutton" @click="submit">
                    <p>Ajouter un bien</p>
                </div>
                <div class="contenu_card">
                   
                       
                       
                         <div class="carnet">
                            
                             <div class="table-container">
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
                                         <tbody>
                                             <tr >
                                                 <td  data-label="date de l'acte" class="doctor">
                                                    <div class="images">
                                                        <img src="@/assets/images/1.jpg" alt="">
                                                    </div>
                                                    <p>Immeuble</p>

                                                 </td>
                                                 <td data-label="Vaccin utilisé">500.000 FCFA

                                                    
                                                 </td>
                                                 <td data-label="Protège contre">Abidjan Cocody-angre</td>
                                                
                                                 <td class="doctor" >
                                                    <i class="fa-solid fa-eye"  v-on:click="component='detail'" ></i>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
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

import ModalBien from './ModalBien.vue';
import BienDetail from './BienDetail.vue'

export default {
    name:'ComponentBien',
    components:{
    ModalBien,
    'detail':BienDetail

},
    data(){
    return{
        revele:false,
        component:''
       
    }
},
methods:{
    submit(){
        this.revele = !this.revele
    },
 
}

}
</script>

<style lang="css" scoped>

.contenu{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    height:89vh;
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
    border: 1px solid black;
    margin-top: 10px;
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
  }
   
  .carnet {
      border: solid 1px #B3B3B3;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      justify-content: space-between;
      align-items: center;
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
  
  }
  .alert{
      border: 1px solid #B3B3B3;
      padding: 20px 50px;
      text-align: center;
      margin-top: 90px;
      font-size: 30px;
      border-radius: 8px;
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
      
  }


</style>