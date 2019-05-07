<template>
<div class="main">
    <div class="parallax"></div>
    <div class="info">
        <p>{{content}}
        </p>
    </div>
    
    <div class="parallax"></div>
    <div class="info">
        blabla
    </div>
    <div class="parallax"></div>
</div>   
</template>

<script>
export default {
    data() {
        return {
            content: 'Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela EA DICE e publicada pela Electronic Arts. É o décimo quarto jogo da franquia Battlefield. Foi lançado em outubro de 2016 para Microsoft Windows, PlayStation 4 e Xbox One.',
        }
    },
}
</script>

<style lang="scss">


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
