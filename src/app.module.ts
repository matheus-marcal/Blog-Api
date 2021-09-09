import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtigoModule, ArtigoEntity } from './artigo';
import { AuthModule } from './auth';
import { UsersModule } from './users';
import { UserEntity } from './users';

@Module({
  imports: [
    ArtigoModule,
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: 'ec2-52-7-159-155.compute-1.amazonaws.com',
      port: 5432,
      username: 'lshtoecdcvcsas',
      password:
        '710ef4217fdb71e76e7bbb95e202ceac5776b7e044c7b9ac70019a2c09aefd9f',
      database: 'dfvsvgncmmfqu0',
      logging: false,
      entities: [ArtigoEntity, UserEntity],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/**
  * TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'Blog',
      entities: [ArtigoEntity, UserEntity],
      synchronize: true,
    }),
  */
