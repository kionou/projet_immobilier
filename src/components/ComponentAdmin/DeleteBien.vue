<template>
    <div>
       <div class="modal-container" id="modal" v-if="toggle" @click.self="bienDelete">
          <div class="modal">
           
              <div class="container">
                <p>vous voulez-vous supprimer cette article ?</p>
                <div class="boutton">
                    <button>oui</button>
                    <button>nom</button>
                </div>
            
       
            
          </div>
          
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:'DeleteBien',
      props:['toggle','bienDelete']
  
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
  
  .modal-container .modal {
    
      margin: 0 10px;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  

  
  
  button {
      width: 9rem;
      height: 3rem;
      margin-bottom: 10px;
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
      width: 370px;
      height: 555px;
      border: 1px solid #2288ff;
      background-color: white;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
     
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