import { GetterTree, MutationTree, ActionTree } from 'vuex';

type Drawer = 'EditContentDrawer' | 'BlockSettingsDrawer';

interface State {
    openedDrawers: Drawer[];
}

const state: State = {
    openedDrawers: [],
};

const getters: GetterTree<State, any> = {
    getDrawerVisibility: (state) => (modalName: Drawer) => {
        return state.openedDrawers.includes(modalName);
    },
};

const mutations: MutationTree<State> = {
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
