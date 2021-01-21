<template>
  <div>
    <!-- A vous êtes là vous? Bah super-->
    <NavBar/>
    <div class="container">
      <transition name="fade" mode="out-in">
            <Nuxt/>
          </transition>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">


$bleu : #2463AA;
$transition : 0.3s ease-in-out;
$gris : #7A7A7A;
@font-face {
  font-family: "HelveticaN";
  src: url(~assets/fonts/HelveticaN.ttf) format("truetype");
  font-display: swap;
}
*{
  font-family: "HelveticaN", "Arial";
  padding:0;
  margin:0;
  border:0;
  list-style: none;
  text-decoration: none;
  color:black;
  transition: $transition;
}

.container{
  width: 80%;
  margin:auto;
  min-height: 65vh;
}

h2{
  font-size:4.3em;
}
h3{
  color:$bleu;
  font-size:3em;
  margin: 50px 0;
}
p{
  color:$gris;
  font-size:1.5em;
  line-height: 150%;
}
.text-center{
  text-align: center;
}
.section-title{
  margin : 100px 0px 50px 0px;
}
.button{
  border:2px solid $bleu;
  border-radius: 0.5em;
  margin-top : 30px;
  display:flex;
  justify-content: center;;
  align-items: center;
  width: 250px;
  height: 60px;
  cursor: pointer;
  p{
    color:$bleu;
    text-align: center;
    width: 100%;
  }
  &:hover{
    background-color:$bleu;
    p{
      color:white;
    }
  }
}

.button-white{
  border:2px solid white;
  p{
    color:white;
  }
}

.button-gradient{
  background: linear-gradient(267.11deg, #2463AA 0%, #5AC2D8 100%);
  border:0;
  padding:2px;
  p{
    color:white;
  }
  &:hover{
    transform: scale(1.05);
  }
}

@media (max-width:1024px){

  .tablette-center{
    margin:auto;
    text-align: center;
  }
  .button{
    margin-top:30px;
    width: 170px;
    height: 40px;
    p{
      font-size: 100%;
    }
  }
  p{
    margin: 30px 0;
  }
}

@media (max-width:480px){
  .section-title{
  margin : 100px 0px 25px 0px;
}
  h2{
    font-size: 2em;
  }
  h3{
    font-size: 1.5em;
  }
  p{
    font-size: 1em;
    
  }
}

.fade-enter, .fade-leave-to{
  opacity: 0;
  transform:translateX(1em)
}

.fade-enter-active .fade-leave-active{
  transition: all .2s ease;
}
</style>

