<template>
  <div>
    <ModalBien v-bind:revele="revele" v-bind:submit="submit" :agentId="agentId" ></ModalBien> 
  
     <div class="contenu1"  >
                <div class="boutton" @click="submit">
                    <p>Ajouter un Bien</p>
                </div>
                <div class="contenaire_card">
                    <div class="messages" v-if="alert">
                        <div class="message">
                            <span>{{alert}}</span>
                            <div class="boutton" @click="submit">
                            <p>Ajouter un Bien</p>
                            </div>
                        </div>
                      

                    </div>
                   
        <div class="content-card" v-for="bien in biens" :key="bien.id" v-else>
            <div class="card-image"> 
                <img :src="bien.images[0]" alt="">         
            </div>
            <div class="card-body">
                <div class="body-text">
                <h3>{{bien.ville}} - {{bien.commune}}</h3>
                </div>
                <div class="body-text">
                <p>{{bien.nom_bien}}</p>
                </div>
                <div class="body-text">
                <p> {{bien.piece}}pièces/{{bien.superficie}} m2</p>
                </div>
                <div class="icon">
                    <div class="icon-content">
                        <i class="fas fa-door-closed"></i>
                        <samp>{{bien.chambre}} chambres</samp>
                    </div>
                    <div class="icon-content">
                        <i class="fas fa-bath"></i>
                        <samp>{{bien.douche}} douches</samp>
                      
                    </div>
                </div>
                    <div class="">
                        <div id="trait_dessus">
                         
                        </div>
                    </div>
                    <div class="">
                        <p>loyer {{bien.prix}}F CFA/mois</p>
                    </div>
                    <div class="btn">
                         <button class="btncard">
                              <p @click="redirect((bien.id))">Détail</p>
                         </button>
                    </div>
            </div>
        </div>
      
                </div>
     </div>
  </div>
</template>

<script>
import dataBien from '@/database/requeteBien';
import ModalBien from '../ComponentAdmin/ModalBien.vue';

export default {
    name:'ComponentBien',
    props:['agentId','id'],
    components:{
        ModalBien,
        
        
  
},
data(){
    return{
        revele:false,
        agentId:'',
        biens:'',
        alert:'',
      

    }
},
methods:{
    submit(){
        this.revele = !this.revele
        this.agentId = this.id
    },
    redirect(id){
        this.$router.push(`/agent/bien/detail/${id}`)

    }
},
async mounted() {
    let bien = await dataBien.GetBienUser(this.id)
    console.log(bien);
    if (bien.success) {
        console.log(bien.success);
        this.biens = bien.success

        
    }else if(bien.alert){
        this.alert = bien.alert
  


    }else{
        console.log('erreur404')

    }
    
},

}
</script>

<style lang="css" scoped>

    
  .contenu1{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    height: 93vh;
}

.boutton{
   margin: 10px;
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
    border: 1px solid #ccc;
    

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