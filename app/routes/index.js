var urls = require('../../models/url');
var Url = urls.model('UrlData');
module.exports = function(app){
    app.get('/new/:url', function (req, res) {
        var urlRegex = /^((https?|ftp):\/\/)?(\w+|\d+|\.)+\.(\w+)(\/(\w+|\d+|\.)+?)?$/i; //TODO: Work on it too
        var givenUrl = req.params.url;
        var sURL = {original: null};
        console.log(urlRegex.test(givenUrl));

        if(urlRegex.test(givenUrl)){
            var uniqueID = new Date().getTime();
            sURL = new Url({
                urlID: uniqueID,
                original: givenUrl,
                short_url: req.get("host")+"/"+ uniqueID
             });
             sURL.save();
        }

        console.log(sURL);
        res.json({
            original: sURL.original,
            short_url: sURL.short_url
        })
    });

    app.get('/:shortURL', function(req, res){
        Url.findOne({'urlID': req.params.shortURL},function(eror,myUrl){
            if(eror) throw console.error(eror);
        res.redirect("http://"+myUrl.original);
    });
});
}
