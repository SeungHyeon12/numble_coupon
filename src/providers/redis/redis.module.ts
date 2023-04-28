import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { redisProvider } from './redis.provider';

@Module({
  imports: [
    RedisModule.forRoot({
      ...redisProvider,
    }),
  ],
})
export class RedisIOModule {}
