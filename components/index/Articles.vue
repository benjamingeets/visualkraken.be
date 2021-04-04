<template>
  <div class="articles">
    <h2 class="section-title text-center">Articles</h2>
    
    <div>
      <div class="articleUn" @click="goTop()">
        <NuxtLink :to="'/blog/' + blog_posts[0].slug">
          <img
            :src="'media/blog/' + blog_posts[0].miniature "
            alt=""
            loading="lazy"
          />
          <h3>{{ blog_posts[0].titre }}</h3>
          <p>{{ blog_posts[0].soustitre }}</p>
        </NuxtLink>
      </div>
      <div class="articleDeux">
        <NuxtLink :to="'/blog/' + blog_posts[1].slug">
          <img
            :src="'/media/blog/' + blog_posts[1].miniature "
            alt=""
            loading="lazy"
            @click="goTop()"
          />
          <h3 @click="goTop()">{{ blog_posts[1].titre }}</h3>
          <p @click="goTop()">{{ blog_posts[1].soustitre }}</p>
        </NuxtLink>
        <NuxtLink to="/blog">
          <div class="button" @click="goTop()">
            <p>Voir plus</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props:['blog_posts'],
  methods: {
    goTop() {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll(0, -10000);
    },
  }
};
</script>

<style lang="scss">
.articles {
  img {
    border-radius: 1em;
  }
  div {
    display: flex;
    justify-content: space-between;
    .articleUn {
      width: 60%;
      a {
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: left;
        &:hover {
          img {
            filter: grayscale(100%);
          }
        }
        img {
          width: 100%;
        }
        h3 {
          margin-right: 10px;
          margin: 10px 0;
        }
      }
    }
    .articleDeux {
      a {
        &:hover {
          img {
            filter: grayscale(100%);
          }
        }
      }
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      img {
        width: 100%;
      }
      h3 {
        font-size: 2em;
        margin: 10px 0;
      }
      p {
        margin: 0;
      }
    }
  }
}
@media (max-width: 1024px) {
  .articles {
    div {
      .articleUn {
        h3 {
          font-size: 1.5em;
          margin: 10px 0;
        }
        p {
          font-size: 1em;
          margin: 5px 0;
          margin-bottom: 50px;
        }
      }
      .articleDeux {
        h3 {
          font-size: 1.5em;
        }
        p {
          font-size: 1em;
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .articles {
    div {
      flex-direction: column;
      .articleUn {
        width: 100%;
        p {
          margin: 0;
          margin-bottom: 50px;
        }
      }
      .articleDeux {
        width: 100%;
        justify-content: center;
        align-items: center;
        .button {
          justify-content: center;
        }
      }
    }
  }
}
</style>
