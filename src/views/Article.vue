<template>
    <div>
        <div class="container">
            <NavBar/>
            <div class="blog-post">
                <h2>{{titre}}</h2>
                <div class="texte">
                  <img src="https://via.placeholder.com/970x668" alt="">
                    <h3>{{soustitre}}</h3>
                    <p>{{texte}}</p>
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
                        
                        <div>
                            <img src="https://via.placeholder.com/465x306" alt="">
                            <h3>UX design</h3>
                            <p>les trucs à savoir</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/465x306" alt="">
                            <h3>UX design</h3>
                            <p>les trucs à savoir</p>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/465x306" alt="">
                            <h3>UX design</h3>
                            <p>les trucs à savoir</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss">
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
                    font-size:2em;
                }
                p{
                    font-size:1em;
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
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
    name:"Contact",
    data(){
        return{
            titre : "Titre",
            soustitre : "Sous-titre",
            texte : "Lorem ipsum blabla texte quoi tu connais"
        }
    },
    components:{
        NavBar,Footer
    },
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000)
            
        }
    },
    mounted(){
        document.title=  this.titre + " - VisualKraken"
    }
}
</script>