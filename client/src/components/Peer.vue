<template>
  <div class="peer">
    <h2>{{title}} <small>({{Math.floor((new Date().getTime() - data.lastUpdate) / 1000)}} sec ago)</small></h2>
    <ul id="example-1">
      <li v-for="(item, key) in data.peers" v-bind:key="key">
        {{ key }}: {{ item.rssi }} ({{Math.floor((new Date().getTime() - item.lastSeen) / 1000)}} sec ago)
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Peer",
  props: {
    title: String,
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .peer {
    text-align: left;
    display: block;
    width: 160px;
    min-height: 200px;
    padding: 0px;
    margin: 20px;
    padding-top:0px;
    background-color: gray;
    font-size: 9pt;
    color:white;
  }
  h2 {
    background-color: #444444;
    color:white;
    width:100%;
    margin:0;
    padding:10px;
    padding-right:0px;
    font-size: 14pt;
    margin-bottom:10px;
  }

  ul {
    list-style-type: none;
    margin:0;
    padding:0;
    margin-left:5px;
  }
</style>
