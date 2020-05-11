import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "Destination or place of interest" })
@Entity()
export class Place extends BaseEntity {
  // Field allowing Graphql to query
  // for the follwing entity column
  // PrimaryGeneratedColumn is a primery key column
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field({
    nullable: true,
    description: "The place description",
  })
  @Column()
  description?: string;

  @Field({
    nullable: true,
    description: "The place image url",
  })
  @Column()
  imageUrl?: string;

  @Field({ nullable: true })
  @Column()
  creationDate?: Date;
}
