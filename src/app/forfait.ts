import { Hotel } from './hotel';

export interface Forfait {
    _id: string,
    da: string,
    destination: string,
    villeDepart: string,
    hotel: Hotel,
    dateDepart: string,
    dateDepartD: Date,
    dateRetour: string,
    dateRetourD: Date
    prix: number,
    rabais: number,
    vedette: boolean,
    forfaitEnVedette: string,
}
