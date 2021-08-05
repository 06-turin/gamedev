import {
  AllowNull,
  AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table,
} from 'sequelize-typescript';

@Table({
  paranoid: true,
  tableName: 'users',
})
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  theme!: string;

  @Column(DataType.STRING)
  device!: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId!: string;
}
