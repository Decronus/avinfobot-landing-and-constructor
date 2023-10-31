import axiosInst from './axios';
import { AxiosResponse } from 'axios';
import { Page } from '@/types/pages';

export function getPages(): Promise<AxiosResponse<Page[], void>> {
    return axiosInst.get('pages');
}

interface CreatePageBody {
    name: string;
    link: string;
}
export function createPage(body: CreatePageBody): Promise<AxiosResponse<Page, CreatePageBody>> {
    return axiosInst.post('pages', body);
}

export function getPageByLink(link: string): Promise<AxiosResponse<Page, string>> {
    return axiosInst.get(`pages/${link}`);
}

export function deletePage(link: string): Promise<AxiosResponse<string, string>> {
    return axiosInst.delete(`pages/${link}`);
}
