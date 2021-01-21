<template>
    <footer>
        <a class="fleche" href="#" @click="smoothScroll()">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 52.5C34.4978 52.5 40.7295 49.9188 45.3241 45.3241C49.9188 40.7295 52.5 34.4978 52.5 28C52.5 21.5022 49.9188 15.2705 45.3241 10.6759C40.7295 6.08124 34.4978 3.5 28 3.5C21.5022 3.5 15.2705 6.08124 10.6759 10.6759C6.08124 15.2705 3.5 21.5022 3.5 28C3.5 34.4978 6.08124 40.7295 10.6759 45.3241C15.2705 49.9188 21.5022 52.5 28 52.5ZM28 56C35.4261 56 42.548 53.05 47.799 47.799C53.05 42.548 56 35.4261 56 28C56 20.5739 53.05 13.452 47.799 8.20101C42.548 2.94999 35.4261 0 28 0C20.5739 0 13.452 2.94999 8.20101 8.20101C2.94999 13.452 0 20.5739 0 28C0 35.4261 2.94999 42.548 8.20101 47.799C13.452 53.05 20.5739 56 28 56Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.261 29.2387C16.4235 29.4017 16.6166 29.531 16.8292 29.6192C17.0418 29.7074 17.2698 29.7528 17.5 29.7528C17.7301 29.7528 17.9581 29.7074 18.1707 29.6192C18.3833 29.531 18.5764 29.4017 18.739 29.2387L28 19.9742L37.261 29.2387C37.5896 29.5673 38.0352 29.7519 38.5 29.7519C38.9647 29.7519 39.4104 29.5673 39.739 29.2387C40.0676 28.9101 40.2522 28.4644 40.2522 27.9997C40.2522 27.535 40.0676 27.0893 39.739 26.7607L29.239 16.2607C29.0764 16.0977 28.8833 15.9684 28.6707 15.8802C28.4581 15.792 28.2301 15.7466 28 15.7466C27.7698 15.7466 27.5418 15.792 27.3292 15.8802C27.1166 15.9684 26.9235 16.0977 26.761 16.2607L16.261 26.7607C16.098 26.9233 15.9687 27.1164 15.8805 27.329C15.7922 27.5416 15.7468 27.7695 15.7468 27.9997C15.7468 28.2299 15.7922 28.4578 15.8805 28.6704C15.9687 28.883 16.098 29.0762 16.261 29.2387Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 40.25C28.4641 40.25 28.9092 40.0656 29.2374 39.7374C29.5656 39.4093 29.75 38.9641 29.75 38.5V21C29.75 20.5359 29.5656 20.0908 29.2374 19.7626C28.9092 19.4344 28.4641 19.25 28 19.25C27.5359 19.25 27.0908 19.4344 26.7626 19.7626C26.4344 20.0908 26.25 20.5359 26.25 21V38.5C26.25 38.9641 26.4344 39.4093 26.7626 39.7374C27.0908 40.0656 27.5359 40.25 28 40.25Z" fill="white"/>
</svg>

        </a>
        <div class="top">
            <div class="logo">
                <img src="@/assets/logo_white.png" alt="" loading="lazy">
                <p>VisualKraken</p>
            </div>
            <div class="liste">
                <p>Navigation</p>
                <ul>
                    <li @click="goTop()"><router-link to="/">Accueil</router-link></li>
                    <li @click="goTop()"><router-link to="/blog">Blog</router-link></li>
                    <li @click="goTop()"><router-link to="/contact">Contact</router-link></li>
                    <li @click="goTop()"><router-link to="/a-propos">A propos</router-link></li>
                </ul>
            </div>
            <div class="liste" id="contact">
                <p>Contact</p>
                <ul>
                    <li><a id="tel" href="" @click="showTel()">téléphone</a></li>
                    <li><a href="mailto:contact@visualkraken.be">contact@visualkraken.be</a></li>
                </ul>
            </div>
        </div>

        <hr>

        <div class="bottom">
            <div class="copyright">
                2020, tous droits réservés
            </div>
            <div class="social">
                <a href="https://facebook.com/visualkrakenbe">
<<<<<<< Updated upstream:src/components/Footer.vue
                <img src="@/assets/facebook.png" alt="" loading="lazy">
                </a>
                <a href="https://twitter.com/Visualkrakenbe">
                <img src="@/assets/twitter.png" alt="" loading="lazy">
                </a>
                <a href="https://instagram.com/visualkrakenbe">
                    <img src="@/assets/instagram.png" alt="" loading="lazy">
=======
                <img src="~/assets/facebook.png" alt="" loading="lazy">
                </a>
                <a href="https://twitter.com/Visualkrakenbe">
                <img src="~/assets/twitter.png" alt="" loading="lazy">
                </a>
                <a href="https://instagram.com/visualkrakenbe">
                    <img src="~/assets/instagram.png" alt="" loading="lazy">
>>>>>>> Stashed changes:components/Footer.vue
                </a>
            </div>
            <div class="rgpd" @click="goTop();">
                <router-link to="/rgpd">
                    RGPD
                </router-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name:'Footer',
    methods:{
        smoothScroll(){
            document.querySelector("html").style.scrollBehavior = "smooth"
        },
        showTel(){
            document.querySelector("#tel").href = "tel:+32471 66 32 48"
            document.querySelector("#tel").textContent = "0471 66 32 48"
        },
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000) 
        }
    }
}
</script>

<style lang="scss">
$grisClair:#D3D3D3;

footer{
    margin-top:100px;
    background: linear-gradient(262.06deg, #2463AA 0%, #5AC2D8 100%);
    padding:30px;
    .fleche{
        position: absolute;
        cursor: pointer;
        right:30px;
        &:hover{
            margin-top:-10px;
        }
    }
    .top{
        display: flex;
        justify-content: space-evenly;
        .logo{
            p{
                color:white;
            }
        }
        .liste{
            p{
                    color:white;
                }
            ul{
                li{
                    margin:10px;
                    a{
                        color:$grisClair;
                        &:hover{
                            color:white;
                        }
                    }
                }
            }
        }
    }
    hr{
        height: 5px;
        background-color: white;
        width: 80%;
        margin: 40px auto;
        border-radius: 1em;
    }

    .bottom{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .rgpd{
            a{
                color:white;
            }
        }
        .copyright{
            color:white
        }
        .social{
            display: flex;
            align-items: center;
            justify-content: center;
            a{
                margin:0 10px;
                text-align: center;
                width: 5%;
                img{
                    width: 100%;
                    filter: invert(100%) sepia(98%) saturate(7%) hue-rotate(159deg) brightness(104%) contrast(102%);
                }
                &:hover{
                    filter: invert(69%) sepia(60%) saturate(4%) hue-rotate(4deg) brightness(102%) contrast(100%);
                }
            }
        }
    }
}

@media (max-width:1024px){
    footer{
        svg{
        height: 40px;
    }
    }
}
@media (max-width:480px){
    footer{
        .fleche{
            width: 10%;
        }
        .top{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .logo{
                text-align: center;
                svg{
                    width: 50%;
                }
            }
            .liste{
                p{
                    margin:0;
                    text-align: center;
                }
                ul{
                    text-align: center;
                    li{
                        margin:5px 0;
                    }
                }
            }
            #contact{
                display: none;
            }
        }
        .bottom{
            .copyright{
                font-size:0.8em;
                width: 50%;
          }
          .social{
              a{
                  width: 10%;
              }
          }
          .rgpd{
              font-size:0.8em;
                width: 50%;
          }
        }
    }
}
</style>