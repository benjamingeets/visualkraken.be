<template>
    <div>
        <h2 class="text-center">Contact</h2>
        <p> <a href="https://visualkraken.be">VisualKraken a arrêté son activité, ce site est encore accessible en tant qu'archive mais il n'est plus possible de nous contacter via son intermediaire</a> </p>
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
            title:"VisualKraken - Contact",
            meta:[
               { property: 'og:title', content: "Contact - VisualKraken"},
               { name:'twitter:title', content: 'Contact - VisualKraken'}
            ]
        }
    }
}
</script>