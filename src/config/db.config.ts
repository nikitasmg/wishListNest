import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions} from '@nestjs/typeorm'

export const getProgressConfig = async (config: ConfigService): Promise<TypeOrmModuleOptions> =>({
    type: 'postgres',
    host: 'localhost',
    username: 'wishlist',
    password: 'Ilovebass72',
    database: 'wishlist',
    port: 5432,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
    ssl:true,
})