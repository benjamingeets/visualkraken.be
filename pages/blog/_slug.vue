<template>
    <div>
            <div class="blog-post">
                <h2>{{titre}}</h2>
                <div class="article">
                  <img src='{{urlImage}}' alt="">
                    <div class="text-content" v-for="texte in article" :key='texte.contenu' style="margin-top:10px;">
                        <h3 v-if="texte.titre">{{texte.titre}}</h3>
                        <p>{{texte.contenu}}</p>
                        <ul v-if="texte.liste">
                            <li v-for="el in texte.liste" :key='el'><p>➡️ {{el}}</p></li>
                        </ul>
                    </div>
                    <p id="auteur"><a :href='"https://" + auteur + ".be"'>Article rédigé par @{{auteur}}</a></p>
                    <div class="liens">
                        <router-link to="/">
                            <div class="button button-gradient" @click="goTop()">
                                <p>Nos services</p>
                            </div>
                        </router-link>
                        <router-link to="/blog">
                            <div class="button" @click="goTop()">
                                <p>Voir tous les articles</p>
                            </div>
                        </router-link>
                    </div>
                    <div class="recommandes">
                        
                        <div @click="goTop()">
                            <NuxtLink :to='"/blog/" + reco[0].slug'>
                                <img :src="reco[0].urlImage" alt="" loading="lazy">
                                <h3>{{reco[0].titre}}</h3>
                                <p>{{reco[0].soustitre}}</p>
                            </NuxtLink>
                        </div>
                        <div @click="goTop()">
                           <NuxtLink :to='"/blog/" + reco[1].slug'>
                                <img :src="reco[1].urlImage" alt="" loading="lazy">
                                <h3>{{reco[1].titre}}</h3>
                                <p>{{reco[1].soustitre}}</p>
                            </NuxtLink>
                        </div>
                        <div @click="goTop()">
                            <NuxtLink :to='"/blog/" + reco[2].slug'>
                                <img :src="reco[2].urlImage" alt="" loading="lazy">
                                <h3>{{reco[2].titre}}</h3>
                                <p>{{reco[2].soustitre}}</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
      
    </div>
</template>

<style lang="scss">
#auteur{
    color:black;
    margin-top:20px;
    font-size:1em;
}
nav{
    ul{
        li{
            .nuxt-link-active[href="/blog"]{
                    color:#2463AA;
                    &::after{
                        content: '';
                        display: block;
                        width: 100%;
                        height: 2px;
                        background: #2463AA;
                        transition: width .3s;
                        margin-top:10px
                    }
                }
        }
    }
}

.blog-post{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2{
        margin-bottom:50px;
    }
    .article{
        width: 65%;
        display: flex;
        flex-direction: column;
        .text-content{
            ul{
                margin-left:30px;
                li{
                    margin-top:5px;
                }
            }
        }
        img{
            border-radius: 1em;
            width: 100%;
        }
        .liens{
            display: flex;
            justify-content: space-evenly;
        }
        .recommandes{
            display: flex;
            margin-top:50px;
            justify-content: space-evenly;
            div{
                width: 30%;
                a{
                    img{
                        filter: grayscale(100%)
                    }
                    &:hover{
                        img{
                            filter: grayscale(0%)
                        }
                    }
                }
                h3{
                    margin:0;
                    font-size:1em;
                }
                p{
                    font-size:0.8em;
                }
            }
        }
    }
}

@media (max-width:1024px) {
    .blog-post{
        .article{
            width: 100% ;
            .recommandes{
                display: none;
            }
        }
    }
}
@media(max-width:480px){
    .blog-post{
        .article{
            .text-content{
                p{
                    margin: 5px 0;
                }
                h3{
                    margin:10px 0;
                }
            }
            .liens{
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
}
</style>

<script>

import data from "~/assets/articles.json"

export default {
    name:"Contact",
    head(){
        return{
            title: this.titre + " - VisualKraken",
            meta:[
               { property: 'og:title', content: `${this.titre} - VisualKraken`},
               { name:'twitter:title', content: `${this.titre} - VisualKraken`}
            ]
        }
    },
    data(){
        return{
            articles: data,
            titre:"titre",
            soustitre:"soustitre",
            article:"article",
            urlImage:"",
            auteur:"",
            reco: [
                {
                titre : "...",
                soustitre :"...",
                urlImage : ""
                },
                {
                    titre : "...",
                    soustitre :"...",
                    urlImage : ""
                },
                {
                titre : "...",
                soustitre :"...",
                urlImage : "",
                slug : ""
               }]
        }
    },
    async fetch(){
        this.articles.forEach(element => {
            if(element.slug == this.$route.params.slug){
                this.titre = element.titre
                this.soustitre = element.soustitre
                this.article = element.article
                this.urlImage = element.urlImage
                this.auteur = element.auteur
            }
        });

        for (let i = 0; i < 3; i++) {
            this.reco[i].titre = this.articles[i].titre
            this.reco[i].slug = this.articles[i].slug
            this.reco[i].soustitre = this.articles[i].soustitre
            this.reco[i].urlImage = this.articles[i].urlImage
        }
    },
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000)
            
        }
    }
}
</script>