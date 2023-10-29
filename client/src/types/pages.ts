export type BlockType = 'main' | 'twoColumns' | 'title';

interface BaseBlock {
    type: BlockType;
    inverted: boolean;
}

export interface MainBlock extends BaseBlock {
    title: string;
    description: string;
    action: {
        active: boolean;
        text: string;
    };
}

export interface TwoColumnsBlock extends BaseBlock {
    title?: string;
    subtitle?: string;
    firstColumnText?: string;
    secondColumnText?: string;
}

export interface TitleBlock extends BaseBlock {
    title: string;
}

type Block = MainBlock | TwoColumnsBlock | TitleBlock;

export interface Page {
    createdAt?: Date;
    name: string;
    link: string;
    image?: string;
    blocks?: Block[];
}
