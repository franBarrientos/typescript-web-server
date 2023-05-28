import {Model, Column, Table, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table
export class Actor extends Model<Actor> {

  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column
  birthday?: Date;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}