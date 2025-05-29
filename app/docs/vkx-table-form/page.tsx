"use client";
import VkxButton from "@/components/vkx-button/vkx-button";
import { VkxDatePicker } from "@/components/vkx-date-picker/vkx-date-picker";
import { VkxForm } from "@/components/vkx-form/vkx-form";
import { VkxInput } from "@/components/vkx-input";
import { VkxNumberInput } from "@/components/vkx-number-input/vkx-number-input";
import { VkxSelect } from "@/components/vkx-select/vkx-select";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { parseDate } from "@internationalized/date";
import React from "react";

interface Student {
  name?: string;
  birthday?: Date;
  gender?: string;
  score?: number;
}
export default function VkxTableFormPage() {
  const [students, setStudents] = React.useState<Student[]>([]);

  return (
    <div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          1. Form kết hợp với table
        </h1>
        <VkxForm autoComplete="on" className="">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Họ và tên</TableColumn>
              <TableColumn>Ngày sinh</TableColumn>
              <TableColumn>Giới tính</TableColumn>
              <TableColumn>Điểm thi</TableColumn>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student?.birthday?.toString()} </TableCell>
                    <TableCell>{student.gender}</TableCell>
                    <TableCell>{student.score}</TableCell>
                  </TableRow>
                );
              })}
              {/* <TableRow key="1">
                <TableCell>
                  <VkxInput></VkxInput>
                </TableCell>
                <TableCell>
                  <VkxDatePicker
                    minValue={parseDate("1945-01-01")}
                  ></VkxDatePicker>
                </TableCell>
                <TableCell className="w-40">
                  <VkxSelect
                    selectItems={[
                      {
                        key: "1",
                        children: "Nam",
                      },
                      {
                        key: "2",
                        children: "Nữ",
                      },
                      {
                        key: "3",
                        children: "Khác",
                      },
                    ]}
                  ></VkxSelect>
                </TableCell>
                <TableCell>
                  <VkxNumberInput minValue={0} maxValue={10}></VkxNumberInput>
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </VkxForm>

        <p className="text-xs text-gray-500 mt-1"></p>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. Form kết hợp với table validate trong form
        </h1>
        <VkxForm
          autoComplete="on"
          onSubmit={(e) => {
            e.preventDefault();
            let student: Student = Object.fromEntries(
              new FormData(e.currentTarget)
            );
            console.log(student);
            setStudents([...students, student]);
          }}
        >
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Họ và tên</TableColumn>
              <TableColumn>Ngày sinh</TableColumn>
              <TableColumn>Giới tính</TableColumn>
              <TableColumn>Điểm thi</TableColumn>
              <TableColumn> </TableColumn>
            </TableHeader>

            <TableBody key="body-table-2">
              <TableRow key="root-input-table-key">
                <TableCell>
                  <VkxInput name="name"></VkxInput>
                </TableCell>
                <TableCell>
                  <VkxDatePicker
                    name="birthday"
                    minValue={parseDate("1945-01-01")}
                  ></VkxDatePicker>
                </TableCell>
                <TableCell className="w-40">
                  <VkxSelect
                    aria-label="gender"
                    name="gender"
                    selectItems={[
                      {
                        key: "1",
                        children: "Nam",
                      },
                      {
                        key: "2",
                        children: "Nữ",
                      },
                      {
                        key: "3",
                        children: "Khác",
                      },
                    ]}
                  ></VkxSelect>
                </TableCell>
                <TableCell>
                  <VkxNumberInput
                    name="score"
                    minValue={0}
                    maxValue={10}
                  ></VkxNumberInput>
                </TableCell>
                <TableCell>
                  <VkxButton type="submit" size="lg">
                    Add
                  </VkxButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </VkxForm>
        <p className="text-xs text-gray-500 mt-1"></p>
      </div>

      
    </div>
  );
}
