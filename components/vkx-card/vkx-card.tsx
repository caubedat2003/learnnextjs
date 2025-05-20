import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

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
  header?: React.ReactNode;
  body?: React.ReactNode;
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
  header,
  body,
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
      {header && <CardHeader>{header}</CardHeader>}
      {body && <CardBody>{body}</CardBody>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
