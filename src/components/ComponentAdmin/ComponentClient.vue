<template>
    <div ref="scroll">
        <div class="loading" v-if="loading">
            <ComponentLoading/>
        </div>
        <div class="contenu" v-else>
                  <div class="contenu_card">

                           <div class="carnet" >
                            <div class="alert" v-if="alert">
                                    {{alert}}
                            </div>
                              
                               <div class="table-container" v-else>
                                   <h1 class="heading">
                                       La liste des clients
                                   </h1>
                                   
                                   <table class="table">
                                           <thead>
                                               <tr>
                                                   <th>Nom du client</th>
                                                   <th>Adresse Email</th>
                                                   <th>Numero</th>
                                                   <th>Voir le bien</th>
                                               </tr>
                                           </thead>
                                           <tbody v-for="user in users" :key="user.id">
                                               <tr >
                                                   <td  data-label="Nom du client">
                                                     
                                                       
                                                      <p>{{user.nom}}</p>
                                                      
                                                     
  
                                                   </td>
                                                   <td data-label="Adresse Email">{{user.email}}
  
                                                      
                                                   </td>
                                                   <td data-label="Numero">{{user.numero}}</td>
                                                  
                                                   <td class="doctor" data-label="Action" >
                                                      <i class="fa-solid fa-eye" @click="redirect(user.bien_id)"></i>
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
  import dataUser from '@/database/requeteClient';
  import BienDetail from './BienDetail.vue';
  import UpdateBien from './ComponentUpdateBien.vue';
  import ComponentLoading from '../ComponentClient/ComponentLoading.vue';
  
  export default {
      name:'ComponentBien',
      props:['id'],
      components:{
      UpdateBien,
      'detail':BienDetail,
      ComponentLoading
  
  },
      data(){
      return{
          revele:false,
          component:'',
          users:'',
          alert:'',
          loading:true
         
      }
  },
  methods:{
    
      redirect(id){
          this.$router.push(`/dashbord/bien/${id}`)
              console.log(id);
         
      },
   
  },
  async mounted(){


    this.$refs.scroll.scrollTop= this.$refs.scroll.scrollHeight;
    this.$refs.scroll.scrollTo(0,document.body.scrollHeight)


      let user = await dataUser.AfficherUser()

      if (user.success) {
          this.users=user.success  
          this.loading = false 
      }else if (user.alert) {
        this.alert = user.alert
        this.loading = false 

        
      } else {
        console.log('eeeq');
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
      padding-top: 10px;
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
      padding:3px;
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
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
        overflow-y: scroll;
      scrollbar-width: thin;
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

  
 
    .alert{
    border: 1px solid #B3B3B3;
    width: 100%;
    max-width: 900px;
    padding: 60px 0;
    font-size: 30px;
    position: absolute;
    top: 44%;

    }

    .fa-eye{
      padding: 10px;
      width: 80px;
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