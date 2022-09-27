<template>
    <div>
       <div class="modal-container" id="modal" v-if="toggle" @click.self="bienDelete">
        
           
              <div class="container">
               
                <p>vous voulez-vous supprimer cette article ?</p>
             

          </div>
          
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'ComponentModal',
      props:['toggle','bienDelete','Iddelete'],
      methods: {
   
        close(){
            this.toggle = false
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



  
  </style>