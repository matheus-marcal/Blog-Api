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
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'Blog',
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
