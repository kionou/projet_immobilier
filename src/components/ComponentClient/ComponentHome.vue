<template>
  <div>
    <div class="ImageHeader">
       <div class="tete">Pour trouver la location qui vous ressemble</div>
       <form action="/" method="POST">
        <select id="biens" name="bien" class="input">
            <option value="" disabled selected >-- TYPES DE BIENS --</option>
            <option value="maison">Maisons</option>
            <option value="appartement">Appartements</option>
          </select>
          <select id="pieces" name="piece" class="input">
            <option value="" disabled selected>-- NOMBRES DE PIECE(S) --</option>
            <option value="2 pièce(s)">2 pièce(s)</option>
            <option value="3 pièce(s)">3 pièce(s)</option>
            <option value="4 pièce(s)">4 pièce(s)</option>
            <option value="5 pièce(s)">5 pièce(s)</option>
            <option value="studio">Studio</option>
          </select>
           <button class="boutton">Rechercher</button>
       </form>
   </div>
   <div class="content">
       <div class="content-texte">
           <h2>Les biens qui pourraient vous intéresser</h2>
       </div>
       <div class="content-info">
     
       
     
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
                            <!-- <hr> -->
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

        <div class="content-card" v-for="bien in biens" :key="bien.id">
            <div class="card-image">
               <img :src="bien.images[0]" alt="">   
             
           </div>
           <div class="card-body">
               <div class="body-text">
               <h3>{{bien.ville}}</h3>
               </div>
               <div class="body-text">
                
               <p>{{bien.nom_bien}} </p>
               </div>
               <div class="body-text">
               <p> {{bien.piece}}/{{bien.superficie}}</p>
               </div>
               <div class="icon">
                   <div class="icon-content">
                       <i class="fas fa-door-closed"></i>
                       <samp>{{bien.chambre}}</samp>
                   </div>
                   <div class="icon-content">
                       <i class="fas fa-bath"></i>
                       <samp> {{bien.douche}}</samp>
                   </div>
               </div>
                   <div class="">
                       <div id="trait_dessus">
                           <!-- <hr> -->
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
export default {
    name:"ComponentHome",
    data() {
        return {
            biens:""
            
        }
    },
    methods:{
        redirect(id){
             this.$router.push(`/detail/${id}`)
            console.log(id);
        }
    },
   async mounted(){
    let bien = await dataBien.AfficherBien()
    if (bien.success) {
        console.log(bien.success)
        this.biens=bien.success
        
    }
   
    }
    

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
    border-radius: 10px;
}

form{
   
    left: 50%;
    top: 85%;
    transform: translate(-50%,-50%);
    position: absolute;
    width: 65%;
    height: 155px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 4px solid #2288ff;
}

.input{
  margin-right: 46px;
}

select{
    width: 261px;
    height: 55px;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    font-family: 'Roboto Serif',  serif;
    font-size: 15px;
}

.boutton{
    width: 261px;
    height: 55px;
    text-align: center;
    border: none;
    background-color: #2288ff;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    font-family: 'Roboto Serif',    serif;
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 3rem;
    background-color: white;
    padding: 10px 21px;
    justify-items: center;
    border-radius: 10px;

}
/* p{
    color: black;
} */
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
.content-card:hover{
    transform: translateY(-10px);
    transition: 0.5s;
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
     width: 80%;
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

@media (min-width:1024px) {
    body {
        padding-top: 86px;
    }
    form {
        padding: 50px;
        width: 70%;
    }


}

@media (min-width:1920px) {
    body {
        padding-top: 86px;
    }

    form {
        padding: 50px;
        width: 50%;
    }
}



@media (max-width:940px) {
  
        form {
            padding: 50px;
            width: 74%;
        }

}

@media (max-width:836px) {

    form {
        padding: 50px;
        width: 80%;
    }

    .input{
        margin-right: 22px;
    }

}

@media (max-width:768px) {
   
    select {
        width: 202px;
        height: 49px;
    }

    .boutton {
        width: 202px;
        height: 49px;
   
    }

    form {
        top: 76%;
        padding: 50px;
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
        width: 80%;
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
        width: 114%;
    }

  

}

@media (min-width:1939px) {
.contact .info{
    width: 40%;
}

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

</style>