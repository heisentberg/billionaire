'use strict';

var zod = require('zod');
var reactQuery = require('@tanstack/react-query');
var axios = require('axios');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var _a, _b, _c, _d;
exports.EModelEndpoint = void 0;
(function (EModelEndpoint) {
    EModelEndpoint["azureOpenAI"] = "azureOpenAI";
    EModelEndpoint["openAI"] = "openAI";
    EModelEndpoint["bingAI"] = "bingAI";
    EModelEndpoint["chatGPTBrowser"] = "chatGPTBrowser";
    EModelEndpoint["google"] = "google";
    EModelEndpoint["gptPlugins"] = "gptPlugins";
    EModelEndpoint["anthropic"] = "anthropic";
    EModelEndpoint["assistant"] = "assistant";
})(exports.EModelEndpoint || (exports.EModelEndpoint = {}));
var defaultEndpoints = [
    exports.EModelEndpoint.openAI,
    exports.EModelEndpoint.assistant,
    exports.EModelEndpoint.azureOpenAI,
    exports.EModelEndpoint.bingAI,
    exports.EModelEndpoint.chatGPTBrowser,
    exports.EModelEndpoint.gptPlugins,
    exports.EModelEndpoint.google,
    exports.EModelEndpoint.anthropic,
];
var alternateName = (_a = {},
    _a[exports.EModelEndpoint.openAI] = 'OpenAI',
    _a[exports.EModelEndpoint.assistant] = 'Assistants',
    _a[exports.EModelEndpoint.azureOpenAI] = 'Azure OpenAI',
    _a[exports.EModelEndpoint.bingAI] = 'IntelliumGPT',
    _a[exports.EModelEndpoint.chatGPTBrowser] = 'ChatGPT',
    _a[exports.EModelEndpoint.gptPlugins] = 'Plugins',
    _a[exports.EModelEndpoint.google] = 'PaLM',
    _a[exports.EModelEndpoint.anthropic] = 'Anthropic',
    _a);
var EndpointURLs = (_b = {},
    _b[exports.EModelEndpoint.azureOpenAI] = '/api/ask/azureOpenAI',
    _b[exports.EModelEndpoint.openAI] = '/api/ask/openAI',
    _b[exports.EModelEndpoint.bingAI] = '/api/ask/bingAI',
    _b[exports.EModelEndpoint.chatGPTBrowser] = '/api/ask/chatGPTBrowser',
    _b[exports.EModelEndpoint.google] = '/api/ask/google',
    _b[exports.EModelEndpoint.gptPlugins] = '/api/ask/gptPlugins',
    _b[exports.EModelEndpoint.anthropic] = '/api/ask/anthropic',
    _b[exports.EModelEndpoint.assistant] = '/api/assistants/chat',
    _b);
var modularEndpoints = new Set([
    exports.EModelEndpoint.gptPlugins,
    exports.EModelEndpoint.anthropic,
    exports.EModelEndpoint.google,
    exports.EModelEndpoint.openAI,
]);
var supportsFiles = (_c = {},
    _c[exports.EModelEndpoint.openAI] = true,
    _c[exports.EModelEndpoint.assistant] = true,
    _c);
var openAIModels = [
    'gpt-3.5-turbo-16k-0613',
    'gpt-3.5-turbo-16k',
    'gpt-4-1106-preview',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-1106',
    'gpt-4-vision-preview',
    'gpt-4',
    'gpt-3.5-turbo-instruct-0914',
    'gpt-3.5-turbo-0613',
    'gpt-3.5-turbo-0301',
    'gpt-3.5-turbo-instruct',
    'gpt-4-0613',
    'text-davinci-003',
    'gpt-4-0314',
];
var eModelEndpointSchema = zod.z.nativeEnum(exports.EModelEndpoint);
var tPluginAuthConfigSchema = zod.z.object({
    authField: zod.z.string(),
    label: zod.z.string(),
    description: zod.z.string(),
});
var tPluginSchema = zod.z.object({
    name: zod.z.string(),
    pluginKey: zod.z.string(),
    description: zod.z.string(),
    icon: zod.z.string(),
    authConfig: zod.z.array(tPluginAuthConfigSchema),
    authenticated: zod.z.boolean().optional(),
    isButton: zod.z.boolean().optional(),
});
var tExampleSchema = zod.z.object({
    input: zod.z.object({
        content: zod.z.string(),
    }),
    output: zod.z.object({
        content: zod.z.string(),
    }),
});
var tAgentOptionsSchema = zod.z.object({
    agent: zod.z.string(),
    skipCompletion: zod.z.boolean(),
    model: zod.z.string(),
    temperature: zod.z.number(),
});
var tMessageSchema = zod.z.object({
    messageId: zod.z.string(),
    clientId: zod.z.string().nullable().optional(),
    conversationId: zod.z.string().nullable(),
    parentMessageId: zod.z.string().nullable(),
    responseMessageId: zod.z.string().nullable().optional(),
    overrideParentMessageId: zod.z.string().nullable().optional(),
    bg: zod.z.string().nullable().optional(),
    model: zod.z.string().nullable().optional(),
    title: zod.z.string().nullable().or(zod.z.literal('New Chat')).default('New Chat'),
    sender: zod.z.string(),
    text: zod.z.string(),
    generation: zod.z.string().nullable().optional(),
    isEdited: zod.z.boolean().optional(),
    isCreatedByUser: zod.z.boolean(),
    error: zod.z.boolean(),
    createdAt: zod.z
        .string()
        .optional()
        .default(function () { return new Date().toISOString(); }),
    updatedAt: zod.z
        .string()
        .optional()
        .default(function () { return new Date().toISOString(); }),
    current: zod.z.boolean().optional(),
    unfinished: zod.z.boolean().optional(),
    submitting: zod.z.boolean().optional(),
    searchResult: zod.z.boolean().optional(),
    finish_reason: zod.z.string().optional(),
});
var tConversationSchema = zod.z.object({
    conversationId: zod.z.string().nullable(),
    title: zod.z.string().nullable().or(zod.z.literal('New Chat')).default('New Chat'),
    user: zod.z.string().optional(),
    endpoint: eModelEndpointSchema.nullable(),
    suggestions: zod.z.array(zod.z.string()).optional(),
    messages: zod.z.array(zod.z.string()).optional(),
    tools: zod.z.array(tPluginSchema).optional(),
    createdAt: zod.z.string(),
    updatedAt: zod.z.string(),
    systemMessage: zod.z.string().nullable().optional(),
    modelLabel: zod.z.string().nullable().optional(),
    examples: zod.z.array(tExampleSchema).optional(),
    chatGptLabel: zod.z.string().nullable().optional(),
    userLabel: zod.z.string().optional(),
    model: zod.z.string().nullable().optional(),
    promptPrefix: zod.z.string().nullable().optional(),
    temperature: zod.z.number().optional(),
    topP: zod.z.number().optional(),
    topK: zod.z.number().optional(),
    context: zod.z.string().nullable().optional(),
    top_p: zod.z.number().optional(),
    frequency_penalty: zod.z.number().optional(),
    presence_penalty: zod.z.number().optional(),
    jailbreak: zod.z.boolean().optional(),
    jailbreakConversationId: zod.z.string().nullable().optional(),
    conversationSignature: zod.z.string().nullable().optional(),
    parentMessageId: zod.z.string().optional(),
    clientId: zod.z.string().nullable().optional(),
    invocationId: zod.z.number().nullable().optional(),
    toneStyle: zod.z.string().nullable().optional(),
    maxOutputTokens: zod.z.number().optional(),
    agentOptions: tAgentOptionsSchema.nullable().optional(),
    /* assistant */
    assistant_id: zod.z.string().optional(),
    thread_id: zod.z.string().optional(),
});
var tPresetSchema = tConversationSchema
    .omit({
    conversationId: true,
    createdAt: true,
    updatedAt: true,
    title: true,
})
    .merge(zod.z.object({
    conversationId: zod.z.string().optional(),
    presetId: zod.z.string().nullable().optional(),
    title: zod.z.string().nullable().optional(),
}));
var openAISchema = tConversationSchema
    .pick({
    model: true,
    chatGptLabel: true,
    promptPrefix: true,
    temperature: true,
    top_p: true,
    presence_penalty: true,
    frequency_penalty: true,
})
    .transform(function (obj) {
    var _a, _b, _c, _d, _e, _f, _g;
    return (__assign(__assign({}, obj), { model: (_a = obj.model) !== null && _a !== void 0 ? _a : 'gpt-3.5-turbo', chatGptLabel: (_b = obj.chatGptLabel) !== null && _b !== void 0 ? _b : null, promptPrefix: (_c = obj.promptPrefix) !== null && _c !== void 0 ? _c : null, temperature: (_d = obj.temperature) !== null && _d !== void 0 ? _d : 1, top_p: (_e = obj.top_p) !== null && _e !== void 0 ? _e : 1, presence_penalty: (_f = obj.presence_penalty) !== null && _f !== void 0 ? _f : 0, frequency_penalty: (_g = obj.frequency_penalty) !== null && _g !== void 0 ? _g : 0 }));
})
    .catch(function () { return ({
    model: 'gpt-3.5-turbo',
    chatGptLabel: null,
    promptPrefix: null,
    temperature: 1,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
}); });
var googleSchema = tConversationSchema
    .pick({
    model: true,
    modelLabel: true,
    promptPrefix: true,
    examples: true,
    temperature: true,
    maxOutputTokens: true,
    topP: true,
    topK: true,
})
    .transform(function (obj) {
    var _a, _b, _c, _d, _e, _f, _g;
    return (__assign(__assign({}, obj), { model: (_a = obj.model) !== null && _a !== void 0 ? _a : 'chat-bison', modelLabel: (_b = obj.modelLabel) !== null && _b !== void 0 ? _b : null, promptPrefix: (_c = obj.promptPrefix) !== null && _c !== void 0 ? _c : null, temperature: (_d = obj.temperature) !== null && _d !== void 0 ? _d : 0.2, maxOutputTokens: (_e = obj.maxOutputTokens) !== null && _e !== void 0 ? _e : 1024, topP: (_f = obj.topP) !== null && _f !== void 0 ? _f : 0.95, topK: (_g = obj.topK) !== null && _g !== void 0 ? _g : 40 }));
})
    .catch(function () { return ({
    model: 'chat-bison',
    modelLabel: null,
    promptPrefix: null,
    temperature: 0.2,
    maxOutputTokens: 1024,
    topP: 0.95,
    topK: 40,
}); });
var bingAISchema = tConversationSchema
    .pick({
    jailbreak: true,
    systemMessage: true,
    context: true,
    toneStyle: true,
    jailbreakConversationId: true,
    conversationSignature: true,
    clientId: true,
    invocationId: true,
})
    .transform(function (obj) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (__assign(__assign({}, obj), { model: '', jailbreak: (_a = obj.jailbreak) !== null && _a !== void 0 ? _a : false, systemMessage: (_b = obj.systemMessage) !== null && _b !== void 0 ? _b : null, context: (_c = obj.context) !== null && _c !== void 0 ? _c : null, toneStyle: (_d = obj.toneStyle) !== null && _d !== void 0 ? _d : 'creative', jailbreakConversationId: (_e = obj.jailbreakConversationId) !== null && _e !== void 0 ? _e : null, conversationSignature: (_f = obj.conversationSignature) !== null && _f !== void 0 ? _f : null, clientId: (_g = obj.clientId) !== null && _g !== void 0 ? _g : null, invocationId: (_h = obj.invocationId) !== null && _h !== void 0 ? _h : 1 }));
})
    .catch(function () { return ({
    model: '',
    jailbreak: false,
    systemMessage: null,
    context: null,
    toneStyle: 'creative',
    jailbreakConversationId: null,
    conversationSignature: null,
    clientId: null,
    invocationId: 1,
}); });
var anthropicSchema = tConversationSchema
    .pick({
    model: true,
    modelLabel: true,
    promptPrefix: true,
    temperature: true,
    maxOutputTokens: true,
    topP: true,
    topK: true,
})
    .transform(function (obj) {
    var _a, _b, _c, _d, _e, _f, _g;
    return (__assign(__assign({}, obj), { model: (_a = obj.model) !== null && _a !== void 0 ? _a : 'claude-1', modelLabel: (_b = obj.modelLabel) !== null && _b !== void 0 ? _b : null, promptPrefix: (_c = obj.promptPrefix) !== null && _c !== void 0 ? _c : null, temperature: (_d = obj.temperature) !== null && _d !== void 0 ? _d : 1, maxOutputTokens: (_e = obj.maxOutputTokens) !== null && _e !== void 0 ? _e : 4000, topP: (_f = obj.topP) !== null && _f !== void 0 ? _f : 0.7, topK: (_g = obj.topK) !== null && _g !== void 0 ? _g : 5 }));
})
    .catch(function () { return ({
    model: 'claude-1',
    modelLabel: null,
    promptPrefix: null,
    temperature: 1,
    maxOutputTokens: 4000,
    topP: 0.7,
    topK: 5,
}); });
var chatGPTBrowserSchema = tConversationSchema
    .pick({
    model: true,
})
    .transform(function (obj) {
    var _a;
    return (__assign(__assign({}, obj), { model: (_a = obj.model) !== null && _a !== void 0 ? _a : 'text-davinci-002-render-sha' }));
})
    .catch(function () { return ({
    model: 'text-davinci-002-render-sha',
}); });
var gptPluginsSchema = tConversationSchema
    .pick({
    model: true,
    chatGptLabel: true,
    promptPrefix: true,
    temperature: true,
    top_p: true,
    presence_penalty: true,
    frequency_penalty: true,
    tools: true,
    agentOptions: true,
})
    .transform(function (obj) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return (__assign(__assign({}, obj), { model: (_a = obj.model) !== null && _a !== void 0 ? _a : 'gpt-3.5-turbo', chatGptLabel: (_b = obj.chatGptLabel) !== null && _b !== void 0 ? _b : null, promptPrefix: (_c = obj.promptPrefix) !== null && _c !== void 0 ? _c : null, temperature: (_d = obj.temperature) !== null && _d !== void 0 ? _d : 0.8, top_p: (_e = obj.top_p) !== null && _e !== void 0 ? _e : 1, presence_penalty: (_f = obj.presence_penalty) !== null && _f !== void 0 ? _f : 0, frequency_penalty: (_g = obj.frequency_penalty) !== null && _g !== void 0 ? _g : 0, tools: (_h = obj.tools) !== null && _h !== void 0 ? _h : [], agentOptions: (_j = obj.agentOptions) !== null && _j !== void 0 ? _j : {
            agent: 'functions',
            skipCompletion: true,
            model: 'gpt-3.5-turbo',
            temperature: 0,
        } }));
})
    .catch(function () { return ({
    model: 'gpt-3.5-turbo',
    chatGptLabel: null,
    promptPrefix: null,
    temperature: 0.8,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    tools: [],
    agentOptions: {
        agent: 'functions',
        skipCompletion: true,
        model: 'gpt-3.5-turbo',
        temperature: 0,
    },
}); });
function removeNullishValues(obj) {
    var newObj = __assign({}, obj);
    Object.keys(newObj).forEach(function (key) {
        if (newObj[key] === undefined || newObj[key] === null || newObj[key] === '') {
            delete newObj[key];
        }
    });
    return newObj;
}
var assistantSchema = tConversationSchema
    .pick({
    model: true,
    assistant_id: true,
    thread_id: true,
})
    .transform(removeNullishValues)
    .catch(function () { return ({}); });
var endpointSchemas = (_d = {},
    _d[exports.EModelEndpoint.openAI] = openAISchema,
    _d[exports.EModelEndpoint.azureOpenAI] = openAISchema,
    _d[exports.EModelEndpoint.google] = googleSchema,
    _d[exports.EModelEndpoint.bingAI] = bingAISchema,
    _d[exports.EModelEndpoint.anthropic] = anthropicSchema,
    _d[exports.EModelEndpoint.chatGPTBrowser] = chatGPTBrowserSchema,
    _d[exports.EModelEndpoint.gptPlugins] = gptPluginsSchema,
    _d[exports.EModelEndpoint.assistant] = assistantSchema,
    _d);
function getFirstDefinedValue(possibleValues) {
    var returnValue;
    for (var _i = 0, possibleValues_1 = possibleValues; _i < possibleValues_1.length; _i++) {
        var value = possibleValues_1[_i];
        if (value) {
            returnValue = value;
            break;
        }
    }
    return returnValue;
}
var parseConvo = function (endpoint, conversation, possibleValues) {
    var _a, _b;
    var schema = endpointSchemas[endpoint];
    if (!schema) {
        throw new Error("Unknown endpoint: ".concat(endpoint));
    }
    var convo = schema.parse(conversation);
    var _c = possibleValues !== null && possibleValues !== void 0 ? possibleValues : {}, models = _c.models, secondaryModels = _c.secondaryModels;
    if (models && convo) {
        convo.model = (_a = getFirstDefinedValue(models)) !== null && _a !== void 0 ? _a : convo.model;
    }
    if (secondaryModels && convo.agentOptions) {
        convo.agentOptions.model = (_b = getFirstDefinedValue(secondaryModels)) !== null && _b !== void 0 ? _b : convo.agentOptions.model;
    }
    return convo;
};
var getResponseSender = function (endpointOption) {
    var _a;
    var model = endpointOption.model, endpoint = endpointOption.endpoint, chatGptLabel = endpointOption.chatGptLabel, modelLabel = endpointOption.modelLabel, jailbreak = endpointOption.jailbreak;
    if ([
        exports.EModelEndpoint.openAI,
        exports.EModelEndpoint.azureOpenAI,
        exports.EModelEndpoint.gptPlugins,
        exports.EModelEndpoint.chatGPTBrowser,
    ].includes(endpoint)) {
        if (chatGptLabel) {
            return chatGptLabel;
        }
        else if (model && model.includes('gpt-3')) {
            return 'GPT-3.5';
        }
        else if (model && model.includes('gpt-4')) {
            return 'GPT-4';
        }
        return (_a = alternateName[endpoint]) !== null && _a !== void 0 ? _a : 'ChatGPT';
    }
    if (endpoint === exports.EModelEndpoint.bingAI) {
        return jailbreak ? 'IntGPT Pro' : 'IntGPT';
    }
    if (endpoint === exports.EModelEndpoint.anthropic) {
        return modelLabel !== null && modelLabel !== void 0 ? modelLabel : 'Claude';
    }
    if (endpoint === exports.EModelEndpoint.google) {
        return modelLabel !== null && modelLabel !== void 0 ? modelLabel : 'PaLM2';
    }
    return '';
};
var compactOpenAISchema = tConversationSchema
    .pick({
    model: true,
    chatGptLabel: true,
    promptPrefix: true,
    temperature: true,
    top_p: true,
    presence_penalty: true,
    frequency_penalty: true,
})
    .transform(function (obj) {
    var newObj = __assign({}, obj);
    if (newObj.model === 'gpt-3.5-turbo') {
        delete newObj.model;
    }
    if (newObj.temperature === 1) {
        delete newObj.temperature;
    }
    if (newObj.top_p === 1) {
        delete newObj.top_p;
    }
    if (newObj.presence_penalty === 0) {
        delete newObj.presence_penalty;
    }
    if (newObj.frequency_penalty === 0) {
        delete newObj.frequency_penalty;
    }
    return removeNullishValues(newObj);
})
    .catch(function () { return ({}); });
var compactGoogleSchema = tConversationSchema
    .pick({
    model: true,
    modelLabel: true,
    promptPrefix: true,
    examples: true,
    temperature: true,
    maxOutputTokens: true,
    topP: true,
    topK: true,
})
    .transform(function (obj) {
    var newObj = __assign({}, obj);
    if (newObj.model === 'chat-bison') {
        delete newObj.model;
    }
    if (newObj.temperature === 0.2) {
        delete newObj.temperature;
    }
    if (newObj.maxOutputTokens === 1024) {
        delete newObj.maxOutputTokens;
    }
    if (newObj.topP === 0.95) {
        delete newObj.topP;
    }
    if (newObj.topK === 40) {
        delete newObj.topK;
    }
    return removeNullishValues(newObj);
})
    .catch(function () { return ({}); });
var compactAnthropicSchema = tConversationSchema
    .pick({
    model: true,
    modelLabel: true,
    promptPrefix: true,
    temperature: true,
    maxOutputTokens: true,
    topP: true,
    topK: true,
})
    .transform(function (obj) {
    var newObj = __assign({}, obj);
    if (newObj.model === 'claude-1') {
        delete newObj.model;
    }
    if (newObj.temperature === 1) {
        delete newObj.temperature;
    }
    if (newObj.maxOutputTokens === 4000) {
        delete newObj.maxOutputTokens;
    }
    if (newObj.topP === 0.7) {
        delete newObj.topP;
    }
    if (newObj.topK === 5) {
        delete newObj.topK;
    }
    return removeNullishValues(newObj);
})
    .catch(function () { return ({}); });
var compactChatGPTSchema = tConversationSchema
    .pick({
    model: true,
})
    .transform(function (obj) {
    var newObj = __assign({}, obj);
    // model: obj.model ?? 'text-davinci-002-render-sha',
    if (newObj.model === 'text-davinci-002-render-sha') {
        delete newObj.model;
    }
    return removeNullishValues(newObj);
})
    .catch(function () { return ({}); });
var compactPluginsSchema = tConversationSchema
    .pick({
    model: true,
    chatGptLabel: true,
    promptPrefix: true,
    temperature: true,
    top_p: true,
    presence_penalty: true,
    frequency_penalty: true,
    tools: true,
    agentOptions: true,
})
    .transform(function (obj) {
    var _a;
    var newObj = __assign({}, obj);
    if (newObj.model === 'gpt-3.5-turbo') {
        delete newObj.model;
    }
    if (newObj.chatGptLabel === null) {
        delete newObj.chatGptLabel;
    }
    if (newObj.promptPrefix === null) {
        delete newObj.promptPrefix;
    }
    if (newObj.temperature === 0.8) {
        delete newObj.temperature;
    }
    if (newObj.top_p === 1) {
        delete newObj.top_p;
    }
    if (newObj.presence_penalty === 0) {
        delete newObj.presence_penalty;
    }
    if (newObj.frequency_penalty === 0) {
        delete newObj.frequency_penalty;
    }
    if (((_a = newObj.tools) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        delete newObj.tools;
    }
    if (newObj.agentOptions &&
        newObj.agentOptions.agent === 'functions' &&
        newObj.agentOptions.skipCompletion === true &&
        newObj.agentOptions.model === 'gpt-3.5-turbo' &&
        newObj.agentOptions.temperature === 0) {
        delete newObj.agentOptions;
    }
    return removeNullishValues(newObj);
})
    .catch(function () { return ({}); });
var compactEndpointSchemas = {
    openAI: compactOpenAISchema,
    azureOpenAI: compactOpenAISchema,
    assistant: assistantSchema,
    google: compactGoogleSchema,
    /* BingAI needs all fields */
    bingAI: bingAISchema,
    anthropic: compactAnthropicSchema,
    chatGPTBrowser: compactChatGPTSchema,
    gptPlugins: compactPluginsSchema,
};
var parseCompactConvo = function (endpoint, conversation, possibleValues) {
    var _a;
    if (!endpoint) {
        throw new Error("undefined endpoint: ".concat(endpoint));
    }
    var schema = compactEndpointSchemas[endpoint];
    if (!schema) {
        throw new Error("Unknown endpoint: ".concat(endpoint));
    }
    var convo = schema.parse(conversation);
    // const { models, secondaryModels } = possibleValues ?? {};
    var models = (possibleValues !== null && possibleValues !== void 0 ? possibleValues : {}).models;
    if (models && convo) {
        convo.model = (_a = getFirstDefinedValue(models)) !== null && _a !== void 0 ? _a : convo.model;
    }
    // if (secondaryModels && convo.agentOptions) {
    //   convo.agentOptionmodel = getFirstDefinedValue(secondaryModels) ?? convo.agentOptionmodel;
    // }
    return convo;
};

exports.Tools = void 0;
(function (Tools) {
    Tools["code_interpreter"] = "code_interpreter";
    Tools["retrieval"] = "retrieval";
    Tools["function"] = "function";
})(exports.Tools || (exports.Tools = {}));

function setAcceptLanguageHeader(value) {
    axios.defaults.headers.common['Accept-Language'] = value;
}
function setTokenHeader(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

var user = function () { return '/api/user'; };
var balance = function () { return '/api/balance'; };
var userPlugins = function () { return '/api/user/plugins'; };
var messages = function (conversationId, messageId) {
    return "/api/messages/".concat(conversationId).concat(messageId ? "/".concat(messageId) : '');
};
var keysEndpoint = '/api/keys';
var keys = function () { return keysEndpoint; };
var userKeyQuery$1 = function (name) { return "".concat(keysEndpoint, "?name=").concat(name); };
var revokeUserKey$1 = function (name) { return "".concat(keysEndpoint, "/").concat(name); };
var revokeAllUserKeys$1 = function () { return "".concat(keysEndpoint, "?all=true"); };
var abortRequest = function (endpoint) { return "/api/ask/".concat(endpoint, "/abort"); };
var conversations = function (pageNumber) { return "/api/convos?pageNumber=".concat(pageNumber); };
var conversationById = function (id) { return "/api/convos/".concat(id); };
var updateConversation$1 = function () { return '/api/convos/update'; };
var deleteConversation$1 = function () { return '/api/convos/clear'; };
var search = function (q, pageNumber) {
    return "/api/search?q=".concat(q, "&pageNumber=").concat(pageNumber);
};
var searchEnabled = function () { return '/api/search/enable'; };
var presets = function () { return '/api/presets'; };
var deletePreset$1 = function () { return '/api/presets/delete'; };
var aiEndpoints = function () { return '/api/endpoints'; };
var models = function () { return '/api/models'; };
var tokenizer = function () { return '/api/tokenizer'; };
var login$1 = function () { return '/api/auth/login'; };
var logout$1 = function () { return '/api/auth/logout'; };
var register$1 = function () { return '/api/auth/register'; };
var loginGoogle = function () { return '/api/auth/google'; };
var refreshToken$1 = function (retry) { return "/api/auth/refresh".concat(retry ? '?retry=true' : ''); };
var requestPasswordReset$1 = function () { return '/api/auth/requestPasswordReset'; };
var resetPassword$1 = function () { return '/api/auth/resetPassword'; };
var plugins = function () { return '/api/plugins'; };
var config = function () { return '/api/config'; };
var assistants = function (id) { return "/api/assistants".concat(id ? "/".concat(id) : ''); };
var files = function () { return '/api/files'; };
var images = function () { return "".concat(files(), "/images"); };

function _get(url, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get(url, __assign({}, options))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _post(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post(url, JSON.stringify(data), {
                        headers: { 'Content-Type': 'application/json' },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _postMultiPart(url, formData, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post(url, formData, __assign(__assign({}, options), { headers: { 'Content-Type': 'multipart/form-data' } }))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _put(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.put(url, JSON.stringify(data), {
                        headers: { 'Content-Type': 'application/json' },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _delete(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.delete(url)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _deleteWithOptions(url, options) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.delete(url, __assign({}, options))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
function _patch(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.patch(url, JSON.stringify(data), {
                        headers: { 'Content-Type': 'application/json' },
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data];
            }
        });
    });
}
var isRefreshing = false;
var failedQueue = [];
var refreshToken = function (retry) { return _post(refreshToken$1(retry)); };
var processQueue = function (error, token) {
    if (token === void 0) { token = null; }
    failedQueue.forEach(function (prom) {
        if (error) {
            prom.reject(error);
        }
        else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};
axios.interceptors.response.use(function (response) { return response; }, function (error) { return __awaiter(void 0, void 0, void 0, function () {
    var originalRequest, token, err_1, token, err_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                originalRequest = error.config;
                if (!(error.response.status === 401 && !originalRequest._retry)) return [3 /*break*/, 13];
                originalRequest._retry = true;
                if (!isRefreshing) return [3 /*break*/, 5];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        failedQueue.push({ resolve: resolve, reject: reject });
                    })];
            case 2:
                token = _b.sent();
                originalRequest.headers['Authorization'] = 'Bearer ' + token;
                return [4 /*yield*/, axios(originalRequest)];
            case 3: return [2 /*return*/, _b.sent()];
            case 4:
                err_1 = _b.sent();
                return [2 /*return*/, Promise.reject(err_1)];
            case 5:
                isRefreshing = true;
                _b.label = 6;
            case 6:
                _b.trys.push([6, 11, 12, 13]);
                return [4 /*yield*/, refreshToken(
                    // Handle edge case where we get a blank screen if the initial 401 error is from a refresh token request
                    ((_a = originalRequest.url) === null || _a === void 0 ? void 0 : _a.includes('api/auth/refresh')) ? true : false)];
            case 7:
                token = (_b.sent()).token;
                if (!token) return [3 /*break*/, 9];
                originalRequest.headers['Authorization'] = 'Bearer ' + token;
                setTokenHeader(token);
                window.dispatchEvent(new CustomEvent('tokenUpdated', { detail: token }));
                processQueue(null, token);
                return [4 /*yield*/, axios(originalRequest)];
            case 8: return [2 /*return*/, _b.sent()];
            case 9:
                window.location.href = '/login';
                _b.label = 10;
            case 10: return [3 /*break*/, 13];
            case 11:
                err_2 = _b.sent();
                processQueue(err_2, null);
                return [2 /*return*/, Promise.reject(err_2)];
            case 12:
                isRefreshing = false;
                return [7 /*endfinally*/];
            case 13: return [2 /*return*/, Promise.reject(error)];
        }
    });
}); });
var request = {
    get: _get,
    post: _post,
    postMultiPart: _postMultiPart,
    put: _put,
    delete: _delete,
    deleteWithOptions: _deleteWithOptions,
    patch: _patch,
    refreshToken: refreshToken,
};

function getConversations(pageNumber) {
    return request.get(conversations(pageNumber));
}
function abortRequestWithMessage(endpoint, abortKey, message) {
    return request.post(abortRequest(endpoint), { arg: { abortKey: abortKey, message: message } });
}
function deleteConversation(payload) {
    //todo: this should be a DELETE request
    return request.post(deleteConversation$1(), { arg: payload });
}
function clearAllConversations() {
    return request.post(deleteConversation$1(), { arg: {} });
}
function revokeUserKey(name) {
    return request.delete(revokeUserKey$1(name));
}
function revokeAllUserKeys() {
    return request.delete(revokeAllUserKeys$1());
}
function getMessagesByConvoId(conversationId) {
    if (conversationId === 'new') {
        return Promise.resolve([]);
    }
    return request.get(messages(conversationId));
}
function getConversationById(id) {
    return request.get(conversationById(id));
}
function updateConversation(payload) {
    return request.post(updateConversation$1(), { arg: payload });
}
function updateMessage(payload) {
    var conversationId = payload.conversationId, messageId = payload.messageId, text = payload.text;
    if (!conversationId) {
        throw new Error('conversationId is required');
    }
    return request.put(messages(conversationId, messageId), { text: text });
}
function updateUserKey(payload) {
    var value = payload.value;
    if (!value) {
        throw new Error('value is required');
    }
    return request.put(keys(), payload);
}
function getPresets() {
    return request.get(presets());
}
function createPreset(payload) {
    return request.post(presets(), payload);
}
function updatePreset(payload) {
    return request.post(presets(), payload);
}
function deletePreset(arg) {
    return request.post(deletePreset$1(), arg);
}
function getSearchEnabled() {
    return request.get(searchEnabled());
}
function getUser() {
    return request.get(user());
}
function getUserBalance() {
    return request.get(balance());
}
var searchConversations = function (q, pageNumber) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, request.get(search(q, pageNumber))];
    });
}); };
var getAIEndpoints = function () {
    return request.get(aiEndpoints());
};
var getModels = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, request.get(models())];
    });
}); };
var updateTokenCount = function (text) {
    return request.post(tokenizer(), { arg: text });
};
var login = function (payload) {
    return request.post(login$1(), payload);
};
var logout = function () {
    return request.post(logout$1());
};
var register = function (payload) {
    return request.post(register$1(), payload);
};
var userKeyQuery = function (name) {
    return request.get(userKeyQuery$1(name));
};
var getLoginGoogle = function () {
    return request.get(loginGoogle());
};
var requestPasswordReset = function (payload) {
    return request.post(requestPasswordReset$1(), payload);
};
var resetPassword = function (payload) {
    return request.post(resetPassword$1(), payload);
};
var getAvailablePlugins = function () {
    return request.get(plugins());
};
var updateUserPlugins = function (payload) {
    return request.post(userPlugins(), payload);
};
var getStartupConfig = function () {
    return request.get(config());
};
/* Assistants */
var createAssistant = function (data) {
    return request.post(assistants(), data);
};
var getAssistantById = function (assistant_id) {
    return request.get(assistants(assistant_id));
};
var updateAssistant = function (assistant_id, data) {
    return request.patch(assistants(assistant_id), data);
};
var deleteAssistant = function (assistant_id) {
    return request.delete(assistants(assistant_id));
};
var listAssistants = function (params) {
    return request.get(assistants(), { params: params });
};
/* Files */
var uploadImage = function (data) {
    return request.postMultiPart(images(), data);
};
var deleteFiles = function (files$1) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, request.deleteWithOptions(files(), {
                data: { files: files$1 },
            })];
    });
}); };

var dataService = /*#__PURE__*/Object.freeze({
    __proto__: null,
    abortRequestWithMessage: abortRequestWithMessage,
    clearAllConversations: clearAllConversations,
    createAssistant: createAssistant,
    createPreset: createPreset,
    deleteAssistant: deleteAssistant,
    deleteConversation: deleteConversation,
    deleteFiles: deleteFiles,
    deletePreset: deletePreset,
    getAIEndpoints: getAIEndpoints,
    getAssistantById: getAssistantById,
    getAvailablePlugins: getAvailablePlugins,
    getConversationById: getConversationById,
    getConversations: getConversations,
    getLoginGoogle: getLoginGoogle,
    getMessagesByConvoId: getMessagesByConvoId,
    getModels: getModels,
    getPresets: getPresets,
    getSearchEnabled: getSearchEnabled,
    getStartupConfig: getStartupConfig,
    getUser: getUser,
    getUserBalance: getUserBalance,
    listAssistants: listAssistants,
    login: login,
    logout: logout,
    register: register,
    requestPasswordReset: requestPasswordReset,
    resetPassword: resetPassword,
    revokeAllUserKeys: revokeAllUserKeys,
    revokeUserKey: revokeUserKey,
    searchConversations: searchConversations,
    updateAssistant: updateAssistant,
    updateConversation: updateConversation,
    updateMessage: updateMessage,
    updatePreset: updatePreset,
    updateTokenCount: updateTokenCount,
    updateUserKey: updateUserKey,
    updateUserPlugins: updateUserPlugins,
    uploadImage: uploadImage,
    userKeyQuery: userKeyQuery
});

exports.QueryKeys = void 0;
(function (QueryKeys) {
    QueryKeys["messages"] = "messages";
    QueryKeys["allConversations"] = "allConversations";
    QueryKeys["conversation"] = "conversation";
    QueryKeys["searchEnabled"] = "searchEnabled";
    QueryKeys["user"] = "user";
    QueryKeys["name"] = "name";
    QueryKeys["models"] = "models";
    QueryKeys["balance"] = "balance";
    QueryKeys["endpoints"] = "endpoints";
    QueryKeys["presets"] = "presets";
    QueryKeys["searchResults"] = "searchResults";
    QueryKeys["tokenCount"] = "tokenCount";
    QueryKeys["availablePlugins"] = "availablePlugins";
    QueryKeys["startupConfig"] = "startupConfig";
    QueryKeys["assistants"] = "assistants";
    QueryKeys["assistant"] = "assistant";
})(exports.QueryKeys || (exports.QueryKeys = {}));
exports.MutationKeys = void 0;
(function (MutationKeys) {
    MutationKeys["imageUpload"] = "imageUpload";
    MutationKeys["fileDelete"] = "fileDelete";
})(exports.MutationKeys || (exports.MutationKeys = {}));

var useAbortRequestWithMessage = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (_a) {
        var endpoint = _a.endpoint, abortKey = _a.abortKey, message = _a.message;
        return abortRequestWithMessage(endpoint, abortKey, message);
    }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.balance]);
        },
    });
};
var useGetUserQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.user], function () { return getUser(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false, retry: false }, config));
};
var useGetMessagesByConvoId = function (id, config) {
    return reactQuery.useQuery([exports.QueryKeys.messages, id], function () { return getMessagesByConvoId(id); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useGetUserBalance = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.balance], function () { return getUserBalance(); }, __assign({ refetchOnWindowFocus: true, refetchOnReconnect: true, refetchOnMount: true }, config));
};
var useGetConversationByIdQuery = function (id, config) {
    return reactQuery.useQuery([exports.QueryKeys.conversation, id], function () { return getConversationById(id); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
/* like above, but first try the convos query data */
var useGetConvoIdQuery = function (id, config) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useQuery([exports.QueryKeys.conversation, id], function () {
        var _a;
        var defaultQuery = function () { return getConversationById(id); };
        var convosQueryKey = [exports.QueryKeys.allConversations, { pageNumber: '1', active: true }];
        var convosQuery = queryClient.getQueryData(convosQueryKey);
        if (!convosQuery) {
            return defaultQuery();
        }
        var convo = (_a = convosQuery.conversations) === null || _a === void 0 ? void 0 : _a.find(function (c) { return c.conversationId === id; });
        if (convo) {
            return convo;
        }
        return defaultQuery();
    }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
//This isn't ideal because its just a query and we're using mutation, but it was the only way
//to make it work with how the Chat component is structured
var useGetConversationByIdMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return getConversationById(id); }, {
        // onSuccess: (res: s.TConversation) => {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.conversation, id]);
        },
    });
};
var useUpdateConversationMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updateConversation(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.conversation, id]);
            queryClient.invalidateQueries([exports.QueryKeys.allConversations]);
        },
    });
};
var useUpdateMessageMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updateMessage(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.messages, id]);
        },
    });
};
var useUpdateUserKeysMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updateUserKey(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.name]);
        },
    });
};
var useDeleteConversationMutation = function (id) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return deleteConversation(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.conversation, id]);
            queryClient.invalidateQueries([exports.QueryKeys.allConversations]);
        },
    });
};
var useClearConversationsMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return clearAllConversations(); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.allConversations]);
        },
    });
};
var useRevokeUserKeyMutation = function (name) {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return revokeUserKey(name); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.name]);
        },
    });
};
var useRevokeAllUserKeysMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return revokeAllUserKeys(); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.name]);
        },
    });
};
var useGetConversationsQuery = function (pageNumber, config) {
    return reactQuery.useQuery([exports.QueryKeys.allConversations, { pageNumber: pageNumber, active: true }], function () { return getConversations(pageNumber); }, __assign({ refetchOnReconnect: false, refetchOnMount: false, retry: 1 }, config));
};
var useGetSearchEnabledQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.searchEnabled], function () { return getSearchEnabled(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useGetEndpointsQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.endpoints], function () { return getAIEndpoints(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useGetModelsQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.models], function () { return getModels(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useCreatePresetMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return createPreset(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.presets]);
        },
    });
};
var useUpdatePresetMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updatePreset(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.presets]);
        },
    });
};
var useGetPresetsQuery = function (config) {
    return reactQuery.useQuery([exports.QueryKeys.presets], function () { return getPresets(); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useDeletePresetMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return deletePreset(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.presets]);
        },
    });
};
var useSearchQuery = function (searchQuery, pageNumber, config) {
    return reactQuery.useQuery([exports.QueryKeys.searchResults, pageNumber, searchQuery], function () { return searchConversations(searchQuery, pageNumber); }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false }, config));
};
var useUpdateTokenCountMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (_a) {
        var text = _a.text;
        return updateTokenCount(text);
    }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.tokenCount]);
        },
    });
};
var useLoginUserMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return login(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
        onMutate: function () {
            queryClient.invalidateQueries([exports.QueryKeys.models]);
        },
    });
};
var useRegisterUserMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return register(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useLogoutUserMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return logout(); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useRefreshTokenMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function () { return request.refreshToken(); }, {
        onMutate: function () {
            queryClient.invalidateQueries([exports.QueryKeys.models]);
        },
    });
};
var useUserKeyQuery = function (name, config) {
    return reactQuery.useQuery([exports.QueryKeys.name, name], function () {
        if (!name) {
            return Promise.resolve({ expiresAt: '' });
        }
        return userKeyQuery(name);
    }, __assign({ refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false, retry: false }, config));
};
var useRequestPasswordResetMutation = function () {
    return reactQuery.useMutation(function (payload) {
        return requestPasswordReset(payload);
    });
};
var useResetPasswordMutation = function () {
    return reactQuery.useMutation(function (payload) { return resetPassword(payload); });
};
var useAvailablePluginsQuery = function () {
    return reactQuery.useQuery([exports.QueryKeys.availablePlugins], function () { return getAvailablePlugins(); }, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};
var useUpdateUserPluginsMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (payload) { return updateUserPlugins(payload); }, {
        onSuccess: function () {
            queryClient.invalidateQueries([exports.QueryKeys.user]);
        },
    });
};
var useGetStartupConfig = function () {
    return reactQuery.useQuery([exports.QueryKeys.startupConfig], function () { return getStartupConfig(); }, {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};

/**
 * Hook for listing all assistants, with optional parameters provided for pagination and sorting
 */
var useListAssistantsQuery = function (params, config) {
    return reactQuery.useQuery([exports.QueryKeys.assistants, params], function () { return listAssistants(params); }, __assign({ 
        // Example selector to sort them by created_at
        // select: (res) => {
        //   return res.data.sort((a, b) => a.created_at - b.created_at);
        // },
        refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false, retry: false }, config));
};
var useListAssistantsInfiniteQuery = function (params, config) {
    return reactQuery.useInfiniteQuery(['assistantsList', params], function (_a) {
        var _b = _a.pageParam, pageParam = _b === void 0 ? '' : _b;
        return listAssistants(__assign(__assign({}, params), { after: pageParam }));
    }, __assign({ getNextPageParam: function (lastPage) {
            // lastPage is of type AssistantListResponse, you can use the has_more and last_id from it directly
            if (lastPage.has_more) {
                return lastPage.last_id;
            }
            return undefined;
        } }, config));
};
/**
 * Hook for creating a new assistant
 */
var useCreateAssistantMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (newAssistantData) { return createAssistant(newAssistantData); }, {
        onSuccess: function () {
            // Invalidate and refetch assistants query to update list
            queryClient.invalidateQueries([exports.QueryKeys.assistants]);
        },
    });
};
/**
 * Hook for retrieving details about a single assistant
 */
var useGetAssistantByIdQuery = function (assistant_id, config) {
    return reactQuery.useQuery([exports.QueryKeys.assistant, assistant_id], function () { return getAssistantById(assistant_id); }, __assign({ enabled: !!assistant_id, refetchOnWindowFocus: false, refetchOnReconnect: false, refetchOnMount: false, retry: false }, config));
};
/**
 * Hook for updating an assistant
 */
var useUpdateAssistantMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (_a) {
        var assistant_id = _a.assistant_id, data = _a.data;
        return updateAssistant(assistant_id, data);
    }, {
        onSuccess: function (_, _a) {
            var assistant_id = _a.assistant_id;
            // Invalidate and refetch assistant details query
            queryClient.invalidateQueries([exports.QueryKeys.assistant, assistant_id]);
            // Optionally invalidate and refetch list of assistants
            queryClient.invalidateQueries([exports.QueryKeys.assistants]);
        },
    });
};
/**
 * Hook for deleting an assistant
 */
var useDeleteAssistantMutation = function () {
    var queryClient = reactQuery.useQueryClient();
    return reactQuery.useMutation(function (_a) {
        var assistant_id = _a.assistant_id;
        return deleteAssistant(assistant_id);
    }, {
        onSuccess: function () {
            // Invalidate and refetch assistant list query
            queryClient.invalidateQueries([exports.QueryKeys.assistants]);
        },
    });
};

/* eslint-disable */
/**
 * Copyright (C) 2016 Maxime Petazzoni <maxime.petazzoni@bulix.org>.
 * All rights reserved.
 */


var SSE = function (url, options) {
  if (!(this instanceof SSE)) {
    return new SSE(url, options);
  }

  this.INITIALIZING = -1;
  this.CONNECTING = 0;
  this.OPEN = 1;
  this.CLOSED = 2;

  this.url = url;

  options = options || {};
  this.headers = options.headers || {};
  this.payload = options.payload !== undefined ? options.payload : '';
  this.method = options.method || (this.payload && 'POST') || 'GET';
  this.withCredentials = !!options.withCredentials;

  this.FIELD_SEPARATOR = ':';
  this.listeners = {};

  this.xhr = null;
  this.readyState = this.INITIALIZING;
  this.progress = 0;
  this.chunk = '';

  this.addEventListener = function (type, listener) {
    if (this.listeners[type] === undefined) {
      this.listeners[type] = [];
    }

    if (this.listeners[type].indexOf(listener) === -1) {
      this.listeners[type].push(listener);
    }
  };

  this.removeEventListener = function (type, listener) {
    if (this.listeners[type] === undefined) {
      return;
    }

    var filtered = [];
    this.listeners[type].forEach(function (element) {
      if (element !== listener) {
        filtered.push(element);
      }
    });
    if (filtered.length === 0) {
      delete this.listeners[type];
    } else {
      this.listeners[type] = filtered;
    }
  };

  this.dispatchEvent = function (e) {
    if (!e) {
      return true;
    }

    e.source = this;

    var onHandler = 'on' + e.type;
    if (this.hasOwnProperty(onHandler)) {
      this[onHandler].call(this, e);
      if (e.defaultPrevented) {
        return false;
      }
    }

    if (this.listeners[e.type]) {
      return this.listeners[e.type].every(function (callback) {
        callback(e);
        return !e.defaultPrevented;
      });
    }

    return true;
  };

  this._setReadyState = function (state) {
    var event = new CustomEvent('readystatechange');
    event.readyState = state;
    this.readyState = state;
    this.dispatchEvent(event);
  };

  this._onStreamFailure = function (e) {
    var event = new CustomEvent('error');
    event.data = e.currentTarget.response;
    this.dispatchEvent(event);
    this.close();
  };

  this._onStreamAbort = function (e) {
    this.dispatchEvent(new CustomEvent('abort'));
    this.close();
  };

  this._onStreamProgress = async function (e) {
    if (!this.xhr) {
      return;
    }

    if (this.xhr.status === 401 && !this._retry) {
      this._retry = true;
      try {
        const refreshResponse = await request.refreshToken();
        this.headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshResponse.token}`,
        };
        setTokenHeader(refreshResponse.token);
        window.dispatchEvent(new CustomEvent('tokenUpdated', { detail: refreshResponse.token }));
        this.stream();
      } catch (err) {
        this._onStreamFailure(e);
        return;
      }
    } else if (this.xhr.status !== 200) {
      this._onStreamFailure(e);
      return;
    }

    if (this.readyState == this.CONNECTING) {
      this.dispatchEvent(new CustomEvent('open'));
      this._setReadyState(this.OPEN);
    }

    var data = this.xhr.responseText.substring(this.progress);
    this.progress += data.length;
    data.split(/(\r\n|\r|\n){2}/g).forEach(
      function (part) {
        if (part.trim().length === 0) {
          this.dispatchEvent(this._parseEventChunk(this.chunk.trim()));
          this.chunk = '';
        } else {
          this.chunk += part;
        }
      }.bind(this),
    );
  };

  this._onStreamLoaded = function (e) {
    this._onStreamProgress(e);

    // Parse the last chunk.
    this.dispatchEvent(this._parseEventChunk(this.chunk));
    this.chunk = '';
  };

  /**
   * Parse a received SSE event chunk into a constructed event object.
   */
  this._parseEventChunk = function (chunk) {
    if (!chunk || chunk.length === 0) {
      return null;
    }

    var e = { id: null, retry: null, data: '', event: 'message' };
    chunk.split(/\n|\r\n|\r/).forEach(
      function (line) {
        line = line.trimRight();
        var index = line.indexOf(this.FIELD_SEPARATOR);
        if (index <= 0) {
          // Line was either empty, or started with a separator and is a comment.
          // Either way, ignore.
          return;
        }

        var field = line.substring(0, index);
        if (!(field in e)) {
          return;
        }

        var value = line.substring(index + 1).trimLeft();
        if (field === 'data') {
          e[field] += value;
        } else {
          e[field] = value;
        }
      }.bind(this),
    );

    var event = new CustomEvent(e.event);
    event.data = e.data;
    event.id = e.id;
    return event;
  };

  this._checkStreamClosed = function () {
    if (!this.xhr) {
      return;
    }

    if (this.xhr.readyState === XMLHttpRequest.DONE) {
      this._setReadyState(this.CLOSED);
    }
  };

  this.stream = function () {
    this._setReadyState(this.CONNECTING);

    this.xhr = new XMLHttpRequest();
    this.xhr.addEventListener('progress', this._onStreamProgress.bind(this));
    this.xhr.addEventListener('load', this._onStreamLoaded.bind(this));
    this.xhr.addEventListener('readystatechange', this._checkStreamClosed.bind(this));
    this.xhr.addEventListener('error', this._onStreamFailure.bind(this));
    this.xhr.addEventListener('abort', this._onStreamAbort.bind(this));
    this.xhr.open(this.method, this.url);
    for (var header in this.headers) {
      this.xhr.setRequestHeader(header, this.headers[header]);
    }
    this.xhr.withCredentials = this.withCredentials;
    this.xhr.send(this.payload);
  };

  this.close = function () {
    if (this.readyState === this.CLOSED) {
      return;
    }

    this.xhr.abort();
    this.xhr = null;
    this._setReadyState(this.CLOSED);
  };
};
// Export our SSE module for npm.js
// if (typeof exports !== 'undefined') {
//   // exports.SSE = SSE;
//   module.exports = { SSE };
// }

function createPayload(submission) {
    var conversation = submission.conversation, message = submission.message, messages = submission.messages, endpointOption = submission.endpointOption, isEdited = submission.isEdited, isContinued = submission.isContinued;
    var conversationId = tConversationSchema.parse(conversation).conversationId;
    var endpoint = endpointOption.endpoint;
    var server = EndpointURLs[endpoint];
    if (isEdited && endpoint === exports.EModelEndpoint.assistant) {
        server += '/modify';
    }
    else if (isEdited) {
        server = server.replace('/ask/', '/edit/');
    }
    var payload = __assign(__assign(__assign({}, message), endpointOption), { isContinued: !!(isEdited && isContinued), conversationId: conversationId });
    if (endpoint === exports.EModelEndpoint.assistant) {
        payload.messages = messages;
    }
    return { server: server, payload: payload };
}

exports.EndpointURLs = EndpointURLs;
exports.SSE = SSE;
exports.alternateName = alternateName;
exports.anthropicSchema = anthropicSchema;
exports.assistantSchema = assistantSchema;
exports.bingAISchema = bingAISchema;
exports.chatGPTBrowserSchema = chatGPTBrowserSchema;
exports.compactAnthropicSchema = compactAnthropicSchema;
exports.compactChatGPTSchema = compactChatGPTSchema;
exports.compactGoogleSchema = compactGoogleSchema;
exports.compactOpenAISchema = compactOpenAISchema;
exports.compactPluginsSchema = compactPluginsSchema;
exports.createPayload = createPayload;
exports.dataService = dataService;
exports.defaultEndpoints = defaultEndpoints;
exports.eModelEndpointSchema = eModelEndpointSchema;
exports.getFirstDefinedValue = getFirstDefinedValue;
exports.getResponseSender = getResponseSender;
exports.googleSchema = googleSchema;
exports.gptPluginsSchema = gptPluginsSchema;
exports.modularEndpoints = modularEndpoints;
exports.openAIModels = openAIModels;
exports.openAISchema = openAISchema;
exports.parseCompactConvo = parseCompactConvo;
exports.parseConvo = parseConvo;
exports.removeNullishValues = removeNullishValues;
exports.request = request;
exports.setAcceptLanguageHeader = setAcceptLanguageHeader;
exports.setTokenHeader = setTokenHeader;
exports.supportsFiles = supportsFiles;
exports.tAgentOptionsSchema = tAgentOptionsSchema;
exports.tConversationSchema = tConversationSchema;
exports.tExampleSchema = tExampleSchema;
exports.tMessageSchema = tMessageSchema;
exports.tPluginAuthConfigSchema = tPluginAuthConfigSchema;
exports.tPluginSchema = tPluginSchema;
exports.tPresetSchema = tPresetSchema;
exports.useAbortRequestWithMessage = useAbortRequestWithMessage;
exports.useAvailablePluginsQuery = useAvailablePluginsQuery;
exports.useClearConversationsMutation = useClearConversationsMutation;
exports.useCreateAssistantMutation = useCreateAssistantMutation;
exports.useCreatePresetMutation = useCreatePresetMutation;
exports.useDeleteAssistantMutation = useDeleteAssistantMutation;
exports.useDeleteConversationMutation = useDeleteConversationMutation;
exports.useDeletePresetMutation = useDeletePresetMutation;
exports.useGetAssistantByIdQuery = useGetAssistantByIdQuery;
exports.useGetConversationByIdMutation = useGetConversationByIdMutation;
exports.useGetConversationByIdQuery = useGetConversationByIdQuery;
exports.useGetConversationsQuery = useGetConversationsQuery;
exports.useGetConvoIdQuery = useGetConvoIdQuery;
exports.useGetEndpointsQuery = useGetEndpointsQuery;
exports.useGetMessagesByConvoId = useGetMessagesByConvoId;
exports.useGetModelsQuery = useGetModelsQuery;
exports.useGetPresetsQuery = useGetPresetsQuery;
exports.useGetSearchEnabledQuery = useGetSearchEnabledQuery;
exports.useGetStartupConfig = useGetStartupConfig;
exports.useGetUserBalance = useGetUserBalance;
exports.useGetUserQuery = useGetUserQuery;
exports.useListAssistantsInfiniteQuery = useListAssistantsInfiniteQuery;
exports.useListAssistantsQuery = useListAssistantsQuery;
exports.useLoginUserMutation = useLoginUserMutation;
exports.useLogoutUserMutation = useLogoutUserMutation;
exports.useRefreshTokenMutation = useRefreshTokenMutation;
exports.useRegisterUserMutation = useRegisterUserMutation;
exports.useRequestPasswordResetMutation = useRequestPasswordResetMutation;
exports.useResetPasswordMutation = useResetPasswordMutation;
exports.useRevokeAllUserKeysMutation = useRevokeAllUserKeysMutation;
exports.useRevokeUserKeyMutation = useRevokeUserKeyMutation;
exports.useSearchQuery = useSearchQuery;
exports.useUpdateAssistantMutation = useUpdateAssistantMutation;
exports.useUpdateConversationMutation = useUpdateConversationMutation;
exports.useUpdateMessageMutation = useUpdateMessageMutation;
exports.useUpdatePresetMutation = useUpdatePresetMutation;
exports.useUpdateTokenCountMutation = useUpdateTokenCountMutation;
exports.useUpdateUserKeysMutation = useUpdateUserKeysMutation;
exports.useUpdateUserPluginsMutation = useUpdateUserPluginsMutation;
exports.useUserKeyQuery = useUserKeyQuery;
