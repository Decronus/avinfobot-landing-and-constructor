const state = {
    openedModals: [],
};
const getters = {
    getModalVisibility: (state) => (modalName) => {
        return state.openedModals.includes(modalName);
    },
};
const mutations = {
    toggleModal(state, modalName) {
        if (state.openedModals.includes(modalName)) {
            state.openedModals = state.openedModals.filter((name) => name !== modalName);
        }
        else {
            state.openedModals.push(modalName);
        }
    },
};
const actions = {};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
//# sourceMappingURL=modals.js.map