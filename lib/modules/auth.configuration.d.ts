import { Observable } from 'rxjs';
export declare class OpenIDImplicitFlowConfiguration {
    stsServer: string;
    redirect_url: string;
    client_id: string;
    response_type: string;
    scope: string;
    hd_param: string;
    post_logout_redirect_uri: string;
    start_checksession: boolean;
    silent_renew: boolean;
    silent_renew_url: string;
    silent_renew_offset_in_seconds: number;
    silent_redirect_url: string;
    post_login_route: string;
    forbidden_route: string;
    unauthorized_route: string;
    auto_userinfo: boolean;
    auto_clean_state_after_authentication: boolean;
    trigger_authorization_result_event: boolean;
    log_console_warning_active: boolean;
    log_console_debug_active: boolean;
    iss_validation_off: boolean;
    history_cleanup_off: boolean;
    max_id_token_iat_offset_allowed_in_seconds: number;
    disable_iat_offset_validation: boolean;
    storage: Storage;
}
export declare class AuthConfiguration {
    private platformId;
    private openIDImplicitFlowConfiguration;
    private defaultConfig;
    readonly stsServer: string;
    readonly redirect_url: string;
    readonly silent_redirect_url: string;
    readonly client_id: string;
    readonly response_type: string;
    readonly scope: string;
    readonly hd_param: string;
    readonly post_logout_redirect_uri: string;
    readonly start_checksession: boolean;
    readonly silent_renew: boolean;
    readonly silent_renew_offset_in_seconds: number;
    readonly post_login_route: string;
    readonly forbidden_route: string;
    readonly unauthorized_route: string;
    readonly auto_userinfo: boolean;
    readonly auto_clean_state_after_authentication: boolean;
    readonly trigger_authorization_result_event: boolean;
    readonly isLogLevelWarningEnabled: boolean;
    readonly isLogLevelDebugEnabled: boolean;
    readonly iss_validation_off: boolean;
    readonly history_cleanup_off: boolean;
    readonly max_id_token_iat_offset_allowed_in_seconds: number;
    readonly disable_iat_offset_validation: boolean;
    readonly storage: any;
    constructor(platformId: Object);
    init(openIDImplicitFlowConfiguration: OpenIDImplicitFlowConfiguration): void;
    private _onConfigurationChange;
    readonly onConfigurationChange: Observable<OpenIDImplicitFlowConfiguration>;
}
