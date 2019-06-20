'use strict';


var appModule = require('./va-vmc-hoster.module.js');
appModule.run(require('./va-vmc-hoster.run.js'));
appModule.config(require('./va-vmc-hoster.config.js'));

appModule.constant('vaVMCConfig',require('./services/va-vmc-config.constant'));

