<template>
  <div class="vis">
    <Peer
      v-for="(value, name) in data"
      v-bind:key="name"
      v-bind:title="name"
      v-bind:data="value"
      class="peer"
    ></Peer>
    <div class="me"></div>
    <div class="line"></div>
  </div>
</template>

<script>
import Peer from "./PeerGraphic.vue";

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
  .me {
    width:300vh;
    height:300vh;
    position:absolute;
    top:calc(50vh - 150vh);
    right:-280vh;
    background-color:#1711bb;
    border-radius: 150vh;
  }

  .line {
    background: #ababab;
    width: 90vw;   
    height: 3px; 
    border-bottom-left-radius: 200% 100%;
    border-bottom-right-radius: 100% 100%;
    border-top-left-radius: 200% 100%;
    border-top-right-radius: 100% 100%;
    position:absolute;
    top:calc(50vh - 3px);
    right:10px;
    z-index: -9999;
  }

  .vis {
    overflow: hidden;
  }

  body {
    overflow: hidden;
  }

</style>
