import { FaceCenterRepresentation } from '../face-center-representation';
import { FacesRepresentation } from '../faces-representation';
export interface ICube {
    getFacesRepresentation(): FacesRepresentation;
    getStringRepresentation(): string;
    getFaceCenterRepresentation(): FaceCenterRepresentation;
    equals(other: ICube): boolean;
}
