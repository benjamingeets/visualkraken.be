<template>
  <div>
    <Header/>
    <Services/>
    <Avantages/>
    <Processus/>
    <Articles :blog_posts='blog_posts'/>
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
  async asyncData({ $content }) {
    let blog_posts;
    blog_posts = await $content("blog").sortBy('date').limit(2).fetch();
    return { blog_posts };
  },
  head(){
    return{
      title : "VisualKraken - Votre site, au pixel près"
    }
  }
}
</script>
