var Url = require('../../models/url')
module.exports = function(app){
    app.get('/new/:url', function (req, res) {
        var sURL = new Url({
            original: req.params.url
         });
         sURL.save();
        console.log(sURL);
        res.json(sURL)
    })
    app.get('/:id', function(req, res){
        Url.findById(req.params.id, function(err,myUrl){
            if (err) console.error(err);
            res.redirect("http://"+myUrl.original);
        });
    })
};
