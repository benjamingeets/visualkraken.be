<template>
    <div>
            <div class="blog-post">
                <h2>{{titre}}</h2>
                <div class="texte">
                  <img :src='urlImage' alt="">
                    <h3>{{soustitre}}</h3>
                    <p v-for="pagagraphe in texte" style="margin-top:10px;">{{pagagraphe}}</p>
                    <div class="liens">
                        <router-link to="/">
                            <div class="button button-gradient" @click="goTop()">
                                <p>Nos services</p>
                            </div>
                        </router-link>
                        <router-link to="/blog">
                            <div class="button">
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
    .texte{
        width: 65%;
        display: flex;
        flex-direction: column;
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
        .texte{
            width: 100% ;
            .recommandes{
                display: none;
            }
        }
    }
}
@media(max-width:480px){
    .blog-post{
        .texte{
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
            title: this.titre + " - VisualKraken"
        }
    },
    data(){
        return{
            articles: data,
            titre:"titre",
            soustitre:"soustitre",
            texte:"texte",
            urlImage:"",
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
    mounted(){
        this.articles.forEach(element => {
            if(element.slug == this.$route.params.slug){
                this.titre = element.titre
                this.soustitre = element.soustitre
                this.texte = element.texte
                this.urlImage = element.urlImage
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