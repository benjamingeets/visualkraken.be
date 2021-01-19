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
import Header from '@/components/index/Header.vue'
import Services from '@/components/index/Services.vue'
import Avantages from '@/components/index/Avantages.vue'
import Processus from '@/components/index/Processus.vue'
import Articles from '@/components/index/Articles.vue'
import Equipe from '@/components/index/Equipe.vue'

export default {
  name: 'Index',
  components: {
    Header,Services,Avantages,Processus,Articles,Equipe
  },
  mounted(){
    document.title= "VisualKraken - Votre site au pixel près"
    document.querySelector("html").style.scrollBehavior = "auto"
  }
}
</script>
