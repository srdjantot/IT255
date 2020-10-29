import { Action, createReducer, on } from '@ngrx/store';
import { Hotel } from '../models/hotel.model';
import { Room } from '../models/room.model';
import * as RoomActions from './room.actions'

export interface State {
    hotels: Hotel[],
    rooms: Room[]
}

const initialHotels: Hotel[] = [
    new Hotel('Hotel Star'),
    new Hotel('Hotel Palas'),
];

const initialRooms: Room[] = [
    new Room(initialHotels[0], "Jednokrevetna soba s pogledom na more", 120, 4),
    new Room(initialHotels[0], "Dvokrevetna soba s pogledom na more", 180, 5),
    new Room(initialHotels[1], "Jednokrevetna soba\nPolupansion ", 140, 2),
    new Room(initialHotels[1], "Jednokrevetna soba\nDoručak", 90, 3),
];

export const initialState: State = {
    hotels: initialHotels,
    rooms: initialRooms
};

const roomReducer = createReducer(
    initialState,
    on(RoomActions.addRoom, (state, { room }) => ({
        ...state,
        rooms: state.rooms.concat(room)
    })),
    on(RoomActions.editRoom, (state, { original, changed }) => ({
        ...state,
        rooms: state.rooms.map(item => item !== original ? item : changed)
    })),
    on(RoomActions.deleteRoom, (state, { room }) => ({
        ...state,
        rooms: state.rooms.filter(item => item !== room)
    })),
    on(RoomActions.addHotel, (state, { hotel }) => ({
        ...state,
        hotels: state.hotels.concat(hotel)
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return roomReducer(state, action);
}