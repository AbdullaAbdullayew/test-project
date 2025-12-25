import { Post } from "../types/post"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://jsonplaceholder.typicode.com"

class APIError extends Error {
    constructor(
        public status: number,
        public statusText: string,
        message: string,
    ) {
        super(message)
        this.name = "APIError"
    }
}

async function retryFetch<T>(
    url: string,
    options: RequestInit = {},
    maxRetries = 3,
    delayMs = 1000,
): Promise<T> {
    let lastError: Error | null = null

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(url, {
                headers: { Accept: "application/json" },
                ...options,
            })

            if (!response.ok) {
                throw new APIError(
                    response.status,
                    response.statusText,
                    `API Error: ${response.status} ${response.statusText} at ${url}`,
                )
            }

            return await response.json()
        } catch (error) {
            lastError = error as Error

            // Don't retry on client errors (4xx)
            if (error instanceof APIError && error.status < 500) {
                throw error
            }

            // Retry with exponential backoff
            if (attempt < maxRetries - 1) {
                const delay = delayMs * Math.pow(2, attempt)
                await new Promise((resolve) => setTimeout(resolve, delay))
            }
        }
    }

    throw lastError || new Error("Failed to fetch data after retries")
}

async function fetchData<T>(
    endpoint: string,
    options?: {
        isServer?: boolean
        revalidate?: number
        retries?: number
    },
): Promise<T> {
    const fetchOptions: RequestInit = {
        headers: { Accept: "application/json" },
    }

    if (options?.isServer && options?.revalidate) {
        fetchOptions.next = { revalidate: options.revalidate }
    }

    return retryFetch<T>(`${API_BASE_URL}${endpoint}`, fetchOptions, options?.retries || 3)
}

export async function fetchPost(): Promise<Post[]> {
    return fetchData<Post[]>(`/posts`, { isServer: true, revalidate: 30, retries: 3 })
}
