'use strict';


var appModule = require('./ka-ui-maps.module.js');
appModule.run(require('./ka-ui-maps.run.js'));
appModule.config(require('./ka-ui-maps.config.js'));
appModule.directive('vaMap',require('./directives/ka-map'));

appModule.constant('vaCountriesGeojson',require('./services/ka-countries-geojson.constant.js'));
