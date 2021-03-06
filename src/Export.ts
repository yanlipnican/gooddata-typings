// (C) 2020 GoodData Corporation

import { AFM } from './AFM';

export interface IBaseExportConfig {
    /**
     * Exported file name
     */
    title?: string;

    /**
     * Exported file format
     */
    format?: 'xlsx' | 'csv' | 'raw';

    /**
     * Keep attribute cells merged
     */
    mergeHeaders?: boolean;
}

export interface IExportConfig extends IBaseExportConfig {
    /**
     * Include applied filters
     */
    showFilters?: boolean;

    /**
     * The afm execution
     */
    afm?: AFM.IAfm;
}
