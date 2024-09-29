import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

interface User {
    id: number,
    title: string,
    department: string,
    description: string,
    dataSubjectTypes: string[]
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, department, dataSubjectTypes } = body;

    const data = fs.readFileSync(dbPath, 'utf-8');
    let { users } = JSON.parse(data);

    // Filter users based on the provided fields
    if (title) {
      users = users.filter((user:User) =>
        user.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (department && department.length > 0) {
      users = users.filter((user:User) =>
        department.includes(user.department)
      );
    }

    if (dataSubjectTypes && dataSubjectTypes.length > 0) {
      users = users.filter((user:User) =>
        dataSubjectTypes.some((type:string) => user.dataSubjectTypes.includes(type))
      );
    }

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}