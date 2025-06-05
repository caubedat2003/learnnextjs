import { NextResponse } from "next/server";

export async function GET() {
  const objData = {
    info: {
      id: "user-001",
      username: "nguyenvana",
      password: "password123",
      phone: "+84987654321",
      email: "nguyenvana@example.com",
      birthDate: "1990-05-15",
      gender: "2",
    },
    orther: {
      bio: "https://github.com/nguyenvana",
      exampleDate: "2025-06-15",
      weight: 70,
      month: "06",
      year: "2025",
      description:
        "Tôi là một lập trình viên full-stack với 5 năm kinh nghiệm trong việc phát triển ứng dụng web và mobile. Đam mê công nghệ mới và luôn học hỏi những kỹ thuật hiện đại.",
      groupOptions: ["a", "c"],
      emailNotifications: true,
    },
    products: [
      {
        id: "prod-001",
        name: "iPhone 15 Pro Max",
        importDate: "2024-09-15",
        status: "1",
        price: 29990000,
      },
      {
        id: "prod-002",
        name: "Samsung Galaxy S24 Ultra",
        importDate: "2024-08-20",
        status: "2",
        price: 26990000,
      },
      {
        id: "prod-003",
        name: "MacBook Air M3",
        importDate: "2024-07-10",
        status: "1",
        price: 28990000,
      },
      {
        id: "prod-004",
        name: "Dell XPS 13",
        importDate: "2024-06-05",
        status: "3",
        price: 25990000,
      },
      {
        id: "prod-005",
        name: "iPad Pro 12.9 inch",
        importDate: "2024-05-25",
        status: "1",
        price: 19990000,
      },
    ],
  };

  // Convert Date objects to ISO strings for JSON serialization
  // const data = {
  //   ...objData,
  //   products: objData.products.map((product) => ({
  //     ...product,
  //     importDate: product.importDate,
  //   })),
  // };

  return NextResponse.json(objData);
}
