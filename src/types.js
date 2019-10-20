// @flow
export type Step = {
  name: string,
  order: number,
  visible: boolean,
  target: React$Element,
  wrapper: React$Element,
  showNextButton: boolean,
  commandText: string,
};

export type CopilotContext = {
  registerStep: (Step) => void,
  unregisterStep: (name: string) => void,
  getCurrentStep: () => Step,
  nextStep: () => void,
}

export type valueXY = {
  x: number,
  y: number,
};

export type SvgMaskPathFn = (args: {
  size: Animated.valueXY,
  position: Animated.valueXY,
  canvasSize: {
    x: number,
    y: number
  }
}) => string;
