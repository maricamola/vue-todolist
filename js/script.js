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
        }
      ],
      errorMessage : ''
    }
  },

  methods:{

    deleteTask(index){
      
      console.log('Eliminato' , this.todo[index]);
      if(this.todo[index].done){
        this.todo.splice(index,1)
        this.errorMessage= '';
      }else{
        this.writeErrorMessage("Attenzione! Devi prima svolgere il compito per poterlo eliminare")
      }
    },

    writeErrorMessage(message){
      this.errorMessage = message;
      setTimeout(() => {
        this.errorMessage= '';
      },3000)
    },

    addTask(){

      if(this.newTask.length > 4){
        const createTask = {
          text: this.newTask,
          done: false
        }
        console.log('createTask' , this.createTask);  
        this.todo.unshift(createTask);
        this.newTask = '';
      }else{
        this.writeErrorMessage('Attenzione! Il testo è troppo corto')
      }
    }
  }




}).mount("#app")