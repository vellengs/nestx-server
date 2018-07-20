import { Test } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { coreProviders } from './core.providers';
import { DatabaseModule } from '../database/database.module';

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(async () => {
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
