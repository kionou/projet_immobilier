<template>
  <div>
    <div class="trait-blue"></div>
        <div class="container-fluid">
              
            <div class="container">
                <div class="texte">
                    <p>Location Appartement 100 m2, Abidjan Cocody-angre </p>
                </div>
                <div class="ImageHeader">
                    <div class="image">
                        <img src="@/assets/images/1.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="container-info">
                <div class="info-right">
                    <h1 class="info-texte">LOCATION Appartement Abidjan</h1>
                    <h3  class="info-texte">Cocody-angre - Immeuble</h3>
                    <p  class="info-texte">Appartement 3pieces</p>
                    <div class="icon">
                        <div class="icon-content">
                            <i class="fas fa-door-closed"></i>
                            <samp> 5 chambres </samp>
                        </div>
                        <div class="icon-content">
                            <i class="fas fa-bath"></i>
                            <samp> 3 douches</samp>
                        </div>
                    </div>
                    <div class="icon">
                        <div class="icon-content">
                          <i class="fas fa-window-frame"></i>
                            <samp> 3 pieces</samp>
                        </div>
                        <div class="icon-content">
                             <i class="fas fa-expand"></i>
                            <samp> 100 m2</samp>
                        </div>
                    </div>
                </div>
                <div class="info-left">
                    <h5>Loyer 500.000 F CFA/mois charges comprises</h5>
                </div>
            </div>
            <div class="container-desc">
                <div class="description">
                    <h5>Description du bien</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at quam accusantium consectetur amet. Numquam ratione placeat et illum vel.</p>
                </div>
                <div id="trait_dessus">
                    <!-- <hr> -->
                </div>
                <div class="plus-biens">
                    <h5>Les + du bien</h5>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, nam.</p>
                </div>
                <div id="trait_dessus">
                    <!-- <hr> -->
                </div>
                <div class="proximite">
                    <h5>Services à proximité</h5>
                    <p>Lorem ipsum dolor sit amet. </p>
                </div>
            </div>
            <div class="container-image">
              
                <div class="Images">
                    <img src="@/assets/images/2.jpg" alt="">
                </div>
            
            </div>
          
            <div class="container-message">
                <div class="message-content">
                     <h3>Pour plus de detail contactez-nous</h3>
                <div class="message">
                  
                    <form action="/contact " method="post">
                        <input type="text" name="nom" placeholder="Nom">
                        <input type="email" name="email" placeholder="Adresse Email">
                        <input type="tel" name="numero" placeholder="Numero">
                       <textarea name="description" id="" cols="41" rows="6" >Bonjour,J'ai vu votre annonce sur le site Je souhaiterais obtenir des informations complémentaires sur ce bien et, éventuellement, convenir d'un rendez-vous pour une visite
                        Merci, par avance, de bien vouloir me contacter dès que possible.
                        Cordialement,
                        </textarea>
                        <input type="hidden" name="idbien" value="<%= bien.id %>">
                        <button type="submit" value="Submit">Demander des infos</button>
                    </form>
        
                </div>
                </div>
                <div class="info-agent"></div>
               
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name:"ComponentDetail"

}
</script>

<style lang="css" scoped>
    .ImageHeader{
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    bottom: 0;
    border-radius: 10px;

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
    border: 1px solid red;
    display: flex;
    /* flex-direction: row;
    flex-wrap: wrap; */
    
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 20%); */
    
    padding: 20px;

}
.message-content{
    border: 1px solid blue;
    width:50%;
}

.info-agent{
    border: 1px solid black;
    width: 50%;
    height: 87vh;
}

.message {
    /* width: 45%; */
    height: auto;
    border: 1px solid #2288ff;
    padding: 20px;
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
}


input {
    margin-bottom: 2rem;
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

 @media (min-width:1875px) {
   .message{
       width: 30%;
   }
}

@media (max-width:1165px) {
    .message {
        /* width: 52%; */
    }
}

@media (max-width:900px) {
    .message {
        width: auto;
    }
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


</style>