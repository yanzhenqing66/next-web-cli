export const env: string | undefined = process.env.NEXT_PUBLIC_CUSTOM_ENV

export const isPro: boolean = env === 'production'
