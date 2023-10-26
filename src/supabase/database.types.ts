export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Page {
    created_at: string;
    id: number;
    image: string | null;
    name: string;
    link: string;
}

export interface Database {
    public: {
        Tables: {
            pages: {
                Row: Page;
                Insert: Page;
                Update: Page;
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
