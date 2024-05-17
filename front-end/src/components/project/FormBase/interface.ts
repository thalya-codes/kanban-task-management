import { ReactNode } from "react";

export interface IFormBase {
  isLoginForm?: boolean;
  children?: ReactNode;
  onClick: () => void;
}
