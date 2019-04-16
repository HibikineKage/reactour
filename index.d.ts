import * as React from 'react'

type ContentFunction = () => React.ReactNode
export type Props = {
  badgeContent?: (current: number, total: number) => React.ReactElement<any>;
  children?: React.ReactNode | React.ReactElement<any>;
  className?: string;
  closeWithMask?: boolean;
  disableDotsNavigation?: boolean;
  disableInteraction?: boolean;
  disableKeyboardNavigation?: boolean;
  getCurrentStep?: (current: number) => void;
  goToStep?: never;
  highlightedMaskClassName?: string;
  inViewThreshold?: number;
  isOpen?: boolean;
  lastStepNextButton?: React.ReactNode;
  maskClassName?: string;
  maskSpace?: number;
  nextButton?: React.ReactNode;
  nextStep?: () => void;
  onAfterOpen?: (target: HTMLElement) => void;
  onBeforeClose?: (target: HTMLElement) => void;
  onRequestClose: () => void;
  prevButton?: React.ReactNode;
  prevStep?: () => void;
  rounded?: number;
  scrollDuration?: number;
  scrollOffset?: number;
  showButtons?: boolean;
  showCloseButton?: boolean;
  showNavigation?: boolean;
  showNavigationNumber?: boolean;
  showNumber?: boolean;
  startAt?: number;
  steps: {
    selector?: string;
    content: React.ReactNode | React.ReactElement | ContentFunction;
    position?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    action?: () => void;
    style?: any;
    stepInteraction?: boolean;
  }[];
  onRequestClose: () => void;
  accentColor?: string;
}
export default class Tour extends React.Component<Props> { }
