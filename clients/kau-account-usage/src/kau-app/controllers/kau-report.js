"use strict";

module.exports = function($stateParams, vAppConfig, vaAppRoutingUtils)
{

    var self = this;

    function initalize()
    {
        if (!self.reportId)
        {
            vaAppRoutingUtils.goToDefault();
        }
    }


    self.reportId = $stateParams.reportId;

    initalize();

};
