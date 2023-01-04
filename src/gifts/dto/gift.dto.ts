import {IsBoolean, IsNotEmpty, IsString} from "class-validator";
import {Unique} from "typeorm";

export class CreateGiftDto  {
   @IsString({message: 'Название подарка должно быть строкой'})
   @IsNotEmpty()
    name: string
   @IsString({message: 'Описание подарка должно быть строкой'})
    description: string
   @IsString({message: 'URL подарка должно быть строкой'})
    url: string
   @IsString({message: 'URL картинки подарка должно быть строкой'})
    imageUrl: string
   // @IsBoolean({message: 'Бронивание подарка должно быть boolean'})
   //  isReserved: boolean
}