<template>
    <div>
       <div class="modal-container" id="modal" v-if="success" @click.self="valider" >      
         <div class="container">
         <div class="btn-close" @click="close">
            <img src="@/assets/images/cross-out-mark-674638.png" alt="">
        </div>
        <div class="image">
            <img src="@/assets/images/clipart1725690.png" alt="">
        </div>
        
                <p>{{texte}}</p>
          </div>
          
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'ComponentModal',
      props:['success','valider','texte'],
      data() {
        return {
         
        }
      },
      methods: {
    
        close(){
          if( this.texte === 'Inscription reçu avec success veillez-vous connecter merci!'){
            this.$router.push('/login')

          }else{
           this.$router.go()
          }

        }
        
      },
  
  }
  </script>
  
  <style lang="css" scoped>
  
  .modal-container {
   
      height: 119vh;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .3);
      z-index: 9;
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
      justify-content: space-evenly;
      padding: 10px;
     
  }
  .image{
    /* border: 1px solid red; */
    width: 100px;
    height: 100px;
}
  .image img{
    width: 100%;
    height: 100%;
}
.btn-close{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
    color: aqua;
    cursor: pointer;
    padding: 2px;
}

.btn-close img{
    width: 100%;
    height: 100%;
    color: aqua;
}


.modal-container .modal p {
    font-size: 19px;
    margin-top: 10px;
    
}



  
  </style>