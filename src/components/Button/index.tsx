import React, { createElement, ElementType, MouseEventHandler } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

export enum ButtonVariant {
  CUSTOM = 'custom',
}

interface IButtonProps<T extends ElementType = 'button'> {
  as?: T;
  type?: 'button';
  className?: string;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<T>;
  href?: string;
  width?: string;
  height?: string;
  size?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  as = 'button',
  type = 'button',
  className,
  variant,
  onClick,
  width,
  height,
  size,
  disabled,
  children,
  ...props
}) => {
  const _className = cn(
    {
      [styles.button]: variant !== ButtonVariant.CUSTOM,
    },
    className
  );

  const style = {
    '--width': width || size,
    '--height': height || size,
  } as React.CSSProperties;

  return createElement(
    as,
    {
      className: _className,
      style,
      type,
      onClick,
      disabled,
      ...props,
    },
    <>{children}</>
  );
};

export default Button;
