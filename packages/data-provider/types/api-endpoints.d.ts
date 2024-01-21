export declare const user: () => string;
export declare const balance: () => string;
export declare const userPlugins: () => string;
export declare const messages: (conversationId: string, messageId?: string) => string;
export declare const keys: () => string;
export declare const userKeyQuery: (name: string) => string;
export declare const revokeUserKey: (name: string) => string;
export declare const revokeAllUserKeys: () => string;
export declare const abortRequest: (endpoint: string) => string;
export declare const conversations: (pageNumber: string) => string;
export declare const conversationById: (id: string) => string;
export declare const updateConversation: () => string;
export declare const deleteConversation: () => string;
export declare const search: (q: string, pageNumber: string) => string;
export declare const searchEnabled: () => string;
export declare const presets: () => string;
export declare const deletePreset: () => string;
export declare const aiEndpoints: () => string;
export declare const models: () => string;
export declare const tokenizer: () => string;
export declare const login: () => string;
export declare const logout: () => string;
export declare const register: () => string;
export declare const loginFacebook: () => string;
export declare const loginGoogle: () => string;
export declare const refreshToken: (retry?: boolean) => string;
export declare const requestPasswordReset: () => string;
export declare const resetPassword: () => string;
export declare const plugins: () => string;
export declare const config: () => string;
export declare const assistants: (id?: string) => string;
export declare const files: () => string;
export declare const images: () => string;
