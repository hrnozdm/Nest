/* eslint-disable prettier/prettier */
import { Body, Controller,Get, Param, Post} from "@nestjs/common";
import { CreatePersonDto } from "./dto/user-create.dto";
import { UserService } from "./user.service";


@Controller('users')
export class UserController{
  
    constructor(private readonly userService:UserService) {
        
    }

    @Get()
    getAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id){
        return `This person is ${id}`;
    }

    @Post()
    create(@Body() allprops:CreatePersonDto){
        return `User Created Username is ${allprops.username}`;
    }


}

