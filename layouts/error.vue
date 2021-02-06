<template>
    <div class="error-page">
        <h2>Erreur 🦑</h2>
        <p>Cette page n'existe pas</p>
        <NuxtLink to="/">
             <div class="button">
                <p>Retour à l'accueil</p>
            </div>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
    .error-page{
        
        margin:auto;
        padding-top:100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

<script>
export default {
    head(){
        return{
            title : "VisualKraken - Page absente"
        }
    }
}
</script>