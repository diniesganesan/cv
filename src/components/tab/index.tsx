import React from 'react';
import { themes } from '../../constants';
import { Icon, IconButton } from '@chakra-ui/react';
import { TbMinus, TbPlus } from 'react-icons/tb';

interface ITabProps {
  customTheme: (typeof themes)[0];
  isHidden?: boolean;
  isClose?: boolean;
  onClose?: () => void;
  onMinimise?: () => void;
}
export const Tab = ({
  customTheme,
  isHidden,
  isClose,
  onClose,
  onMinimise,
}: ITabProps) => {
  const handleTab = () => {
    if (isHidden) {
      onMinimise();
      return;
    }

    if (isClose) {
      onClose();
      return;
    }
  };
  return (
    <div
      onClick={handleTab}
      style={{
        cursor: 'pointer',
        position: 'absolute',
        bottom: 10,
        right: 50,
        paddingLeft: 30,
        paddingRight: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        color: customTheme.terminalTextColor,
        backgroundColor: customTheme.terminalHeaderColor,
      }}
    >
      <span>
        Terminal{' '}
        {isHidden ? (
          <IconButton
            aria-label="close"
            isRound
            size="sm"
            backgroundColor="transparent"
            color={customTheme.terminalTextColor}
            _hover={{
              backgroundColor: 'transparent',
            }}
            _active={{
              backgroundColor: 'transparent',
            }}
            icon={<Icon as={TbMinus} />}
          />
        ) : (
          ''
        )}
        {isClose ? (
          <IconButton
            aria-label="close"
            isRound
            size="sm"
            backgroundColor="transparent"
            color={customTheme.terminalTextColor}
            _hover={{
              backgroundColor: 'transparent',
            }}
            _active={{
              backgroundColor: 'transparent',
            }}
            icon={<Icon as={TbPlus} />}
          />
        ) : (
          ''
        )}
      </span>
    </div>
  );
};
