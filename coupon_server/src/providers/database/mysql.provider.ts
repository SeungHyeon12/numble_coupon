import { CouponModel } from 'src/coupon_service/adapter/out/persistence/coupon/entity/coupon.entity';
import { CouponIssuerModel } from 'src/coupon_service/adapter/out/persistence/issurance/entity/coupon.issuer.entity';
import { CouponIssuranceModel } from 'src/coupon_service/adapter/out/persistence/issurance/entity/coupon.issurance.entity';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { addTransactionalDataSource } from 'typeorm-transactional';

export const mysqlProviders = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'coupon_service',
      entities: [CouponModel, CouponIssuerModel, CouponIssuranceModel],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    });
    await dataSource.initialize();
    return addTransactionalDataSource(dataSource);
  },
};
