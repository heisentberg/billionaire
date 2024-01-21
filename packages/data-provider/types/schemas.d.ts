import { z } from 'zod';
export declare enum EModelEndpoint {
    azureOpenAI = "azureOpenAI",
    openAI = "openAI",
    bingAI = "bingAI",
    chatGPTBrowser = "chatGPTBrowser",
    google = "google",
    gptPlugins = "gptPlugins",
    anthropic = "anthropic",
    assistant = "assistant"
}
export declare const defaultEndpoints: EModelEndpoint[];
export declare const alternateName: {
    openAI: string;
    assistant: string;
    azureOpenAI: string;
    bingAI: string;
    chatGPTBrowser: string;
    gptPlugins: string;
    google: string;
    anthropic: string;
};
export declare const EndpointURLs: {
    [key in EModelEndpoint]: string;
};
export declare const modularEndpoints: Set<string>;
export declare const supportsFiles: {
    openAI: boolean;
    assistant: boolean;
};
export declare const openAIModels: string[];
export declare const eModelEndpointSchema: z.ZodNativeEnum<typeof EModelEndpoint>;
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
    submitting: z.ZodOptional<z.ZodBoolean>;
    searchResult: z.ZodOptional<z.ZodBoolean>;
    finish_reason: z.ZodOptional<z.ZodString>;
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
    clientId?: string | null | undefined;
    responseMessageId?: string | null | undefined;
    overrideParentMessageId?: string | null | undefined;
    bg?: string | null | undefined;
    model?: string | null | undefined;
    generation?: string | null | undefined;
    isEdited?: boolean | undefined;
    current?: boolean | undefined;
    unfinished?: boolean | undefined;
    submitting?: boolean | undefined;
    searchResult?: boolean | undefined;
    finish_reason?: string | undefined;
}, {
    error: boolean;
    messageId: string;
    conversationId: string | null;
    parentMessageId: string | null;
    sender: string;
    text: string;
    isCreatedByUser: boolean;
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
    submitting?: boolean | undefined;
    searchResult?: boolean | undefined;
    finish_reason?: string | undefined;
}>;
export type TMessage = z.input<typeof tMessageSchema> & {
    children?: TMessage[];
    plugin?: TResPlugin | null;
    plugins?: TResPlugin[];
    files?: {
        type: string;
        file_id: string;
        filename?: string;
        preview?: string;
        filepath?: string;
        height?: number;
        width?: number;
    }[];
};
export declare const tConversationSchema: z.ZodObject<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}, {
    conversationId: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    title?: string | null | undefined;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>;
export type TConversation = z.infer<typeof tConversationSchema>;
export declare const tPresetSchema: z.ZodObject<{
    model: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    temperature: z.ZodOptional<z.ZodNumber>;
    clientId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentMessageId: z.ZodOptional<z.ZodString>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
    conversationId: z.ZodOptional<z.ZodString>;
    presetId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    endpoint: EModelEndpoint | null;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
    conversationId?: string | undefined;
    presetId?: string | null | undefined;
    title?: string | null | undefined;
}, {
    endpoint: EModelEndpoint | null;
    model?: string | null | undefined;
    temperature?: number | undefined;
    clientId?: string | null | undefined;
    parentMessageId?: string | undefined;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
    conversationId?: string | undefined;
    presetId?: string | null | undefined;
    title?: string | null | undefined;
}>;
export type TPreset = z.infer<typeof tPresetSchema>;
export declare const openAISchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
}, "model" | "temperature" | "chatGptLabel" | "promptPrefix" | "top_p" | "frequency_penalty" | "presence_penalty">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
}>, {
    model: string;
    chatGptLabel: string | null;
    promptPrefix: string | null;
    temperature: number;
    top_p: number;
    presence_penalty: number;
    frequency_penalty: number;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
}>>;
export declare const googleSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
    temperature: number;
    maxOutputTokens: number;
    topP: number;
    topK: number;
    examples?: {
        input: {
            content: string;
        };
        output: {
            content: string;
        };
    }[] | undefined;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
}, "model" | "assistant_id" | "thread_id">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}, {
    model?: string | null | undefined;
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>, {
    model?: string | null | undefined;
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}, {
    model?: string | null | undefined;
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>>;
export declare function getFirstDefinedValue(possibleValues: string[]): string | undefined;
export type TPossibleValues = {
    models: string[];
    secondaryModels?: string[];
};
export declare const parseConvo: (endpoint: EModelEndpoint, conversation: Partial<TConversation | TPreset>, possibleValues?: TPossibleValues) => {
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
};
export type TEndpointOption = {
    endpoint: EModelEndpoint;
    model?: string | null;
    promptPrefix?: string;
    temperature?: number;
    chatGptLabel?: string | null;
    modelLabel?: string | null;
    jailbreak?: boolean;
    key?: string | null;
};
export declare const getResponseSender: (endpointOption: TEndpointOption) => string;
export declare const compactOpenAISchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
}, "model" | "temperature" | "chatGptLabel" | "promptPrefix" | "top_p" | "frequency_penalty" | "presence_penalty">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
}, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
}>, Partial<{
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>, {
    model?: string | null | undefined;
    temperature?: number | undefined;
    chatGptLabel?: string | null | undefined;
    promptPrefix?: string | null | undefined;
    top_p?: number | undefined;
    frequency_penalty?: number | undefined;
    presence_penalty?: number | undefined;
}>>;
export declare const compactGoogleSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
}>, Partial<{
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>, {
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
}>, Partial<{
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>, {
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
}, "model">, "strip", z.ZodTypeAny, {
    model?: string | null | undefined;
}, {
    model?: string | null | undefined;
}>, Partial<{
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>, {
    model?: string | null | undefined;
}>>;
export declare const compactPluginsSchema: z.ZodCatch<z.ZodEffects<z.ZodObject<Pick<{
    conversationId: z.ZodNullable<z.ZodString>;
    title: z.ZodDefault<z.ZodUnion<[z.ZodNullable<z.ZodString>, z.ZodLiteral<"New Chat">]>>;
    user: z.ZodOptional<z.ZodString>;
    endpoint: z.ZodNullable<z.ZodNativeEnum<typeof EModelEndpoint>>;
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
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
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
}>, Partial<{
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
}>, {
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
export declare const parseCompactConvo: (endpoint: EModelEndpoint | undefined, conversation: Partial<TConversation | TPreset>, possibleValues?: TPossibleValues) => {
    conversationId: string | null;
    title: string | null;
    createdAt: string;
    updatedAt: string;
    endpoint: EModelEndpoint | null;
    user?: string | undefined;
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
    assistant_id?: string | undefined;
    thread_id?: string | undefined;
};
