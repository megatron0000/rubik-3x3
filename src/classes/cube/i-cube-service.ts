import { FaceCenterRepresentation } from '../face-center-representation';
import { FacesRepresentation } from '../faces-representation';
import { ICube } from './i-cube';
export interface ICubeService {
    fromStringRepresentation(source: string): ICube;
    fromFacesRepresentation(source: FacesRepresentation): ICube;
    createSolved(centers: FaceCenterRepresentation): ICube;
}
