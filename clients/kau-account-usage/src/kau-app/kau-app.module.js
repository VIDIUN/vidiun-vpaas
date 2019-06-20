'use strict';

require('angular-ui-router');
require('angular-nvd3');
require('ui-bootstrap');
require('ngStorage');

require('../../../ka-infra/core/ka-vidiun-api');
require('../vau-reports');

module.exports =angular.module('vauApp',['ngStorage','ui.router', 'nvd3','ui.bootstrap','vauReports','vaVidiunAPI']);
