export type BlockType = 'main' | 'twoColumns' | 'title';

export interface Block {
    type: BlockType;
    title?: string;
    subtitle?: string;
    description?: string;
}

export interface Page {
    createdAt?: Date;
    name: string;
    link: string;
    image?: string;
    blocks?: Block[];
}
