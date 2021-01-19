<template>
    <div>
        <div class="container"><NavBar/>
        <h2 class="text-center">Contact</h2>
        <ContactForm/>
    </div>
    <Footer/>
    </div>
</template>

<style lang="scss">

</style>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
export default {
    name:"Contact",
    components:{
        NavBar,Footer,ContactForm
    },
    mounted(){
        document.title="VisualKraken - Contact"
    }
}
</script>