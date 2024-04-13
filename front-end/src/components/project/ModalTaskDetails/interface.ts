import { ReactNode } from "react";

export interface IModalTaskDetailsProps {
  name: string;
  description: string;
  totalSubtasksQtd?: number;
  completedSubtasksQtd?: number;
  children: ReactNode;
}
