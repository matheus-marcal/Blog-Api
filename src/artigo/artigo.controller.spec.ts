import { Test, TestingModule } from '@nestjs/testing';
import { ArtigoController } from './artigo.controller';

describe('ArtigoController', () => {
  let controller: ArtigoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtigoController],
    }).compile();

    controller = module.get<ArtigoController>(ArtigoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
