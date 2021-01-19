<template>
  <div>
    <div class="container">
    <NavBar/>
    <Header/>
    <Services/>
    <Avantages/>
    <Processus/>
    <Articles/>
    <Equipe/>
  </div>
  <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/index/Header.vue'
import Services from '@/components/index/Services.vue'
import Avantages from '@/components/index/Avantages.vue'
import Processus from '@/components/index/Processus.vue'
import Articles from '@/components/index/Articles.vue'
import Equipe from '@/components/index/Equipe.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Index',
  components: {
    NavBar,Header,Services,Avantages,Processus,Articles,Equipe,Footer
  },
  mounted(){
    document.title= "VisualKraken - Votre site au pixel près"
    document.querySelector("html").style.scrollBehavior = "auto"
  }
}
</script>
