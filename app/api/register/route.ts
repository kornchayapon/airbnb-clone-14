import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Register request body:', body); // ✅ log body

    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse('Missing field', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Register API Error', error);
    return new NextResponse('❌ Internal Server Error', { status: 500 });
  }
}
