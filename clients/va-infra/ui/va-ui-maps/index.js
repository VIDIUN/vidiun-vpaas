'use strict';


var appModule = require('./va-ui-maps.module.js');
appModule.run(require('./va-ui-maps.run.js'));
appModule.config(require('./va-ui-maps.config.js'));
appModule.directive('vaMap',require('./directives/va-map'));

appModule.constant('vaCountriesGeojson',require('./services/va-countries-geojson.constant.js'));
