import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface PersistentConnection {
  connect_protocol: string;
  ctx: string;
  host: string;
  port: number;
}

