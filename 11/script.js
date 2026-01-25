const {createApp} = Vue;

createApp({
    data(){
        return {
           students: [
            {
                id:1,
                name: "Ahmed",
                age: 20
            },
             {
                id:2,
                name: "Mohammed",
                age: 23
            },
             {
                id:3,
                name: "Ali",
                age: 21
            },
             {
                id:4,
                name: "Mahmoud",
                age: 22
            },
           ]
        }
    },

    methods:{

    }
}).mount("#app-root")