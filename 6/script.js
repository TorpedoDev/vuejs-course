
const {createApp} = Vue;

createApp({

data(){
    return {
        number:0,
        name: "Mohammed Fayez",
        age: 24
    }
},

methods:{
    increaseNumber(){
        this.number ++;
    },

    decreseNumber(){
        this.number --;
    },

    showAlert(){
        alert("Alert for once");
    },
    printName()
    {
        alert(this.name);
    },
    printAge()
    {
        alert(this.age);
    }
    
}



}).mount("#app-root");