'use strict';

/**
 * tx-nfail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tx-nfail.tx-nfail');
