import {assoc} from '../js/assoc'

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);

export const assignId = assoc('id', generateRandomString())

export const generateKey = <O extends object>(obj: O) => assignId(obj)


export function generateRandomIdForObject<A extends Array<any>>(arr: A) {
  return arr.map(el => {
    return {...el, id: generateRandomString()}
  })
}