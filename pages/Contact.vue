<template>
    <div>
        <form action="/contact" name="test" netlify-data="true">
            <input name="input1" type="text" value="test">
            <input name="envoie" type="submit" value="">
        </form>
        <h2 class="text-center">Contact</h2>
        <ContactForm/>
    </div>
</template>

<style lang="scss">

</style>

<script>
import ContactForm from '@/components/ContactForm'
export default {
    name:"Contact",
    components:{
       ContactForm
    },
    head(){
        return{
            title:"VisualKraken - Contact"
        }
    }
}
</script>