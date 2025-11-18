import { Test, TestingModule } from '@nestjs/testing';
import { HomeRepository } from './home-repository';

describe('HomeRepository', () => {
  let provider: HomeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeRepository],
    }).compile();

    provider = module.get<HomeRepository>(HomeRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
