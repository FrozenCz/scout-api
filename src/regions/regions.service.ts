import { Injectable } from '@nestjs/common';
import { Region } from '../models/region';
import { Kraje } from './assets/kraje';
import { District } from '../models/district';
import { Okresy } from './assets/okresy';

@Injectable()
export class RegionsService {
  private readonly _regions: Region[] = [];
  private readonly _districts: District[] = [];

  constructor() {
    this._regions = Kraje;
    this._districts = Okresy;
  }

  get regions(): Region[] {
    return this._regions;
  }

  get districts(): District[] {
    return this._districts;
  }
}
