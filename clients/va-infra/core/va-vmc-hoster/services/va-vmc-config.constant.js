"use strict";

var config = {};



function extractVMC()
{
    try {
        var vmc = window.parent.vmc;
        if (vmc && vmc.vars) {
            if (vmc.vars.vs) {
                config.vs = vmc.vars.vs;
            }
            if (vmc.vars.partner_id) {
                config.pid = vmc.vars.partner_id;
            }
            if (vmc.vars.service_url)
                config.vidiunAPIUri = vmc.vars.service_url + '/api_v3/index.php';
            if (vmc.vars.liveanalytics) {
                if (vmc.vars.liveanalytics.player_id) {
                    config.live.playerId = vmc.vars.liveanalytics.player_id;
                }
                if (vmc.vars.liveanalytics.map_urls) {
                    config.live.map_urls = vmc.vars.liveanalytics.map_urls;
                }
                if (vmc.vars.liveanalytics.map_zoom_levels) {
                    var n = parseInt(vmc.vars.liveanalytics.map_zoom_levels);
                    if (n > 0) {
                        config.live.map_zoom_levels = n;
                    }
                }
            }
        }
    } catch (e) {
        console.log('Could not locate parent.vmc: ' + e);
    }
}

extractVMC();



module.exports = config;
