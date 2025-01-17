import { test, expect, describe } from "vitest";
import { passengersLeft } from "./main.js";

test("Check passengersLeft function returns 0", () => {
  expect(
    passengersLeft([
      [10, 0],
      [0, 0],
    ])
  ).toBe(0);
});

test("Check passengersLeft function returns 1", () => {
  expect(
    passengersLeft([
      [10, 1],
      [0, 0],
    ])
  ).toBe(1);
});

test("Check passengersLeft function returns 14", () => {
  expect(
    passengersLeft([
      [0, 10],
      [5, 0],
      [3, 2],
    ])
  ).toBe(14);
});

test("Check passengers left function returns 10", () => {
  expect(
    passengersLeft([
      [0, 0],
      [0, 0],
      [0, 0],
    ])
  ).toBe(10);
});

test("Check passengers left function returns 10", () => {
  expect(
    passengersLeft([
      [10, 1000],
      [100, 9000],
      [0, 0],
    ])
  ).toBe(9900);
});

test("Check error thrown for anything entered that is not an array", () => {
  expect(() => passengersLeft(0)).toThrow("Input must be an array");
});

test("Check error thrown for anything entered that is not an array", () => {
  expect(() => passengersLeft({ 0: 0 })).toThrow("Input must be an array");
});

test("Check error thrown for anything entered that is not an array", () => {
  expect(() => passengersLeft("£")).toThrow("Input must be an array");
});
