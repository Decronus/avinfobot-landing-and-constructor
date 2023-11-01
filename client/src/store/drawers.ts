import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { BlockType } from '@/types/pages';

type Drawer = 'EditContentDrawer' | 'BlockSettingsDrawer';

interface State {
    openedDrawers: Drawer[];
    currentBlock: BlockType | undefined;
}

const state: State = {
    openedDrawers: [],
    currentBlock: undefined,
};

const getters: GetterTree<State, any> = {
    getCurrentBlock(state) {
        return state.currentBlock;
    },
    getDrawerVisibility: (state) => (modalName: Drawer) => {
        return state.openedDrawers.includes(modalName);
    },
};

const mutations: MutationTree<State> = {
    setCurrentBlock(state, blockType: BlockType) {
        state.currentBlock = blockType;
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
