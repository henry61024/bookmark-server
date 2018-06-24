let config = {
    domain: 'localhost',
    port: '3000',
    protocol: 'http',
    db: {
        url: undefined,
    },
    session: {
        secret: undefined,
        resave: true,
        saveUninitialized: true,
    },
    auth: {
        google: {
            enable: true,
            clientID: undefined,
            clientSecret: undefined,
        },
        facebook: {
            enable: true,
            clientID: undefined,
            clientSecret: undefined,
        },
    },
}

config.url = `${config.protocol}://${config.domain}:${config.port}`

module.exports = config