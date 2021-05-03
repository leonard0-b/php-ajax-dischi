Vue.config.devtools = true;
var app = new Vue({
  el: "#root",
  data: {},
  created(){
    axios.get("http://localhost/php-ajax-dischi/call.php")
    .then((response) => {
    console.log(response.data);
    });  
  }
});