var Url = require('../../models/url')
module.exports = function(app){
    app.get('/new/:url', function (req, res) {
        var urlRegex = /^((https?|ftp):\/\/)?(\w+|\d+|\.)+\.(\w+)(\/(\w+|\d+|\.)+?)?$/i; //TODO: Work on it too
        var givenUrl = req.params.url;
        var sURL = {original: null};
        console.log(urlRegex.test(givenUrl));
        if(urlRegex.test(givenUrl)){
            sURL = new Url({
                original: givenUrl
             });
             sURL.save();
        }

        console.log(sURL);
        res.json(sURL)
    });

    app.get('/:id', function(req, res){
        Url.findById(req.params.id, function(err,myUrl){
            if (err) console.error(err);
            res.redirect("http://"+myUrl.original);
        });
    })
};
