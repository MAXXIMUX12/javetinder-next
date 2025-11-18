import { Test, TestingModule } from '@nestjs/testing';
import { ControllerHomeController } from './controller-home.controller';

describe('ControllerHomeController', () => {
  let controller: ControllerHomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerHomeController],
    }).compile();

    controller = module.get<ControllerHomeController>(ControllerHomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
