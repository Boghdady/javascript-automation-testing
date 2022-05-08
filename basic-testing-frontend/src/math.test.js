import { it, expect } from "vitest";
import {add} from "./math";

it("should be calculate all the values in the array", ()=>{
  const result = add([1,2,3]);
  expect(result).toBe(6);
});