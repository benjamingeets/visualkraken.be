<template>
  <div>
    <Header/>
    <Services/>
    <Avantages/>
    <Processus/>
    <Articles/>
    <Equipe/>
  </div>
</template>


<script>

export default {
  name: 'Index',
  mounted(){
    document.querySelector("html").style.scrollBehavior = "auto"
    if(location.hash){
      document.querySelector(location.hash).scrollIntoView()
    }
  },
  head(){
    return{
      title : "VisualKraken - Votre site, au pixel près"
    }
  }
}
</script>
