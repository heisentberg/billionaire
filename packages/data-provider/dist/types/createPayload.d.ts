import type { TSubmission, TMessage, TEndpointOption } from './types';
export default function createPayload(submission: TSubmission): {
    server: string;
    payload: Partial<TMessage> & Partial<TEndpointOption> & {
        isContinued: boolean;
        conversationId: string | null;
        messages?: TMessage[] | undefined;
    };
};
