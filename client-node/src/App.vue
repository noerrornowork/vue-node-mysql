<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
  import {
    queryAllUsers
  } from '../api'
  export default {
    name: 'App',
    methods: {
      async getAllUsers() {
        const {data, code} = await queryAllUsers();

        console.log(data)
      }
    },
    mounted () {
      this.getAllUsers();
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
