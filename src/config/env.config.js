let ENV = {
    serverRootUrl: 'http://localhost:8089/',
    moduleName: '',
    version: '1.0',
    environment: process.env.NODE_ENV,
    defaultLocale: 'zh',
    apiNameSpace: '',
    hostEndpoint: '',
    routeRootPath: null
}

if (ENV.environment === 'develop') {
}
if (ENV.environment === 'staging') {
}
if (ENV.environment === 'production') {
}

export default ENV
