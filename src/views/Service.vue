<template>
    <div class="service">
        <div class="retour">
            <router-link :to='"/#" + $route.params.service'>
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.25 16.2877H8.635L18.6175 4.45443C19.0843 3.90018 19.3089 3.18562 19.2418 2.46796C19.1748 1.75029 18.8216 1.08831 18.26 0.627628C17.6984 0.166951 16.9744 -0.0546831 16.2472 0.0114845C15.52 0.0776521 14.8493 0.426201 14.3825 0.980454L0.6325 17.2647C0.539992 17.3942 0.457268 17.5303 0.385 17.6718C0.385 17.8075 0.385 17.8889 0.1925 18.0246C0.0678526 18.3358 0.00258808 18.6671 0 19.0017C0.00258808 19.3363 0.0678526 19.6676 0.1925 19.9788C0.1925 20.1145 0.1925 20.1959 0.385 20.3316C0.457268 20.4731 0.539992 20.6092 0.6325 20.7387L14.3825 37.0229C14.6411 37.3293 14.9648 37.5757 15.3308 37.7446C15.6968 37.9134 16.096 38.0006 16.5 38C17.1425 38.0012 17.7652 37.7804 18.26 37.3758C18.5385 37.1479 18.7686 36.8681 18.9374 36.5523C19.1061 36.2366 19.21 35.891 19.2432 35.5356C19.2764 35.1801 19.2383 34.8216 19.1309 34.4808C19.0235 34.1399 18.8491 33.8232 18.6175 33.549L8.635 21.7157H41.25C41.9793 21.7157 42.6788 21.4298 43.1945 20.9208C43.7103 20.4118 44 19.7215 44 19.0017C44 18.2819 43.7103 17.5916 43.1945 17.0826C42.6788 16.5736 41.9793 16.2877 41.25 16.2877Z" fill="black"/>
                </svg>
            </router-link>
        </div>
        <div>
            <h2 class="text-center">
                {{titre}}
            </h2>
            <div class="panel">
                <div class="image">
                    <img :src='"@/assets/" + $route.params.service + ".png"' alt="">
                </div>
                <div class="texte">
                    <h3>{{soustitreUn}}</h3>
                    <p>{{texteUn}}</p>
                    <h3>{{soustitreDeux}}</h3>
                    <p>{{texteDeux}}</p>
                    <router-link to="/contact">
                            <div class="button button-gradient" @click="goTop()">
                                <p>Nous contacter</p>
                            </div>
                        </router-link>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<style lang="scss">
.service{
    overflow-x: hidden;
    padding-top:50px;
    .retour{
        position: absolute;
        left:30px;
        top:50px;
        &:hover{
            margin-left:-15px;
        }
    }
        h2{
            margin-top:30px;
        }
        .panel{
            display: flex;
            .image{
                width: 40%;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                }
            }
            .texte{
                width: 60%;
                padding:50px;
                .button{
                    margin:50px auto 0px auto;
                }
                h3{
                    font-size:2em;
                }
                p{
                    font-size:1.5em;
                }
            }
        }
    
    
}

@media (max-width:1024px) {
    .service{
            .panel{
                flex-direction: column;
                .image{
                    width: 100%;
                }
                .texte{
                    width: 100%;
                    padding:0;
                    h3{
                        font-size:2em;
                    }
                    p{
                        font-size:1em;
                    }
                    .button{
                        margin: 50px auto 50px auto;
                    }
                }
            }
        
    }
}
</style>

<script>
export default {
    name:"Service",
    data(){
        return{
            titre:"",
            soustitreUn:"",
            soustitreDeux:"",
            texteUn:"",
            texteDeux:"",
            urlImage:"",
        }
    },
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000)
        }
    },
    mounted(){
        switch (this.$route.params.service) {
            case "communication" :
                this.titre = "Communication"
                this.soustitreUn = "Evènements ponctuels";
                this.soustitreDeux = "Gestion de réseaux sociaux";
                this.texteUn = "Séminaire? Evènement particulier? Vous souhaitez avoir quelqu’un qui se chargerait de relayer les informations directement sur vos réseaux sociaux? Nous avons ce qu’il vous faut.";
                this.texteDeux="La gestion au quotidien des réseaux sociaux peut être un véritable enfer si l’on ne dispose pas du temps et de la motivation pour le faire. Nous vous proposons de prendre le relais et de créer du contenu pour vous !";
                break;
            case "graphisme" :
                this.titre = "Graphisme";
                this.soustitreUn = "Identité graphique";
                this.soustitreDeux = "Illustration";
                this.texteUn = "Votre identité graphique vous représente, vous vous devez d’avoir une image au top. Notre spécialiste peut vous aider dans cette démarche en s’imprégnant de l’esprit de votre entreprise. ";
                this.texteDeux = "Une photo de couverture facebook? Une illustration pour votre prochain évènement? Nous pouvons prendre cela en charge. ";
                break;
            case "dev" :
                this.titre = "Développement de site web";
                this.soustitreUn = "Votre site, au pixel près";
                this.soustitreDeux = "Site e-Commerce";
                this.texteUn = "Afin de mettre en avant votre entreprise dans le monde digital, il est important que votre site soit à votre image. Nos sites étant intégralement réalisés à la main avec les dernières technologies, tout est possible.";
                this.texteDeux = "Il existe différentes solutions e-commerce préfaites. Mais ces dernières deviennent souvent très chères après quelques mois et restent très peu personnalisables. Nous pouvons réaliser votre commerce en ligne ! ";
                break;
            default:
                break;
        }
        document.title = "Visualkraken - " + this.titre
        document.querySelector("nav").style.display = "none"
        document.querySelector("footer").style.display = "none"
        this.goTop()
    },
    beforeDestroy(){
         document.querySelector("nav").style.display = "flex"
        document.querySelector("footer").style.display = "block"
    }
}
</script>