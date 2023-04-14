/* eslint-disable prettier/prettier */
import { Body, Injectable } from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";



@Injectable()
export class UserService{
    constructor(@InjectRepository(UserEntity) private userRepo:Repository<UserEntity>){}
    
    
    create(@Body() props){
        const user=this.userRepo.create(props);
        return this.userRepo.save(user);
    }

    findAll(){
        return this.userRepo.find();
    }

    findOne(id){
        return this.userRepo.findOne(id);
    }

    async delete(id){
        await this.userRepo.delete(id);
        return 'Silindi';
    }
   
    /*
   private readonly user=[
    {id:"123",name:"Harun",age:22},
    {id:"321",name:"Ahmet",age:22},
   ];

   findAll(){
    return this.user;
   }*/


}

