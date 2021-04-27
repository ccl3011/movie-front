<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  el:'#app',
  name: 'App',
  // data() {
  //   //var regExp = /^\d{3}-\d{4}-\d{4}$/;
  //   //hp = hp.replace(/[^0-9]/g, '');
  //   //hp = hp.replace(/[^0-9]/g,'').replace(/^\d{3}-\d{4}-\d{4}$/,'$1-$2-$3');
  //   // return {
  //   //   hp :''
  //   // }
  // },
  
  methods: {
    
    onClick () {
      //console.log('button click')
      
    },
  },
  
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

table { 
  text-align: center;
}

.btn, input {
    display: inline-block;
    outline: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font: 14px/100% Arial, Helvetica, sans-serif;
    padding: .5em 2em .55em;
    text-shadow: 0 1px 1px rgba(0,0,0,.3);
    -webkit-border-radius: .5em; 
    -moz-border-radius: .5em;
    border-radius: .5em;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
.btn:hover {
    text-decoration: none;
}
.btn:active {
    position: relative;
    top: 1px;
}

.big-rounded {
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius: 2em;
}
.medium {
    font-size: 12px;
    padding: .4em 1.5em .42em;
}
.small {
    font-size: 11px;
    padding: .2em 1em .275em;
}
.orange {
    /*color: #fef4e9;*/
    color: black;
    border: solid 1px #da7c0c;
    background: #f78d1d;
    background: -moz-linear-gradient(top,  #faa51a,  #f47a20);
    filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#faa51a', endColorstr='#f47a20');
}
.orange:hover {
    background: #f47c20;
    background: -moz-linear-gradient(top,  #f88e11,  #f06015);
    filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#f88e11', endColorstr='#f06015');
}
.orange:active {
    color: #fcd3a5;
    background: -moz-linear-gradient(top,  #f47a20,  #faa51a);
    filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#f47a20', endColorstr='#faa51a');
}
</style>
