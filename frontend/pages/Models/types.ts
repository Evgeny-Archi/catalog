interface ModelItem {
    name: string;
    id: number;
    url: string;
}

export interface PageData {
    [key: string]: unknown;
    models: ModelItem[];
}
