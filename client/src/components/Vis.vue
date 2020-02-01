<template>
  <div class="vis">
    <Peer
      v-for="(value, name) in data"
      v-bind:key="name"
      v-bind:title="name"
      v-bind:data="value"
    ></Peer>
  </div>
</template>

<script>
import Peer from "./Peer.vue";

export default {
  name: "Vis",
  components: {
    Peer
  },
  props: {
    msg: String
  },
  data: function () {
    return {
      data: {},
    }
  },
  sockets: {
        connect: function () {            
            // eslint-disable-next-line no-console
            console.log('socket connected')
        },
        init: function (data) {
            // eslint-disable-next-line no-console
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)'+ data)
            this.data = JSON.parse(data);
        },
        data: function(data) {
            this.data = JSON.parse(data);
        }
    },
    methods: {
        clickButton: function (data) {
            // $socket is socket.io-client instance
            this.$socket.emit('emit_method', data)
        }
    },
    mounted() {
      setInterval(() => {
         this.$socket.emit('getdata');
         // eslint-disable-next-line no-console
         console.log("Emit");
      }, 1000);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
