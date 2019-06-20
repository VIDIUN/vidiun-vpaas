'use strict';

require('../../../va-infra/core/va-vidiun-api');
require('angular-daterangepicker');
require('../../../va-infra/core/va-common-utils');
require('../../../va-infra/ui/va-ui-common');
require('../../../va-infra/ui/va-ui-charts');


module.exports = angular.module('vauReports',['vaVidiunAPI','vaCommonUtils','daterangepicker','vaUICommon','vaUICharts']);
