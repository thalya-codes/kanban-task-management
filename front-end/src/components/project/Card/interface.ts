export interface ICardProps {
  title: string;
  totalSubTasks: number;
  completedSubTasks: number;
  onClick: () => void;
}
