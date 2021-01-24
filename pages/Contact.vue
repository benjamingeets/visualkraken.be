<template>
    <div>
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