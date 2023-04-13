/* eslint-disable prettier/prettier */
import { Body, Controller,Get, Param, Post} from "@nestjs/common";
import { CreatePersonDto } from "./dto/user-create.dto";


@Controller('users')
export class UserController{
    @Get()
    getAll(){
        return `Person is get All`;
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

