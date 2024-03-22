import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions} from '@nestjs/typeorm'

export const getProgressConfig = async (config: ConfigService): Promise<TypeOrmModuleOptions> =>({
    type: 'postgres',
    host: '127.0.0.1',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    port: 5432,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
    ssl:false,
})