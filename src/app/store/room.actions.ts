import { createAction, props } from '@ngrx/store';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';

export const addRoom = createAction('[Room] Add', props<{ room: Room }>());
export const editRoom = createAction('[Room] Edit', props<{ original: Room, changed: Room }>());
export const deleteRoom = createAction('[Room] Delete', props<{ room: Room }>());
export const addHotel = createAction('[Hotel] Add', props<{ hotel: Hotel }>());
