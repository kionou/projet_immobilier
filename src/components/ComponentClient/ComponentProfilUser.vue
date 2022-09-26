<template>
    <div class="container">
      <div class="content">
        <div class="image">
          <img src="@/assets/images/image.jpg" alt="">
  
        </div>
        <div class="info">
          <h3>Informations</h3>
          <div class="tableau">
            <div class="tableau-heaeder">
              <p>Nom                  :</p>
              <p>Prenom:</p>
              <p> Email    :</p>
              <p>Numéro :</p>
            </div>
            <div class="tableau-content">
              <p>Kionou</p>
              <p>Mamamdou</p>
              <p>Kionumamamadou00@gmail.com</p>
              <p>0908070687</p>
            </div>
          </div>
          <div  class="boutton " >
                     <button class="update"   @click="update()">Modifier</button>
                     <button class="delete"   >Supprimer</button>
            </div>
        </div>
  
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="css" scoped>
    .container{
      width:100%;
      height:100vh;
      /* border:1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ccc;
  
    }
    .content{
      /* border: 1px solid blue; */
      width: 70%;
      height: 40vh;
      padding: 10px;
      display: flex;
      box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
      background-color: white;
    }
  
    .image{
      border: 1px solid black;
      max-width: 300px;
      width: 98%;
      height: 100%;
      padding: 10px;
    }
    .image img{
      width: 100%;
      height: 100%;
      border: 1px solid grey;
    }
    .info{
      /* border: 1px solid red; */
      width: 100%;
    }
    h3{
      font-size: 30px;
      padding-bottom: 15px;
    }
    .tableau{
      /* border: 1px solid black; */
      height: auto;
      padding: 10px;
      display: flex;
      justify-content: space-evenly;
    }
    .tableau-heaeder{
      /* border: 1px solid blue; */
      font-weight: 700;
      font-size: 25px;
      line-height: 4rem;
      text-align: left;
    }
  
    .tableau-content{
      /* border: 1px solid gray; */
      font-size: 17px;
      line-height: 4rem;
      text-align: initial;
    }
  
    .boutton{
  
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          padding: 15px 0;
          justify-content: space-evenly;
      
  
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
    
  
  </style>