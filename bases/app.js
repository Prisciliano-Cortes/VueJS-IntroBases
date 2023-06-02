const app = Vue.createApp({
    // template: `
    //     <h1>Hello world</h1>
    //     <h3> {{ 1 + 1 }} </h3>
    // `,
    // methods: {},
    // watch: {},

    // setup() {}

    data() {
        return {
            //message: 'Hello world',
            quote: " I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hello world')
            this.author = 'Prisciliano Cortés'
            
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')