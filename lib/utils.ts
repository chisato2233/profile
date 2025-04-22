import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { encode,decode } from "base2048"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function test(){
  const unit8Array = new Uint8Array([1,2,3,4,5,6,7,8,9,10])
  const encoded = encode(unit8Array)
  console.log(encoded)
  const decoded = decode(encoded)
  console.log(decoded)
}