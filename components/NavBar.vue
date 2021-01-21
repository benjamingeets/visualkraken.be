<template>
    <nav>
        <div class="logo">
            <NuxtLink to="/">
                <img src="~/assets/logo.png" alt="">
                <h1>VisualKraken</h1>
            </NuxtLink>
        </div>
        <ul>
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/a-propos">A propos</NuxtLink></li>
        </ul>
        <div class="hamburger" @click="hmbMenu()">
            <img src="~/assets/hamburger.png" alt="">
        </div>
        <div v-if="displayHmb" class="hamburger-menu" @click="hmbMenu()">
            <div class="close">
                <img src="~/assets/cross.png" alt="">
            </div>
           <img src="~/assets/logo_white.svg" alt="">
            <h1>VisualKraken</h1>
            <p><NuxtLink to="/">Accueil</NuxtLink></p>
            <p><NuxtLink to="/blog">Blog</NuxtLink></p>
            <p><NuxtLink to="/contact">Contact</NuxtLink></p>
            <p><NuxtLink to="/a-propos">A propos</NuxtLink></p>
        </div>
    </nav>
</template>

<style lang="scss">
$bleu : #2463AA;
$transition : 0.3s ease-in-out;



.stop-scroll{
    overflow: hidden;
}

.hamburger-menu{
    display: none;
}

nav{
    height: 15vh;
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin:auto;
    .logo{
        width: 60%;
        a{  
            cursor: default;
            height: 100%;
            display: flex;
            align-items: center;
            img{
                height: 80%;
                cursor: pointer;
            }
            h1{
                color:$bleu;
                cursor: pointer;
            }
        }
    }
    ul{
        display: flex;
        width: 40%;
        justify-content: space-between;
        align-items: center;
        li{
            a{
                color:black;
                &:hover{
                    color:$bleu;
                    transition: $transition;
                }
                &::after{
                    content: '';
                    display: block;
                    width: 0;
                    height: 2px;
                    background: $bleu;
                    transition: width .3s;
                    margin-top:10px;
                }
                &:hover::after{
                    width: 100%;
                }
            }
            .nuxt-link-exact-active{
                    color:$bleu;
                    &::after{
                        content: '';
                        display: block;
                        width: 100%;
                        height: 2px;
                        background: $bleu;
                        transition: width .3s;
                        margin-top:10px
                    }
                }
        }
    }
    .hamburger{
       display: none;
    }
}
@media (max-width:1024px){
    nav{
        height: 120px ;
        .logo{
            width: 100%;
            a{
                margin:auto;
                img{
                margin: 0 0 0 auto;
                }
                h1{
                    margin: 0 auto 0 0;
                }
            }
        }
        ul{
            display: none;
        }
        .hamburger{
            display: inline;
            position: absolute;
            right:60px;
            top:70px;
            width: 40px;
            
            cursor: pointer;
            img{
                width: 100%;
            }
        }
        .hamburger-menu{
            display:flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            position: absolute;
            background: linear-gradient(197.4deg, #2463AA 0%, #5AC2D8 100.71%);
            top:0px;
            left:0px;
            transition: 0s;
            img{
                width: 150px;
                margin: 0 auto 50px auto;
            }
            .close{
                position: absolute;
                width: 40px;
                top:70px;
                right: 60px;
                img{
                    width: 100%;
                }
            }
            h1{
                    color:white;
                    font-size:3em;
                    margin: 0 auto 0 auto;
                }
            p{
                margin-left:25%;
                a{
                    color:white;
                }
            }
}
    }
    
}
@media (max-width:480px){
    nav{
        height: 100px;
        .hamburger{
            width: 20px;
            top: 40px;
            right:40px;
        }
        .hamburger-menu{
            .close{
                width: 20px;
            top: 40px;
            right:40px;
            }
            h1{
                font-size:2em;
            }
            p{
                font-size:1em;
                margin: 5% 0 0 25%;
            }
        }
    }
    
}
</style>

<script>
export default {
    name:"NavBar",
    data(){
        return{
            displayHmb :false
        }
    },
    methods:{
        hmbMenu(){
            if(this.displayHmb){
                this.displayHmb = !this.displayHmb
                document.querySelector("body").style.overflow="auto"
                document.querySelector(".fleche").style.display="block"
            }
            else{
                this.displayHmb = !this.displayHmb
                
                document.querySelector("body").style.overflow="hidden"
                document.querySelector(".fleche").style.display="none"
                window.scroll(0,-10000)
            }
        }
        
    }
}
</script>