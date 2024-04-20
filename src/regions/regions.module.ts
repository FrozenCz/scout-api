import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { DistrictController } from './district.controller';

@Module({
  controllers: [RegionsController, DistrictController],
  providers: [RegionsService],
  exports: [],
})
export class RegionsModule {}
