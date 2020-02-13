<template>
  <div class="peer" :style="{backgroundColor: '#'+bgcolor, width: matching+'px', height:matching+'px',borderRadius:matching/2+'px', left:absrssi+'%'}">
    <small>{{title}}</small>
  </div>
</template>

<script>
var ColorScheme = require('color-scheme');

export default {
  name: "Peer",
  props: {
    title: String,
    data: Object,  
  },
  data: function() {
    return {
      bgcolor: "#ff0000",
      absrssi: 78,
      matching: 50,
    }
  },
  mounted() {
    var scheme = new ColorScheme;
    scheme.from_hue(21).scheme('triade').variation('hard');
    var colors = scheme.colors();

    this.absrssi = Math.random()*100;
    this.matching = Math.random()*400;
    this.bgcolor = colors[Math.floor(Math.random() * colors.length)]; 
  },
  methods: {
    absFromRelRSSI: function(relRSSI) {
      return this.map(relRSSI, -110, -40, 0, 100); 
    },
    map: function(val, low1, high1, low2, high2) {
      return (val - low1) / (high1 - low1) * (high2 - low2) + low2;
    }
  },
  computed: {
    cssProps() { return {
        '--accent-color': this.color,
        '--person-size': this.absrssi+"px"
      }
    }
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .peer {
    text-align: left;
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 80px;
    background-color: var(--accent-color);
    font-size: 9pt;
    color:white;
    position:absolute;
    top:50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .peer > * {
    position:relative;
    top:50%;
    left:50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>
