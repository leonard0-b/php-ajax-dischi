Vue.config.devtools = true;
var app = new Vue({
  el: "#root",
  data: {
    albums: [],
  },
  created(){
    axios.get("http://localhost/php-ajax-dischi/call.php")
    .then((response) => {
    this.albums = response.data;
    console.log(this.albums);
    });  
  }
});