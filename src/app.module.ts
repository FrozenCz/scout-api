import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisementsModule } from './advertisements/advertisements.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgresDB_scouts',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'pg_scouts',
      schema: 'public',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AdvertisementsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
