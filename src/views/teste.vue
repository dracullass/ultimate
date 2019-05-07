<template>
    <div class="main">
        {{info}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info: null,
        }
    },
    mounted() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    },
}
</script>

<style>

</style>
