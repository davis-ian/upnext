let app = new Vue ({
    el: "#app",
    delimiters: ['[[',']]'],
    data: {
        message: "upNext",
        search_text: '',
        content: '',
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
        }
        
    },
    mounted: function() {
        
        // this.fizz()
    }
})