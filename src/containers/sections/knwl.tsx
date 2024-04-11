import {
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

export const Knwl = ({ commands }: { commands: any }) => {
  const command = commands[0];
  return (
    <VStack alignItems="flex-start">
      <Text fontWeight="bolder">Top 3 Programming Languages: </Text>
      <HStack>
        {command.topLanguages.map(
          (el: { name: string; size: number; rate: number; icon: string }) => (
            <CircularProgress
              key={el.name}
              value={el.rate}
              size={el.size + 'px'}
              thickness={5}
              color="green.500"
            >
              <CircularProgressLabel fontSize={15}>
                <VStack>
                  <Image src={el.icon} h={8} w={8} />
                </VStack>
                <VStack>
                  <>{el.name}</>
                </VStack>
                <VStack>
                  <>{el.rate}%</>
                </VStack>
              </CircularProgressLabel>
            </CircularProgress>
          )
        )}
      </HStack>
      <Text fontWeight="bolder">Other Languages: </Text>
      {command.programmingLanguages.map(
        (el: { name: string; icon: string }) => (
          <HStack>
            <Image src={el.icon} h={8} w={8} />
            <>{el.name}</>
          </HStack>
        )
      )}
      <Text fontWeight="bolder">ERP: </Text>
      {command.erp.map((el: { name: string; icon: string }) => (
        <HStack>
          <Image src={el.icon} h={8} w={8} />
          <>{el.name}</>
        </HStack>
      ))}
      <Text fontWeight="bolder">Databases: </Text>
      {command.databases.map((el: { name: string; icon: string }) => (
        <HStack>
          <Image src={el.icon} h={8} w={8} />
          <>{el.name}</>
        </HStack>
      ))}
      <Text fontWeight="bolder">Version Controls: </Text>
      {command.versionControls.map((el: { name: string; icon: string }) => (
        <HStack>
          <Image src={el.icon} h={8} w={8} />
          <>{el.name}</>
        </HStack>
      ))}
      <Text fontWeight="bolder">Others: </Text>
      {command.others.map((el: { name: string; icon: string }) => (
        <HStack>
          <Image src={el.icon} h={8} w={8} />
          <>{el.name}</>
        </HStack>
      ))}
      <Text fontWeight="bolder">Certifications: </Text>
      {command.certifications.map((el: { name: string; icon: string }) => (
        <HStack>
          <Image src={el.icon} h={8} w={8} />
          <>{el.name}</>
        </HStack>
      ))}
    </VStack>
  );
};
