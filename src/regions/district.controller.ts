import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('district')
export class DistrictController {
  constructor(private regionsService: RegionsService) {}

  @Get()
  @ApiOperation({
    description: 'Endpoint for getting czech districts',
  })
  getDistricts() {
    return this.regionsService.districts;
  }
}
