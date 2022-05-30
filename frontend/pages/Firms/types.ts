interface FirmItem {
    name: string;
    id: number;
    url: string;
}

export interface PageData {
    [key: string]: unknown;
    firms: FirmItem[];
}
