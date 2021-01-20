<template>
    <nav>
        <div class="logo">
            <router-link to="/">
                <img src="@/assets/logo.png" alt="">
                <h1>VisualKraken</h1>
            </router-link>
        </div>
        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/a-propos">A propos</router-link></li>
        </ul>
        <div class="hamburger" @click="hmbMenu()">
            <svg width="74" height="61" viewBox="0 0 74 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M69.6208 25.4167H3.87917C1.73676 25.4167 0 27.5788 0 30.2458V30.7542C0 33.4212 1.73676 35.5833 3.87917 35.5833H69.6208C71.7632 35.5833 73.5 33.4212 73.5 30.7542V30.2458C73.5 27.5788 71.7632 25.4167 69.6208 25.4167Z" fill="#2463AA"/>
                <path d="M69.6208 50.8334H3.87917C1.73676 50.8334 0 52.9954 0 55.6625V56.1708C0 58.8379 1.73676 61 3.87917 61H69.6208C71.7632 61 73.5 58.8379 73.5 56.1708V55.6625C73.5 52.9954 71.7632 50.8334 69.6208 50.8334Z" fill="#2463AA"/>
                <path d="M69.6208 0H3.87917C1.73676 0 0 2.16209 0 4.82916V5.3375C0 8.00457 1.73676 10.1667 3.87917 10.1667H69.6208C71.7632 10.1667 73.5 8.00457 73.5 5.3375V4.82916C73.5 2.16209 71.7632 0 69.6208 0Z" fill="#2463AA"/>
            </svg>

        </div>
        <div v-if="displayHmb" class="hamburger-menu" @click="hmbMenu()">
            <div class="close">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M32.1041 25.9963L50.7194 7.42161C51.5346 6.6063 51.9926 5.5005 51.9926 4.34748C51.9926 3.19446 51.5346 2.08866 50.7194 1.27335C49.9042 0.458037 48.7986 0 47.6457 0C46.4929 0 45.3873 0.458037 44.5721 1.27335L26 19.8913L7.42795 1.27335C6.61275 0.458037 5.50711 -8.59069e-09 4.35425 0C3.20139 8.5907e-09 2.09575 0.458037 1.28056 1.27335C0.46536 2.08866 0.00738814 3.19446 0.00738813 4.34748C0.00738812 5.5005 0.46536 6.6063 1.28056 7.42161L19.8959 25.9963L1.28056 44.571C0.874791 44.9735 0.552728 45.4524 0.332943 45.98C0.113157 46.5076 0 47.0735 0 47.6451C0 48.2167 0.113157 48.7826 0.332943 49.3103C0.552728 49.8379 0.874791 50.3167 1.28056 50.7193C1.68301 51.1251 2.16181 51.4472 2.68936 51.667C3.21691 51.8868 3.78275 52 4.35425 52C4.92575 52 5.4916 51.8868 6.01914 51.667C6.54669 51.4472 7.0255 51.1251 7.42795 50.7193L26 32.1013L44.5721 50.7193C44.9745 51.1251 45.4533 51.4472 45.9809 51.667C46.5084 51.8868 47.0742 52 47.6457 52C48.2172 52 48.7831 51.8868 49.3106 51.667C49.8382 51.4472 50.317 51.1251 50.7194 50.7193C51.1252 50.3167 51.4473 49.8379 51.6671 49.3103C51.8868 48.7826 52 48.2167 52 47.6451C52 47.0735 51.8868 46.5076 51.6671 45.98C51.4473 45.4524 51.1252 44.9735 50.7194 44.571L32.1041 25.9963Z" fill="white"/>
                </svg>
            </div>
           

            <h1>VisualKraken</h1>
            <p><router-link to="/">Accueil</router-link></p>
            <p><router-link to="/blog">Blog</router-link></p>
            <p><router-link to="/contact">Contact</router-link></p>
            <p><router-link to="/a-propos">A propos</router-link></p>
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
            .router-link-exact-active{
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
        .logo{
            width: 100%;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }
        ul{
            display: none;
        }
        .hamburger{
            display: inline;
            position: absolute;
            top:0px;
            right:10px;
            top:-150px;
            width: 50px;
            cursor: pointer;
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
            svg{
                width: 30%;
                margin: 0 auto 20px auto;
            }
            .close{
                position: absolute;
                top:-150px;
                right: 10px;
                svg{
                    width: 50px;
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
        .hamburger{
            width: 30px;
            top:-150px;
        }
        .hamburger-menu{
            .close{
                svg{
                    width: 30px;
                }
            }
            h1{
                font-size:2em;
            }
            p{
                font-size:1em;

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