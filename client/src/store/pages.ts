import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { BlockType, Page } from '@/types/pages';
import { getPages, addBlockToPage, getPageByLink, createPage, deletePage } from '@/axios/api';

interface AddBlockToPagePayload {
    pageLink: string;
    blockType: BlockType;
    blockIndex: number;
}

interface State {
    pages: Page[] | undefined;
    currentPage: Page | undefined;
}

const state: State = {
    pages: undefined,
    currentPage: undefined,
};

const getters: GetterTree<State, any> = {};

const mutations: MutationTree<State> = {
    setPages(state, pages: Page[]) {
        state.pages = pages;
    },
    setCurrentPage(state, page: Page) {
        state.currentPage = page;
    },
};

const actions: ActionTree<State, any> = {
    async getPages({ commit }) {
        try {
            const { data } = await getPages();
            commit('setPages', data);
        } catch (error) {
            console.log('Ошибка при получении страниц');
        }
    },
    async createPage({ dispatch }, { name, link }: { name: string; link: string }) {
        try {
            await createPage({ name, link });
            dispatch('getPages');
        } catch (error) {
            console.log('Ошибка при добавлении блока');
        }
    },
    async deletePage({ dispatch }, link: string) {
        try {
            await deletePage(link);
            dispatch('getPages');
        } catch (error) {
            console.log('Ошибка при удалении блока');
        }
    },
    async addBlockToPage({ commit }, { pageLink, blockType, blockIndex }: AddBlockToPagePayload) {
        try {
            const { data } = await addBlockToPage(pageLink, blockType, blockIndex + 1);
            commit('setCurrentPage', data);
        } catch (error: any) {
            console.log(error.reponse.data);
        }
    },
    async getCurrentPage({ commit }, pageLink: string) {
        try {
            const { data } = await getPageByLink(pageLink);
            commit('setCurrentPage', data);
        } catch (error) {
            console.log('Ошибка при получении текущей страницы');
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
