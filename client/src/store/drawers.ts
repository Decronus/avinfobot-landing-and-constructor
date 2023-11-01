import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { BlockType } from '@/types/pages';

type Drawer = 'EditContentDrawer' | 'BlockSettingsDrawer';

interface State {
    openedDrawers: Drawer[];
    currentBlock: BlockType | undefined;
    currentBlockIndex: number;
}

const state: State = {
    openedDrawers: [],
    currentBlock: undefined,
    currentBlockIndex: -1,
};

const getters: GetterTree<State, any> = {
    getCurrentBlock(state) {
        return state.currentBlock;
    },
    getCurrentBlockIndex(state) {
        return state.currentBlockIndex;
    },
    getDrawerVisibility: (state) => (modalName: Drawer) => {
        return state.openedDrawers.includes(modalName);
    },
};

const mutations: MutationTree<State> = {
    setCurrentBlock(state, blockType: BlockType) {
        state.currentBlock = blockType;
    },
    setCurrentBlockIndex(state, blockIndex: number) {
        console.log('blockIndex', blockIndex);
        state.currentBlockIndex = blockIndex;
        console.log(' state.currentBlockIndex', state.currentBlockIndex);
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
