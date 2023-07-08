var getRawBody = require('raw-body');
var getFormBody = require('body/form');
var body = require('body');
const r = require('./route')


module.exports.handler = function(req, resp, context) {      
    getRawBody(req, function(err, body) {
        resp.setHeader('content-type', 'application/json');

        var uri = (req.url).split('/');
        if(uri.length == 0){
            resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request' }))
        } else {
            var route = uri[uri.length - 1]
            console.log(route)
            switch(req.method){
                case 'GET':
                    r.get(route, JSON.parse(body.toString()))
                    .then((c)=>{
                        resp.send(JSON.stringify(c, null, ''))
                    })
                    break;

                case 'POST':
                    r.post(route, JSON.parse(body.toString()))
                    .then((c)=>{
                        resp.send(JSON.stringify(c, null, ''))
                    })
                    break;
                    
                case 'PUT':
                    r.put(route, JSON.parse(body.toString()))
                    .then((c)=>{
                        resp.send(JSON.stringify(c, null, ''))
                    })

                default:
                    resp.send(JSON.stringify({ 'code': 400, 'body': 'Bad Request'}, null, ''))
            }
        }
    });   
}
