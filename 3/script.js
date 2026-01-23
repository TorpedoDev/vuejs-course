// call createApp function from vue to start initialize app 

const {createApp} = Vue;

createApp({

    // to declare variables used data function and return variables as {key : value}
    data(){
        return {
            name : "Mohammed Fayez",
            age : 24,
            google: "https://google.com",
            img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
        }
    },

    // to declare functions use methods object and declare your methods inside it
    methods:{
        sayHello(time , name)
        {
            return "Good" + " " + time + " , " + name;
        }
    }

  // mount function take the root template or parent element of project to show all variables , functions and anything inside it
}).mount("#app-root");