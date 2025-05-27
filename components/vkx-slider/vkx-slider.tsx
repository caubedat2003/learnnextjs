import React from "react";
import {Slider, SliderProps } from "@heroui/slider";

export interface VkxSliderProps extends SliderProps {
  className?: string;
}

export const VkxSlider: React.FC<VkxSliderProps> = ({ className, ...props }) => {
  return <Slider className={className} {...props} />;
};

export default VkxSlider;
