import { IColumnsData } from '@/components/project/Column/interfaces';

export interface reorderFunctionsBaseParams {
  sourceColumn: IColumnsData;
  sourceIndex: number;
  destinationIndex: number;
}

export interface reorderColumnsAndTasksParms extends reorderFunctionsBaseParams {
  destinationColumn: IColumnsData;
}
