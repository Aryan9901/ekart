import Icon from '@components/atom/Icon';
import React from 'react';

interface TabIconProps {
  focused: boolean;
  size: number;
  color: string;
}

export const HomeIcon: React.FC<TabIconProps> = ({focused, size, color}) => {
  return (
    <Icon
      name={focused ? 'home' : 'home-outline'}
      size={size}
      color={color}
      iconFamily="Ionicons"
    />
  );
};
export const CartIcon: React.FC<TabIconProps> = ({focused, size, color}) => {
  return (
    <Icon
      name={focused ? 'cart' : 'cart-outline'}
      size={size}
      color={color}
      iconFamily="MaterialCommunityIcons"
    />
  );
};
export const AccountIcon: React.FC<TabIconProps> = ({focused, size, color}) => {
  return (
    <Icon
      name={focused ? 'person' : 'person-outline'}
      size={size}
      color={color}
      iconFamily="Ionicons"
    />
  );
};
export const CategoriesIcon: React.FC<TabIconProps> = ({
  focused,
  size,
  color,
}) => {
  return (
    <Icon
      name={focused ? 'grid' : 'grid-outline'}
      size={size}
      color={color}
      iconFamily="Ionicons"
    />
  );
};
