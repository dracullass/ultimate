<template>
    <div class="header">
       <GameCard />
       <GameCard />
       <GameCard />
       <GameCard />
    </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
export default {
    components: { GameCard },
    data() {
        return {
            
        }
    },
    methods: {
        
    },  
}
</script>

<style>
.header{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

</style>
