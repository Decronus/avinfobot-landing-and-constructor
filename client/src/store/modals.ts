import { GetterTree, MutationTree, ActionTree } from 'vuex';

type Modal = 'AddPageModal' | 'PageSettingsModal';

interface State {
    openedModals: Modal[];
}

const state: State = {
    openedModals: [],
};

const getters: GetterTree<State, any> = {
    getModalVisibility: (state) => (modalName: Modal) => {
        return state.openedModals.includes(modalName);
    },
};

const mutations: MutationTree<State> = {
    toggleModal(state, modalName: Modal) {
        if (state.openedModals.includes(modalName)) {
            state.openedModals = state.openedModals.filter((name) => name !== modalName);
        } else {
            state.openedModals.push(modalName);
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
