"use strict";

module.exports = function(vaVidiunAPIFacadeProvider)
{
    var handlerInfo = {service: 'report', action: 'getUrlForReportAsCsv'};

    function RequestHandler($q, vaRequestsHandlerUtils) {
        var self = this;

        var defaultRequestData = {
            pager: {pageIndex: 1, pageSize: 1},
            headers:";Month,Plays (CPM),Bandwidth (GB),Avg Storage (GB),Transcoding (GB),Entries,Users",
            order : "-month_id",
            reportText:'',
            reportInputFilter: {
                interval: 'months',
                timeZoneOffset: -moment().utcOffset()
            }
        }

        function prepareRequestData(requestParams) {
            var result = _.defaultsDeep({}, defaultRequestData, requestParams);
            return result;
        }

        function validateRequestData(requestParams) {
            return { valid : true};
        }

        function handleRequest(requestParams)
        {
            var deferred = $q.defer();

            var requestValidation = validateRequestData(requestParams)

            if (requestValidation.valid)
            {
                var parsedRequestData = prepareRequestData(requestParams);

                vaRequestsHandlerUtils.invokeAPIRequest(parsedRequestData,handlerInfo).then(function(result)
                {
                    deferred.resolve({csvUri : result.data});
                },function(reason)
                {
                    deferred.reject(reason);
                });

            }else
            {
                deferred.reject({error: 'v-api-request-data-invalid'});
            }

            return deferred.promise;

        }

        self.handleRequest = handleRequest;
        self.validateRequestData = validateRequestData;
        self.prepareRequestData = prepareRequestData;
    }

    vaVidiunAPIFacadeProvider.registerHandler(handlerInfo,RequestHandler);
};

