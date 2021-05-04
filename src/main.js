Vue.config.devtools = true;
var app = new Vue({
  el: "#root",
  data: {
    albums: [],
    filterArtist: "",
  },
  created(){
    axios.get("http://localhost/php-ajax-dischi/call.php")
    .then((response) => {
    this.albums = response.data;
    console.log(this.albums);
    });  
  },
  methods: {
    getByArtist: function(){
      axios.get("http://localhost/php-ajax-dischi/call.php", {params: {author: this.filterArtist}}) //aggiungo il parametro alla chiamata api
      .then((response) => {
      this.albums = response.data;
      console.log(this.albums);
      });    
    }
  }
});