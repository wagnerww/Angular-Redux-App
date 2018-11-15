import { ActionReducer, Action } from '@ngrx/store';
import { FilaService } from 'src/app/services/fila/fila.service';
import { MusicaInterface } from 'src/app/interfaces/musica.interface';

export const addMusica = 'addMusica';
export const removeMusica = 'removeMusica';
export const limparFila = 'limparFila';
	
export function addFilaReducer(state:MusicaInterface[] = [], action: Action) {
	
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