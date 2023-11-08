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
    getCurrentBlockContent(state, getters, rootState) {
        const blocks = rootState.pages.currentPage.blocks;
        const currentBlock = blocks.find((el: Block) => el._id === state.currentBlock.id);
        return (currentBlock as Block).content;
    },
    getCurrentBlockSettings(state, getters, rootState) {
        const blocks = rootState.pages.currentPage.blocks;
        const currentBlock = blocks.find((el: Block) => el._id === state.currentBlock.id);
        return (currentBlock as Block).settings;
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
