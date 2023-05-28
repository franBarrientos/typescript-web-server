import {Model, Column, Table, CreatedAt, UpdatedAt} from "sequelize-typescript";

export interface UserAttributes {
  firstName: string;
  lastName: string;
  email: string;
}

@Table
export class User extends Model<UserAttributes> {

  @Column
  firstName!: string;

  @Column
  lastName!: string;
  
  @Column({ unique: true })
  email!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
