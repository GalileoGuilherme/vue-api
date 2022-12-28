<template>
  <div id="app">
    <header>
      <strong>Vue Nutri</strong>
    </header>
    <div v-if="loading">
      <h1>Carregando...</h1>
    </div>
    <article v-else class="post" v-for="item in nutri" :key="item.id" >
      <strong class="titulo"> {{item.titulo}} </strong>
      <img :src="item.capa" />
      <span class="categoria">Categoria: {{item.categoria}}</span>
      <p class="subtitulo">{{item.subtitulo}}</p>
      <a class="botao" href="#">Acessar</a>
    </article>

  </div>
</template>

<script>
import api from './services/api';

export default {
  name: 'App',
  data(){
    return{
      nutri: [],
      loading: true,
    }
  },
  async created(){
    const response = await api.get('?api=posts');
    console.log(response.data);
    this.nutri = response.data;
    this.loading = false;
  }
}
</script>

<style scoped>
 #app{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
 }

 header{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  width: 100%;
  height: 60%;
  background-color: #4c89e3;
  color: #fff;
 }

 .post{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 700px;
  background-color: #fff;
  border-radius: 7px;
  margin: 8px;
  padding: 10px;
  
 }

 .titulo{
  font-size: 25px;
  margin-bottom: 25px;
  margin-top: 10px;
 }

 .categoria{
  padding-top: 15px;
  font-weight: bold;
 }

 .botao{
  height: 40px;
  background-color: none;
  border-radius: 5px;
  border: 2px solid #4c89e3;
  color: #4c89e3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 18px;
  transition: all 0.5s;

 }

 .botao:hover{
  background-color: #4c89e3;
  color: #fff;
 }
</style>