new Vue({
    el:'#app',
    data: {
        books: [],
        author_id: 1,
        title: '',
        body: ''
    },
    methods: {
        getBook() {
            let url = "http://localhost:3000/api/books"
            axios.get(url).then(response => {
                this.books = response.data;
            })
        },
        createBook() {
            let url = "http://localhost:3000/api/books"
            let data = {title: this.title, body: this.body, author_id: this.author_id}
            axios.post(url, data).then(() => {
                this.getBook();
            })   
        },
        deleteBook: function(index) {
            this.books.splice(index,1);
        }
    },
    mounted() {
        this.getBook();
    },
})