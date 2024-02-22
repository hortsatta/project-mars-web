'use client';

import {
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  memo,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
} from '@floating-ui/react';
import cx from 'classix';

import type { HTMLProps, ReactNode } from 'react';
import type { Placement } from '@floating-ui/react';

type TooltipOptions = {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

type ContextType = ReturnType<typeof useTooltip> | null;

type Props = TooltipOptions & { children: ReactNode };

const TooltipContext = createContext<ContextType>(null);

export function useTooltip({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
}

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip components must be wrapped in <BaseTooltip />');
  }

  return context;
};

export const BaseTooltip = memo(function Tooltip({
  children,
  ...moreProps
}: Props) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(moreProps);
  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
});

export const BaseTooltipTrigger = memo(
  forwardRef<HTMLElement, HTMLProps<HTMLElement> & { asChild?: boolean }>(
    function ({ children, ...moreProps }, propRef) {
      const context = useTooltipContext();
      const childrenRef = (children as any).ref;
      const ref = useMergeRefs([
        context.refs.setReference,
        propRef,
        childrenRef,
      ]);

      if (!isValidElement(children)) {
        return null;
      }

      return cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...moreProps,
          ...children.props,
          'data-state': context.open ? 'open' : 'closed',
        }),
      );
    },
  ),
);

export const BaseTooltipContent = memo(
  forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function (
    { className, ...moreProps },
    propRef,
  ) {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    if (!context.open) return null;

    return (
      <FloatingPortal>
        <div
          ref={ref}
          style={context.floatingStyles}
          className={cx(
            'rounded-sm bg-white/70 px-2.5 py-1 text-base text-black',
            className,
          )}
          {...context.getFloatingProps(moreProps)}
        />
      </FloatingPortal>
    );
  }),
);
