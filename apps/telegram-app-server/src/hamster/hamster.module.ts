import { Module } from "@nestjs/common";
import { HamsterModuleBase } from "./base/hamster.module.base";
import { HamsterService } from "./hamster.service";
import { HamsterController } from "./hamster.controller";
import { HamsterResolver } from "./hamster.resolver";

@Module({
  imports: [HamsterModuleBase],
  controllers: [HamsterController],
  providers: [HamsterService, HamsterResolver],
  exports: [HamsterService],
})
export class HamsterModule {}
