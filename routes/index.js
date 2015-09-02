module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render("pjax",{});
    });

    app.post('/frame', function (req, res) {
        var fs=require("fs");
        fs.readFile("html/frame.ejs",'utf-8',function(err,data){
            if(err){
                console.log("error");
            }else{
                res.send(data);
            }
        });
    });
};