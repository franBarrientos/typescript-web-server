import {Model, Column, Table, CreatedAt, UpdatedAt, DataType, HasMany} from "sequelize-typescript";
import {phone} from '../interfaces/phone.interface'
import {User} from "../models/user.model"
@Table
export class Phone extends Model<phone> {

  @Column({allowNull:false})
  brand!: string;
  
  @Column({allowNull:false})
  model!: string;

  @Column({type:DataType.INTEGER, allowNull:false})
  storage!:64|128|500|1000;

  @Column({allowNull:false})
  img!:string;

  @HasMany(() => User)
  users!: User[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}