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
                {titulo: "Battlefield 1", pathImg: 'games/bf1.jpg', to: '/battlefield_one'},
                {titulo: "Battlefield 3", pathImg: 'games/bf3.jpg', to: '/battlefield_one'},
                {titulo: "Battlefield 4", pathImg: 'games/bf4.jpg', to: '/battlefield_one'},
                {titulo: "Battlefield 5", pathImg: 'games/bf5.jpg', to: '/battlefield_one'},
                {titulo: "Battlefield Bad Company 2", pathImg: 'games/bfbc2.jpg', to: '/battlefield_one'},
                {titulo: "Battlefield Bad Company 2 Vietnam", pathImg: 'games/bfbc2viet.jpg', to: '/battlefield_one'},
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
