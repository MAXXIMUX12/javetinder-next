import { Test, TestingModule } from '@nestjs/testing';
import { ServiceHomeService } from './service-home.service';

describe('ServiceHomeService', () => {
  let service: ServiceHomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceHomeService],
    }).compile();

    service = module.get<ServiceHomeService>(ServiceHomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
