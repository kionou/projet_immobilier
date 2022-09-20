<template>
  <div>
   
        <div class="container">
        <div class="menu">
            <div class="image">
                <img src="@/assets/images/logopng.png" alt="">
            </div>
            <nav>
                <p v-on:click="component='bien'">Liste des Biens</p>
                <p v-on:click="component='agent'">Liste des Agents</p>
                <p v-on:click="component='detail'">Liste des Clients</p>
            </nav>
         
        </div>
        <div class="content">
            <div class="search">
                <form action="">
                    <input type="text" placeholder="Recherchez">
                </form>  
                <div class="btn">
                    <p>Deconnecter</p>
                </div>
            </div>
            <component v-bind:is="component"></component>
           
            
           
        </div>
    </div>
  </div>
</template>

<script>
  import ComponentBien from './ComponentBien.vue';
  import ComponentAgent from './ComponentAgent.vue';
  

 
export default {
  name:"ComponentDashbord",
  components:{
    "bien": ComponentBien,
    "agent": ComponentAgent,
   
},
  data (){
    return{
      component:'bien'
    }
  }

}
</script>

<style lang="css" scoped>

  
.container{
    width: 100%;
    height: 100vh;
    /* border: 1px solid red; */
    display: flex;

}

.menu{
    border: 1px solid blue;
    /* width: 15%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 5px;
    background-color: #2D3748;
    color: #fff;

}

.image{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid red;
}
.image img{
    width: 100%;
    height: 100%;
}

nav{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-top: 30px;
   
}
nav p {
    /* border: 1px solid red; */
    font-size: 25px;
    padding: 10px 20px;
    width: 100%;
}
nav p:hover  {
  background-color: aliceblue;
  color: black;
  cursor: pointer;
}

.btn {
    bottom: 0%;
}
  .content {
      width: 100%;
      height: 100%;
     /* border: 1px solid black;*/
      /* padding: 10px; */
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 8px;
  }
  

.content .search{
    height: 70px;
    border: 1px solid blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
   padding: 2px 10px ;
}
input{
    height: 2.3rem;
    width: 400px;
    border-radius: 10px;
    border: 1px solid #eee;
    outline: none;
    padding: 10px;
    font-size: 17px;
}
.btn{
    border: 1px solid ;
    padding: 1rem 1.5rem;
    border-radius: 20px;
    font-size: 17px;
    background-color: #2288ff;
    color: white;
}
.btn:hover{
    color: #2288ff;
    background-color: white;
}

</style>