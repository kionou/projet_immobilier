<template>
    <div>
       <div class="modal-container" id="modal" v-if="toggle" @click.self="bienDelete">
        
           
              <div class="container">
               {{Iddelete}}
                <p>vous voulez-vous supprimer cette article ?</p>
                <div class="boutton">
                    <button @click="supp">Oui</button>
                    <button @click='close'>Non</button>
                </div>

          </div>
          
        
      </div>
    </div>
  </template>
  
  <script>
    import dataBien from '@/database/requeteBien'
  export default {
      name:'DeleteBien',
      props:['toggle','bienDelete','Iddelete'],
      methods: {
     async supp(){
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
  
  @media (max-width: 900px) {
      body {
          width: 100%;
  
      }
  
      form {
          padding: 10px;
      }
  }
  
  @media (max-width: 768px) {
      body {
          width: 100%;
  
      }
  
    
  
      form {
          padding: 10px;
          width: 90%;
          height: 230px;
          /* border: 1px solid red; */
          align-items: center;
          align-content: center;
      }
  
      input {
          height: 6rem;
          width: 35rem;
      }
  
      button {
          width: 16rem;
          height: 5rem;
      }
  }
  
  @media (max-width: 400px) {
      .container {
          width: 305px;
          height: 529px;
      }
  
      input {
          width: 27rem;
      }
  }
  
  </style>