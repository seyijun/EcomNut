/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min, Max, IsOptional, ValidateNested } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { MatchWhereUniqueInput } from "../../match/base/MatchWhereUniqueInput";
import { HamsterWhereUniqueInput } from "../../hamster/base/HamsterWhereUniqueInput";

@InputType()
class BetCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MatchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MatchWhereUniqueInput)
  @IsOptional()
  @Field(() => MatchWhereUniqueInput, {
    nullable: true,
  })
  match?: MatchWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => HamsterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HamsterWhereUniqueInput)
  @IsOptional()
  @Field(() => HamsterWhereUniqueInput, {
    nullable: true,
  })
  hamster?: HamsterWhereUniqueInput | null;
}

export { BetCreateInput as BetCreateInput };
