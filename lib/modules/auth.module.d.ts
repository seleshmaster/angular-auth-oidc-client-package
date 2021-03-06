import { ModuleWithProviders } from '@angular/core';
export declare class AuthModule {
    static forRoot(token?: Token): ModuleWithProviders;
}
export interface Type<T> extends Function {
    new (...args: any[]): T;
}
export interface Token {
    storage?: Type<any>;
}
