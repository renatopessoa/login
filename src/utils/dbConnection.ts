import { Pool } from 'pg';
import { dbConfig } from '../config/db';

// Create a db connection singleton that works in both server and client components
let pool: Pool | null = null;

// Initialize the pool
const getPool = () => {
    if (!pool) {
        pool = new Pool({
            host: dbConfig.host,
            port: dbConfig.port,
            database: dbConfig.database,
            user: dbConfig.user,
            password: dbConfig.password,
            // Remove SSL options to avoid fs module requirement
            ssl: false,
        });

        // Test the connection
        if (typeof window === 'undefined') { // Only run on server side
            pool.query('SELECT NOW()', (err, res) => {
                if (err) {
                    console.error('Database connection error:', err);
                } else {
                    console.log('Database connected successfully!');
                    // Set search path to use the specified schema
                    pool.query(`SET search_path TO ${dbConfig.schema}`, (err) => {
                        if (err) {
                            console.error('Error setting schema:', err);
                        } else {
                            console.log(`Schema set to ${dbConfig.schema}`);
                        }
                    });
                }
            });
        }
    }
    return pool;
};

export default getPool();
