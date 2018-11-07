import { ActionReducer, Action } from '@ngrx/store';
import { FilaService } from 'src/app/services/fila/fila.service';
import { FilaInterface } from 'src/app/interfaces/fila.interface';

export const addMusica = 'addMusica';
export const removeMusica = 'removeMusica';
export const limparFila = 'limparFila';


export function addFilaReducer(state:FilaInterface, action: Action) {
	console.log('type ', action)
	switch (action.type) {
		case addMusica:
			state = FilaService.prototype.addFila(action);
			console.log('state ',state);
			return state;

		case removeMusica:
			return state;

		case limparFila:
			return 0;

		default:
			return state;
	}
}