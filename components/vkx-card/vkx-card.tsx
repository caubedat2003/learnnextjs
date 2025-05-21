"use client";

import { Card, CardHeader, CardBody, CardFooter, Divider } from "@heroui/react";

export interface VKXCardProps {
  className?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  isHoverable?: boolean;
  isPressable?: boolean;
  isBlurred?: boolean;
  isFooterBlurred?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  disableRipple?: boolean;
  allowTextSelectionOnPress?: boolean;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
  onPressChange?: () => void;
  onPressUp?: () => void;
  headerClassName?: string;
  header?: React.ReactNode;
  bodyClassName?: string;
  children: React.ReactNode;
  footerClassName?: string;
  footer?: React.ReactNode;
}

export default function VKXCard({
  className,
  shadow = "md",
  radius = "lg",
  fullWidth = false,
  isHoverable = false,
  isPressable = false,
  isBlurred = false,
  isFooterBlurred = false,
  isDisabled = false,
  disableAnimation = false,
  disableRipple = false,
  allowTextSelectionOnPress = false,
  onPress,
  onPressStart,
  onPressEnd,
  onPressChange,
  onPressUp,
  headerClassName,
  header,
  bodyClassName,
  children,
  footerClassName,
  footer,
}: VKXCardProps) {
  return (
    <Card
      className={className}
      shadow={shadow}
      radius={radius}
      fullWidth={fullWidth}
      isHoverable={isHoverable}
      isPressable={isPressable}
      isBlurred={isBlurred}
      isFooterBlurred={isFooterBlurred}
      isDisabled={isDisabled}
      disableAnimation={disableAnimation}
      disableRipple={disableRipple}
      allowTextSelectionOnPress={allowTextSelectionOnPress}
      onPress={onPress}
      onPressStart={onPressStart}
      onPressEnd={onPressEnd}
      onPressChange={onPressChange}
      onPressUp={onPressUp}
    >
      {header && <CardHeader className={headerClassName}>{header}</CardHeader>}
      <CardBody className={bodyClassName}>
        {children}
      </CardBody>
      {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
    </Card>
  );
}
