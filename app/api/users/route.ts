import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

interface User {
  id: number;
  title: string;
  department: string;
  description: string;
  dataSubjectTypes: string[];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { titleSearch, department, dataSubjectTypes } = body;

    const data = fs.readFileSync(dbPath, "utf-8");
    let { users } = JSON.parse(data);
    const total = users.length

    users = users.filter((user: User) => {
      const matchesTitle = titleSearch
        ? user.title.toLowerCase().includes(titleSearch.toLowerCase())
        : true;

      const matchesDepartment =
        department && department.length > 0
          ? department.includes(user.department)
          : true;

      const matchesDataSubjectTypes =
        dataSubjectTypes && dataSubjectTypes.length > 0
          ? dataSubjectTypes.every((type: string) =>
              user.dataSubjectTypes.includes(type)
            )
          : true;

      return matchesTitle && matchesDepartment && matchesDataSubjectTypes;
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log("Error fetching users", error);
    return NextResponse.json(
      { message: "Error fetching users" },
      { status: 500 }
    );
  }
}
