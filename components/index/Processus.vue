<template>
    <div class="processus">
        <h2 class="section-title text-center">Processus</h2>
        <img id="desktop" src="~/assets/process_desktop.png" alt="" loading="lazy">
        <img id="mobile" src="~/assets/process_mobile.png" alt="" loading="lazy">
    </div>
</template>

<style lang="scss">
.processus{
    margin-top:200px;
    img{
        width: 100%;
    }
}
#mobile{
    display: none;
}
@media (max-width:1024px){
    #desktop{
        display:none
    }
    #mobile{
        display: block;
      
    }
}
</style>