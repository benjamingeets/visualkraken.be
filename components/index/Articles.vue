<template>
    <div class="articles">
        <h2 class="section-title text-center">Articles</h2>
        <div>
            <div class="articleUn">
                <img src="https://via.placeholder.com/756x536" alt="" loading="lazy">
                <h3>UX Design c vraiment sympa le bail </h3>
                <p>Tout ce qu'il faut savoir</p>
            </div>
            <div class="articleDeux">
                <img src="https://via.placeholder.com/465x306" alt="" loading="lazy">
                <h3>Le développement c vraiment bon délire han</h3>
                <p>Tout ce qu'il faut savoir</p>
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
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000)
        }
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