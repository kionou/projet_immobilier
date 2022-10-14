<template>
    <div>
       <div class="modal-container" id="modal" v-if="toggle" @click.self="bienDelete">
        
           
              <div class="container">
                <p>vous voulez-vous supprimer cette article ?</p>
                <div class="boutton">
                    <button @click="supp">Oui</button>
                    <button @click='close'>Non</button>
                </div>

          </div>
          
        <div class="loading" v-if="loading">
            <ComponentLoading/>

        </div>
      </div>
    </div>
  </template>
  
  <script>
    import dataBien from '@/database/requeteBien'
    import ComponentLoading from '../ComponentClient/ComponentLoading.vue'
  export default {
      name:'DeleteBien',
      props:['toggle','bienDelete','Iddelete'],
      data() {
        return {
            loading:false
        }
      },
      components:{
        ComponentLoading
      },
      methods: {
     async supp(){
        this.loading = true
            let bien = await dataBien.DeleteBien(this.Iddelete)
            if(bien.success){
               location.reload()            
            }

        },
        close(){
            this.$router.go()
            console.log('ddd')

        }
        
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
      width: 4rem;
      height: 3rem;
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

  
  
  
  .validation {
      color: #f8001b;
  }
  
 
  

  

  
  </style>