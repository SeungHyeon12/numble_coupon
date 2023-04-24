import { Module } from '@nestjs/common';
import { CouponServiceModule } from './coupon_service/coupon.service.module';

@Module({
  imports: [CouponServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
