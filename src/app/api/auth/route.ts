import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@/services/authService';

// Login API route
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { action, username, email, password } = body;

        if (action === 'login') {
            const user = await authService.login(username, password);
            if (user) {
                return NextResponse.json({ success: true, user });
            } else {
                return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
            }
        }
        else if (action === 'register') {
            const user = await authService.register({ username, email, password });
            if (user) {
                return NextResponse.json({ success: true, user });
            } else {
                return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 400 });
            }
        }
        else {
            return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
        }
    } catch (error) {
        console.error('Auth API error:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
