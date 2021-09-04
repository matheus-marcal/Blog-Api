import {
  Controller,
  Post,
  Delete,
  Put,
  Get,
  HttpException,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ArtigoService } from './artigo.service';
import { ArtigoDto } from './artigo.model';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('artigo')
export class ArtigoController {
  constructor(private readonly artigoService: ArtigoService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async CreateArtigo(@Body() newArtigo: ArtigoDto) {
    try {
      const response = await this.artigoService.createArtigo(newArtigo);
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
  @Get()
  async GetAllArtigo() {
    try {
      const response = await this.artigoService.GetAllArtigo();
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
  @Get(':Categoria')
  async GetbyCategoriaArtigo(@Param('Categoria') categoria: string) {
    try {
      const response = await this.artigoService.GetbyCategoriaArtigo(categoria);
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }

  @Get('/id/:id')
  async GetbyIdArtigo(@Param('id') artigoId: string) {
    try {
      const response = await this.artigoService.GetbyIdArtigo(artigoId);
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async DeletebyidArtigo(@Param('id') artigoId: string) {
    try {
      const response = await this.artigoService.DeletebyIdArtigo(artigoId);
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async UpdatebyidArtigo(
    @Body() updateArtigo: ArtigoDto,
    @Param('id') artigoId: string,
  ) {
    try {
      const response = await this.artigoService.UpdatebyIDArtigo(
        updateArtigo,
        artigoId,
      );
      return response;
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new HttpException(err.message, 400);
    }
  }
}
