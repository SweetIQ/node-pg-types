export {default as textParsers } from './lib/textParsers'
export {default as binaryParsers} from './lib/binaryParsers'
export {default as arrayParser} from './lib/arrayParser'

export type TypeParser = (value: any) => any

export let typeParsers: {
    text: any,
    binary: any
}

export function noParse (val: any): string
export function getTypeParser(oid: number, format: string): TypeParser
export function setTypeParser(oid: number, format: string, parserFn: Function): void