import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, department, dataSubjectTypes } = body;

    // Read existing users from db.json
    const data = fs.readFileSync(dbPath, 'utf-8');
    const { users } = JSON.parse(data);

    // Create new user object
    const newUser = { id: Date.now(), title, description, department, dataSubjectTypes };

    users.push(newUser);

    // Write updated users back to db.json
    fs.writeFileSync(dbPath, JSON.stringify({ users }, null, 2));

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}
