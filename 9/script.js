const {createApp} = Vue;

createApp({
    data(){
        return {
           num1:0,
           num2:0
        }
    },

// when change value of any variable of two numbers all methods in template are called and this affect performance
    methods:{
        // changeNumberOne()
        // {
        //     console.log("one");
        //     return this.num1 * 2;
        // },

        //  changeNumberTwo()
        // {
        //                 console.log("two");
        //     return this.num2 * 10;
        // }
    },

    // computed contains function as methods but must have return value and not affect performance
    // when change value of any variable only his related function will be called
    computed:{
        changeNumberOne()
        {
            console.log("one");
            return this.num1 * 2;
        },

         changeNumberTwo()
        {
                        console.log("two");
            return this.num2 * 10;
        }
    }
}).mount("#app-root")