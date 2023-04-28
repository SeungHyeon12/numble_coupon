import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { bullMqProvider } from './bull.mq.provider';

@Module({
  imports: [
    BullModule.registerQueue({
      ...bullMqProvider,
    }),
  ],
})
export class BullMqModule {}
