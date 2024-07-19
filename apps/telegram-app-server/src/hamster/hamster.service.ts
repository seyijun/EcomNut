import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HamsterServiceBase } from "./base/hamster.service.base";

@Injectable()
export class HamsterService extends HamsterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
