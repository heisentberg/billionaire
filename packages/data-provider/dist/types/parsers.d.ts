import type { TConversation, TPreset } from './schemas';
import type { TEndpointOption } from './types';
import { EModelEndpoint } from './schemas';
export declare function getFirstDefinedValue(possibleValues: string[]): string | undefined;
export type TPossibleValues = {
    models: string[];
    secondaryModels?: string[];
};
export declare const parseConvo: ({ endpoint, endpointType, conversation, possibleValues, }: {
    endpoint: EModelEndpoint;
    endpointType?: EModelEndpoint | undefined;
    conversation: Partial<TConversation | TPreset>;
    possibleValues?: TPossibleValues | undefined;
}) => TConversation;
export declare const getResponseSender: (endpointOption: TEndpointOption) => string;
export declare const parseCompactConvo: ({ endpoint, endpointType, conversation, possibleValues, }: {
    endpoint?: EModelEndpoint | undefined;
    endpointType?: EModelEndpoint | undefined;
    conversation: Partial<TConversation | TPreset>;
    possibleValues?: TPossibleValues | undefined;
}) => TConversation;
