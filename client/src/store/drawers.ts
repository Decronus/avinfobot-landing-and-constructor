import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { Block, BlockType } from '@/types/pages';

export type Drawer = 'EditContentDrawer' | 'BlockSettingsDrawer';

type CurrentBlock = { id: string; type: BlockType; index: number };

interface State {
    openedDrawers: Drawer[];
    currentBlock: CurrentBlock;
}

const state: State = {
    openedDrawers: [],
    currentBlock: {
        id: '',
        type: 'main',
        index: -1,
    },
};

const getters: GetterTree<State, any> = {
    // getCurrentBlockType(state) {
    //     return state.currentBlock?.type;
    // },
    // getCurrentBlockIndex(state) {
    //     return state.currentBlock?.index;
    // },
    getCurrentBlockContent: (state, getters, rootState) => (blockId: string) => {
        const blocks = rootState.pages.currentBlock.blocks;
        console.log('blocks', blocks);
        const currentBlock = blocks.filter((el: Block) => el._id === blockId);
        return currentBlock;
    },
    getDrawerVisibility: (state) => (modalName: Drawer) => {
        return state.openedDrawers.includes(modalName);
    },
};

const mutations: MutationTree<State> = {
    setCurrentBlock(state, currentBlock: CurrentBlock) {
        state.currentBlock = currentBlock;
    },
    setCurrentBlockIndex(state, blockIndex: number) {
        state.currentBlock.index = blockIndex;
    },
    toggleDrawer(state, modalName: Drawer) {
        if (state.openedDrawers.includes(modalName)) {
            state.openedDrawers = state.openedDrawers.filter((name) => name !== modalName);
        } else {
            state.openedDrawers.push(modalName);
        }
    },
};

const actions: ActionTree<State, any> = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
