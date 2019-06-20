'use strict';


$(document).ready(function () {

    var $html = $('html');

    $.get('./app-config.json',function(data)
    {
        angular.module('vauApp').constant('vAppConfig',data);

        angular.bootstrap($html, ['vauApp']);

    });

});
