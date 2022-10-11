<template>
    
  <div>
    <div class="ImageHeader">
       <div class="tete">Pour trouver la location qui vous ressemble</div>
       <form >
        <select id="biens" name="bien" class="input" v-model="nom">
            <option value="" disabled selected >-- TYPES DE BIENS --</option>
            <option value="Maison">Maisons</option>
            <option value="Appartement">Appartements</option>
            <option value="Immeuble">Immeuble</option>

          </select>
          <select id="pieces" name="piece" class="input" v-model="piece">
            <option value="" disabled selected>-- NOMBRES DE PIECE(S) --</option>
            <option value="2 pièce(s)">2 pièce(s)</option>
            <option value="3 pièce(s)">3 pièce(s)</option>
            <option value="4 pièce(s)">4 pièce(s)</option>
            <option value="5 pièce(s)">5 pièce(s)</option>
            <option value="studio">Studio</option>
          </select>
           <button class="boutton" @click.prevent="recherche">Rechercher</button>
       </form>
   </div>
   <div class="content">
       <div class="content-texte">
           <h2>Resultat de votre recherche</h2>
       </div>

        <div class="content-info" v-if="rechercher">
        <div class="general">
            <div class="loading" v-if="loading">
           <ComponentLoading/>

            </div>
            <div class="cadre"  v-else>
             
                <div class="alert" v-if="alert">
                      {{alert}}
                </div>
                <div class="content-card" v-for="biens in bien" :key="biens.id" v-else>
            <div class="vendu" v-if="bien.status == 'true'">
                <div class="card-image">
               <img :src="biens.images" alt="">   
             
           </div>
           <div class="vendu-text">
            Bien déjà en location
           </div>
           <div class="card-body">
               <div class="body-text">
               <h3>{{biens.ville}} - {{biens.commune}}</h3>
               </div>
               <div class="body-text">
                
               <p>{{biens.nom_bien}} </p>
               </div>
               <div class="body-text">
               <p> {{biens.piece}} pièces/ {{biens.superficie}} m²</p>
               </div>
               <div class="icon">
                   <div class="icon-content">
                       <i class="fas fa-door-closed"></i>
                       <samp>{{biens.chambre}} chambres</samp>
                   </div>
                   <div class="icon-content">
                       <i class="fas fa-bath"></i>
                       <samp> {{biens.douche}} douches </samp>
                   </div>
               </div>
                   <div class="">
                       <div id="trait_dessus">
                       </div>
                   </div>
                   <div class="">
                       <p>loyer {{biens.prix}} CFA/mois</p>
                   </div>
                   <div class="btn">
                        <button class="btncard" :disabled="isActive"  @click="redirect(biens.id)">
                             Détail
                        </button>
                   </div>
           </div>
            </div>

            <div class="non-vendu" v-else>
                <div class="card-image">
               <img :src="biens.images[0]" alt="">   
             
           </div>
           <div class="card-body">
               <div class="body-text">
               <h3>{{biens.ville}} - {{biens.commune}}</h3>
               </div>
               <div class="body-text">
                
               <p>{{biens.nom_bien}} </p>
               </div>
               <div class="body-text">
               <p> {{biens.piece}} pièces/ {{biens.superficie}} m2</p>
               </div>
               <div class="icon">
                   <div class="icon-content">
                       <i class="fas fa-door-closed"></i>
                       <samp>{{biens.chambre}} chambres</samp>
                   </div>
                   <div class="icon-content">
                       <i class="fas fa-bath"></i>
                       <samp> {{biens.douche}} douches</samp>
                   </div>
               </div>
                   <div class="">
                       <div id="trait_dessus">
                       </div>
                   </div>
                   <div class="">
                       <p>loyer {{biens.prix}} CFA/mois</p>
                   </div>
                   <div class="btn">
                        <button class="btncard">
                             <p @click="redirect(biens.id)">Détail</p>
                        </button>
                   </div>
           </div>
            </div>
           
        </div>

            </div>

        </div >

      
     
        <!-- <div class="content-card">
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
        </div> -->
       
       
        
       
       
        </div>

        <div class="content-info" v-else>
        <div class="general">
            <div class="loading" v-if="loading">
           <ComponentLoading/>

            </div>
            <div class="cadre"  v-else>
             
                <div class="alert" v-if="alert">
                      {{alert}}
                </div>
                <div class="content-card" v-for="bien in biens" :key="bien.id" v-else>
            <div class="vendu" v-if="bien.status == 'true'">
                <div class="card-image">
               <img :src="bien.images" alt="">   
             
           </div>
           <div class="vendu-text">
            Bien déjà en location
           </div>
           <div class="card-body">
               <div class="body-text">
               <h3>{{bien.ville}} - {{bien.commune}}</h3>
               </div>
               <div class="body-text">
                
               <p>{{bien.nom_bien}} </p>
               </div>
               <div class="body-text">
               <p> {{bien.piece}} pièces/ {{bien.superficie}} m²</p>
               </div>
               <div class="icon">
                   <div class="icon-content">
                       <i class="fas fa-door-closed"></i>
                       <samp>{{bien.chambre}} chambres</samp>
                   </div>
                   <div class="icon-content">
                       <i class="fas fa-bath"></i>
                       <samp> {{bien.douche}} douches </samp>
                   </div>
               </div>
                   <div class="">
                       <div id="trait_dessus">
                       </div>
                   </div>
                   <div class="">
                       <p>loyer {{bien.prix}} CFA/mois</p>
                   </div>
                   <div class="btn">
                        <button class="btncard" :disabled="isActive"  @click="redirect(bien.id)">
                             Détail
                        </button>
                   </div>
           </div>
            </div>

            <div class="non-vendu" v-else>
                <div class="card-image">
               <img :src="bien.images[0]" alt="">   
             
           </div>
           <div class="card-body">
               <div class="body-text">
               <h3>{{bien.ville}} - {{bien.commune}}</h3>
               </div>
               <div class="body-text">
                
               <p>{{bien.nom_bien}} </p>
               </div>
               <div class="body-text">
               <p> {{bien.piece}} pièces/ {{bien.superficie}} m2</p>
               </div>
               <div class="icon">
                   <div class="icon-content">
                       <i class="fas fa-door-closed"></i>
                       <samp>{{bien.chambre}} chambres</samp>
                   </div>
                   <div class="icon-content">
                       <i class="fas fa-bath"></i>
                       <samp> {{bien.douche}} douches</samp>
                   </div>
               </div>
                   <div class="">
                       <div id="trait_dessus">
                       </div>
                   </div>
                   <div class="">
                       <p>loyer {{bien.prix}} CFA/mois</p>
                   </div>
                   <div class="btn">
                        <button class="btncard">
                             <p @click="redirect(bien.id)">Détail</p>
                        </button>
                   </div>
           </div>
            </div>
           
        </div>

            </div>

        </div >

      
     
        <!-- <div class="content-card">
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
        </div> -->
       
       
        
       
       
        </div>
        
       </div>
       
        <div class="content-texte">
            <h2>CONTACTEZ-NOUS</h2>
        </div>
    <div class="contact" id="contact">
        <div class="house info">
            <div class="imag">
                <i class="fas fa-home"></i>
            </div>
            <div class="texte">
                <p>
                    10 rue Paris village <br>
                    Plateau - Abidjan
                </p>
            </div>
        </div>

        <div class="heure info">
            <div class="imag">
                <i class="fas fa-clock"></i>
            </div>
            <div class="texte">
                <p>
                    Nous vous accueillons du lundi <br>
                    au vendredi de 08h00 à 17h00
                </p>
            </div>
        </div>
        <div class="phone info">
            <div class="imag">
                <i class="fas fa-phone-alt"></i>
            </div>
            <div class="texte">
                <p>
                    Tél : +225 27 20 22 11 11 <br>
                    Whatsapp : +225 01 71 71 71 04 <br>
                    Email : contact@aici.ci
                </p>
            </div>
        </div>

    </div>     
   </div>

</template>

<script>
    import dataBien from '@/database/requeteBien';
    import ComponentLoading from './ComponentLoading.vue';
export default {
    name:"ComponentRech",
    props:['bien'],
    components:{
        ComponentLoading

    },
    data() {
        return {
            biens:"",
            alert:'',
            isActive: true,
            loading:true,
            isSelected:false,
            nom:'',
            piece:'',
            rechercher:false,
            bien:''

        }  
    },
    methods:{
        redirect(id){
            console.log(id);
            this.$router.push(`/detail/${id}`)

        },
      async  recherche(){
            let recherche = {
                nom:this.nom,
                piece:this.piece
            }
            let bien = await dataBien.RechercheBien(recherche)
            console.log(bien);

            if (bien.success) {
                this.bien=bien.success
                this.rechercher = true
            } else {
                this.alert = bien.alert
                this.rechercher = true
            }
        }
    },
   async mounted(){
   
    let bien = await dataBien.AfficherBien()
    console.log(bien);
    if (bien.success) {
        console.log(bien.success)
        this.biens=bien.success
        this.loading=false
        
    }else if (bien.alert) {
        this.alert = bien.alert
        
    } else {
        console.log('erreur 404');
        
    }

    console.log('recherfr',this.bien);
  


    },


}
</script>

<style lang="css" scoped>

.ImageHeader{
    background: url('@/assets/images/1.jpg') no-repeat center;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
    text-align: center;
    bottom: 0;
}

form{
   
    left: 50%;
    top: 85%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 98%;
    max-width: 700px;
    height: 155px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 4px solid #2288ff;
    padding:10px;
}

.input{
  margin-right: 46px;
}

select{
    max-width: 261px;
    width: 98%;
    height: 3rem;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    font-family: 'Roboto Serif',  serif;
    font-size: 15px;
}
.vendu{
    opacity: 0.6;
    background-color: hsl(240deg 7% 97%);
    position:relative;
}


.boutton{
    text-align: center;
    border: none;
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Roboto Serif',    serif;
    padding: 10px;

}

.boutton:hover{
    background-color: white;
    color: #2288ff;
    cursor: pointer;
    border: 1px solid #2288ff;
}

.content{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.content-texte{
    margin: 45px 0;
    font-family: 'Roboto Serif',    serif;
    text-transform: uppercase;
    font-size: larger;
    text-align: center;

}

.content-info{
    width: 99%;
    height: auto;
 

}

.cadre{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 3rem;
    background-color: white;
    padding: 10px 21px;
    justify-items: center;
    border-radius: 10px;
}
.alert{
    width: 100%;
    padding: 60px 0;
    font-size: 30px;
    border: 1px solid #ccc;
}

.content-card{
    width: 290px;
    height: auto;
    border: 1px solid #ccc;
    background-color: white;
    border-radius: 10px;
    margin: 20px;
    overflow: hidden;
    text-align: center;
    font-family: 'Roboto Serif', serif;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.card-image {
    height: 200px;
    padding: 5px;
}
.card-image img{
    width: 100%;
    height: 100%;
   
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
.vendu-text{
    position: absolute;
    left: 22%;
    font-size: 18px;
    color: red;
}


.vendu .btncard{
    background-color: hsla(206,100%,73.3%,1);
}
.vendu .btncard:hover{
    background-color: hsla(206,100%,73.3%,1);
    color:white ;
   cursor: not-allowed;
   pointer-events: all !important;
   border: none;

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

.contact{
     width: 100%;
      background-color: white;
      height: auto;
     font-family: 'Roboto Serif',    serif;
      font-size: 17px;
     font-weight: inherit;
     display: flex;
     padding: 18px 21px;
     justify-items: center;
     border-radius: 10px;
}

.contact .info{
    width: 87%;
    height: 152px;
    display: flex;
    border: 1px solid black;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-right: 10px;
}
.contact .info:hover {
    transform: translateX(10px);
    transition: 0.5s;
}




.info .imag  {
        width: 68%;
        height: 62px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
  
}
.fas{
    color: #2288ff;
}


.info .texte{
    text-align: center;
    padding: 5px;
    margin-top: -2px;
}
.tete{

        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        font-size: 41px;
        color: white;
        font-weight: bolder;
        width: 96%;
        height: 136px;
}



@media (max-width:768px) {
   
    select {
        height: 49px;
    }

    .boutton {
        width: 202px;
        height: 49px;
   
    }

    form {
        top: 83%;
        width: 45%;
        height: 232px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .input{
        margin-right: 0;
        margin-bottom: 22px;
    }
    .contact{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .contact .info{
        margin-bottom: 35px;
        width: 55%;
    }

}


@media (max-width:571px) {

    form {
        padding: 50px;
        width: 74%;

    }

    .contact .info{
           max-width: 300px;
           width: 98%;
    } 

}


@media (max-width:450px) {
.alert{
    font-size:20px;
}
 
 

}
@media (max-width:485px) {

  form{
    padding:10px;
    top:92%;
  }
 

}

@media (min-width:1939px) {
.contact .info{
    width: 40%;
}

}

button{
    background-color: red;
    color: white;
}
button.selected{
    background-color: aqua;
}


</style>