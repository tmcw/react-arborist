import { PartialController } from "../types/utils";

export type VisibleState = Record<string, boolean>;

export type VisibleOnChangeEvent = {
  value: VisibleState;
};

export type VisiblePartialController = PartialController<
  VisibleState,
  VisibleOnChangeEvent
>;
