<template>
    <div class="equipe">
       <div class="text">
           <h2>Notre équipe</h2>
           <p>Jeune, dynamique et motivée</p>
           <router-link to="/a-propos">
                <div class="button" @click="goTop()">
                    <p>A propos</p>
                </div>
           </router-link>
           <router-link to="/contact">
                <div class="button button-gradient" @click="goTop()">
                    <p>Nous contacter</p>
                </div>
           </router-link>
        </div> 
        <div class="persons">
            <div class="card">
                <div class="img">
                    <img src="~/assets/benjamin.jpg" alt="">
                </div>
                <h3>Benjamin Geets</h3>
                <h4>Développeur</h4>
                <p>Etudiant de 21 ans, il a commencé à s’intéresser au web dès son plus jeune âge lui permettant  d’être le plus à jour possible</p>
                <div class="social">
                    <a href="https://twitter.com/benjamingeets">
                        <img src="~/assets/twitter.png" alt="">
                    </a>
                    <a href="https://instagram.com/benjamingeets">
                        <img src="~/assets/instagram.png" alt="">
                    </a>
                    <a href="https://linkedin.com/in/benjamingeets">
                        <img src="~/assets/linkedin.png" alt="">
                    </a>
                </div>
            </div>
           <div class="card">
                <div class="img">
                    <img src="~/assets/tristan.jpg" alt="">
                </div>
                <h3>Tristan Galand</h3>
                <h4>Designer</h4>
                <p>Etudiant de 22 ans, il dispose d’une vision des choses et d’une maitrise de l’expérience utilisateur afin de fournir des utilisations toujours plus plaisantes.</p>
                <div class="social">
                    <a href="https://twitter.com/galandtristan">
                        <img src="~/assets/twitter.png" alt="">
                    </a>
                    <a href="https://instagram.com/galandtristan">
                        <img src="~/assets/instagram.png" alt="">
                    </a>
                    <a href="https://linkedin.com/in/galandtristan">
                        <img src="~/assets/linkedin.png" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Equipe",
    methods:{
        smoothScroll(){
            document.querySelector("html").style.scrollBehavior = "smooth"
        },
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000) 
        }
    }
}
</script>

<style lang="scss">
$grisClair : #DFDFDF;
$bleu : #2463AA;

.equipe{
    display:flex;
    margin-top:100px;
    .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40%;
        a{
            cursor: default;
        }
        .button{
            margin:30px 0;
        }
    }
    .persons{
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .card{
            width: 40%;
            background:$grisClair;
            border-radius:1em;
            padding:20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            img{
                border-radius: 1em;
                width: 100%;
            }
            h3{
                margin:30px 0 20px 0;
                text-align: center;
                font-size:2em;
            }
            h4{
                margin:10px 0;
                color:white;
                font-size:1.5em;
            }
            p{
                font-size: 1em;
                margin:10px 0;
            }
            .social{
                display: flex;
                justify-content: space-evenly;
                align-items: flex-end;
                width: 100%;
                height: 100%;
                margin-top:50px;
                a{
                    width: 10%;
                    img{
                        width: 100%;
                        border-radius: 0;
                        filter: invert(35%) sepia(33%) saturate(1446%) hue-rotate(175deg) brightness(91%) contrast(93%);
                    }
                    &:hover{
                        img{
                            filter: invert(43%) sepia(94%) saturate(1492%) hue-rotate(161deg) brightness(95%) contrast(102%);
                        }
                    }
                }
            }
        }
    }
}

@media (max-width:1024px){
    .equipe{
        flex-direction: column;
        .text{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .button{
                margin:10px;
            }
        }
        .persons{
            width: 100%;
            margin-top:30px;
            .card{
                justify-content: space-between;
                padding:25px;
                width: 35%;
                h3{
                    font-size:2em;
                }
                h4{
                    font-size:1.5em;
                }
                .social{
                    margin-top:10px;
                }
            }
        }
    }
}

@media (max-width:480px){
    .equipe{
        .persons{
            flex-wrap: wrap;
            .card{
                padding:10px;
                margin:10px 0;
                width: 100%;
                h3{
                    font-size: 1.2em;
                    margin:5px;
                }
                h4{
                    font-size:1em;
                    margin:5px;
                }
                p{
                    font-size:0.8em;
                }
            }
        }
    }
}
</style>