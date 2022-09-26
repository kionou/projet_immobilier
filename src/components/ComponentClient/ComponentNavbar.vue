<template>
    <header :class="{'scrolld-nav':scrollNav}">
        <nav>
            <div class="branding" @click="home">
                <img src="@/assets/images/logopng.png" alt="">
            
            </div>
            <ul v-show="!mobile" class="navigation">
                <li>
                    <router-link class="link" :to="{name:'home'}">Accueil</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{name:'agentlogin'}">Agent</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{name:'login'}">Mon Compte</router-link>
                </li> 
            </ul>
            <div class="icon" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active':mobileNav}">
               <img src="@/assets/images/logopng.png" alt="">
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li>
                    <router-link class="link" :to="{name:'home'}">Home</router-link>
                </li>
                 <li>
                    <router-link class="link" :to="{name:'agent'}">Agent</router-link>
                </li>
                <li>
                    <router-link class="link" :to="{name:'login'}">Mon Compte</router-link>
                </li> 
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    import connectUser from '@/database/authentificationUser';
export default {
    name:'ComponentNavbar',
    data(){
        return{
            scrollNav:null,
            mobile:null,
            mobileNav:null,
            windowWith:null,
        };
    },
    created(){
        window.addEventListener("resize",this.checkScreen);
        this.checkScreen();
    },
  async  mounted(){
        window.addEventListener("scroll",this.updateScroll);
        
        let statu = await connectUser.EtatUser()
        console.log('hh',statu)

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

    nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width:90%;
  
  
    ul,
    .link{
        font-weight: 500;
        color: #fff;
        list-style: none;
        text-decoration: none;
    }

    li{
        text-transform: uppercase;
        padding:16px;
        margin-left: 16px;
    }
    .link{
    
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        font-size: 1.5rem;
        color: #333;
        transition: .2s linear;

        &:hover{
            color: #00afea;
            border-color: #00afea;
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
           top: 5px;
            right: -30px;
            height: 28px;
            width: 28px;
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