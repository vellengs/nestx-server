
import { DictsController } from './dicts.controller';
import { UsersController } from './users.controller';
import { DictsService } from './dicts.service';
import { UsersService } from './users.service';

export const CoreControllers = [
    DictsController,
    UsersController
];

export const CoreServices = [
    DictsService,
    UsersService,
];