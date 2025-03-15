import pool from '../utils/dbConnection';

export interface User {
    id?: number;
    username: string;
    email?: string;
    password: string;
}

export const authService = {
    // Login a user
    async login(username: string, password: string): Promise<User | null> {
        try {
            const result = await pool.query(
                'SELECT id, username, email FROM readcircle.users WHERE username = $1 AND password = $2',
                [username, password] // Note: In production, use password hashing
            );

            if (result.rows.length > 0) {
                return result.rows[0] as User;
            }
            return null;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    // Register a new user
    async register(user: User): Promise<User | null> {
        try {
            const result = await pool.query(
                'INSERT INTO readcircle.users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
                [user.username, user.email, user.password] // Note: In production, hash the password
            );

            if (result.rows.length > 0) {
                return result.rows[0] as User;
            }
            return null;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }
};
