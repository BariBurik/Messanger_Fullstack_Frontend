import { makeVar } from "@apollo/client";

export const tokenVar = makeVar<string | null>(null)