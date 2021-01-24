<template>
    <div class="avantages">
        <div class="title text-center">
            <h2>Avantages</h2>
        </div>
        <div class="case">
            <div>
                <h3>
                Responsive
                </h3>
                <p>
                    Un site web conçu pour téléphone, tablette et ordinateur.
                </p>
            </div>
        </div>
        <div class="case">
            <div>
                <h3>
                Sur mesure
                </h3>
                <p>
                    Nous n’utilisons aucun outil superflu, tout est codé à la main selon vos attentes.
                </p>
            </div>
        </div>
        <div class="case">
            <div>
                <h3>
                SEO
                </h3>
                <p>
                    Nous concevons nos sites de manière optimisée pour le référencement Google.
                </p>
            </div>
        </div>
        <div class="case">
            <div>
                <h3>
                UX/UI
                </h3>
                <p>
                    Nous prévoyons ce que vos clients veulent avant même qu’ils ne le sachent ! 
                </p>
            </div>
        </div>
        <div class="case">
            <div>
                <h3>
                Légèreté
                </h3>
                <p>
                    Ecologique, rapide, simple et efficace.
                </p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
$bgGris : #DFDFDF;

.avantages{
    display:grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 5%;
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .case{
        background-color:$bgGris;
        border-radius: 0.5em;
        padding:20px;
        h3{
            margin:10px 0;
            font-size:2.5em;
        }
        p{
            font-size:1em;
        }
    }
}

@media (max-width:1024px){
    .avantages{
        grid-template-columns: 45% 45%;
        grid-gap: 5%;
        .title{
            font-size:0.6em;
        }
    }
}
@media (max-width:480px){
    .avantages{
        .case{
            h3{
                font-size:1em;
            }
            p{
                font-size:0.7em;
                margin:0px;
            }
        }
    }
}
</style>