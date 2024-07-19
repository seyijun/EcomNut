import * as graphql from "@nestjs/graphql";
import { HamsterResolverBase } from "./base/hamster.resolver.base";
import { Hamster } from "./base/Hamster";
import { HamsterService } from "./hamster.service";

@graphql.Resolver(() => Hamster)
export class HamsterResolver extends HamsterResolverBase {
  constructor(protected readonly service: HamsterService) {
    super(service);
  }
}
