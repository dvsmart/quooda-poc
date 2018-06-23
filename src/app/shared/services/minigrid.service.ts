import { Injectable } from '@angular/core';
import { GenericService } from '../../services/generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MinigridService<T extends any> extends GenericService<T> {

  constructor(http:HttpClient) {

    super(http,'');
  }

}
