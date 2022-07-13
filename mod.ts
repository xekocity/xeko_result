import apply from './lib/apply.ts';
import every from './lib/every.ts';
import flatmap from './lib/flatmap.ts';
import isError from './lib/isError.ts';
import isOk from './lib/isOk.ts';
import map from './lib/map.ts';
import match from './lib/match.ts';
import toResult from './lib/toResult.ts';
import toValue from './lib/toValue.ts';
import Ok from "./lib/types/Ok.ts";
import Result from "./lib/types/Result.ts";
import unwrapOr from './lib/unwrapOr.ts';

export type {
    Ok,
    Result,
}

export { 
    apply,
    every,
    flatmap,
    isError,
    isOk,
    map,
    match,
    toResult,
    toValue,
    unwrapOr,
}

