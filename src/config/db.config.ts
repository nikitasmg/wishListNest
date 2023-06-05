import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions} from '@nestjs/typeorm'

export const getProgressConfig = async (config: ConfigService): Promise<TypeOrmModuleOptions> =>({
    type: 'postgres',
    host: 'dpg-chutd15269vccp1j3pjg-a.frankfurt-postgres.render.com',
    username: 'wish_list_user',
    password: 'YcFBeXq53oxQ44UFVWhM0hlHAoLMz2ZB',
    database: 'wish_list',
    port: 5432,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
    ssl:true,
})