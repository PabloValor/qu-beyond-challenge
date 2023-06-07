export interface ApiError { 
    message: string
    reason?: string
    level?: number
    trace?: string
}