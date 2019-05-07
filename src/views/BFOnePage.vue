<template>
<div class="main">
    <div class="parallax"></div>
    <div class="info">
        {{content}}
    </div>
    <div class="parallax"></div>
</div>
    
    
</template>

<script>
export default {
    data() {
        return {
            content: 'Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela EA DICE e publicada pela Electronic Arts. É o décimo quarto jogo da franquia Battlefield. Foi lançado em outubro de 2016 para Microsoft Windows, PlayStation 4 e Xbox One',

        }
    },
}
</script>

<style>


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
    padding: 25px;
    height: 200px;
    background: black;
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    font-size:36px;
    color: white;
    justify-content: center;
    align-items: center;    
}
</style>
