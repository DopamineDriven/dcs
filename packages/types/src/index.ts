export type {
  ArrFieldReplacer,
  BigIntOrNumber,
  BigIntKeys,
  CTR,
  DeepPartial,
  DeepPartialFields,
  DeepReplace,
  DX,
  Equal,
  Expect,
  Extends,
  FlexiCase,
  InferGSPRT,
  InferGSPRTWorkup,
  Include,
  IsExact,
  IsOptional,
  NormalizeAndInject,
  OnlyOptional,
  OnlyRequired,
  RequireNested,
  RTC,
  Rm,
  SerializeBigInt,
  Signals,
  TCN,
  UTR,
  Unenumerate,
  Without,
  XOR
} from "@/utils.ts";

declare global {
  interface JSON {
    parse<T = unknown>(
      text: string,
      reviver?: (this: any, key: string, value: any) => any
    ): T;
  }
  interface Body {
    json<T = unknown>(): Promise<T>;
  }
  interface ObjectConstructor {
    // PropertyKey -> string and number allowed, symbol disallowed (symbol can't be enumerable)
    keys<T = object>(
      o: T
    ): (keyof T extends infer K
      ? K extends string
        ? K
        : K extends number
          ? `${K}`
          : never
      : never)[];
  }
}

