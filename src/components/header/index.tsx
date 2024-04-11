import { Icon, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import {
  TbArrowsDiagonal2,
  TbArrowsDiagonalMinimize,
  TbMinus,
  TbX,
} from 'react-icons/tb';

interface IHeaderActionProps {
  expanded: boolean;
  onClose: () => void;
  onMinimise: () => void;
  onExpand: (e: boolean) => void;
}
export const HeaderActions = ({
  expanded,
  onClose,
  onMinimise,
  onExpand,
}: IHeaderActionProps) => {
  const actionButtons = [
    {
      bgColor: '#E97451',
      label: 'close',
      icon: <Icon as={TbX} />,
      action: onClose,
    },
    {
      bgColor: '#FFBF00',
      label: 'mimimise',
      icon: <Icon as={TbMinus} />,
      action: onMinimise,
    },
    {
      bgColor: '#50C878',
      label: 'expand',
      isExpanded: expanded,
      icon: <Icon as={TbArrowsDiagonal2} />,
      icon2: <Icon as={TbArrowsDiagonalMinimize} />,
      action: () => {
        onExpand(!expanded);
      },
    },
  ];

  return actionButtons.map((el, id: number) => (
    <IconButton
      key={id}
      _active={{
        opacity: 0.6,
        bgColor: el.bgColor,
      }}
      _hover={{
        bgColor: undefined,
      }}
      bgColor={el.bgColor}
      size={'small'}
      aria-label={el.label}
      icon={el.isExpanded ? el.icon2 : el.icon}
      p={1}
      isRound
      onClick={el.action}
    />
  ));
};
