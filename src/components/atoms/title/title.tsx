import type { ReactElement, ReactNode } from "react";
import { FC, memo } from "react";

interface ITitleProps {
  level: number;
  children: ReactNode;
  icon?: ReactElement;
  className?: string;
}

const TitleComponent: FC<ITitleProps> = ({
  level = 3,
  children,
  icon,
  className = "",
}) => {
  const CustomTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={`flex items-center ${className}`}>
      {icon && <span className="mr-3 text-gray-300 text-xl">{icon}</span>}
      {children}
    </CustomTag>
  );
};

export const Title = memo(TitleComponent);
