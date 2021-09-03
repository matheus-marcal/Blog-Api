import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

enum Category {
  Jogos,
  Filmes,
  Hq,
  Curiosidades,
}

export class ArtigoDto {
  @IsNotEmpty()
  @IsString()
  Title: string;

  @IsNotEmpty()
  @IsString()
  Text: string;

  @IsEnum(Category)
  Categoria: string;
}
