import React, { type ReactNode } from "react";

const SharedBar = ({
  children,
  containerClassName,
  innerContainerClassName,
}: {
  children: ReactNode;
  containerClassName: string;
  innerContainerClassName?: string;
}) => {
  return (
    <div
      className={`h-14 rounded-full bg-secondary p-1.5 drop-shadow-2xl ${containerClassName}`}
    >
      <div
        className={`${
          innerContainerClassName ?? "bg-primary"
        } flex h-[45px] items-center rounded-full px-1`}
      >
        {children}
      </div>
    </div>
  );
};

export default SharedBar;
