declare module '*.module.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';

declare module '*.svg' {
    import type React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

declare global {
    interface ObjectConstructor {
        values<T>(obj: { [key: string]: T }): T[];
        entries<T>(o: { [key: string]: T }): [string, T][];
    }
}
