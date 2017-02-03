const OAuth   = require("oauth-1.0a");
const crypto  = require("crypto");
const request = require("request");
const keys    = require("./keys").keys;

console.log(keys);

const oauth = OAuth({
    consumer: keys.consumer,
    signature_method : 'HMAC-SHA1',
    hash_function    : function(base_string, key) {
        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
    }
});

function getRestaurants(location, cb) {

    const params = {
        url    : 'http://api.yelp.com/v2/search',
        method : 'get',
        data   : {
            location,
            term     : 'bars',
        },
        oauth_consumer_key     : keys.consumer.key, 
        oauth_token            : keys.token.key,       
        oauth_signature_method : "HMAC-SHA1",
        oauth_timestamp        : new Date().getTime(),
        oauth_nonce            : crypto.randomBytes(24).toString('base64')
    };

    request({
        url     : params.url,
        method  : params.method,
        qs      : params.data,
        headers : oauth.toHeader(oauth.authorize(params, keys.token))
    }, cb); 
} 

exports.getRestaurants = getRestaurants;
