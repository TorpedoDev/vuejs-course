// call createApp function from vue to start initialize app 

const {createApp} = Vue;

createApp({

    // to declare variables used data function and return variables as {key : value}
    data(){
        return {
            name : "Mohammed Fayez",
            age : 24
        }
    }

  // mount function take the root template or parent element of project to show all variables , functions and anything inside it
}).mount("#app-root");