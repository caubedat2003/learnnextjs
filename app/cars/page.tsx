
"use client"; 
import Company from "@/src/entities/Company";
import { useRouter } from 'next/navigation';
import HttpUtils from "@/utils/HttpUtils";
import { useEffect, useRef, useState } from "react";
import { ResponseErrorAPI } from "@/src/Interface/ResponseErrorAPI";
import { VkxDatePicker } from "@/components/vkx-date-picker/vkx-date-picker";
import { now, parseDate, today } from "@internationalized/date";
import { VkxInput } from "@/components/vkx-input";
import { DateValue } from "@heroui/react";
import VkxButton from "@/components/vkx-button/vkx-button";
import VkxDatatableGet, {DataTableHandle} from "@/components/vkx-datatableGet/vkx-data-table-get";  
import { VkxNumberInput } from "@/components/vkx-number-input/vkx-number-input";

  type SearchForm = {
    name: string;
    address: string;
    phone: string;
    time: DateValue | null;
  }
  export default function CarListPage() {
    const [Companys, setCompany] = useState<Company[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();
    const [error, setError] = useState<ResponseErrorAPI | null>(null);
    const [searchForm,setSearchFrom] = useState<SearchForm>(
      {
        name: '',
        address: '',
        phone: '',
        time: now('UTC'), // Khởi tạo với ngày hiện tại
      }
    );

    const tableRef = useRef<DataTableHandle>(null);
    const handleSearchClick = () => {
      tableRef.current?.search()
    }

    const columnsDatatable = [
      { name: 'Id', value: 'id' },
      { name: 'Tên', value: 'name' },
      { name: 'Email', value: 'email' },
      { name: 'Địa chỉ', value: 'address' },
      { name: 'Số điện thoại', value: 'phone' },
    ] 

    const minValue = parseDate("2020-01-01");
      const maxValue = parseDate("2030-12-31");
      const placeholderDate = today("UTC");


    let HostUrl = process.env.NODE_ENV === 'development' 
                   ?  process.env.NEXT_PUBLIC_URL_DEV as string 
                   : process.env.NEXT_PUBLIC_URL_PRODUCTION as string;
   
    
    const handleCreateNew = () => {
      // chuyển về màn hình create
      router.push('/cars/create');
    };

    // Hàm xử lý thay đổi giá trị trong ô input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchFrom(prev => (
          { ...prev, [e.target.name]: e.target.value }
        ));
    };

    // Hàm xử lý thay đổi giá trị trong ô input date số
    const handleDateChange = (date: DateValue | null) => {
      setSearchFrom(prev => ({ ...prev, time: date }));
    };
    

    const navigateToDetail = (id: number) => {
      // Dùng router.push() để chuyển hướng đến trang chi tiết
      router.push(`/cars/${id}`);
    };

    const deleteById = async(id: number) => {
        try {
               let apiUrl = HostUrl + "company"; // Xác định URL API
               const result = await HttpUtils.delete<Company>(apiUrl, id.toString());
               handleSearchClick();
               localStorage.setItem("IDDelete",id.toString());
           } catch (error) {
               console.error("Error calling API:", error);
           }
    };
    // chạy 1 lần mỗi khi Companys Thay đổi
    useEffect(() => {
      console.log("kết quả trả về: ", Companys);
    }, [Companys]);

    const search = () => {
      // Xử lý tìm kiếm ở đây
      debugger
      console.log("Tìm kiếm với dữ liệu:", searchForm);
      // Gọi API hoặc lọc dữ liệu dựa trên searchForm
      // Ví dụ: fetchData(searchForm);
    };
    

    if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-800 rounded">
        <h2>❌ Lỗi tải dữ liệu</h2>
        <p>{error.message}</p>
        <p>{error.statusCode}</p>
        <button onClick={() => {
          setError(null);
          handleSearchClick();
        }}>
          Thử lại
        </button>
      </div>
    );
    }
    

    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Danh sách đơn vị</h1>
        <div className="border border-gray-300 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <VkxInput label="Name" type="text" name="name" value={searchForm.name} onChange={handleChange}  />
            </div>
            <div>
              <VkxInput label="Địa chỉ" type="text" name="address" value={searchForm.address} onChange={handleChange} />
            </div>
            <div>
              <VkxDatePicker
                        className="max-w-xs"
                        label="Chọn ngày sinh"
                        minValue={minValue}
                        placeholder={placeholderDate}
                        value={searchForm.time}
                        onChange={handleDateChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            <div>
              <VkxInput label="Name" type="text" name="name" value={searchForm.name} onChange={handleChange}  />
            </div>
            <div>
              <VkxInput label="Địa chỉ" type="text" name="address" value={searchForm.address} onChange={handleChange} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <VkxButton onPress={search} >
              Tìm kiếm
           </VkxButton>
          </div>
        </div>
        {/* {tìm kiếm} */}
        <button
          onClick={handleCreateNew}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Tạo mới
        </button>

        <VkxDatatableGet
          objectdata = {Company}
          ref={tableRef}
          dataUrl="company"
          columns={columnsDatatable}
          search={searchForm}
          renderActions={(item: Company) => (
            <div className="space-x-2">
              <button className="text-blue-600 underline">Xem</button>
              <button className="text-red-600 underline">Xóa</button>
            </div>
          )}
        />

        {/* <table className="w-full table-auto border border-collapse border-gray-400">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Tên</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Địa chỉ</th>
              <th className="border px-4 py-2">Số điện thoại</th>
              <th className="border px-4 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {Companys.map((company) => (
              <tr key={company.id}>
                <td className="border px-4 py-2">{company.id}</td>
                <td className="border px-4 py-2">{company.name}</td>
                <td className="border px-4 py-2">{company.email}</td>
                <td className="border px-4 py-2">{company.address}</td>
                <td className="border px-4 py-2">{company.phone}</td>
                <td className="border px-4 py-2">
                    <button
                      onClick={() => navigateToDetail(company.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Xem chi tiết
                    </button>

                    <button
                      onClick={() => deleteById(company.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      - XÓA
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

      </main>
    );
  }