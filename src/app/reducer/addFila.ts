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
			state = FilaService.prototype.addMusica(action);		
			
			console.log('Fila state ',state);
			return [...state];

		case removeMusica:
			state = FilaService.prototype.removeMusica(action);
			console.log('remove ',state);
			return [...state];

		case limparFila:
			return 0;

		default:
			return state;
	}
}