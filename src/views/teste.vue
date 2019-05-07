<template>
    <div class="main">
        
        <div>Jogo: <strong>{{info.player.game}}</strong></div>
        <div>Plataforma: <strong>{{info.player.plat}}</strong></div>
        <div>Nickname: <strong>{{info.player.name}}</strong></div>
        <div>Tag Clan: <strong>{{info.player.tag}}</strong></div>
        <div>Current Rank: <strong>{{info.player.rank.nr}}</strong></div>
        <div>Time Played: <strong>{{info.player.timePlayed}}</strong></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            nString: '',
            info: null,
            plataform: 'pc',
            dataGroup: 'player',
            //player: 'nNyjaah',
            //player: 'jamall-hx',
            player: 'p4iv4'
        }
    },  
        mounted() {
            axios.get('http://api.bf4stats.com/api/playerInfo?plat='+this.plataform+'&name='+this.player+'&opt=progress&output=json')
            .then(response => (this.info = response.data))
            .catch(error => error)
        },
    
}
</script>

<style>
</style>
