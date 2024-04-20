import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('regions')
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Get()
  @ApiOperation({
    description: 'Endpoint for getting czech regions',
  })
  getRegions() {
    return this.regionsService.regions;
  }
}
