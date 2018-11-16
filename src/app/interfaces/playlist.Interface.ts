import { MusicaModel } from "src/app/models/Musica.Model";

export interface PlaylistInterface {
  idPlaylist:number,
  NomePlaylist:string,
  Musicas:MusicaModel
}
