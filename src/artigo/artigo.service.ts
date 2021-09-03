import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtigoEntity } from './artigo.entity';
import { ArtigoDto } from './artigo.model';

@Injectable()
export class ArtigoService {
  constructor(
    @InjectRepository(ArtigoEntity)
    private artigoRepository: Repository<ArtigoEntity>,
  ) {}

  createArtigo = async (newArtigo: ArtigoDto) => {
    try {
      const createResponse = await this.artigoRepository.save(newArtigo);
      return createResponse;
    } catch (error) {
      throw error;
    }
  };
  GetAllArtigo = async () => {
    try {
      const artigoList = await this.artigoRepository.find();
      return artigoList;
    } catch (error) {
      throw error;
    }
  };
  GetbyIdArtigo = async (artigoId: string) => {
    try {
      const foundartigo = await this.artigoRepository.findOne({
        where: {
          id: artigoId,
        },
      });
      if (!foundartigo) {
        throw new HttpException('Artigo não encontrado', 404);
      }
      return foundartigo;
    } catch (error) {
      throw error;
    }
  };
  DeletebyIdArtigo = async (artigoId: string) => {
    try {
      await this.GetbyIdArtigo(artigoId);
      const deleteArtigo = await this.artigoRepository.delete(artigoId);
      return deleteArtigo;
    } catch (error) {
      throw error;
    }
  };
  UpdatebyIDArtigo = async (updateArtigo: ArtigoDto, artigoId: string) => {
    try {
      await this.GetbyIdArtigo(artigoId);
      const updateResponse = await this.artigoRepository.update(
        artigoId,
        updateArtigo,
      );
      return updateResponse;
    } catch (error) {
      throw error;
    }
  };
}
