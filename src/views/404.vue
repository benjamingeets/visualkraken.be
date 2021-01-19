<template>
    <div>
        <div class="container">
            <NavBar/>404
        </div>
        <Footer/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
    name:"Contact",
    components:{
        NavBar,Footer
    },
    mounted(){
        document.title="contact"
    }
}
</script>