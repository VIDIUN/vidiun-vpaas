'use strict';

/* browserify-shim temoprary workaround */
// TODO: should use browserify-shim
require('angular');
var lodash = require('lodash');
window._ = lodash;


var d3 = require('d3');
window.d3 = d3;

var moment = require('moment');
window.moment = moment;

var leaflet = require('leaflet');
window.L = leaflet;

require('nvd3');
require('dateRangePicker');

/* end of browserify-shim temoprary workaround */
