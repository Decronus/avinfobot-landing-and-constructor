import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { Block, BlockContent, BlockSettings, BlockType, BlockTypeWithName, Page, PageSettings } from '@/types/pages';
import {
    getPages,
    addBlockToPage,
    getPageByLink,
    createPage,
    deletePage,
    deleteBlockFromPage,
    replaceBlocks,
    updateBlockContent,
    updateBlockSettings,
    updatePageSettings,
} from '@/axios/api';

interface AddBlockToPagePayload {
    pageLink: string;
    blockType: BlockType;
    blockIndex: number;
}

interface ReplaceBlocksPayload {
    pageLink: string;
    prevIndex: number;
    nextIndex: number;
}

interface UpdateBlockContentPayload {
    pageLink: string;
    blockIndex: number;
    content: BlockContent;
}

interface UpdateBlockSettingsPayload {
    pageLink: string;
    blockIndex: number;
    settings: BlockSettings;
}

interface UpdatePageSettingsPayload {
    pageLink: string;
    settings: PageSettings;
}

interface State {
    blocks: BlockTypeWithName[];
    pages: Page[] | undefined;
    currentPage: Page | undefined;
}

const state: State = {
    blocks: [
        {
            text: 'Главный блок',
            type: 'main',
        },
        {
            text: 'Две колонки',
            type: 'twoColumns',
        },
        {
            text: 'Заголовок',
            type: 'title',
        },
        {
            text: 'Текст с изображением',
            type: 'textWithImage',
        },
    ],
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
    updateBlockContent(state, { blockIndex, content }: { blockIndex: number; content: BlockContent }) {
        const blocks = state.currentPage?.blocks as Block[];
        blocks[blockIndex].content = content;
    },
    updateBlockSettings(state, { blockIndex, settings }: { blockIndex: number; settings: BlockSettings }) {
        const blocks = state.currentPage?.blocks as Block[];
        blocks[blockIndex].settings = settings;
    },
    updatePageSettings(state, settings: PageSettings) {
        const page = state.currentPage;
        if (page) {
            page.name = settings.name;
            page.link = settings.link;
        }
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
    async addBlock({ commit }, { pageLink, blockType, blockIndex }: AddBlockToPagePayload) {
        try {
            const { data } = await addBlockToPage(pageLink, blockType, blockIndex + 1);
            commit('setCurrentPage', data);
        } catch (error: any) {
            console.log(error.reponse.data);
        }
    },
    async deleteBlockFromPage({ commit }, { pageLink, blockId }: { pageLink: string; blockId: string }) {
        try {
            const { data } = await deleteBlockFromPage(pageLink, blockId);
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
            console.error('Ошибка при получении текущей страницы');
        }
    },
    async replaceBlocks({ commit }, { pageLink, prevIndex, nextIndex }: ReplaceBlocksPayload) {
        try {
            const { data } = await replaceBlocks(pageLink, prevIndex, nextIndex);
            commit('setCurrentPage', data);
        } catch (error) {
            console.error('Ошибка при перемещении блока');
        }
    },
    async updateBlockContent({ commit }, { pageLink, blockIndex, content }: UpdateBlockContentPayload) {
        try {
            await updateBlockContent(pageLink, blockIndex, content);
            commit('updateBlockContent', { blockIndex, content });
        } catch (error: any) {
            console.error(error.response.data);
        }
    },
    async updateBlockSettings({ commit }, { pageLink, blockIndex, settings }: UpdateBlockSettingsPayload) {
        try {
            await updateBlockSettings(pageLink, blockIndex, settings);
            commit('updateBlockSettings', { blockIndex, settings });
        } catch (error: any) {
            console.error(error.response.data);
        }
    },
    async updatePageSettings({ commit }, { pageLink, settings }: UpdatePageSettingsPayload) {
        try {
            console.log('body', settings);
            await updatePageSettings(pageLink, settings);
            commit('updatePageSettings', settings);
        } catch (error: any) {
            console.error(error.response.data);
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
