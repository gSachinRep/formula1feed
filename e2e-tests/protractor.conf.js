exports.config = {
  allScriptsTimeout: 11000,

  chromeDriver: './selenium/chromedriver',

  seleniumAddress: 'http://169.254.74.227:4444/wd/hub',
  //webDriverProxy: 'http://169.254.74.227:5555',
  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8080/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  }
};
