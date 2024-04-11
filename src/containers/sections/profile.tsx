import {
  Avatar,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { TbCheck } from 'react-icons/tb';
import { verified } from '../../assets/verified';

export const Profile = ({ commands }: { commands: any }) => {
  const command = commands[0];
  return (
    <HStack>
      <Avatar
        size="2xl"
        name="Segun Adebayo"
        src={command.image}
        draggable={false}
      />
      <VStack spacing={0} pl={2} alignItems="flex-start">
        <span>
          {`${command.firstName} ${command.lastName}`}
          {command.isVerified && (
            <Avatar
              size="xs"
              pl={1}
              name="verified"
              src={verified.image}
              draggable={false}
            />
          )}
        </span>
        <span>{command.linkedInURL}</span>
        <span>{command.email}</span>
        <span>{command.phone}</span>
        <span>{command.nationality}</span>
      </VStack>
    </HStack>
  );
};
