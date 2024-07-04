const { lookup } = require('geoip-lite');

const lookupIp = (ip) => {
    const user_info = lookup(ip);
    if (user_info && user_info.ll) {
        return user_info;
    }
    return null;
};

module.exports = { lookupIp };
