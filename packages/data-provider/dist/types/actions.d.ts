import type { FunctionTool, Schema, Reference, ActionMetadata } from './types/assistants';
import type { OpenAPIV3 } from 'openapi-types';
import { AuthorizationTypeEnum } from './types/assistants';
export type ParametersSchema = {
    type: string;
    properties: Record<string, Reference | Schema>;
    required: string[];
};
export type ApiKeyCredentials = {
    api_key: string;
    custom_auth_header?: string;
    authorization_type?: AuthorizationTypeEnum;
};
export type OAuthCredentials = {
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    scope: string;
};
export type Credentials = ApiKeyCredentials | OAuthCredentials;
export declare function sha1(input: string): string;
export declare function createURL(domain: string, path: string): string;
export declare class FunctionSignature {
    name: string;
    description: string;
    parameters: ParametersSchema;
    constructor(name: string, description: string, parameters: ParametersSchema);
    toObjectTool(): FunctionTool;
}
export declare class ActionRequest {
    domain: string;
    path: string;
    method: string;
    operation: string;
    operationHash?: string;
    isConsequential: boolean;
    contentType: string;
    params?: object;
    constructor(domain: string, path: string, method: string, operation: string, isConsequential: boolean, contentType: string);
    private authHeaders;
    private authToken?;
    setParams(params: object): Promise<void>;
    setAuth(metadata: ActionMetadata): Promise<void>;
    execute(): Promise<import("axios").AxiosResponse<any, any>>;
}
export declare function resolveRef(schema: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject | OpenAPIV3.RequestBodyObject, components?: OpenAPIV3.ComponentsObject): OpenAPIV3.SchemaObject;
/** Function to convert OpenAPI spec to function signatures and request builders */
export declare function openapiToFunction(openapiSpec: OpenAPIV3.Document): {
    functionSignatures: FunctionSignature[];
    requestBuilders: Record<string, ActionRequest>;
};
export type ValidationResult = {
    status: boolean;
    message: string;
    spec?: OpenAPIV3.Document;
};
export declare function validateAndParseOpenAPISpec(specString: string): ValidationResult;
