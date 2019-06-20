'use strict';


var appModule = require('./ka-vmc-hoster.module.js');
appModule.run(require('./ka-vmc-hoster.run.js'));
appModule.config(require('./ka-vmc-hoster.config.js'));

appModule.constant('vaVMCConfig',require('./services/ka-vmc-config.constant'));

