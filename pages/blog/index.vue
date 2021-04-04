<template>
  <div>
    <h2 class="text-center">Blog</h2>
    <div class="articles_container">
        
      <div
        v-for="article in blog_posts"
        :key="article.titre"
        class="article"
        @click="goTop()"
      >
        <router-link :to="'/blog/' + article.slug">
          <img
            :src="'/media/blog/'+article.miniature"
            alt=""
            loading="lazy"
          />
          <h3>
            {{ article.titre }}
          </h3>
          <p>{{ article.soustitre }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.articles_container {
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0 0 0;
  justify-content: space-between;
  .article {
    width: 30%;
    a {
      &:hover {
        img {
          filter: grayscale(100%);
        }
      }
    }
    img {
      border-radius: 1em;
      width: 100%;
    }
    h3 {
      margin: 10px 0;
      font-size: 1.2em;
    }
    p {
      margin: 0 0 30px 0;
      font-size: 0.8em;
    }
  }
}

@media (max-width: 1024px) {
  .articles_container {
    .article {
      width: 40%;
    }
  }
}

@media (max-width: 480px) {
  .articles_container {
    .article {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  name: "Blog",
  components: {},
  methods: {
    goTop() {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll(0, -10000);
    },
  },
  async asyncData({ $content }) {
    let blog_posts;
    blog_posts = await $content("blog").sortBy('date','desc').fetch();
    return { blog_posts };
  },
  head() {
    return {
      title: "VisualKraken - Blog",
      meta: [
        { property: "og:title", content: "Blog - VisualKraken" },
        { name: "twitter:title", content: "Blog - VisualKraken" },
      ],
    };
  },
};
</script>
