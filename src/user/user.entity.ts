/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn,Unique } from  "typeorm";

@Entity()
export class UserEntity{

   @PrimaryGeneratedColumn()
   user_id:number;

   @Column()
   username:string;

   @Column()
   @Unique(['email'])
   email:string;


}