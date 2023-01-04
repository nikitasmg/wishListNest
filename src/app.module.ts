import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {getProgressConfig} from "./config/db.config";
import {GiftModule} from "./gifts/module/gift.module";

@Module({
  imports: [
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: getProgressConfig
      }),
      GiftModule
  ],

})
export class AppModule {}
