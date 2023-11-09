export type BlockType = 'main' | 'twoColumns' | 'title';

export interface BlockTypeWithName {
    text: string;
    type: BlockType;
}

export interface BlockSettings {
    inverted: boolean;
    readNext?: boolean;
}

interface BaseBlock {
    _id?: string;
    type: BlockType;
    settings: BlockSettings;
}

export interface MainBlockContent {
    title: string;
    description: string;
    action: {
        active: boolean;
        text: string;
        link?: string;
    };
    bgImageUrl?: string;
}

export interface MainBlock extends BaseBlock {
    content: MainBlockContent;
}

export interface TwoColumnsBlockContent {
    title?: string;
    subtitle?: string;
    firstColumnText?: string;
    secondColumnText?: string;
}

export interface TwoColumnsBlock extends BaseBlock {
    content: TwoColumnsBlockContent;
}

export interface TitleBlockContent {
    title: string;
}

export interface TitleBlock extends BaseBlock {
    content: TitleBlockContent;
}

export type Block = MainBlock | TwoColumnsBlock | TitleBlock;
export type BlockContent = MainBlockContent | TwoColumnsBlockContent | TitleBlockContent;

export interface Page {
    _id?: string;
    createdAt?: string;
    name: string;
    link: string;
    image?: string;
    blocks?: Block[];
}
