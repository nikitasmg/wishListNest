import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {GiftService} from "../service/gift.service";
import {CreateGiftDto} from "../dto/gift.dto";

@Controller('gifts')
export class GiftController {

    constructor(private readonly giftService: GiftService) {
    }
    @Get()
    @HttpCode(200)
    async getAllGifts() {
        return await this.giftService.getAllGifts()
    }
    @UsePipes(new ValidationPipe())
    @Post()
    @HttpCode(200)
    async addGift(@Body() gift: CreateGiftDto) {
        return await this.giftService.createGift(gift)
    }

    @Put(':id')
    @HttpCode(200)
    async update(@Param('id') id: number, @Body() body: any) {
        return await this.giftService.updateGift(id, body);
    }

    @Delete(':id')
    @HttpCode(200)
    async remove(@Param('id') id: number) {
        await this.giftService.deleteGift(id)
        return "gift deleted"
    }
}