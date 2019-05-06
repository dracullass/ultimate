<template>
     <div class="card" :style="{ backgroundImage: 'url(' + path + ')' }" > 
            <div class="overlay">
                {{nome}}
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            nome: 'Battlefield 5',
            path: '/bf.jpg',
        }
    },
    methods: {
        
    },
}
</script>

<style>

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
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}
 
.card:hover .overlay{
    opacity: 5;
}
</style>
