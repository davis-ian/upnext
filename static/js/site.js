Vue.component('show-plot-comp', {
    data: function() {
        return {
            plot_visible: false,

        }
    },
    props: ['plot'],
    methods: {
        toggle_plot: function() {
            if (this.plot_visible === false) {
                this.plot_visible = true
            } else {
                this.plot_visible = false
            }
        }
    },
    template:
    `
    <div>
        <p v-if='this.plot_visible===true'>{{this.$root.plot}}</p>
    </div>
    `
})

let app = new Vue ({
    el: "#app",
    delimiters: ['[[',']]'],
    data: {
        message: "upnext",
        search_text: '',
        content: '',
        plot: '',
        
    },
    methods: {
        fizz: function() {
            // for (var i=1; i<101; i++) {
            //     if (i%3===0 && i%5===0) console.log("FizzBuzz")
            //     else if (i%3===0) console.log("Fizz")
            //     else if (i%5===0) console.log("Buzz")
            //     else console.log(i)
            // }      
            for (let i=1; i < 101; i++) console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
        },
        loadContent: function(){
            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?apikey=887661b&',
                params: {
                    's' : this.search_text,
                    
                }

            }).then(response => {
                this.content = response.data
            })
        },
        test: function(search_id){
            console.log(search_id)
            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?apikey=887661b&',
                params: {
                    'i' : search_id,                    
                }
            }).then(response => {
                this.plot = response.data
            })
        }
        
        
    },
    mounted: function() {
        this.test(search_id)
        // this.fizz()
    }
})