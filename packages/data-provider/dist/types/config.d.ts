import { z } from 'zod';
import { EModelEndpoint } from './schemas';
import { FileSources } from './types/files';
export declare const defaultSocialLogins: string[];
export declare const fileSourceSchema: z.ZodNativeEnum<typeof FileSources>;
export declare const assistantEndpointSchema: z.ZodObject<{
    disableBuilder: z.ZodOptional<z.ZodBoolean>;
    pollIntervalMs: z.ZodOptional<z.ZodNumber>;
    timeoutMs: z.ZodOptional<z.ZodNumber>;
    supportedIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    excludedIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    apiKey: z.ZodOptional<z.ZodString>;
    baseURL: z.ZodOptional<z.ZodString>;
    models: z.ZodOptional<z.ZodObject<{
        default: z.ZodArray<z.ZodString, "many">;
        fetch: z.ZodOptional<z.ZodBoolean>;
        userIdQuery: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    }, {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    }>>;
    titleConvo: z.ZodOptional<z.ZodBoolean>;
    titleMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"completion">, z.ZodLiteral<"functions">]>>;
    titleModel: z.ZodOptional<z.ZodString>;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    disableBuilder?: boolean | undefined;
    pollIntervalMs?: number | undefined;
    timeoutMs?: number | undefined;
    supportedIds?: string[] | undefined;
    excludedIds?: string[] | undefined;
    apiKey?: string | undefined;
    baseURL?: string | undefined;
    models?: {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    } | undefined;
    titleConvo?: boolean | undefined;
    titleMethod?: "completion" | "functions" | undefined;
    titleModel?: string | undefined;
    headers?: Record<string, any> | undefined;
}, {
    disableBuilder?: boolean | undefined;
    pollIntervalMs?: number | undefined;
    timeoutMs?: number | undefined;
    supportedIds?: string[] | undefined;
    excludedIds?: string[] | undefined;
    apiKey?: string | undefined;
    baseURL?: string | undefined;
    models?: {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    } | undefined;
    titleConvo?: boolean | undefined;
    titleMethod?: "completion" | "functions" | undefined;
    titleModel?: string | undefined;
    headers?: Record<string, any> | undefined;
}>;
export type TAssistantEndpoint = z.infer<typeof assistantEndpointSchema>;
export declare const endpointSchema: z.ZodObject<{
    name: z.ZodEffects<z.ZodString, string, string>;
    apiKey: z.ZodString;
    baseURL: z.ZodString;
    models: z.ZodObject<{
        default: z.ZodArray<z.ZodString, "many">;
        fetch: z.ZodOptional<z.ZodBoolean>;
        userIdQuery: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    }, {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    }>;
    titleConvo: z.ZodOptional<z.ZodBoolean>;
    titleMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"completion">, z.ZodLiteral<"functions">]>>;
    titleModel: z.ZodOptional<z.ZodString>;
    summarize: z.ZodOptional<z.ZodBoolean>;
    summaryModel: z.ZodOptional<z.ZodString>;
    forcePrompt: z.ZodOptional<z.ZodBoolean>;
    modelDisplayLabel: z.ZodOptional<z.ZodString>;
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    addParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    dropParams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    apiKey: string;
    baseURL: string;
    models: {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    };
    name: string;
    titleConvo?: boolean | undefined;
    titleMethod?: "completion" | "functions" | undefined;
    titleModel?: string | undefined;
    summarize?: boolean | undefined;
    summaryModel?: string | undefined;
    forcePrompt?: boolean | undefined;
    modelDisplayLabel?: string | undefined;
    headers?: Record<string, any> | undefined;
    addParams?: Record<string, any> | undefined;
    dropParams?: string[] | undefined;
}, {
    apiKey: string;
    baseURL: string;
    models: {
        default: string[];
        fetch?: boolean | undefined;
        userIdQuery?: boolean | undefined;
    };
    name: string;
    titleConvo?: boolean | undefined;
    titleMethod?: "completion" | "functions" | undefined;
    titleModel?: string | undefined;
    summarize?: boolean | undefined;
    summaryModel?: string | undefined;
    forcePrompt?: boolean | undefined;
    modelDisplayLabel?: string | undefined;
    headers?: Record<string, any> | undefined;
    addParams?: Record<string, any> | undefined;
    dropParams?: string[] | undefined;
}>;
export declare const rateLimitSchema: z.ZodObject<{
    fileUploads: z.ZodOptional<z.ZodObject<{
        ipMax: z.ZodOptional<z.ZodNumber>;
        ipWindowInMinutes: z.ZodOptional<z.ZodNumber>;
        userMax: z.ZodOptional<z.ZodNumber>;
        userWindowInMinutes: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        ipMax?: number | undefined;
        ipWindowInMinutes?: number | undefined;
        userMax?: number | undefined;
        userWindowInMinutes?: number | undefined;
    }, {
        ipMax?: number | undefined;
        ipWindowInMinutes?: number | undefined;
        userMax?: number | undefined;
        userWindowInMinutes?: number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    fileUploads?: {
        ipMax?: number | undefined;
        ipWindowInMinutes?: number | undefined;
        userMax?: number | undefined;
        userWindowInMinutes?: number | undefined;
    } | undefined;
}, {
    fileUploads?: {
        ipMax?: number | undefined;
        ipWindowInMinutes?: number | undefined;
        userMax?: number | undefined;
        userWindowInMinutes?: number | undefined;
    } | undefined;
}>;
export declare const configSchema: z.ZodObject<{
    version: z.ZodString;
    cache: z.ZodBoolean;
    fileStrategy: z.ZodOptional<z.ZodNativeEnum<typeof FileSources>>;
    registration: z.ZodOptional<z.ZodObject<{
        socialLogins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        allowedDomains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        socialLogins?: string[] | undefined;
        allowedDomains?: string[] | undefined;
    }, {
        socialLogins?: string[] | undefined;
        allowedDomains?: string[] | undefined;
    }>>;
    rateLimits: z.ZodOptional<z.ZodObject<{
        fileUploads: z.ZodOptional<z.ZodObject<{
            ipMax: z.ZodOptional<z.ZodNumber>;
            ipWindowInMinutes: z.ZodOptional<z.ZodNumber>;
            userMax: z.ZodOptional<z.ZodNumber>;
            userWindowInMinutes: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            ipMax?: number | undefined;
            ipWindowInMinutes?: number | undefined;
            userMax?: number | undefined;
            userWindowInMinutes?: number | undefined;
        }, {
            ipMax?: number | undefined;
            ipWindowInMinutes?: number | undefined;
            userMax?: number | undefined;
            userWindowInMinutes?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        fileUploads?: {
            ipMax?: number | undefined;
            ipWindowInMinutes?: number | undefined;
            userMax?: number | undefined;
            userWindowInMinutes?: number | undefined;
        } | undefined;
    }, {
        fileUploads?: {
            ipMax?: number | undefined;
            ipWindowInMinutes?: number | undefined;
            userMax?: number | undefined;
            userWindowInMinutes?: number | undefined;
        } | undefined;
    }>>;
    fileConfig: z.ZodOptional<z.ZodObject<{
        endpoints: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            disabled: z.ZodOptional<z.ZodBoolean>;
            fileLimit: z.ZodOptional<z.ZodNumber>;
            fileSizeLimit: z.ZodOptional<z.ZodNumber>;
            totalSizeLimit: z.ZodOptional<z.ZodNumber>;
            supportedMimeTypes: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>, any[] | undefined, any[] | undefined>>;
        }, "strip", z.ZodTypeAny, {
            disabled?: boolean | undefined;
            fileLimit?: number | undefined;
            fileSizeLimit?: number | undefined;
            totalSizeLimit?: number | undefined;
            supportedMimeTypes?: any[] | undefined;
        }, {
            disabled?: boolean | undefined;
            fileLimit?: number | undefined;
            fileSizeLimit?: number | undefined;
            totalSizeLimit?: number | undefined;
            supportedMimeTypes?: any[] | undefined;
        }>>>;
        serverFileSizeLimit: z.ZodOptional<z.ZodNumber>;
        avatarSizeLimit: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        endpoints?: Record<string, {
            disabled?: boolean | undefined;
            fileLimit?: number | undefined;
            fileSizeLimit?: number | undefined;
            totalSizeLimit?: number | undefined;
            supportedMimeTypes?: any[] | undefined;
        }> | undefined;
        serverFileSizeLimit?: number | undefined;
        avatarSizeLimit?: number | undefined;
    }, {
        endpoints?: Record<string, {
            disabled?: boolean | undefined;
            fileLimit?: number | undefined;
            fileSizeLimit?: number | undefined;
            totalSizeLimit?: number | undefined;
            supportedMimeTypes?: any[] | undefined;
        }> | undefined;
        serverFileSizeLimit?: number | undefined;
        avatarSizeLimit?: number | undefined;
    }>>;
    endpoints: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        assistants: z.ZodOptional<z.ZodObject<{
            disableBuilder: z.ZodOptional<z.ZodBoolean>;
            pollIntervalMs: z.ZodOptional<z.ZodNumber>;
            timeoutMs: z.ZodOptional<z.ZodNumber>;
            supportedIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            excludedIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            apiKey: z.ZodOptional<z.ZodString>;
            baseURL: z.ZodOptional<z.ZodString>;
            models: z.ZodOptional<z.ZodObject<{
                default: z.ZodArray<z.ZodString, "many">;
                fetch: z.ZodOptional<z.ZodBoolean>;
                userIdQuery: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            }, {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            }>>;
            titleConvo: z.ZodOptional<z.ZodBoolean>;
            titleMethod: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"completion">, z.ZodLiteral<"functions">]>>;
            titleModel: z.ZodOptional<z.ZodString>;
            headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        }, {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        }>>;
        custom: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            apiKey: z.ZodOptional<z.ZodString>;
            baseURL: z.ZodOptional<z.ZodString>;
            models: z.ZodOptional<z.ZodObject<{
                default: z.ZodArray<z.ZodString, "many">;
                fetch: z.ZodOptional<z.ZodBoolean>;
                userIdQuery: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            }, {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            }>>;
            titleConvo: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            titleMethod: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"completion">, z.ZodLiteral<"functions">]>>>;
            titleModel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            summarize: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            summaryModel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            forcePrompt: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            modelDisplayLabel: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            headers: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            addParams: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>>;
            dropParams: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }, {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        assistants?: {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        } | undefined;
        custom?: {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }[] | undefined;
    }, {
        assistants?: {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        } | undefined;
        custom?: {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }[] | undefined;
    }>, {
        assistants?: {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        } | undefined;
        custom?: {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }[] | undefined;
    }, {
        assistants?: {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        } | undefined;
        custom?: {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    version: string;
    cache: boolean;
    fileStrategy?: FileSources | undefined;
    registration?: {
        socialLogins?: string[] | undefined;
        allowedDomains?: string[] | undefined;
    } | undefined;
    rateLimits?: {
        fileUploads?: {
            ipMax?: number | undefined;
            ipWindowInMinutes?: number | undefined;
            userMax?: number | undefined;
            userWindowInMinutes?: number | undefined;
        } | undefined;
    } | undefined;
    fileConfig?: {
        endpoints?: Record<string, {
            disabled?: boolean | undefined;
            fileLimit?: number | undefined;
            fileSizeLimit?: number | undefined;
            totalSizeLimit?: number | undefined;
            supportedMimeTypes?: any[] | undefined;
        }> | undefined;
        serverFileSizeLimit?: number | undefined;
        avatarSizeLimit?: number | undefined;
    } | undefined;
    endpoints?: {
        assistants?: {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        } | undefined;
        custom?: {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }[] | undefined;
    } | undefined;
}, {
    version: string;
    cache: boolean;
    fileStrategy?: FileSources | undefined;
    registration?: {
        socialLogins?: string[] | undefined;
        allowedDomains?: string[] | undefined;
    } | undefined;
    rateLimits?: {
        fileUploads?: {
            ipMax?: number | undefined;
            ipWindowInMinutes?: number | undefined;
            userMax?: number | undefined;
            userWindowInMinutes?: number | undefined;
        } | undefined;
    } | undefined;
    fileConfig?: {
        endpoints?: Record<string, {
            disabled?: boolean | undefined;
            fileLimit?: number | undefined;
            fileSizeLimit?: number | undefined;
            totalSizeLimit?: number | undefined;
            supportedMimeTypes?: any[] | undefined;
        }> | undefined;
        serverFileSizeLimit?: number | undefined;
        avatarSizeLimit?: number | undefined;
    } | undefined;
    endpoints?: {
        assistants?: {
            disableBuilder?: boolean | undefined;
            pollIntervalMs?: number | undefined;
            timeoutMs?: number | undefined;
            supportedIds?: string[] | undefined;
            excludedIds?: string[] | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            headers?: Record<string, any> | undefined;
        } | undefined;
        custom?: {
            name?: string | undefined;
            apiKey?: string | undefined;
            baseURL?: string | undefined;
            models?: {
                default: string[];
                fetch?: boolean | undefined;
                userIdQuery?: boolean | undefined;
            } | undefined;
            titleConvo?: boolean | undefined;
            titleMethod?: "completion" | "functions" | undefined;
            titleModel?: string | undefined;
            summarize?: boolean | undefined;
            summaryModel?: string | undefined;
            forcePrompt?: boolean | undefined;
            modelDisplayLabel?: string | undefined;
            headers?: Record<string, any> | undefined;
            addParams?: Record<string, any> | undefined;
            dropParams?: string[] | undefined;
        }[] | undefined;
    } | undefined;
}>;
export type TCustomConfig = z.infer<typeof configSchema>;
export declare enum KnownEndpoints {
    mistral = "mistral",
    openrouter = "openrouter"
}
export declare const defaultEndpoints: EModelEndpoint[];
export declare const alternateName: {
    openAI: string;
    assistants: string;
    azureOpenAI: string;
    bingAI: string;
    chatGPTBrowser: string;
    gptPlugins: string;
    google: string;
    anthropic: string;
    custom: string;
};
export declare const defaultModels: {
    assistants: string[];
    google: string[];
    anthropic: string[];
    openAI: string[];
};
export declare const supportsRetrieval: Set<string>;
export declare const EndpointURLs: {
    [key in EModelEndpoint]: string;
};
export declare const modularEndpoints: Set<string>;
export declare const supportsBalanceCheck: {
    openAI: boolean;
    azureOpenAI: boolean;
    gptPlugins: boolean;
    custom: boolean;
};
export declare const visionModels: string[];
export declare function validateVisionModel(model: string | undefined, additionalModels?: string[] | undefined): boolean;
export declare const imageGenTools: Set<string>;
/**
 * Enum for cache keys.
 */
export declare enum CacheKeys {
    /**
     * Key for the config store namespace.
     */
    CONFIG_STORE = "configStore",
    /**
     * Key for the plugins cache.
     */
    PLUGINS = "plugins",
    /**
     * Key for the title generation cache.
     */
    GEN_TITLE = "genTitle",
    /**
    /**
     * Key for the tools cache.
     */
    TOOLS = "tools",
    /**
     * Key for the model config cache.
     */
    MODELS_CONFIG = "modelsConfig",
    /**
     * Key for the model queries cache.
     */
    MODEL_QUERIES = "modelQueries",
    /**
     * Key for the default endpoint config cache.
     */
    ENDPOINT_CONFIG = "endpointsConfig",
    /**
     * Key for accessing the model token config cache.
     */
    TOKEN_CONFIG = "tokenConfig",
    /**
     * Key for the custom config cache.
     */
    CUSTOM_CONFIG = "customConfig",
    /**
     * Key for accessing Abort Keys
     */
    ABORT_KEYS = "abortKeys",
    /**
     * Key for the override config cache.
     */
    OVERRIDE_CONFIG = "overrideConfig",
    /**
     * Key for accessing File Upload Violations (exceeding limit).
     */
    FILE_UPLOAD_LIMIT = "file_upload_limit"
}
/**
 * Enum for authentication keys.
 */
export declare enum AuthKeys {
    /**
     * Key for the Service Account to use Vertex AI.
     */
    GOOGLE_SERVICE_KEY = "GOOGLE_SERVICE_KEY",
    /**
     * API key to use Google Generative AI.
     */
    GOOGLE_API_KEY = "GOOGLE_API_KEY"
}
/**
 * Enum for Image Detail Cost.
 *
 * **Low Res Fixed Cost:** `85`
 *
 * **High Res Calculation:**
 *
 * Number of `512px` Tiles * `170` + `85` (Additional Cost)
 */
export declare enum ImageDetailCost {
    /**
     * Low resolution is a fixed value.
     */
    LOW = 85,
    /**
     * High resolution Cost Per Tile
     */
    HIGH = 170,
    /**
     * Additional Cost added to High Resolution Total Cost
     */
    ADDITIONAL = 85
}
/**
 * Tab values for Settings Dialog
 */
export declare enum SettingsTabValues {
    /**
     * Tab for General Settings
     */
    GENERAL = "general",
    /**
     * Tab for Beta Features
     */
    BETA = "beta",
    /**
     * Tab for Data Controls
     */
    DATA = "data",
    /**
     * Tab for Account Settings
     */
    ACCOUNT = "account"
}
/**
 * Enum for app-wide constants
 */
export declare enum Constants {
    /**
     * Key for the app's version.
     */
    VERSION = "v0.6.10",
    /**
     * Key for the Custom Config's version (librechat.yaml).
     */
    CONFIG_VERSION = "1.0.3",
    /**
     * Standard value for the first message's `parentMessageId` value, to indicate no parent exists.
     */
    NO_PARENT = "00000000-0000-0000-0000-000000000000"
}
export declare const defaultOrderQuery: {
    order: 'asc';
};
