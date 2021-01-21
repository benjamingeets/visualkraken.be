<template>
    <div class="header">
        <div class="text">
            <h2>
                Votre site sur mesure, au pixel près
            </h2>
            <hr>
            <p>VisualKraken, votre agence web à Tournai</p>
        </div>
        <div class="image">
            <img src="~/assets/header.svg" alt="">
        </div>
        <img id="mouse" src="~/assets/mouse.png" alt="" @click="goTo()">
    </div>
    
</template>

<script>
export default {
    name:"Header",
    methods:{
        goTo(){
            document.querySelector("html").style.scrollBehavior = "smooth"
            window.scroll(0,window.innerHeight)
        }
    }
}
</script>

<style lang="scss">
$bleu : #2463AA;
$transition : 0.3s ease-in-out;
    .header{
        display: flex;
        flex-wrap: wrap;
        min-height: 85vh;
        .text{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            hr{
                background-color:$bleu;
                height: 5px;
                width: 50%;
                border-radius: 50px;
                margin: 30px 0 0 0 ;
            }
        }
        .image{
            width: 50%;
            img{
                width: 100%;
            }
        }
        #mouse{
            margin:auto;
            height: 30px;
            cursor: pointer;
        }
    }
    @media (max-width: 1024px){
        .header{
            flex-direction: column-reverse;
            align-content: flex-start;
            .text{
                width: 100%;
            }
            .image{
                width: 100%;
                text-align: center;
                img{
                    width: 80%;
                }
            }
        }
        #mouse{
            display: none;
        }
    }
    @media (max-width:480px){
        .header{
            .image{
                margin-bottom:30%;
                img{
                    width: 100%;
                }
            }
        }
    }
</style>