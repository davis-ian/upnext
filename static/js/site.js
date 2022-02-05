const apiUrl = 'https://imdb-api.com/en/API/'
const apiKey = 'k_cb4klaik'

let app = new Vue ({
    el: "#app",
    delimiters: ['[[',']]'],
    data: {
        message: "upnext",
        search_text: '',
        content: '',
        plot: '',
        all: '',

        
    },
    methods: {
        loadContent: function(){
            axios({
                method: 'get',
                url: 'http://www.omdbapi.com/?apikey=887661b&',
                params: {
                    's' : this.search_text,
                    'page' : 3
                    
                }

            }).then(response => {
                this.content = response.data
            })
        },
        loadNew: function() {
            
            axios({
                method: 'get',
                url: `${apiUrl}Top250Movies/${apiKey}`
                
            }).then(response => {
                this.all = response.data
            })
        },
        test2: function () {
            console.log(config.API_KEY)
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
        
    }
})