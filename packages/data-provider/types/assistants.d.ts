import type { UseQueryOptions, UseMutationResult, QueryObserverResult, UseInfiniteQueryOptions } from '@tanstack/react-query';
import * as t from './types/assistants';
/**
 * Hook for listing all assistants, with optional parameters provided for pagination and sorting
 */
export declare const useListAssistantsQuery: <TData = t.AssistantListResponse>(params?: t.AssistantListParams, config?: UseQueryOptions<t.AssistantListResponse, unknown, TData, import("@tanstack/react-query").QueryKey> | undefined) => QueryObserverResult<TData>;
export declare const useListAssistantsInfiniteQuery: (params?: t.AssistantListParams, config?: UseInfiniteQueryOptions<t.AssistantListResponse, Error>) => import("@tanstack/react-query").UseInfiniteQueryResult<t.AssistantListResponse, Error>;
/**
 * Hook for creating a new assistant
 */
export declare const useCreateAssistantMutation: () => UseMutationResult<t.Assistant, Error, t.AssistantCreateParams>;
/**
 * Hook for retrieving details about a single assistant
 */
export declare const useGetAssistantByIdQuery: (assistant_id: string, config?: UseQueryOptions<t.Assistant>) => QueryObserverResult<t.Assistant>;
/**
 * Hook for updating an assistant
 */
export declare const useUpdateAssistantMutation: () => UseMutationResult<t.Assistant, Error, {
    assistant_id: string;
    data: t.AssistantUpdateParams;
}>;
/**
 * Hook for deleting an assistant
 */
export declare const useDeleteAssistantMutation: () => UseMutationResult<void, Error, {
    assistant_id: string;
}>;
