<template>
    <div>

            <h2 class="text-center">A propos</h2>
            <div class="about">
                <h3>
                VisualKraken
                </h3>
                <p>VisualKraken, c’est l’union de 2 jeunes étudiants avec un objectif clair: accompagner les petits entreprises et indépendants dans leur croissance à travers les nouveaux médias. Notre jeunesse et nos connaissances font de nous de véritables couteaux suisses numériques, à l’aise dans le web, les réseaux sociaux et la création graphique.</p>
                <div class="image">
                    <img src="~/assets/equipe.jpg" alt="">
                </div>
                <h3>Notre équipe</h3>
                <p>De part la varéité de compétences qui la compose, notre équipe est très versatile et à la fois complémentaire. Tristan, designer, va concevoir vos projets et passera la main à Benjamin qui leur fera prendre vie. </p>
                <div class="equipe">
                    <div class="card">
                        <div class="photo">
                            <img src="~/assets/benjamin.jpg" alt="">
                        </div>
                        <div class="contenu">
                            <h3>Benjamin Geets</h3>
                            <h4>Développeur</h4>
                            <p>Etudiant de 21 ans, il a commencé à s’intéresser au web dès son plus jeune age lui permettant  d’être le plus à jour possible.</p>
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
                        
                    </div>
                    <div class="card">
                        <div class="photo">
                            <img src="~/assets/tristan.jpg" alt="">
                        </div>
                        <div class="contenu">
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
            </div>
    </div>
</template>

<style lang="scss">
$grisClair : #DFDFDF;
$bleu : #2463AA;
    .about{
        margin:auto;
        width: 80%;
       .image{
           margin:40px 0;
           text-align: center;
           img{
               border-radius: 1em;
               width: 50%;
           }
       }
       .equipe{
           display: flex;
           flex-direction: column;
           .card{
               margin-top:20px;
               background: $grisClair;
               border-radius: 1em;
               display: flex;
               padding:20px;
               justify-content: space-between;
               .photo{
                   min-width: 30%;
                   margin-right:20px;
                   img{
                       border-radius: 1em;
                       width: 100%;
                   }
               }
               .contenu{
                   width: 68%;
                   display: flex;
                   flex-direction: column;
                   justify-content: flex-start;
                   h3{
                       margin: 20px 0 0 0 ;
                       font-size:2.5em;
                   }
                   h4{
                       color:white;
                       font-size:1.5em;
                       margin:10px 0 10px 0;
                   }
                   p{
                       font-size:1.3em;
                   }
                   .social{
                       width: 30%;
                       display:flex;
                       justify-content: space-evenly;
                       height: 100%;
                       align-items: center;
                       a{
                           width: 20%;
                           img{
                               width: 100%;
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
    }
    @media (max-width:1024px){
        .about{
            width: 100%;
            .image{
                img{
                    width: 100%;
                }
            }
            .equipe{
            .card{
                flex-direction: column;
                .photo{
                    width: 100%;
                }
                .contenu{
                    width: 100%;
                    h3{
                        text-align: center;
                        margin-top:20px;
                    }
                    h4{
                        text-align: center;
                    }
                    .social{
                        margin:auto;
                        width: 50%;
                    }
                }
            }
        }
        }
        
    }

    @media (max-width:480px){
        .about{
            .equipe{
                .card{
                    padding:10px;
                    .contenu{
                        h3{
                            font-size:1.2em;
                            margin:5px;
                        }
                        h4{
                            font-size:1em;
                            margin:5px;
                        }
                        p{
                            font-size:0.8em;
                            margin:10px 0;
                        }
                        .social{
                            width: 100%;
                            margin-top:10px;
                            a{
                                width: 10%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<script>
export default {
    name:"About",
    components:{
    },
    head(){
        return{
            title:"VisualKraken - A propos",
            meta:[
               { property: 'og:title', content: "A propos - VisualKraken"},
               { name:'twitter:title', content: 'A propos - VisualKraken'}
            ]
        }
    }
}
</script>