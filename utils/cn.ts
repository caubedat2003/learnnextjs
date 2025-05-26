import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sử dụng để quản lý className trong React + TailwindCSS
// Cách dùng:
// + Kết hợp nhiều class: <div className={cn("text-sm", "font-medium", "text-gray-900")}>
// + Class có điều kiện: <div className={cn("p-4", isActive ? "bg-blue-500" : "bg-gray-200")}>
// + Kết hợp với props className:
// function Card({ className, ...props }) {
//   return (
//     <div className={cn("rounded-lg border p-6", className)} {...props} />
//   );
// }
// + Kết hợp với object
// <div className={cn(
//   "flex items-center",
//   {
//     "justify-center": center,
//     "text-red-500": error,
//   }
// )} />
