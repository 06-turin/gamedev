import React, { FC } from 'react';
import { GDButton, GDButtonProps } from 'components/atoms/GDButton/GDButton';
import classnames from 'classnames';
import { GDButtonStyleOption, GDSizeOption } from 'components/organisms/App/types';

export type MenuProps = {
  items: Pick<GDButtonProps, 'title' | 'onClick'>[]
  itemsStyleOption: GDButtonStyleOption
  itemsSize?: GDSizeOption
  itemsClassName?: string
  className?: string
}

export const Menu: FC<MenuProps> = ({
  items,
  itemsClassName,
  itemsStyleOption,
  itemsSize,
  className,
}) => (
  <div className={classnames(['menu', className])}>
    {items.map(({ title, onClick }) => (
      <GDButton
        className={itemsClassName}
        title={title}
        size={itemsSize}
        styleOption={itemsStyleOption}
        onClick={onClick}
      />
    ))}
  </div>
);
