import { Test } from './../testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { coreProviders } from './core.providers';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [UsersController],
      providers: [UsersService, ...coreProviders],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return a string', async () => {
      const result = 'test';
      jest.spyOn(usersService, 'test').mockImplementation(() => result);
      expect(await usersController.test()).toBe(result);
    });
  });
});