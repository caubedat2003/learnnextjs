"use client";

import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

// Hàm mô phỏng một thao tác bất đồng bộ
const simulateAsyncOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ message: "Thao tác thành công" });
      } else {
        reject(new Error("Thao tác thất bại"));
      }
    }, 2000);
  });
};

export default function ToastExamples() {
  // Hàm để hiển thị toast cơ bản
  const showBasicToast = () => {
    addToast({
      title: "Thông báo",
      description: "Đây là một thông báo cơ bản",
    });
  };

  // Hàm để hiển thị toast thành công
  const showSuccessToast = () => {
    addToast({
      title: "Thành công",
      description: "Thao tác đã hoàn thành thành công",
      color: "success",
    });
  };

  // Hàm để hiển thị toast lỗi
  const showDangerToast = () => {
    addToast({
      title: "Lỗi",
      description: "Đã xảy ra lỗi trong quá trình thực hiện",
      color: "danger",
    });
  };

  // Hàm để hiển thị toast cảnh báo
  const showWarningToast = () => {
    addToast({
      title: "Cảnh báo",
      description: "Có một số vấn đề cần lưu ý",
      color: "warning",
    });
  };

  // Hàm để hiển thị toast với variant bordered
  const showBorderedToast = () => {
    addToast({
      title: "Thông báo viền",
      description: "Toast với variant bordered",
      variant: "bordered",
    });
  };

  // Hàm để hiển thị toast với variant flat
  const showFlatToast = () => {
    addToast({
      title: "Thông báo phẳng",
      description: "Toast với variant flat",
      variant: "flat",
    });
  };

  // Hàm để hiển thị toast với thời gian tùy chỉnh
  const showCustomTimeoutToast = () => {
    addToast({
      title: "Thông báo tùy chỉnh thời gian",
      description: "Toast này sẽ biến mất sau 10 giây",
      timeout: 10000,
    });
  };

  // Hàm để hiển thị toast với promise
  const showPromiseToast = () => {
    addToast({
      title: "Đang xử lý",
      description: "Vui lòng chờ...",
      color: "default",
      promise: simulateAsyncOperation(),
      loading: "Đang xử lý...",
      success: (data: any) => `Thành công: ${data.message}`,
      error: (error: any) => `Lỗi: ${error.message}`,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Các trường hợp sử dụng Toast trong HeroUI
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Button onPress={showBasicToast}>Hiển thị Toast cơ bản</Button>
        <Button onPress={showSuccessToast}>Hiển thị Toast thành công</Button>
        <Button onPress={showDangerToast}>Hiển thị Toast lỗi</Button>
        <Button onPress={showWarningToast}>Hiển thị Toast cảnh báo</Button>
        <Button onPress={showBorderedToast}>Hiển thị Toast viền</Button>
        <Button onPress={showFlatToast}>Hiển thị Toast phẳng</Button>
        <Button onPress={showCustomTimeoutToast}>
          Hiển thị Toast với thời gian tùy chỉnh
        </Button>
        <Button onPress={showPromiseToast}>Hiển thị Toast với promise</Button>
      </div>
    </div>
  );
}
