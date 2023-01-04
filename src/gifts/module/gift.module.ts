import { Module } from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {GiftEntity} from "../entities/gift.entity";
import {GiftController} from "../controller/gift.controller";
import {GiftService} from "../service/gift.service";

@Module({
    imports: [TypeOrmModule.forFeature([GiftEntity])],
    providers: [GiftService],
    controllers: [GiftController],
    exports: [TypeOrmModule]
})
export class GiftModule {}