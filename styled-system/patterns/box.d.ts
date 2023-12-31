import type { SystemStyleObject, ConditionalValue } from '../types'
import type { PropertyValue } from '../types/prop-type'
import type { Properties } from '../types/csstype'
import type { Tokens } from '../tokens'

export type BoxProperties = {
   
}


type BoxOptions = BoxProperties & Omit<SystemStyleObject, keyof BoxProperties >


export declare function box(options?: BoxOptions): string
