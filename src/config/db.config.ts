import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions} from '@nestjs/typeorm'

export const getProgressConfig = async (config: ConfigService): Promise<TypeOrmModuleOptions> =>({
    type: 'postgres',
    host: 'dpg-ceqko7g2i3mov0i1m1q0-a.frankfurt-postgres.render.com',
    username: 'wishlistdb_user',
    password: 'Z4XdOtUjgW9CCdtQivvuFybtcmcCgHte',
    database: 'wishlistdb',
    port: 5432,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: true,
    ssl:true,
})