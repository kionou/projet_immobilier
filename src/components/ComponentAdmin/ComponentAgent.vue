<template>
  <div>
    <ModalAgent v-bind:revele="revele" v-bind:submit="submit"></ModalAgent>
     <div class="contenu1">
                <div class="boutton" @click="submit">
                    <p>Ajouter un Agent</p>
                </div>
                <div class="contenaire_card">
                    <div class="content-card">
                        <div class="card-image">
                           
                            <img src="@/assets/images/image.jpg" alt="">   
                             
                        </div>
                        <div class="card-body">
                            <div class="body-text">
                                <i class="fa-solid fa-user"></i>
                            <p>Kionou Mamadou</p>
                            </div>
                            <div class="body-text">
                                <i class="fa-solid fa-envelope"></i>
                            <p>Kionoumama@gma.com</p>
                            </div>
                            <div class="body-text">
                            <i class="fa-solid fa-phone"></i>
                            <p> 85899568945886</p>
                            </div>
                            <div class="icon">
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fa-solid fa-trash"></i>
                              
                       </div>
                        </div>
                    </div>
                  
                </div>
            </div>
  </div>
</template>

<script>

import ModalAgent from './ModalAgent.vue';
export default {
    name:'ComponentAgent',
    components:{
    ModalAgent,
  
},
data(){
    return{
        revele:false
    }
},
methods:{
    submit(){
        this.revele = !this.revele
    }
}

}
</script>

<style lang="css" scoped>

    
  .contenu1{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    height: 89vh;
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
.contenaire_card{

    width: 99%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 3rem;
    background-color: white;
    padding: 10px 21px;
    justify-items: center;
    border-radius: 10px;
    border: 1px solid red;
    

}

.content-card{
    width: 250px;
    height: 408px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    overflow: hidden;
    text-align: center;
    font-family: 'Roboto Serif', serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.content-card:hover{
    transform: translateY(-10px);
    transition: 0.5s;
}

.card-image {
    width: 100%;
    height: 210px;
    padding: 5px;
  
}
.card-image img{
    width: 100%;
    height: 100%;
    /* object-fit: cover;
    vertical-align: middle; */
}

.card-body{
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
}

.body-text {
    display: flex;
    margin-bottom: 11px;
    justify-content: center;
    border: 1px solid red;
    flex-direction: column;

}
.icon{
   
    display: flex;
    justify-content: space-evenly;
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

</style>