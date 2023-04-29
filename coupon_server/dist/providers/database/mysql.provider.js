"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlProviders = void 0;
const coupon_entity_1 = require("../../coupon_service/adapter/out/persistence/coupon/entity/coupon.entity");
const coupon_issuer_entity_1 = require("../../coupon_service/adapter/out/persistence/issurance/entity/coupon.issuer.entity");
const coupon_issurance_entity_1 = require("../../coupon_service/adapter/out/persistence/issurance/entity/coupon.issurance.entity");
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const typeorm_transactional_1 = require("typeorm-transactional");
exports.mysqlProviders = {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const dataSource = new typeorm_1.DataSource({
            type: 'mysql',
            host: 'mysql',
            port: 3306,
            username: 'root',
            password: '0000',
            database: 'coupon_service',
            entities: [coupon_entity_1.CouponModel, coupon_issuer_entity_1.CouponIssuerModel, coupon_issurance_entity_1.CouponIssuranceModel],
            synchronize: true,
            logging: true,
            namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        });
        await dataSource.initialize();
        return (0, typeorm_transactional_1.addTransactionalDataSource)(dataSource);
    },
};
//# sourceMappingURL=mysql.provider.js.map