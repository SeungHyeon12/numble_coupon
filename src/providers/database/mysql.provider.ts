import { DataSource } from 'typeorm';

export const mysqlProviders = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    const dataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'coupon',
      entities: [],
      synchronize: true,
    });

    return dataSource.initialize();
  },
};
