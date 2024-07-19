import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HamsterService } from "./hamster.service";
import { HamsterControllerBase } from "./base/hamster.controller.base";

@swagger.ApiTags("hamsters")
@common.Controller("hamsters")
export class HamsterController extends HamsterControllerBase {
  constructor(protected readonly service: HamsterService) {
    super(service);
  }
}
