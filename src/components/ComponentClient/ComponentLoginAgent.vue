<template>
    <div>
      <div class="ImageHeader">
          <div class="container">
              <div class="image">
                  <img src="@/assets/images/logopng.png" alt="">
              </div>
           
              <div class="texte">
                  <h2>CONNEXION</h2>
              </div>
              <form action="/connexion
              " method="post">
                    
                  <input type="email" name="email" placeholder="Adresse Email">
                        
                  <input type="password" name="password" placeholder="Mot de passe">
                  <button type="submit" value="Submit">Connecter</button>
              </form>
             
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"ComponentLoginAgent",
      data() {
          return {
              
          }
      },
      methods: {
        
      },
  
  }
  </script>
  
  <style lang="css" scoped>
  .ImageHeader {
      background: url('@/assets/images/4.jpg') no-repeat center;
      background-size: 100% 100%;
      height: 100vh;
      width: 100%;
      text-align: center;
      bottom: 0;
      border-radius: 10px;
      position: relative;
  }
  
  input {
      margin-bottom: 2rem;
      height: 3rem;
      width: 20rem;
      padding: 5px;
      font-size: 18px;
      outline: none;
      border: 1px solid ;
      font-family: 'Roboto Serif',
      serif;
  }
  
  input:focus {
      border: 1px solid #2288ff;
      outline-offset: 0px;
      outline: none;
  }
  
  
  button{
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
  button:hover{
      background-color: white;
      color: #2288ff;
      border: 1px solid #2288ff;
      cursor: pointer;
  }
  
  
  .container {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 370px;
      height: 555px;
      border: 1px solid #2288ff;
      background-color: white;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: auto;
      margin-left: auto;
  }
  
  
  .image{
      border: 1px solid #2288ff ; 
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 15px 0;
      /* background-color: aqua; */
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .image img{
      width:100px ;
      height: 100px;
      padding: 1px;
  }
  
  .texte{
      text-align: center;
      padding: 10px;
  }
  
  form{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px;
  }
  
  .sanp{
      background-color: #2288ff;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      font-family: 'Roboto Serif',
      serif;
      text-decoration: none;
      padding: 5px;
  }
  .sanp:hover {
      background-color: white;
      color: #2288ff;
      border: 1px solid #2288ff;
      cursor: pointer;
  }
  
  .validation{
      color: #f8001b;
  }
  
  @media  (max-width: 900px){
      body{
          width: 100%;
  
      }
      form{
          padding: 10px;
      }
  }
  
  @media (max-width: 768px) {
      body {
          width: 100%;
  
      }
  
      .texte{
              font-size: 16px;
      }
  
      form {
          padding: 10px;
          width: 90%;
          height: 230px;
          /* border: 1px solid red; */
          align-items: center;
          align-content: center;
      }
  
      input{
              height: 6rem;
              width: 35rem;
      }
  
      button{
              width: 16rem;
              height: 5rem;
      }
  }
  
  @media (max-width: 400px) {
     .container{
         width: 305px;
         height: 529px;
     }
  
     input{
         width: 27rem;
     }
  }
  
  </style>