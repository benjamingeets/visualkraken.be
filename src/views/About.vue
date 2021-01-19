<template>
    <div>
        <div class="container">
            <NavBar/>
            <h2 class="text-center">A propos</h2>
            <div class="about">
                <h3>
                VisualKraken
                </h3>
                <p>VisualKraken, c’est l’union de 2 jeunes étudiants avec un objectif clair: accompagner des TPE dans leur croissance à travers les nouveaux médias. Notre jeunesse et nos connaissances font de nous de véritables couteaux suisse numérique, à l’aise dans le web, les réseaux sociaux et la création graphique.</p>
                <div class="image">
                    <img src="https://via.placeholder.com/753x502" alt="">
                </div>
                <p>De part la varité de compétences qui la compose, notre équipe est très versatible et à la fois complémentaire. Tristan, designer, va concevoir vos projets et passera la main à Benjamin qui leur fera prendre vie. </p>
                <Equipe/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss">
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
    }
    @media (max-width:1024px){
        .about{
            .image{
                img{
                    width: 100%;
                }
            }
        }
    }
</style>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Equipe from '@/components/index/Equipe'
export default {
    name:"About",
    components:{
        NavBar,Footer,Equipe
    },
    mounted(){
      document.title="VisualKraken - A propos"
    }
}
</script>