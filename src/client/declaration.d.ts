declare module '*.svg' {
    const urlOrBase64: string;
    export default urlOrBase64;
}

declare module '*.jpg' {
    const urlOrBase64: string;
    export default urlOrBase64;
}

declare module '*.png' {
    const urlOrBase64: string;
    export default urlOrBase64;
}

declare module '*.gif' {
    const urlOrBase64: string;
    export default urlOrBase64;
}

declare type SVGComponent = (props: import('react').SVGProps<SVGElement>) => import('react').ReactElement;

declare module '*.svg?component' {
    const Component: SVGComponent;
    export default Component;
}
