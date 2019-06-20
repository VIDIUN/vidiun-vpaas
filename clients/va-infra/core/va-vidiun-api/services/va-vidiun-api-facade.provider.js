"use strict";

function VidiunAPIFacade($q, vidiunAPIContext, $injector) {
    var self = this;

    function invoke(service, action, requestParams) {

        var handler = vidiunAPIContext.getHandler({service : service, action:action});

        if (handler) {
            return $injector.instantiate(handler).handleRequest(requestParams);
        } else {
            return $q.reject({error: 'unknown_api_service_action'});
        }
    };


    function getVidiunAPIService()
    {
        return vidiunAPIContext.getInfo().vidiunApiUri;
    }

    function getPartnerVS()
    {
        return vidiunAPIContext.getInfo().partnerVS;
    }


    self.getPartnerVS = getPartnerVS;
    self.getVidiunAPIService = getVidiunAPIService;
    self.invoke = invoke;
};


module.exports = function () {

    var handlers = {},
        vidiunAPIContext = {
            getHandler: getHandler,
            getInfo : getInfo
        },
        info = {
            partnerVS : '',
            vidiunApiUri : ''
        };


    function getInfo()
    {
        return info;
    }

    function getHandler(handlerInfo) {
        var key = generateHandlerKey(handlerInfo);
        return handlers[key];
    }

    function generateHandlerKey(item) {
        return item.action + ";" + item.service;
    }

    function registerHandler(handlerInfo, handler) {
        var key = generateHandlerKey(handlerInfo);
        handlers[key] = handler;
    }

    function setVidiunAPIService(serviceUri)
    {
        info.vidiunApiUri = serviceUri;
    }

    function setPartnerVS(vs)
    {
        info.partnerVS = vs;
    }

    this.setPartnerVS = setPartnerVS;
    this.setVidiunAPIService = setVidiunAPIService;

    this.registerHandler = registerHandler;


    this.$get = function ($injector) {
        return $injector.instantiate(VidiunAPIFacade, {vidiunAPIContext: vidiunAPIContext});
    }
}
