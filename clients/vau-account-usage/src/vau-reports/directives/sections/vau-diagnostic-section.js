"use strict";


module.exports = function()
{
    function Controller()
    {
        var self = this;

        function loadReportData(reportData)
        {
            self.reportData = reportData;
        }

        self.reportData = null;

        self.loadReportData = loadReportData;


    }

    function Link(scope, element, attrs, ctrls) {
        var ctrl = ctrls[0];
        var reportCtrl = ctrls[1];

        reportCtrl.addSection({
            loadReportData : function(reportData)
            {
                ctrl.loadReportData(reportData);
            }
        });
    }


    return {
        restrict: 'A',
        scope:{
            options : '=vOptions'
        },
        require: ['vauDiagnosticSection','^vauReport'],
        controllerAs:'vm',
        bindToController : true,
templateUrl: 'vau-reports/directives/sections/vau-diagnostic-section.html',
        controller: Controller,
        link:Link
    };
};


