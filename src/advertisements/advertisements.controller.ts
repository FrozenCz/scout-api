import { Controller, Get } from '@nestjs/common';

@Controller('advertisements')
export class AdvertisementsController {
  @Get()
  getAdvertisements() {
    return [];
  }
}
