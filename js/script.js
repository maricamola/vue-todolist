const {createApp} = Vue;

createApp ({
  data(){
    return{
      todo:[
        {
          text: "Sistemare casa",
          done: false
        },
        {
          text: "Seguire il corso Boolean",
          done: false
        },
        {
          text: "Preparare il pranzo",
          done: false
        },
        {
          text: "Ripassare Vue",
          done: false
        },
        {
          text: "Andare in palestra",
          done: false
        },
      ]
    }
  }
}).mount("#app")