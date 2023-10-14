import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  DeleteDateColumn,
  CreateDateColumn,
} from 'typeorm';

export enum UserRole {
  FARMER = 'farmer',
  INDIVIDUAL_BUYER = 'individual_buyer',
  BUSINESS_BUYER = 'business_buyer',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: false, type: 'varchar' })
  password_hash: string;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.INDIVIDUAL_BUYER,
  })
  role: UserRole;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at: Date;

  constructor(user: {
    name: string;
    email: string;
    phone: string;
    password: string;
    role: UserRole;
  }) {
    if (user) {
      this.name = user.name;
      this.email = user.email;
      this.phone = user.phone;
      this.role = user.role;
      this.password = user.password;
      this.password_hash = '';
    }
  }
}
