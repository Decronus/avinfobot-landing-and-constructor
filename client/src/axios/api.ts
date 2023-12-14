import axiosInst from './axios';
import { AxiosResponse } from 'axios';
import { PageSettings, BlockContent, BlockSettings, BlockType, Page } from '@/types/pages';

interface AuthBody {
    code: string;
}

export function auth(body: AuthBody): Promise<AxiosResponse<boolean, void>> {
    return axiosInst.post('auth', body);
}

export function getPages(): Promise<AxiosResponse<Page[], void>> {
    return axiosInst.get('pages');
}

export function createPage(settings: PageSettings): Promise<AxiosResponse<Page, any>> {
    return axiosInst.post('pages', settings);
}

export function getPageByLink(link: string): Promise<AxiosResponse<Page, any>> {
    return axiosInst.get(`pages/${link}`);
}

export function deletePage(link: string): Promise<AxiosResponse<string, any>> {
    return axiosInst.delete(`pages/${link}`);
}

export function addBlockToPage(link: string, type: BlockType, index: number): Promise<AxiosResponse<Page, any>> {
    return axiosInst.post(`pages/${link}/block/${type}/${index}`);
}

export function deleteBlockFromPage(link: string, id: string): Promise<AxiosResponse<Page, any>> {
    return axiosInst.delete(`pages/${link}/block/${id}`);
}

export function replaceBlocks(link: string, prevIndex: number, nextIndex: number): Promise<AxiosResponse<Page, any>> {
    return axiosInst.put(`pages/${link}/swap-blocks/${prevIndex}/${nextIndex}`);
}

export function updateBlockContent(
    link: string,
    index: number,
    content: BlockContent
): Promise<AxiosResponse<BlockContent, any>> {
    return axiosInst.put(`pages/${link}/block/${index}/content`, content);
}

export function updateBlockSettings(
    link: string,
    index: number,
    settings: BlockSettings
): Promise<AxiosResponse<BlockContent, any>> {
    return axiosInst.put(`pages/${link}/block/${index}/settings`, settings);
}

export function uploadImage(link: string, index: number, formData: FormData): Promise<AxiosResponse<Page, any>> {
    return axiosInst.post(`upload/${link}/${index}`, formData);
}

export function updatePageSettings(link: string, settings: PageSettings): Promise<AxiosResponse<PageSettings, any>> {
    return axiosInst.put(`pages/${link}/settings`, settings);
}
