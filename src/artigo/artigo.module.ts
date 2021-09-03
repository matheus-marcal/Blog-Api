import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtigoController } from './artigo.controller';
import { ArtigoService } from './artigo.service';
import { ArtigoEntity } from './artigo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtigoEntity])],
  controllers: [ArtigoController],
  providers: [ArtigoService],
})
export class ArtigoModule {}
