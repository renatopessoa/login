/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Don't resolve 'fs', 'net', 'tls', etc. on the client side
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
                net: false,
                tls: false,
                crypto: false,
                dns: false,
                stream: false,
                http: false,
                https: false,
                zlib: false,
                constants: false,
            };
        }

        return config;
    },
};

module.exports = nextConfig;
