<template>
    <header :class="{'scrolld-nav':scrollNav}">
        <nav>
            <div class="branding" @click="home">
                <img src="@/assets/images/logopng.png" alt="">
            
            </div>
            <ul v-show="!mobile" class="navigation">
                <div v-if="connect" class="links">
                
                <li >
                    <router-link class="link" :to="{name:'login'}">Mon Compte</router-link>
                </li> 
                <li >
                    <p class="logout" @click="logout">Deconnter</p>
                </li>
               
                </div>

                <div v-else class="links">
                    <li>
                    <router-link class="link" :to="{name:'home'}">Accueil</router-link>
                </li>
                <li >
                    <router-link class="link" :to="{name:'login'}">Mon Compte</router-link>
                </li>
                </div>
                
               
            </ul>
            <div class="icon" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active':mobileNav}">
               <img src="@/assets/images/bars.png" alt="">
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                 <div v-if="connect" class="links">
                
                <li >
                    <router-link class="link" :to="{name:'login'}">Mon Compte</router-link>
                </li> 
                <li >
                    <p class="logout" @click="logout">Deconnter</p>
                </li>
               
                </div>

                <div v-else class="links">
                    <li>
                    <router-link class="link" :to="{name:'home'}">Accueil</router-link>
                </li>
                <li >
                    <router-link class="link" :to="{name:'login'}">Mon Compte</router-link>
                </li>
                </div>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    import { auth } from '@/database/Connect';
   import { onAuthStateChanged } from '@firebase/auth';
   import connectUser from '@/database/authentificationUser';
    
 
export default {
    name:'ComponentNavbar',
    data(){
        return{
            scrollNav:null,
            mobile:null,
            mobileNav:null,
            windowWith:null,
            connect:''
        };
    },
    created(){
        window.addEventListener("resize",this.checkScreen);
        this.checkScreen();
    },
  async  mounted(){
        window.addEventListener("scroll",this.updateScroll);
        
        onAuthStateChanged(auth,(user)=>{
        if (user != null) {
            this.connect = user
            
            
        } else {
           
        }
            
        })

    },
    methods:{
         home(){
             this.$router.push({path:'/'})
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        updateScroll(){
            const scrollPosition = window.scrollY;
            if (scrollPosition >50) {
                this.scrollNav = true;
                return true;   
            }
            this.scrollNav = false;

        },
        checkScreen(){
            this.windowWith= window.innerWidth;
            if (this.windowWith <= 750) {
                this.mobile = true;
                return; 
            }
            this.mobile = false;
            this.mobileNav = false;
            return;

        },
      async  logout(){
        await connectUser.LogoutUser()
        .then(rs=>{
          this.$router.push('/login')

        })
        .catch(err=>{
            this.$router.push('/:pathMatch(.*)*')

        })


        }

    }

}
</script>

<style lang="scss" scoped>
header{
    background-color: white;
    top: 0;
    z-index:99;
    width:100%;
     position:fixed;
    transition:0.5s ease all;
    color:#fff;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -9px #cacd;
    display: flex;
    justify-content: center;

    nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width:80%;
  
    .links{
        display: flex;
    }
    ul,
    .link{
        font-weight: 500;
        color: #fff;
        list-style: none;
        text-decoration: none;
    }

    li{
        text-transform: uppercase;
        // padding:16px;
        margin-left: 30px;
        display: flex;
       align-items: center;
    }
    .link{
    
        // padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        font-size: 1.5rem;
        color: #333;
        transition: .2s linear;

        &:hover{
            color: #00afea;
            border-color: #00afea;
        }
    }
.logout{
    text-align: center;
    border: 1px solid;
    padding: 1rem ;
    border-radius: 20px;
    font-size: 17px;
    background-color: #2288ff;
    color: white;
    font-family: 'Roboto Serif', serif;
    text-decoration: none;

    &:hover{
        background-color: white;
    color: #2288ff;
    border: 1px solid #2288ff;
    cursor: pointer;
        }

}

    .branding{
        display: flex;
        align-items: center;
        width: 60px;
        height: 60px;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;

    }

    .icon{
        display: flex;
        align-items: center;
        position: absolute;
        top: 27px;
        right: -30px;
        height: 30px;
        width: 30px;
        cursor: pointer;
  
    }
    .icon img{
        width: 100%;
        height: 100%;
    }
   
    .icon-active{
        transform: rotate(180deg);
    }
    .dropdow-nav{
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: #fff;
        top: 0;
        left: 0;
        
        li{
            margin-left: 0;
            .link{
                color: #000;
            }
        }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }

    
    .mobile-nav-enter-to{
        transform: translateX(0px);
    }
}
}

.scrolled-nav{
    background-color: #000;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}
nav{
    padding: 8px 0;
}
 


</style>