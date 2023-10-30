import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { BlockType } from '@/types/pages';

type Drawer = 'EditContentDrawer' | 'BlockSettingsDrawer';

interface State {
    openedDrawers: Drawer[];
    currentEditContentDrawerBlock: BlockType | undefined;
}

const state: State = {
    openedDrawers: [],
    currentEditContentDrawerBlock: undefined,
};

const getters: GetterTree<State, any> = {
    getCurrentEditContentDrawerBlock(state) {
        return state.currentEditContentDrawerBlock;
    },
    getDrawerVisibility: (state) => (modalName: Drawer) => {
        return state.openedDrawers.includes(modalName);
    },
};

const mutations: MutationTree<State> = {
    setCurrentEditContentDrawerBlock(state, blockType: BlockType) {
        state.currentEditContentDrawerBlock = blockType;
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
