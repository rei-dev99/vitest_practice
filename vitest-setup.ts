import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll } from "vitest";
import { APIserver } from "./src/test/server";

beforeAll(() => APIserver.listen());
afterAll(() => APIserver.close());
afterEach(() => APIserver.resetHandlers());