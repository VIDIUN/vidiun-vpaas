"use strict";

module.exports = function(vFormatterUtils)
{
    return function(input, type, format, conversion)
    {
       return vFormatterUtils.formatByType(input,type,format, conversion);
    }
};


