import { CouopnModel } from 'src/coupon_service/adapter/out/persistence/coupon/entity/coupon.entity';
import { CouponIssuerModel } from 'src/coupon_service/adapter/out/persistence/issurance/entity/coupon.issuer.entity';
import { CouponIssuranceModel } from 'src/coupon_service/adapter/out/persistence/issurance/entity/coupon.issurance.entity';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const mysqlProviders = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'coupon_service',
      entities: [CouopnModel, CouponIssuerModel, CouponIssuranceModel],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    });

    return dataSource.initialize();
  },
};
