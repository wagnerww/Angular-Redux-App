import { ActionReducer, Action } from '@ngrx/store';
import { FilaService } from 'src/app/services/fila/fila.service';
import { FilaInterface } from 'src/app/interfaces/fila.interface';

export const addMusica = 'addMusica';
export const removeMusica = 'removeMusica';
export const limparFila = 'limparFila';
let Fila:FilaInterface;
	
export function addFilaReducer(state:FilaInterface[] = [], action: Action) {
	
	console.log('type ', action)
	console.log('state ', state)
	switch (action.type) {
		case addMusica:
			state.push(Fila = FilaService.prototype.addMusica(action));
		
			//Fila.push(state);
			console.log('Fila state ',state);
			return [...state];

		case removeMusica:
			console.log('remove ',state);
			return state;

		case limparFila:
			return 0;

		default:
			return state;
	}
}