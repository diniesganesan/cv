import { Icon, IconButton } from '@chakra-ui/react';
import React from 'react';
import { TbMoon, TbSunHigh } from 'react-icons/tb';

interface IThemeProps {
  isDark: boolean;
  onChangeTheme: (e: boolean) => void;
}
export const Theme = ({ isDark, onChangeTheme }: IThemeProps) => {
  return (
    <IconButton
      aria-label="switch"
      onClick={() => onChangeTheme(!isDark)}
      icon={!isDark ? <Icon as={TbMoon} /> : <Icon as={TbSunHigh} />}
    />
  );
};
