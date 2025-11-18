import { Test, TestingModule } from '@nestjs/testing';
import { MessagesRepository } from './messges.repository';

describe('Repository', () => {
  let provider: MessagesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessagesRepository],
    }).compile();

    provider = module.get<MessagesRepository>(MessagesRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
