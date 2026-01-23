
const {createApp} = Vue;

createApp({

data(){
    return {
        number:0
    }
},

methods:{
    increaseNumber(){
        this.number ++;
    },

    decreseNumber(){
        this.number --;
    }
    
}



}).mount("#app-root");