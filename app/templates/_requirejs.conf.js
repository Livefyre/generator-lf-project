require.config({
  baseUrl: '/',
  paths: {
    chai: 'lib/chai/chai',
    'chai-jquery': 'lib/chai-jquery/chai-jquery',
    jquery: 'lib/jquery/jquery',
    mustache: 'lib/mustache/mustache',
    text: 'lib/requirejs-text/text',
    sinon: 'lib/sinonjs/sinon',
    'sinon-chai': 'lib/sinon-chai/lib/sinon-chai'
  },
  packages: [
    {
      name: '<%= _.slugify(name) %>',
      location: 'src/javascript'
    },{
      name: 'fixtures',
      location: 'test/fixtures'
    },{
      name: "streamhub-sdk",
      location: "lib/streamhub-sdk/src"
    },{
      name: "streamhub-sdk/modal",
      location: "lib/streamhub-sdk/src/modal"
    },{
      name: "streamhub-sdk/collection",
      location: 'lib/streamhub-sdk/src/collection'
    },{
      name: "streamhub-sdk/auth",
      location: 'lib/streamhub-sdk/src/auth'
    },{
      name: "streamhub-sdk/content",
      location: 'lib/streamhub-sdk/src/content'
    },{
      name: 'streamhub-sdk-tests',
      location: 'lib/streamhub-sdk/tests/'
    },{
      name: "stream",
      location: "lib/stream/src"
    },{
      name: 'templates',
      location: 'src/templates'
    },{
      name: 'view',
      location: 'lib/view/src',
      main: 'view'
    }
  ],
  shim: {
    jquery: {
      exports: '$'
    },
    lodash: {
      exports: '_'
    },
    'sinon': {
      exports: 'sinon'
    }
  }
});
