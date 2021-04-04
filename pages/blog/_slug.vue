<template>
  <div>
    <div class="blog-post">
      <h2>{{ post.titre }}</h2>
      <div class="article">
        <img :src="'/media/blog/' + post.miniature" alt="" />
        <h3>{{post.soustitre}}</h3>
        <nuxt-content :document="post" />
        <p id="auteur">
          <a target="_blank" :href="post.auteur.lien"
            >Article rédigé par {{ post.auteur.nom }}</a
          >
        </p>
        <div class="liens">
          <router-link to="/">
            <div class="button button-gradient" @click="goTop()">
              <p>Nos services</p>
            </div>
          </router-link>
          <router-link to="/blog">
            <div class="button" @click="goTop()">
              <p>Voir tous les articles</p>
            </div>
          </router-link>
        </div>
        <div class="recommandes">
          <div v-for="reco in recommandations" :key="reco.key" @click="goTop()">
            <NuxtLink :to="'/blog/'+ reco.slug">
              <img
                :src="'/media/blog/' + reco.miniature"
                alt=""
                loading="lazy"
              />
              <h3>{{reco.titre}}</h3>
              <p>{{reco.soustitre}}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#auteur {
  color: black;
  margin-top: 20px;
  font-size: 1em;
}
nav {
  ul {
    li {
      .nuxt-link-active[href="/blog"] {
        color: #2463aa;
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background: #2463aa;
          transition: width 0.3s;
          margin-top: 10px;
        }
      }
    }
  }
}

.blog-post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 50px;
  }
  .article {
    width: 65%;
    display: flex;
    flex-direction: column;
    h3{
        margin-bottom:0;
    }
    .nuxt-content-container{
      position: unset;
        .nuxt-content{
            p{
                margin-top:20px;
            }
            ul{
              li{
                color:#7A7A7A;
                margin-top:10px;
                &::before{
                  content:"➡️ " 
                }
              }
            }
        }
    }
    img {
      border-radius: 1em;
      width: 100%;
    }
    .liens {
      display: flex;
      justify-content: space-evenly;
    }
    .recommandes {
      display: flex;
      margin-top: 50px;
      justify-content: space-evenly;
      div {
        width: 30%;
        a {
          img {
            filter: grayscale(100%);
          }
          &:hover {
            img {
              filter: grayscale(0%);
            }
          }
        }
        h3 {
          margin: 0;
          font-size: 1em;
        }
        p {
          font-size: 0.8em;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .blog-post {
    .article {
      width: 100%;
      .recommandes {
        display: none;
      }
    }
  }
}
@media (max-width: 480px) {
  .blog-post {
    .article {
      .text-content {
        p {
          margin: 5px 0;
        }
        h3 {
          margin: 10px 0;
        }
      }
      .liens {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

<script>

export default {
  name: "Contact",
  head() {
    return {
      title: this.post.titre + " - VisualKraken",
      meta: [
        { property: "og:title", content: `${this.post.titre} - VisualKraken` },
        { name: "twitter:title", content: `${this.titre} - VisualKraken` },
      ],
    };
  },
  async asyncData({ $content, params }) {
    let post;
    let recommandations
    post = await $content("blog", params.slug).fetch();
    recommandations= await $content("blog").limit(3).fetch();
    return { post, recommandations };
  },
  methods: {
    goTop() {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll(0, -10000);
    },
  },
};
</script>
