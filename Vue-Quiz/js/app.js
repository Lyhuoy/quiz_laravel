new Vue({
    el: '#app',
    data: {
        books: [],
        author_id: null,
        title: '',
        body: '',
        updateId: null,
        isUpdate: false,
        url: 'http://localhost:3000/api/books'
    },

    methods: {
        getBook() {
            axios.get(this.url).then(response => {
                this.books = response.data
            })
        },

        createBook() {
            let data = {
                author_id: this.author_id,
                title: this.title,
                body: this.body
            }
            axios.post(this.url, data).then(() => {
                this.getBook();
                this.author_id = null
                this.title = ''
                this.body = ''
            })

        },

        deleteBook(book){
            let id = book.id;
            let isDeleted = window.confirm('Delete this book?');
            if (isDeleted){
                window.axios.delete(this.url + '/' + id)
                    .then(response => {
                        window.location.reload();
                    });
            }
        },

        changeBook(book) {
            this.author_id = book.author_id
            this.title = book.title
            this.body = book.body
            this.updateId = book.id
            this.isUpdate = true
        },
        updateBook() {
            let data = {
                author_id: parseInt(this.author_id),
                title: this.title,
                body: this.body
            }
            axios.put(this.url + '/' + this.updateId, data).then(() => {
                window.location.reload();
            });
            this.isUpdate = false
            this.author_id = null
            this.title = ''
            this.body = ''
        }
    },

    mounted() {
        this.getBook();
    },
})