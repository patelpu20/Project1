 module.exports = {

    database: 'mongodb://root:abc123@ds153835.mlab.com:53835/Facebook Oauth',
    port: 8080,
    secretKey: ' ',


    facebook: {

        clientID: '318681072150594',
        clientSecret: '22a2eb6994dd8b87da3385eacfaa73ea',
        profileFields: ['emails', 'dispalyName'],
        callbackURL: 'http://localhost:8080/auth/facebook/callback',
        
    }
}
