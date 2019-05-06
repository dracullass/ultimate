<template>
    <div class="flex-wrap">
        <div class="card" v-for="item in list" :key="item.titulo" :style="{ backgroundImage: 'url(' + item.pathImg + ')' }" >
            <div class="btnOverlay">
                <button><i class="fas fa-plus"></i></button>    
            </div> 
            <div class="overlay">
                {{item.titulo}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        games: Array
    },
    data() {
        return {
            //nome: 'Battlefield 5',
            //path: '/bf1.jpg',
            list: this.games,
        }
    },
    methods: {
        
    },
}
</script>

<style>

.flex-wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  transition: 0.3s;
  height: 250px;
  width: 600px;
  display: flex;
  margin: 15px;
  justify-content: center;
  /*background-image: url('../assets/bf.jpg');*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 18px 22px 0 rgba(0,0,0,0.2); 
  border-radius: 5px;
  
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 50%;
  transition: .5s ease-in-out;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  border-bottom: 5px solid indigo;
}
 
.card:hover .overlay{
    opacity: 5;
}

button{
    border-radius: 15px;
    border-left: 4px solid;
    border-left-color: blueviolet;
    background: rgb(66, 184, 221); /* this is a light blue */
}

.btnOverlay{
    opacity: 0;
}

.card:hover .btnOverlay{
    opacity: 1;
    transition: .5s ease-in-out;
    position: absolute;
    top: 10px;
    left: 16px;

}
</style>
