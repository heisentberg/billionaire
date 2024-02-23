import type { InfiniteData } from '@tanstack/react-query';
import type { TMessage, TConversation } from '../schemas';
export type Conversation = {
    id: string;
    createdAt: number;
    participants: string[];
    lastMessage: string;
    conversations: TConversation[];
};
export type ConversationListParams = {
    limit?: number;
    before?: string | null;
    after?: string | null;
    order?: 'asc' | 'desc';
    pageNumber: string;
    conversationId?: string;
};
export type ConversationListResponse = {
    conversations: TConversation[];
    pageNumber: string;
    pageSize: string | number;
    pages: string | number;
    messages: TMessage[];
};
export type ConversationData = InfiniteData<ConversationListResponse>;
export type ConversationUpdater = (data: ConversationData, conversation: TConversation) => ConversationData;
