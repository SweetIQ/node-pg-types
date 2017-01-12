export type Bits = number[];

type RegisterFunc = (oid: number, converter: Function) => void

export function parseBits(data: Bits, bits: number, offset: number, invert: boolean, callback: Function): number
export function parseFloatFromBits(data: Bits, precisionBits: number, exponentBits: number): number
export function parseInt32(value: Bits): number
export function parseFloat32(value: Bits): number
export function parseFloat64(value: Bits): number
export function parseNumeric(value: Bits): number
export function parseDate(value: Bits): Date
export function parseText(value: Bits): string
export function parseBool(value: Bits): boolean
export function parseArray<T>(value: Bits): T[]

export function init(register: RegisterFunc): void

export default { init }