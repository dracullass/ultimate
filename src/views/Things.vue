<template>
    <div class="header">
       <GameCard :games="games"/>
    </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
export default {
    components: { GameCard },
    data() {
        return {
            games: [
                {titulo: "Battlefield 1", pathImg: 'games/bf1.jpg'},
                {titulo: "Battlefield 3", pathImg: 'games/bf3.jpg'},
                {titulo: "Battlefield 4", pathImg: 'games/bf4.jpg'},
                {titulo: "Battlefield 5", pathImg: 'games/bf5.jpg'},
                {titulo: "Battlefield Bad Company 2", pathImg: 'games/bfbc2.jpg'},
                {titulo: "Battlefield Bad Company 2 Vietnam", pathImg: 'games/bfbc2viet.jpg'},
            ]
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
