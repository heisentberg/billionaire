import { z } from 'zod';
import type { TMessageContentParts } from './types/assistants';
import type { TFile } from './types/files';
export declare const isUUID: z.ZodString;
export declare enum EModelEndpoint {
    azureOpenAI = "azureOpenAI",
    openAI = "openAI",
    bingAI = "bingAI",
    chatGPTBrowser = "chatGPTBrowser",
    google = "google",
    gptPlugins = "gptPlugins",
    anthropic = "anthropic",
    assistants = "assistants",
    custom = "custom"
}
export declare const defaultAssistantFormValues: {
    assistant: string;
    id: string;
    name: string;
    description: string;
    instructions: string;
    model: string;
    functions: never[];
    code_interpreter: boolean;
    retrieval: boolean;
};
export declare const endpointSettings: {
    google: {
        model: {
            default: string;
        };
        maxOutputTokens: {
            min: number;
            max: number;
            step: number;
            default: number;
            maxGeminiPro: number;
            defaultGeminiPro: number;
        };
        temperature: {
            min: number;
            max: number;
            step: number;
            default: number;
        };
        topP: {
            min: number;
            max: number;
            step: number;
            default: number;
        };
        topK: {
            min: number;
            max: number;
            step: number;
            default: number;
        };
    };
};
export declare const eModelEndpointSchema: z.ZodNativeEnum<typeof EModelEndpoint>;
export declare const extendedModelEndpointSchema: z.ZodUnion<[z.ZodNativeEnum<typeof EModelEndpoint>, z.ZodString]>;
export declare enum ImageDetail {
    low = "low",
    auto = "auto",
    high = "high"
}
export declare const imageDetailNumeric: {
    low: number;
    auto: number;
    high: number;
};
export declare const imageDetailValue: {
    0: ImageDetail;
    1: ImageDetail;
    2: ImageDetail;
};
export declare const eImageDetailSchema: z.ZodNativeEnum<typeof ImageDetail>;
export declare const tPluginAuthConfigSchema: z.ZodObject<{
    authField: z.ZodString;
    label: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    authField: string;
    label: string;
    description: string;
}, {
    authField: string;
    label: string;
    description: string;
}>;
export type TPluginAuthConfig = z.infer<typeof tPluginAuthConfigSchema>;
export declare const tPluginSchema: z.ZodObject<{
    name: z.ZodString;
    pluginKey: z.ZodString;
    description: z.ZodString;
    icon: z.ZodString;
    authConfig: z.ZodArray<z.ZodObject<{
        authField: z.ZodString;
        label: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        authField: string;
        label: string;
        description: string;
    }, {
        authField: string;
        label: string;
        description: string;
    }>, "many">;
    authenticated: z.ZodOptional<z.ZodBoolean>;
    isButton: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    description: string;
    name: string;
    pluginKey: string;
    icon: string;
    authConfig: {
        authField: string;
        label: string;
        description: string;
    }[];
    authenticated?: boolean | undefined;
    isButton?: boolean | undefined;
}, {
    description: string;
    name: string;
    pluginKey: string;
    icon: string;
    authConfig: {
        authField: string;
        label: string;
        description: string;
    }[];
    authenticated?: boolean | undefined;
    isButton?: boolean | undefined;
}>;
export type TPlugin = z.infer<typeof tPluginSchema>;
export type TInput = {
    inputStr: string;
};
export type TResPlugin = {
    plugin: string;
    input: string;
    thought: string;
    loading?: boolean;
    outputs?: string;
    latest?: string;
    inputs?: TInput[];
};
export declare const tExampleSchema: z.ZodObject<{
    input: z.ZodObject<{
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
    }, {
        content: string;
    }>;
    output: z.ZodObject<{
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
    }, {
        content: string;
    }>;
}, "strip", z.ZodTypeAny, {
    input: {
        content: string;
    };
    output: {
        content: string;
    };
}, {
    input: {
        content: string;
    };
    output: {
        content: string;
    };
}>;
export type TExample = z.infer<typeof tExampleSchema>;
export declare const tAgentOptionsSchema: z.ZodObject<{
    agent: z.ZodString;
    skipCompletion: z.ZodBoolean;
    model: z.ZodString;
    temperature: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    agent: string;
    skipCompletion: boolean;
    model: string;
    temperature: number;
}, {
    agent: string;
    skipCompletion: boolean;
    model: string;
    temperature: number;
}>;
export declare const tMessageSchema: z.ZodObject<{
    messageId: z.ZodString;
    endpoint: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationId: z.ZodNullable<z.ZodString>;
    parentMessageId: z.ZodNullable<z.ZodString>;
    responseMessageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    overrideParentMessageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bg: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    sender: z.ZodString;
    text: z.ZodString;
    generation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isEdited: z.ZodOptional<z.ZodBoolean>;
    isCreatedByUser: z.ZodBoolean;
    error: z.ZodBoolean;
    createdAt: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    updatedAt: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    current: z.ZodOptional<z.ZodBoolean>;
    unfinished: z.ZodOptional<z.ZodBoolean>;
    searchResult: z.ZodOptional<z.ZodBoolean>;
    finish_reason: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    error: boolean;
    messageId: string;
    conversationId: string | null;
    parentMessageId: string | null;
    title: string | null;
    sender: string;
    text: string;
    isCreatedByUser: boolean;
    createdAt: string;
    updatedAt: string;
    endpoint?: string | undefined;
    clientId?: string | null | undefined;
    responseMessageId?: string | null | undefined;
    overrideParentMessageId?: string | null | undefined;
    bg?: string | null | undefined;
    model?: string | null | undefined;
    generation?: string | null | undefined;
    isEdited?: boolean | undefined;
    current?: boolean | undefined;
    unfinished?: boolean | undefined;
    searchResult?: boolean | undefined;
    finish_reason?: string | undefined;
    thread_id?: string | undefined;
}, {
    error: boolean;
    messageId: string;
    conversationId: string | null;
    parentMessageId: string | null;
    sender: string;
    text: string;
    isCreatedByUser: boolean;
    endpoint?: string | undefined;
    clientId?: string | null | undefined;
    responseMessageId?: string | null | undefined;
    overrideParentMessageId?: string | null | undefined;
    bg?: string | null | undefined;
    model?: string | null | undefined;
    title?: string | null | undefined;
    generation?: string | null | undefined;
    isEdited?: boolean | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    current?: boolean | undefined;
    unfinished?: boolean | undefined;
    searchResult?: boolean | undefined;
    finish_reason?: string | undefined;
    thread_id?: string | undefined;
}>;
export type TMessage = z.input<typeof tMessageSchema> & {
    children?: TMessage[];
    plugin?: TResPlugin | null;
    plugins?: TResPlugin[];
    content?: TMessageContentParts[];
    files?: Partial<TFile>[];
};
export declare const tConversationSchema: z.ZodObject<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    endpoint: EModelEndpoint | null;
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    model?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    temperature?: number | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    parentMessageId?: string | undefined;
    clientId?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
}, {
    endpoint: EModelEndpoint | null;
    conversationId: string | null;
    createdAt: string;
    updatedAt: string;
    title?: string | null | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    model?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    temperature?: number | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    parentMessageId?: string | undefined;
    clientId?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
}>;
export declare const tPresetSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodString>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    conversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    presetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultPreset: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodNumber>;
    endpoint: z.ZodNullable<z.ZodUnion<[z.ZodNativeEnum<typeof EModelEndpoint>, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    endpoint: string | null;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
    conversationId?: string | null | undefined;
    presetId?: string | null | undefined;
    title?: string | null | undefined;
    defaultPreset?: boolean | undefined;
    order?: number | undefined;
}, {
    endpoint: string | null;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
    conversationId?: string | null | undefined;
    presetId?: string | null | undefined;
    title?: string | null | undefined;
    defaultPreset?: boolean | undefined;
    order?: number | undefined;
}>;
export declare const tConvoUpdateSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationId: z.ZodNullable<z.ZodString>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    user: z.ZodOptional<z.ZodString>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    endpoint: z.ZodNullable<z.ZodUnion<[z.ZodNativeEnum<typeof EModelEndpoint>, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    endpoint: string | null;
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
}, {
    endpoint: string | null;
    conversationId: string | null;
    createdAt: string;
    updatedAt: string;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    title?: string | null | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
}>;
export declare const tPresetUpdateSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationId: z.ZodNullable<z.ZodString>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    user: z.ZodOptional<z.ZodString>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    endpoint: z.ZodNullable<z.ZodUnion<[z.ZodNativeEnum<typeof EModelEndpoint>, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    endpoint: string | null;
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
}, {
    endpoint: string | null;
    conversationId: string | null;
    createdAt: string;
    updatedAt: string;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    title?: string | null | undefined;
    user?: string | undefined;
    endpointType?: EModelEndpoint | undefined;
    suggestions?: string[] | undefined;
    messages?: string[] | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    systemMessage?: string | null | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    userLabel?: string | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    context?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
    maxOutputTokens?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
    file_ids?: string[] | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
    presetOverride?: Record<string, unknown> | undefined;
}>;
export type TPreset = z.infer<typeof tPresetSchema>;
export type TConversation = z.infer<typeof tConversationSchema> & {
    presetOverride?: Partial<TPreset>;
};
export declare const openAISchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "chatGptLabel" | "promptPrefix" | "top_p" | "frequency_penalty" | "presence_penalty" | "resendImages" | "imageDetail">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
}>, {
    model: string;
    chatGptLabel: string | null;
    promptPrefix: string | null;
    temperature: number;
    top_p: number;
    presence_penalty: number;
    frequency_penalty: number;
    resendImages: boolean;
    imageDetail: ImageDetail;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
}>>;
export declare const googleSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "modelLabel" | "examples" | "promptPrefix" | "topP" | "topK" | "maxOutputTokens">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>, {
    model: string;
    modelLabel: string | null;
    promptPrefix: string | null;
    examples: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[];
    temperature: number;
    maxOutputTokens: number;
    topP: number;
    topK: number;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>>;
export declare const bingAISchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "clientId" | "systemMessage" | "context" | "jailbreak" | "jailbreakConversationId" | "conversationSignature" | "invocationId" | "toneStyle">, "strip", z.ZodTypeAny, {
    clientId?: string | null | undefined;
    systemMessage?: string | null | undefined;
    context?: string | null | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
}, {
    clientId?: string | null | undefined;
    systemMessage?: string | null | undefined;
    context?: string | null | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
}>, {
    model: string;
    jailbreak: boolean;
    systemMessage: string | null;
    context: string | null;
    toneStyle: string;
    jailbreakConversationId: string | null;
    conversationSignature: string | null;
    clientId: string | null;
    invocationId: number;
}, {
    clientId?: string | null | undefined;
    systemMessage?: string | null | undefined;
    context?: string | null | undefined;
    jailbreak?: boolean | undefined;
    jailbreakConversationId?: string | null | undefined;
    conversationSignature?: string | null | undefined;
    invocationId?: number | null | undefined;
    toneStyle?: string | null | undefined;
}>>;
export declare const anthropicSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "modelLabel" | "promptPrefix" | "topP" | "topK" | "maxOutputTokens">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>, {
    model: string;
    modelLabel: string | null;
    promptPrefix: string | null;
    temperature: number;
    maxOutputTokens: number;
    topP: number;
    topK: number;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>>;
export declare const chatGPTBrowserSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
}, {
    model?: string | null | undefined;
}>, {
    model: string;
}, {
    model?: string | null | undefined;
}>>;
export declare const gptPluginsSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "tools" | "chatGptLabel" | "promptPrefix" | "top_p" | "frequency_penalty" | "presence_penalty" | "agentOptions">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
}>, {
    model: string;
    chatGptLabel: string | null;
    promptPrefix: string | null;
    temperature: number;
    top_p: number;
    presence_penalty: number;
    frequency_penalty: number;
    tools: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[];
    agentOptions: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    };
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
}>>;
export declare function removeNullishValues<T extends object>(obj: T): T;
export declare const assistantSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "promptPrefix" | "assistant_id" | "instructions">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
}, {
    model?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
}>, {
    model?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
}, {
    model?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    assistant_id?: string | undefined;
    instructions?: string | undefined;
}>>;
export declare const compactOpenAISchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "chatGptLabel" | "promptPrefix" | "top_p" | "frequency_penalty" | "presence_penalty" | "resendImages" | "imageDetail">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
}>, Partial<TConversation>, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    resendImages?: boolean | undefined;
    imageDetail?: ImageDetail | undefined;
}>>;
export declare const compactGoogleSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "modelLabel" | "examples" | "promptPrefix" | "topP" | "topK" | "maxOutputTokens">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>, Partial<TConversation>, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>>;
export declare const compactAnthropicSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "modelLabel" | "promptPrefix" | "topP" | "topK" | "maxOutputTokens">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>, Partial<TConversation>, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    modelLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    topP?: number | undefined;
    topK?: number | undefined;
    maxOutputTokens?: number | undefined;
}>>;
export declare const compactChatGPTSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
}, {
    model?: string | null | undefined;
}>, Partial<TConversation>, {
    model?: string | null | undefined;
}>>;
export declare const compactPluginsSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
    endpointType: z.ZodOptional<z.ZodNativeEnum<typeof EModelEndpoint>>;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    messages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tools: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pluginKey: z.ZodString;
        description: z.ZodString;
        icon: z.ZodString;
        authConfig: z.ZodArray<z.ZodObject<{
            authField: z.ZodString;
            label: z.ZodString;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            authField: string;
            label: string;
            description: string;
        }, {
            authField: string;
            label: string;
            description: string;
        }>, "many">;
        authenticated: z.ZodOptional<z.ZodBoolean>;
        isButton: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }, {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    systemMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    modelLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    examples: z.ZodOptional<z.ZodArray<z.ZodObject<{
        input: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
        output: z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }, {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }>, "many">>;
    chatGptLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userLabel: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    promptPrefix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    topP: z.ZodOptional<z.ZodNumber>;
    topK: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    top_p: z.ZodOptional<z.ZodNumber>;
    frequency_penalty: z.ZodOptional<z.ZodNumber>;
    presence_penalty: z.ZodOptional<z.ZodNumber>;
    jailbreak: z.ZodOptional<z.ZodBoolean>;
    jailbreakConversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    conversationSignature: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    invocationId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    toneStyle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxOutputTokens: z.ZodOptional<z.ZodNumber>;
    agentOptions: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        agent: z.ZodString;
        skipCompletion: z.ZodBoolean;
        model: z.ZodString;
        temperature: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }, {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    }>>>;
    file_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    resendImages: z.ZodOptional<z.ZodBoolean>;
    imageDetail: z.ZodOptional<z.ZodNativeEnum<typeof ImageDetail>>;
    assistant_id: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
    /** Used to overwrite active conversation settings when saving a Preset */
    presetOverride: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "model" | "temperature" | "tools" | "chatGptLabel" | "promptPrefix" | "top_p" | "frequency_penalty" | "presence_penalty" | "agentOptions">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
}>, Partial<TConversation>, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    tools?: {
        description: string;
        name: string;
        pluginKey: string;
        icon: string;
        authConfig: {
            authField: string;
            label: string;
            description: string;
        }[];
        authenticated?: boolean | undefined;
        isButton?: boolean | undefined;
    }[] | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
    agentOptions?: {
        agent: string;
        skipCompletion: boolean;
        model: string;
        temperature: number;
    } | null | undefined;
}>>;
