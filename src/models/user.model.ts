import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { UserAttributes } from "../interfaces/user.interface";
import { Phone } from "./phone.model";

@Table
export class User extends Model<UserAttributes> {
  @Column
  firstName!: string;

  @Column
  lastName!: string;

  @Column(DataType.STRING)
  gender!: UserAttributes["gender"];

  @Column({ unique: true, allowNull: false })
  email!: string;

  @Column({ allowNull: false })
  password!: string;

  @BelongsTo(() => Phone)
  phone!: Phone;

  @ForeignKey(() => Phone)
  @Column
  phoneId!: number;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
