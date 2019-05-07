<template>
<div class="main">
      <router-link to="things">
            <button class="btnMore">Back</button>
        </router-link>  
    <div class="parallax"></div>
       
        <div class="info">
            <div>Jogo: <strong>{{info.player.game}}</strong></div>
            <div>Plataforma: <strong>{{info.player.plat}}</strong></div>
            <div>Nickname: <strong>{{info.player.name}}</strong></div>
            <div>Tag Clan: <strong>{{info.player.tag}}</strong></div>
            <div>Current Rank: <strong>{{info.player.rank.nr}}</strong></div>
            <div>Time Played: <strong>{{info.player.timePlayed}}</strong></div>
        </div>
    <div class="parallax"></div>
</div>   
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            plataform: 'pc',
            player: 'nnyjaah',
            info: null,
        }
    },
    mounted() {
        axios.get('http://api.bf4stats.com/api/playerInfo?plat='+this.plataform+'&name='+this.player+'&opt=progress&output=json')
        .then(response => (this.info = response.data))
        .catch(error => error)
    },
}
</script>

<style lang="scss">

button{
    float: left;
}

.parallax{
    background-image: url('../assets/bf1bg.jpg');
    min-height: 500px; 
/* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
    margin: 0;
}

.info{
    justify-content: center;
    padding: 40px;
    background: #E44D26;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F16529, #E44D26);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F16529, #E44D26); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
     p{
         
         font-size: 20px;
         align-items: center;
     }
}
</style>
