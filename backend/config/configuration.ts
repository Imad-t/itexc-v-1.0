enum ENVIRONMENT {
    DEV = 'dev',
    PROD = 'prod',
}

export default () => ({
    env: (process.env.ENV as ENVIRONMENT) ?? ENVIRONMENT.DEV,
    jwtSecret: process.env.JWT_SECRET as string,
    databaseUrl: process.env.DB_URL as string,
});