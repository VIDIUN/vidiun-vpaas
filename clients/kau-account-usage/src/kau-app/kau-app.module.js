'use strict';

require('angular-ui-router');
require('angular-nvd3');
require('ui-bootstrap');
require('ngStorage');

require('../../../va-infra/core/va-vidiun-api');
require('../vau-reports');

module.exports =angular.module('vauApp',['ngStorage','ui.router', 'nvd3','ui.bootstrap','vauReports','vaVidiunAPI']);
