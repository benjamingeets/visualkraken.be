<template>
    <div class="services">
        <h2 class="text-center section-title">Nos services</h2>
        <!-- Communication -->
        <div id="communication" class="service-card">
            <div class="image">
                <img src="@/assets/communication.png" alt="">
            </div>
            <div class="text">
                <h3 class="tablette-center">Communication</h3>
                <p>Tout le monde utilise les réseaux sociaux, mais avoir une communication pertinente et efficace est plus complexe qu’il n’y parait. Nous sommes là pour vous accompagner dans votre démarche.</p>
                <router-link to="/service/communication">
                    <div class="button tablette-center" @click="goTop()">
                        <p>En savoir plus</p>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- Dev web -->
        <div id="dev" class="service-card reverse">
            <div class="image">
                <img src="@/assets/dev.png" alt="">
            </div>
            <div class="text">
                <h3 class="tablette-center">Développement  de site web</h3>
                <p>Nous mettons un point d’honneur à concevoir des sites internet à la main, en accord avec vos valeurs et axés sur la légerté et la rapidité.</p>
                <router-link to="/service/dev">
                    <div class="button tablette-center button-white" @click="goTop()">
                        <p>En savoir plus</p>
                    </div>
                </router-link>
            </div>
        </div>
        <!-- Graphisme -->
        <div id="graphisme" class="service-card">
            <div class="image">
                <img src="@/assets/graphisme.png" alt="">
            </div>
            <div class="text">
                <h3 class="tablette-center">Graphisme</h3>
                <p>Nous sommes équipés des meilleurs logiciels d’édition d’image pour produire des logos, design ou encore photomontages pour votre présence digitale.</p>
                <router-link to="/service/graphisme">
                    <div class="button tablette-center" @click="goTop()">
                        <p>En savoir plus</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Services",
    methods:{
        goTop(){
            document.querySelector("html").style.scrollBehavior = "auto"
            window.scroll(0,-10000) 
        }
    }
}
</script>

<style lang="scss">
.services{
    margin-bottom:100px;
    .service-card{
        padding:30px;
        display: flex;
        .image{
            width: 40%;
            img{
                width: 100%;
            }
        }
        .text{
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
                width: 100%;
            }
        }
    }
}

.reverse{
    flex-direction: row-reverse;
    background: linear-gradient(260.82deg, #2463AA 0%, #5AC2D8 100%);
    border-radius: 2em;
    margin: 100px 0;
    .text{
        padding-left:20px;
        h3{
            color:white;
        }
        p{
            color:white;
        }
    }
}

@media (max-width: 1024px){
    .services{
        .service-card{
            flex-direction: column;
            .image{
                width: 100%;
            }
            .text{
                width: 100%;
                padding-left:0;
                p{
                    width: 100%;
                }
            }

        }
    }
}
</style>