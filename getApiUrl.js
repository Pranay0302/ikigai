export default function getApiUrl() {
    const url = {
        development: "http://localhost:3000",
    }

    const env = process.env.NODE_ENV || "development"

    return url[env]
}
