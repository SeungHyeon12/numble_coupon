import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'issuer' })
export class CouponIssuerModel {
  @PrimaryGeneratedColumn('increment')
  issuerId: number;

  @Column()
  issuerUuid: string;

  @Column({ nullable: true })
  productUuid: string;
}
