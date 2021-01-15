module.exports = {
    entity : {
        designation : 'designation',
        user : 'user'
    },
    mongodb : {
        url : 'mongodb://localhost:27017/user'
    },
    httpMehtod : {
        get : ['list'],
        post : ['add'],
        put : ['update'],
        delete : ['remove']
    },
    port : 3000,
    app : 'survey'
}
