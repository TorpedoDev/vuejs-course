const {createApp} = Vue;

createApp({
    data(){
        return {
            newUser: {
                name: "",
                email: "",
                password: "",
            }
        }
    },

    methods:{
          printUser(){
            console.log(this.newUser);
          }
    }
}).mount("#app-root")