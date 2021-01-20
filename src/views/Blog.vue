<template>
    <div>
            <h2 class="text-center">Blog</h2>
            <div class="articles_container">
                <div v-for='article in articles' :key="article" class="article" @click="goTop()">
                    <router-link to="/blog/article">
                        <img src="https://via.placeholder.com/455x323" alt="">
                    <h3>
                        UX Design c cool ou pas non je sais pas quoi lol
                    </h3>
                    <p>Tout ce qu'il faut savoir</p>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<style lang="scss">
.articles_container{
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0 0 0 ;
    justify-content: space-between;
    .article{
        width: 30%;
        img{
            border-radius: 1em;
            width: 100%;
        }
        h3{
            margin: 10px 0;
            font-size:1.2em;
        }
        p{
            margin: 0 0 30px 0;
            font-size:0.8em;
        }
    }
}

@media (max-width: 1024px){
    .articles_container{
        .article{
            width: 40%;
        }
    }
}

@media (max-width:480px){
    .articles_container{
        .article{
            width: 100%;
        }
    }
}
</style>

<script>

export default {
    name:"Blog",
    data(){
        return{
            slug : "",
            articles:["a","b","d","s"]
        }
    },
    components:{
    },
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000)
            
        }
    },
    mounted(){
        document.title = "VisualKraken - Blog"
    }
}
</script>