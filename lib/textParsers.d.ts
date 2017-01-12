export interface Point {
    x: number
    y: number
}

export interface Circle extends Point {
    radius: number
}

type RegisterFunc = (oid: number, converter: Function) => void

declare function allowNull(fn: Function): any
declare function parseBool(value: string): boolean | null
declare function parseBoolArray(value: string): boolean[] | null
declare function parseIntegerArray(value: string): number[] | null
declare function parseBigIntegerArray(value: string): number[] | null
declare function parseBigIntegerArray(value: string): number[] | string[] | null
declare function parsePointArray(value: string): Point[] | null
declare function parseStringArray(value: string): string[] | null
declare function parseDateArray(value: string): Date[] | null
declare function parseByteAArray(value: string): Buffer[] | null

declare function parseInteger(value: string): number
declare function parseBigInteger(value: string): number | string
declare function parseJsonArray(value: string): any[]
declare function parsePoint(value: string): Point | null
declare function parseCircle(value: string): Circle | null

declare function init(register: RegisterFunc): void

export default { init }