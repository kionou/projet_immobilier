<template>
  <div ref="scroll">
    <ModalAgent v-bind:revele="revele" v-bind:submit="submit" ></ModalAgent>
    <DeleteAgent v-bind:toggle="toggle" v-bind:agentDelete="agentDelete" :Iddelete="Iddelete" :texte="texte" :email="email"></DeleteAgent>
        <div class="loading" v-if="loading">
            <ComponentLoading/>
        </div>
     <div class="contenu1"   v-else  >
                <div class="boutton addbtn" @click="submit">
                    <p>Ajouter un Agent</p>
                </div>
                <div class="contenaire_card" >
                    <div class="alert" v-if="alert">
                        {{alert}}
                    </div>
                    <div class="content-card" v-for="agent in agents " :key="agent.id" v-else>
                        <div class="card-image">
                           
                            <img :src="agent.image" alt="">   
                             
                        </div>
                        <div class="card-body">
                            <div class="body-text">
                                <i class="fa-solid fa-user"></i>
                            <p>{{agent.nom}} {{agent.prenom}}</p>
                            </div>
                            <div class="body-text">
                                <i class="fa-solid fa-envelope"></i>
                            <p>{{agent.email}}</p>
                            </div>
                            <div class="body-text">
                            <i class="fa-solid fa-phone"></i>
                            <p> {{agent.numero}}</p>
                            </div>
                            <div class="icon">
                                <i class="fa-solid fa-pen-to-square" @click="update(agent.id)"></i>
                                <i class="fa-solid fa-trash" @click="agentDelete(agent.id, agent.email)"></i>
                              
                       </div>
                        </div>
                    </div>
                  
                </div>
     </div>
  </div>
</template>

<script>
import dataAgent from '@/database/requeteAgent';
import ModalAgent from './ModalAgent.vue';
import DeleteAgent from './DeleteAgent.vue';
import ComponentLoading from '../ComponentClient/ComponentLoading.vue';
export default {
    name:'ComponentAgent',
    
    props:['Iddelete'],
    components:{
    ModalAgent,
    DeleteAgent,
    ComponentLoading
  
},
data(){
    return{
        revele:false,
        agents:"",
        alert:'',
        Iddelete:'',
        toggle:false,
        loading:true,
        texte:'',
        email:''
    }
},
methods:{
    submit(){
        this.revele = !this.revele
    },
    agentDelete(id , email){
        console.log(email);
        this.toggle = !this.toggle
        this.Iddelete = id
        this.email = email
        this.texte = 'Voulez-vous supprimez votre compte?'

    },
    update(id){
        this.$router.push(`/update/${id}`) 


    }
},
async mounted() {
    this.$refs.scroll.scrollTop= this.$refs.scroll.scrollHeight;
    this.$refs.scroll.scrollTo(0,document.body.scrollHeight)


    let agent = await dataAgent.AfficherAgent()
    console.log(agent);
    if (agent.success) {
        this.agents=agent.success  
        this.loading = false 
    }else if (agent.alert) {
        this.alert =agent.alert
        this.loading = false 

        
    } else {
        console.log('erreu 404');
        
    }
    
},

}
</script>

<style lang="css" scoped>

    
.contenu1{
    display: flex;
    flex-direction: column;
    align-items: center;
    height:calc(100vh - 64px);
    overflow-y: scroll;
    scrollbar-width: thin;
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
    height: 93vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 4rem;
    background-color: white;
    padding: 10px 21px;
    justify-items: center;
    border: 1px solid #ccc;
    padding: 3px;
    overflow-y: scroll;
    scrollbar-width: thin;
    position: relative;
    

}
.alert{
    width: 100%;
    max-width: 900px;
    padding: 60px 0;
    font-size: 30px;
    border: 1px solid #ccc;
    position: absolute;
    top: 44%;
}

.content-card{
    width: 270px;
    height: 450px;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    overflow: hidden;
    text-align: center;
    font-family: 'Roboto Serif', serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 10px;
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
    height:224px;
    justify-content: space-around;
}

.body-text {
    display: flex;
    margin-bottom: 11px;
    justify-content: center;
    border: 1px solid #ccc;
    flex-direction: column;
    padding: 3px;


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
  @media (max-width: 500px) {
    .addbtn{
    display: none;
  }
  }
 

</style>