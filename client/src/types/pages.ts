export type BlockType = 'main' | 'twoColumns' | 'title';

export interface BlockTypeWithName {
    text: string;
    type: BlockType;
}

interface BaseBlock {
    _id?: string;
    type: BlockType;
    settings: {
        inverted: boolean;
        readNext?: boolean;
    };
}

export interface MainBlockContent {
    title: string;
    description: string;
    action: {
        active: boolean;
        text: string;
        link?: string;
    };
    imageUrl?: string;
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
