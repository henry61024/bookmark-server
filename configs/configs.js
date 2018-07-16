let config = {
    domain: 'localhost',
    port: '3000',
    protocol: 'http',
    db: {
        url: undefined,
    },
    session: {
        secret: undefined,
        maxAge: 365 * 24 * 3600 * 1000,
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