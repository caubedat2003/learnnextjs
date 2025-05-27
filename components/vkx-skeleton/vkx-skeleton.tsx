import React from "react";
import { Skeleton, SkeletonProps } from "@heroui/skeleton";

export interface VkxSkeletonProps extends SkeletonProps {
  className?: string;
}

export const VkxSkeleton: React.FC<VkxSkeletonProps> = ({
  className,
  ...props
}) => {
  return <Skeleton isLoaded className={className} {...props} />;
};

export default VkxSkeleton;
