<template>
    <div class="articles">
        <h2 class="section-title text-center">Articles</h2>
        <div>
            <div class="articleUn">
                <img :src='reco[0].urlImage' alt="" loading="lazy">
                <h3>{{reco[0].titre}} </h3>
                <p>{{reco[1].soustitre}}</p>
            </div>
            <div class="articleDeux">
                <img :src='reco[1].urlImage' alt="" loading="lazy">
                <h3>{{reco[1].titre}}</h3>
                <p>{{reco[1].soustitre}}</p>
                <router-link to="/blog">
                    <div class="button" @click="goTop()">
                        <p>Voir plus</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Articles",
    data(){
        return{
            reco: [
                {
                titre : "...",
                soustitre :"...",
                urlImage : "https://apivisualkraken.herokuapp.com"
                },
                {
                    titre : "...",
                    soustitre :"...",
                    urlImage : "https://apivisualkraken.herokuapp.com"
                }
                ]
        }
    },
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000)
        }
    },
    beforeMount(){
        const axios = require('axios').default;
        axios.get("https://apivisualkraken.herokuapp.com/articles")
        .then((response)=>{
            const articles = response.data
            for (let i = 0; i < 2; i++) {
                this.reco[i].titre = response.data[i].titre
                this.reco[i].urlImage = this.reco[i].urlImage+response.data[i].image.url
                this.reco[i].slug = response.data[i].slug
                this.reco[i].soustitre = response.data[i].soustitre
            }
            
        })
    }
}
</script>

<style lang="scss">

.articles{
    img{
        border-radius:1em;
    }
    div{
        display:flex;
        justify-content: space-between;
        .articleUn{
            width:60%;
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            align-items: center;
            img{
                width: 100%;
            }
            h3{
                margin-right: 10px;
            }
        }
        .articleDeux{
            width:35%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            img{
                width: 100%;
            }
            h3{
                font-size: 2em;
                margin:10px 0;
            }
            p{
                margin:0;
            }
            
        }
    }
}
@media (max-width:1024px){
    .articles{
        div{
            .articleUn{
                h3{
                    font-size: 1.5em;
                    margin: 10px 0;
                }
                p{
                    font-size: 1em;
                    margin: 5px 0;
                    margin-bottom:50px;
                }
            }
            .articleDeux{
                h3{
                    font-size:1.5em;
                }
                p{
                    font-size:1em;
                    
                }
            }  
        }
    }
}

@media (max-width:480px){
    .articles{
        div{
            flex-direction: column;
            .articleUn{
                width: 100%;
                p{
                    margin:0;
                    margin-bottom:50px;
                }
            }
            .articleDeux{
                width: 100%;
                justify-content: center;
                align-items: center;
                .button{
                    justify-content: center;
                }
            }
        }
    }
}
</style>