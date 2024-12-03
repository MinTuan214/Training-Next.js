"use client"
import { ReactNode} from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode; 
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {

  return <main>{children}</main>;
};

export default ErrorBoundary;