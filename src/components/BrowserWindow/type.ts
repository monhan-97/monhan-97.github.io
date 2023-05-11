import { type CSSProperties, type ReactNode } from "react";

export interface Props {
  children: ReactNode;
  minHeight?: number;
  url: string;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}
