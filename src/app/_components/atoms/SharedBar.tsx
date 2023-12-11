import React, { type ReactNode } from "react";

const SharedBar = ({
  children,
  containerWidth,
  innerContainerBackgroundColor,
}: {
  children: ReactNode;
  containerWidth: string;
  innerContainerBackgroundColor?: string;
}) => {
  return (
    <div className={`bg-secondary h-14 rounded-full p-1.5 ${containerWidth}`}>
      <div
        className={`${
          innerContainerBackgroundColor ?? "bg-primary"
        } flex h-[45px] items-center rounded-full px-1`}
      >
        {children}
      </div>
    </div>
  );
};

export default SharedBar;
