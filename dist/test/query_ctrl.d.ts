/// <reference path="../../headers/common.d.ts" />
import { QueryCtrl } from './sdk/sdk';
export declare class DruidQueryCtrl extends QueryCtrl {
    static templateUrl: string;
    errors: any;
    addFilterMode: boolean;
    addHavingMode: boolean;
    addAggregatorMode: boolean;
    addPostAggregatorMode: boolean;
    addDimensionsMode: boolean;
    addMetricsMode: boolean;
    listDataSources: any;
    getDimensionsAndMetrics: any;
    getMetrics: any;
    getDimensions: any;
    queryTypes: any;
    filterTypes: any;
    groupHavingTypes: any;
    aggregatorTypes: any;
    postAggregatorTypes: any;
    arithmeticPostAggregator: any;
    arithmeticPostAggregatorType: any;
    customGranularity: any;
    target: any;
    datasource: any;
    queryTypeValidators: {
        "timeseries": any;
        "groupBy": any;
        "topN": any;
        "select": any;
    };
    filterValidators: {
        "selector": any;
        "regex": any;
        "javascript": any;
    };
    groupHavingValidators: {
        "equalTo": any;
        "greaterThan": any;
        "lessThan": any;
        "dimSelector": any;
    };
    aggregatorValidators: {
        "count": (target: any) => string;
        "longSum": any;
        "longMax": any;
        "longMin": any;
        "doubleSum": any;
        "approxHistogramFold": any;
        "hyperUnique": any;
    };
    postAggregatorValidators: {
        "arithmetic": any;
        "quantile": any;
    };
    arithmeticPostAggregatorFns: {
        '+': any;
        '-': any;
        '*': any;
        '/': any;
    };
    arithmeticPostAggregatorTypes: {
        'hyperUniqueCardinality': any;
        'fieldAccess': any;
    };
    defaultQueryType: string;
    defaultFilterType: string;
    defaultHavingType: string;
    defaultAggregatorType: string;
    defaultPostAggregator: {
        type: string;
        'fn': string;
    };
    customGranularities: string[];
    defaultCustomGranularity: string;
    defaultSelectDimension: string;
    defaultSelectMetric: string;
    defaultLimit: number;
    /** @ngInject **/
    constructor($scope: any, $injector: any, $q: any);
    cachedAndCoalesced(ioFn: any, $scope: any, cacheName: any): any;
    targetBlur(): void;
    addFilter(): void;
    editFilter(index: any): void;
    removeFilter(index: any): void;
    clearCurrentFilter(): void;
    addHaving(): void;
    editHaving(index: any): void;
    removeHaving(index: any): void;
    clearCurrentHaving(): void;
    addSelectDimensions(): void;
    removeSelectDimension(index: any): void;
    clearCurrentSelectDimension(): void;
    addSelectMetrics(): void;
    removeSelectMetric(index: any): void;
    clearCurrentSelectMetric(): void;
    addAggregator(): void;
    removeAggregator(index: any): void;
    clearCurrentAggregator(): void;
    addPostAggregator(): void;
    removePostAggregator(index: any): void;
    clearCurrentPostAggregator(): void;
    isValidFilterType(type: any): any;
    isValidHavingType(type: any): any;
    isValidAggregatorType(type: any): any;
    isValidPostAggregatorType(type: any): any;
    isValidQueryType(type: any): any;
    isValidArithmeticPostAggregatorFn(fn: any): any;
    validateMaxDataPoints(target: any, errs: any): boolean;
    validateLimit(target: any, errs: any): boolean;
    validateOrderBy(target: any): boolean;
    validateGroupByQuery(target: any, errs: any): boolean;
    validateTopNQuery(target: any, errs: any): boolean;
    validateSelectQuery(target: any, errs: any): boolean;
    validateSelectorFilter(target: any): string;
    validateJavascriptFilter(target: any): string;
    validateRegexFilter(target: any): string;
    validateNumericHaving(type: any, target: any): string;
    validateDimensionHaving(type: any, target: any): string;
    validateCountAggregator(target: any): string;
    validateSimpleAggregator(type: any, target: any): string;
    validateApproxHistogramFoldAggregator(target: any): string;
    validateSimplePostAggregator(type: any, target: any): string;
    validateQuantilePostAggregator(target: any): string;
    validateArithmeticPostAggregator(target: any): string;
    validatearithmeticConfPostAggregator(target: any): string;
    validateTarget(): any;
}
