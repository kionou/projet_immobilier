<template>
  <div>
    <!-- <ModalAgent v-bind:revele="revele" v-bind:submit="submit"></ModalAgent> -->
     <div class="contenu1">
                <div class="boutton" @click="submit">
                    <p>Ajouter un Bien</p>
                </div>
                <div class="contenaire_card">
                    <!-- <div class="messages">
                        <div class="message">
                            <span>Vous n'aviez pas de bien immobilier pour l'instant!</span>
                            <div class="boutton" @click="submit">
                            <p>Ajouter un Bien</p>
                            </div>
                        </div>
                       

                    </div> -->
                   
        <div class="content-card">
            <div class="card-image"> 
                <img src="@/assets/images/1.jpg" alt="">         
            </div>
            <div class="card-body">
                <div class="body-text">
                <h3>fsqgjhqg</h3>
                </div>
                <div class="body-text">
                <p>fdjkbdkb</p>
                </div>
                <div class="body-text">
                <p> 4/300m</p>
                </div>
                <div class="icon">
                    <div class="icon-content">
                        <i class="fas fa-door-closed"></i>
                        <samp>4</samp>
                    </div>
                    <div class="icon-content">
                        <i class="fas fa-bath"></i>
                        <samp> 2</samp>
                    </div>
                </div>
                    <div class="">
                        <div id="trait_dessus">
                         
                        </div>
                    </div>
                    <div class="">
                        <p>loyer 1000F CFA/mois</p>
                    </div>
                    <div class="btn">
                         <button class="btncard">
                              <p @click="redirect">Détail</p>
                         </button>
                    </div>
            </div>
        </div>
                  
                </div>
            </div>
  </div>
</template>

<script>

// import ModalAgent from './ModalAgent.vue';
export default {
    name:'ComponentBien',
    components:{
    // ModalAgent,
  
},
// data(){
//     return{
//         revele:false
//     }
// },
// methods:{
//     submit(){
//         this.revele = !this.revele
//     }
// }

}
</script>

<style lang="css" scoped>

    
  .contenu1{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    height: 93vh;
}

.boutton{
   /* margin-top: 10px; */
    text-align: center;
    border: 1px solid;
    padding: 1rem 1.5rem;
    border-radius: 20px;
    font-size: 17px;
    background-color: #2288ff;
    color: white;
    font-family: 'Roboto Serif', serif;
}
.messages{
    /* border: 1px solid blue; */
    width: 80%;
    height: 80vh;
    display: flex;
   
    align-items: center;
    justify-content: center;
}
.messages span{
    margin-bottom: 10px;
    font-size: 25px;
}
.message{
    border: 1px solid #ccc;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.boutton:hover{
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}
.contenaire_card{

    width: 99%;
    height: 93vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 3rem;
    background-color: white;
    padding: 10px;
    justify-items: center;
    border-radius: 10px;
    border: 1px solid red;
    

}
.content-card{
    width: 290px;
    height: 440px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    overflow: hidden;
    text-align: center;
    font-family: 'Roboto Serif', serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.content-card:hover{
    transform: translateY(-10px);
    transition: 0.5s;
}

.card-image img{
    width: 100%;
    height: 200px;
    padding: 5px;
    object-fit: cover;
    vertical-align: middle;
}
.card-body{
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;
}

.body-text {
    display: flex;
    margin-bottom: 11px;
}

.icon{
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
}

.icon-content{
    display: flex;
    font-size: 15px;
    font-family: 'Roboto Serif',    serif;
    margin-right: 16px;
    width: 161px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0 0 5px  rgba(0, 0, 0, 20%);
    
}

.trait{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#trait_dessus {
    border-top: 1px solid #2288ff;
    width: 100%;
    padding: 6px;

}

.text p {
    display: flex;
    margin-bottom: 11px;
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
}
.btncard{
    width: 85px;
    height: 37px;
    text-align: center;
    border: none;
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    margin-top: 10px;
}
.btncard p {
    color: white;
    font-family: 'Roboto Serif', serif;
}

.btncard:hover{
    background-color: white;
    border: 1px solid #2288ff;
    cursor: pointer;
}

.btncard:hover p {
    color: #2288ff;
}


</style>