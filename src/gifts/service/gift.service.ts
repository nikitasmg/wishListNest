import {BadRequestException, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {GiftEntity} from "../entities/gift.entity";
import {Repository} from 'typeorm'
import {CreateGiftDto} from "../dto/gift.dto";

@Injectable()
export class GiftService {
    constructor(
        @InjectRepository(GiftEntity)
        private readonly giftRepository: Repository<GiftEntity>
    ) {}

    private async checkExistGiftByName (name: string): Promise<GiftEntity | null> {
        return (await this.giftRepository.findOneBy({name})) ?? null
    }

    async getAllGifts(): Promise<GiftEntity[]> {
        return await this.giftRepository.find()
    }

    async createGift(createGiftDto: CreateGiftDto): Promise<GiftEntity> {
        const gift = await this.checkExistGiftByName(CreateGiftDto.name)
        if (gift) {
            throw new BadRequestException('Подарок с таким названием уже существует')
        }
        return await this.giftRepository.save({...createGiftDto})
    }

    async deleteGift(id: number): Promise<any> {
        const gift = await this.giftRepository.findOneBy({id})
        if (!gift) {
            throw new BadRequestException(`Подарок с id ${id} не сущесвтует`)
        }
        return this.giftRepository
            .createQueryBuilder()
            .delete()
            .from(GiftEntity)
            .where('id = :id', { id })
            .execute()
    }

   async updateGift(id: number, data: Partial<GiftEntity>): Promise<any> {
        const gift = await this.giftRepository.findOneBy({id})
       if (data.isReserved && gift.isReserved) {
           throw new BadRequestException('Этот подарок уже забронирован, пожалуйста обновите страницу')
       }
       if (!data.isReserved && !gift.isReserved) {
           throw new BadRequestException('Этот подарок еще не забронирован')
       }
       await this.giftRepository
            .createQueryBuilder()
            .update()
            .set({
                isReserved: data.isReserved
            })
            .where('id = :id', { id })
            .execute()

       return this.giftRepository.findOneBy({id})
    }
}