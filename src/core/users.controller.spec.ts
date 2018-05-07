import { TestingModule, Test } from "@nestjs/testing";
import { UsersController } from './users.controller';
import { UsersService } from "./users.service";
import { CoreModule } from './core.module';
import { DatabaseModule } from "../database/database.module";
import { coreProviders } from "./core.providers";

describe('UserController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UsersController],
      providers: [UsersService, ...coreProviders],
    }).compile();
  });

  describe('root', () => {
    it('should return "....!"', () => {
      const appController = app.get<UsersController>(UsersController);
      expect(appController.root()).toBe('Hello World!');
    });
  });
});
