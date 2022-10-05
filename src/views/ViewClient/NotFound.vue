<template>
  <div class="contenu">
    <h1>Page non trouvée</h1>

<section class="error-container">
  <span>4</span>
  <span><span class="screen-reader-text">0</span></span>
  <span>4</span>
</section>
<div class="link-container">
    <router-link class="more-link" :to="{name:''}" @click="redirect"> Page précedente</router-link>
    <router-link class="more-link" :to="{path:'home'}" >Visiter la page d'acceuil</router-link>

</div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        redirect(){
            this.$router.go(-1)
        }
    },

}
</script>

<style scoped lang="css">

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');

.error-container {
  text-align: center;
  font-size: 180px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;
  margin: 20px 15px;
}
.error-container > span {
  display: inline-block;
  line-height: 0.7;
  position: relative;
  color: #9dc0f4;
}
.error-container > span {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.error-container > span:nth-of-type(1) {
  color: #2288ff;
  animation: colordancing 4s infinite;
}
.error-container > span:nth-of-type(3) {
  color: #d5edf9;
  animation: colordancing2 4s infinite;
}
.error-container > span:nth-of-type(2) {
  width: 120px;
  height: 120px;
  border-radius: 999px;
}
.error-container > span:nth-of-type(2):before,
.error-container > span:nth-of-type(2):after {
	border-radius: 0%;
	content:"";
	position: absolute;
	top: 0; left: 0;
	width: inherit; height: inherit;
  border-radius: 999px;
	box-shadow:  inset 30px 0 0 #2288ff,
				inset 0 30px 0 #94C5EB,
				inset -30px 0 0 #C9E0F5,	
				inset 0 -30px 0 #95A3AB;
  animation: shadowsdancing 4s infinite;
}
.error-container > span:nth-of-type(2):before {
	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
			transform: rotate(45deg);
}

.screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
}
@keyframes shadowsdancing {
  0% {
    box-shadow: inset 30px 0 0 #2288ff,
				inset 0 30px 0 #94C5EB,
				inset -30px 0 0 #C9E0F5,	
				inset 0 -30px 0 #95A3AB;
  }
  25% {
    box-shadow: inset 30px 0 0  #95A3AB,
				inset 0 30px 0  #94C5EB,
				inset -30px 0 0 #C9E0F5,	
				inset 0 -30px 0 #2288ff;
  }
  50% {
     box-shadow: inset 30px 0 0  #94C5EB,
				inset 0 30px 0   #C9E0F5,
				inset -30px 0 0 #2288ff,	
				inset 0 -30px 0 #95A3AB;
  }
  75% {
   box-shadow: inset 30px 0 0 #C9E0F5,
				inset 0 30px 0 #2288ff,
				inset -30px 0 0 #95A3AB,	
				inset 0 -30px 0 #94C5EB;
  }
  100% {
    box-shadow: inset 30px 0 0 #2288ff,
				inset 0 30px 0 #94C5EB,
				inset -30px 0 0 #C9E0F5,	
				inset 0 -30px 0 #95A3AB;
  }
}
@keyframes colordancing {
  0% {
    color: #2288ff;
  }
  25% {
    color: #94C5EB;
  }
  50% {
    color: #C9E0F5;
  }
  75% {
    color:#d1e3f3;
  }
  100% {
    color: #94bde0;
  }
}
@keyframes colordancing2 {
  0% {
    color: #C9E0F5;
  }
  25% {
    color: #d1e3f3;
  }
  50% {
    color: #2288ff;
  }
  75% {
    color: #94C5EB;
  }
  100% {
    color: #C9E0F5;
  }
}

/* demo stuff */
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

html, button, input, select, textarea {
    font-family: 'Montserrat', Helvetica, sans-serif;
    color: #92a4ad;
}
.contenu{
    width: 100%;
    height: 100vh;
    background-color: #fdfeff;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
h1 {
  text-align: center;
  margin: 30px 15px;
}
.zoom-area { 
  max-width: 490px;
  margin: 30px auto 30px;
  font-size: 19px;
  text-align: center;
}
.link-container {
  text-align: center;
}
a.more-link {
  text-transform: uppercase;
  font-size: 13px;
    background-color: rgb(15,142,240);
    padding: 10px 15px;
    border-radius: 0;
    color: #fff;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    line-height: 1.5;
text-decoration: none;
  letter-spacing: 1px;
}

@media (max-width: 363px) {
    .error-container{
        font-size: 140px;
    }
}

</style>