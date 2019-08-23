module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    public: '104.197.106.217:8080',
    proxy: {
      '/api/v1': {
        target : 'http://104.197.106.217:5000'
      }
    }
  },

    } 