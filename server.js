const express = require("express");
const helpers = require('./helpers');

const app = express();
app.use(express.static("client/build"))

app.get("/", function(req, res) {
    res.sendFile("client/build/index.html");
});

app.get("/search/:id", function(req, res) {

    function cb(error, response) {

        let filtered = []
        if (response.statusCode >= 200 || response.statusCode < 300) {
            let body = JSON.parse(response.body);
            body.businesses.map(d => {
                let item = {
                    id: d.id,
                    url: d.url,
                    image_url: d.image_url,
                    name: d.name,
                    snippet_text: d.snippet_text,
                } 
                filtered.push(item);
            })
            res.json(filtered);
        } else {
            res.status(400).send("Somethings not right");
        }
    }

    helpers.getRestaurants(req.params.id, cb);
})

app.listen(process.env.PORT || 3001, function() {
    console.log("Listening on port " + (process.env.PORT || 3001));
});
