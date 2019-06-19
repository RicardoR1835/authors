var author = require('../controllers/controllers');

module.exports = function(app){
    app.get('/authors', function (req, res) {
        author.index(req, res);
    })

    app.get('/author/:id', function(req,res){
        author.find(req,res);
    })

    // Below is example of post method
    app.post('/create', function (req, res) {
        author.create(req, res);
    })

    app.put('/update/:id', function(req,res){
        author.update(req,res);
    })

    app.delete('/destroy/:id', function(req,res){
        author.destroy(req,res);
    })

}