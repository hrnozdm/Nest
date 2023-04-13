/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";



@Injectable()
export class UserService{
   private readonly user=[
    {id:"123",name:"Harun",age:22},
    {id:"321",name:"Ahmet",age:22},
   ];

   findAll(){
    return this.user;
   }
}

