import { MusicaModel } from "src/app/models/Musica.Model";

export interface PlaylistInterface {
  idPlaylist:number,
  NomePlaylist:String,
  Musicas:MusicaModel
}
