export type BlockType = 'main' | 'twoColumns' | 'title';

interface BaseBlock {
    _id?: string;
    type: BlockType;
    settings: {
        inverted: boolean;
    };
}

export interface MainBlock extends BaseBlock {
    content: {
        title: string;
        description: string;
        action: {
            active: boolean;
            text: string;
        };
    };
}

export interface TwoColumnsBlock extends BaseBlock {
    content: {
        title?: string;
        subtitle?: string;
        firstColumnText?: string;
        secondColumnText?: string;
    };
}

export interface TitleBlock extends BaseBlock {
    content: {
        title: string;
    };
}

type Block = MainBlock | TwoColumnsBlock | TitleBlock;

export interface Page {
    _id?: string;
    createdAt?: Date;
    name: string;
    link: string;
    image?: string;
    blocks?: Block[];
}
