import axiosInst from './axios';
import { AxiosResponse } from 'axios';
import { BlockType, Page } from '@/types/pages';

export function getPages(): Promise<AxiosResponse<Page[], void>> {
    return axiosInst.get('pages');
}

interface CreatePageBody {
    name: string;
    link: string;
}
export function createPage(body: CreatePageBody): Promise<AxiosResponse<Page, any>> {
    return axiosInst.post('pages', body);
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
    return axiosInst.post(`pages/${link}/${prevIndex}/${nextIndex}`);
}
