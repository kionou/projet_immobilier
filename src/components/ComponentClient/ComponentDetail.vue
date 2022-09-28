<template>
             <ComponentModal v-bind:success="success" v-bind:valider="valider" :texte="texte" ></ComponentModal>

  <div class="section" ref="scroll">
    <div class="trait-blue"></div>
        <div class="container-fluid" >
           
  
           
            <div class="container">
                <div class="texte">
                    <p>Location {{bien.nom_bien}} {{bien.superficie}}m2, {{bien.ville}} {{bien.commune}}</p>
                </div>
                <div class="ImageHeader">
                    <div class="image">
                        <img :src='bien.images' alt="">
                    </div>
                </div>
            </div>
            <div class="container-info">
                <div class="info-right">
                    <h1 class="info-texte">LOCATION {{bien.nom_bien}} {{bien.ville}} </h1>
                    <h3  class="info-texte">{{bien.commune}}</h3>
                    <p  class="info-texte">{{bien.nom_bien}} {{bien.piece}}pieces</p>
                    <div class="icon">
                        <div class="icon-content">
                            <i class="fas fa-door-closed"></i>
                            <samp> {{bien.chambre}} chambres </samp>
                        </div>
                        <div class="icon-content">
                            <i class="fas fa-bath"></i>
                            <samp> {{bien.douche}} douches</samp>
                        </div>
                      
                    </div>
                    <div class="icon">
                        <div class="icon-content">
                          <i class="fas fa-window-frame"></i>
                            <samp> {{bien.piece}} pieces</samp>
                        </div>
                        <div class="icon-content">
                             <i class="fas fa-expand"></i>
                            <samp> {{bien.superficie}} m2</samp>
                        </div>
                    </div>
                </div>
                <div class="info-left">
                    <h5>Loyer {{bien.prix}}F CFA/mois charges comprises</h5>
                </div>
            </div>
            <div class="container-desc">
                <div class="description">
                    <h5>Description du bien</h5>
                    <p>{{bien.description}}</p>
                </div>
                <div id="trait_dessus">
                    <!-- <hr> -->
                </div>
                <!-- <div class="plus-biens">
                    <h5>Les + du bien</h5>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, nam.</p>
                </div>
                <div id="trait_dessus"> -->
                    <!-- <hr> -->
                <!-- </div> -->
                <div class="proximite">
                    <h5>Services à proximité</h5>
                    <p>{{bien.service}}</p>
                </div>
            </div>
            <div class="container-image">
              
                <div class="Images" v-for="image in bien.images" :key="image.id">
                    <img :src="image" alt="">
                </div>
            
            </div>
          
            <div class="container-message">
            <div class="message-detail">
                <div class="message-content">
                     <h3>Pour plus de detail contactez-nous</h3>
                <div class="message">
                  
                    <form >
                        <input type="text" name="nom" placeholder="Nom" v-model="nom">
                        <small v-if="v$.nom.$error">{{v$.nom.$errors[0].$message}} </small>

                        <input type="email" name="email" placeholder="Adresse Email" v-model="email">
                        <small v-if="v$.email.$error">{{v$.email.$errors[0].$message}} </small>

                        <input type="tel" name="numero" placeholder="Numero" v-model="numero">
                        <small v-if="v$.numero.$error">{{v$.numero.$errors[0].$message}} </small>
                       <textarea name="description" id="" cols="41" rows="6" v-model="this.descriptions" >
                       
                        </textarea>
                        <small v-if="v$.descriptions.$error">{{v$.descriptions.$errors[0].$message}} </small>
                        <input type="hidden" name="idbien" v-model="id_bien">
                        <input type="hidden" name="idbien" v-model="user_id">
                        <button @click.prevent="valider">Demander des infos</button>
                    </form>
        
                </div>
                </div>
                
                 <div class="message-content" v-if="bien.user_id != '001'">
                    <h3>Les informations de l'agent immobilier</h3>
                    <div class="contenaire_card">
                    <div class="content-card">
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
                         
                        </div>
                    </div>
                  
                </div>
                </div>
                
                
            </div>
               
               
            </div>
        </div>
  </div>
</template>

<script>
   import dataBien from '@/database/requeteBien';
   import dataAgent from '@/database/requeteAgent';
   import dataUser from '@/database/requeteClient';
   import useVuelidate from '@vuelidate/core';
   import ComponentModal from '../ComponentAdmin/ComponentModal.vue';
    import {require, lgmin,lgmax,ValidEmail,ValidNumeri} from '@/functions/rules'


export default {
    name:"ComponentDetail",
    props:['id'],
    components:{
        ComponentModal
    },
    data() {
        return {
            bien:"",
            nom:'',
            email:'',
            numero:'',
            descriptions:'Bonjour,J\'ai vu votre annonce sur le site Je souhaiterais obtenir des informations complémentaires sur ce bien et, éventuellement, convenir d\'un rendez-vous pour une visite Merci, par avance, de bien vouloir me contacter dès que possible.Cordialement',
            v$:useVuelidate(),
            agent:'',
            success:false,
            texte:'Votre demande a été envoiyé avec success nous vous contacterez dans les heures qui suivent .',
            user_id:''
            
        }
    },
    validations: {
            nom:{
                require,
                lgmin:lgmin(4),
                lgmax:lgmax(20)

            },
             email:{
               require,
                ValidEmail
            },
            numero:{
                require,
                ValidNumeri,
                lgmin:lgmin(10),
                lgmax:lgmax(12)

            },
            descriptions:{
              require,
                lgmin:lgmin(50),
                lgmax:lgmax(1000)
         
                
            }
    },
    methods: {

 async valider(){
  console.log('rrr')
  console.log('fsqjfblqkf',this.v$.$errors.length);
  this.v$.$touch()
  if (this.v$.$errors.length == 0 ) {
   let   DataUser={
         nom:this.nom,
          email:this.email,
          numero:this.numero,
          description:this.descriptions,
          bien_id:this.id,
          user_id:this.user_id
         
      }
      console.log(DataUser);
      let user = await dataUser.InsertionUser(DataUser)
        if (user.resultat) {
            this.success = !this.success
            console.log(user.resultat);

            // this.$router.push('/')
            
        } else {
            
        }

  }
}

},
   async mounted() {

        this.$refs.scroll.scrollTop= this.$refs.scroll.scrollHeight;
        this.$refs.scroll.scrollTo(0,document.body.scrollHeight)

        let bien = await dataBien.GetBienId(this.id)
        console.log(bien.success.user_id);
        if (bien.success) {
            this.bien = bien.success
            this.user_id =  bien.success.user_id
            let id_agent = bien.success.user_id
            let agent = await  dataAgent.GetAgnetId(id_agent)
            console.log('agent',agent.success);
            this.agent = agent.success
           
            
        } else {
            
        }
        
    },
    created() {

      
        
    },

}
</script>

<style lang="css" scoped>
.section{
    width: 100%;
    height: 109vh;
  
    overflow-y: scroll;
      scrollbar-width: thin;
}
    .ImageHeader{
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    bottom: 0;
    border-radius: 10px;

}
small{
    color: red;
}
.container-fluid{
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

}
.trait-blue{
    height: 50px;
    background-color: #2288ff;
    width: 100%;
    margin-top: 23px;
}

.container{
    width: 80%;
    height: auto;
    /* border: 1px solid blue; */
    background-color: white;
    padding: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin-bottom: 30px;
}

.texte{
    font-family: 'Roboto Serif', serif;
    height: 42px;
    text-align: left;
}

.texte p{
    font-size: large;
    margin-top: revert;
}

.image img{
    width: 100%;
    /* height: 100vh; */
    vertical-align: middle;
    border-radius: 10px;
}

.container-info{
    margin-top: 30px;
    width: 80%;
    height: auto;
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    background-color: white;

}

.info-right{
    width: 70%;
    height: auto;
    /* border: 1px solid green; */
    text-align: center;
    padding: 10PX;
}
.icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.icon-content {
    display: flex;
    font-size: 17px;
    font-family: 'Roboto Serif', serif;
    margin-right: 16px;
    width: 161px;
    height: 40px;
    border-radius: 10px;
    background-color: white;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 20%);

}

.info-texte{
    margin-bottom: 10px;
    text-transform: uppercase;
}

.info-left {
    width: 30%;
    height: 110%;
    /* border: 1px solid blueviolet; */
    padding: 10px;
    font-size: 26px;
    color: #2288ff;
}
.message-detail{
    /* border: 1px solid blue; */
    width: 84%;
    display: flex;
    justify-content: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    background-color: white;
    padding: 26px 0;
}

.container-desc {
    margin-top: 30px;
    width: 80%;
    height: auto;
    /* border: 1px solid red; */
    /* display: flex;
    align-items: center; */
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    background-color: white;
    padding: 10px;
    text-align: center;
    font-size: 20px;

}

#trait_dessus {
    border-top: 1px solid #d2d2d4;
    width: 100%;
    padding: 6px;
    margin-top: 20px;

}

.container-desc h5{
    text-decoration: underline;
    margin-bottom: 10px;
}

.container-image {
    margin-top: 30px;
    width: 80%;
    height: auto;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
    background-color: white;
    padding: 20px;

}

.Images{
    width: 400px;
    height: 400px;
    border: 1px solid #2288ff;
    margin-right: 9px;
    margin-bottom: 20px;
    padding: 5px;
}

.Images img {
    width: 100%;
    height: 100%;
}

.container-message {
    margin-top: 30px;
    width: 100%;
    height: auto;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    /* flex-direction: row;
    flex-wrap: wrap; */
    
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 20%); */
    
    padding: 20px;

}
.message-content{
    /* border: 1px solid blue; */
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-agent{
    border: 1px solid black;
    width: 50%;
    height: 87vh;
}

.message {
    max-width:420px;
    width: 98%;
    height: auto;
    border: 1px solid #ccc;
    padding: 0 0 20px;
    margin-top: 30px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
   
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
   
}

textarea{
    font-family: 'Roboto Serif',
    serif;
    margin-top:2rem;
    padding: 5px;
}


input {
    margin-top: 2rem;
    height: 3rem;
    width: 20rem;
    padding: 5px;
    font-size: 18px;
    outline: none;
    border: 1px solid;
    font-family: 'Roboto Serif',
        serif;
}

input:focus {
    border: 1px solid #2288ff;
    outline-offset: 0px;
    outline: none;
}
textarea:focus{

    border: 1px solid #2288ff;
    outline-offset: 0px;
    outline: none;
}


button {
    width: 18rem;
    height: 3rem;
    margin-top: 2rem;
    text-align: center;
    border: none;
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Roboto Serif',
        serif;
}

button:hover {
    background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
}



@media (max-width:1165px) {
  
}

@media (max-width:900px) {
  
}

@media (max-width:700px) {
    .container-info{
        flex-direction: column;
    }

    .info-left{
        width: 54%;
        font-size: 23px;
    }
} 

.content-card{
    width: 300px;
    height: auto;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 10px;
    margin-top: 30px;
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
    height: 300px;
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
    justify-content: space-around;
    padding: 0 10px 10px 10px;
    height: 20vh;
}

.body-text {
    display: flex;
    margin-bottom: 11px;
    justify-content: center;
    border: 1px solid #ccc;
    flex-direction: column;
    padding: 3px;

}


 


</style>