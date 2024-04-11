import { HStack, Text, VStack } from '@chakra-ui/react';
import '../index.css';
import { KeyboardEvent, useState } from 'react';
import { HeaderActions } from '../components/header';
import { Prompt } from '../components/prompt';
import { Response } from '../components/response';
import { Theme } from '../components/theme';
import { date, listOfCommand, themes } from '../constants';
import { Tab } from '../components/tab';
import { format } from 'date-fns';

interface ICommandProps {
  cmd: string;
  content: any;
  isNotCommand?: boolean;
}
export const Terminal = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [command, setCommand] = useState<string>('');
  const [selectedCommand, setSelectedCommand] = useState<ICommandProps>({
    cmd: '',
    content: [],
  });
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const [cmdHistories, setCmdHistories] = useState<ICommandProps[]>([]);
  const [terminalDate, setTerminalDate] = useState<string>(date);

  const customTheme = themes.find((el) => el.isDarkTheme === darkTheme);

  const onChange = (e: string) => setCommand(e);
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    const { value } = e.currentTarget;
    if (!value) {
      setSelectedCommand({
        cmd: '',
        content: [],
        isNotCommand: false,
      });
      return;
    }

    setCommand('');
    if (value.toLowerCase() === 'clear') {
      setCmdHistories([]);
      setSelectedCommand({
        cmd: '',
        content: [],
      });
      return;
    }

    const prompt = listOfCommand.find((el) => el.cmd === value);
    if (prompt) {
      setSelectedCommand({ ...prompt, isNotCommand: true });
      setCmdHistories((prev) => [
        ...prev,
        { cmd: value, content: prompt.content },
      ]);
      return;
    }
    setSelectedCommand({
      cmd: value,
      content: 'command not found',
      isNotCommand: true,
    });
    setCmdHistories((prev) => [
      ...prev,
      { cmd: value, content: 'command not found', isNotCommand: true },
    ]);
  };

  const onExpand = () => setExpanded(!expanded);
  const onMinimise = () => setIsHidden(!isHidden);
  const onClose = () => {
    setIsClose(!isClose);
    setCmdHistories([]);
    setTerminalDate(format(new Date(), 'dd MMM yyyy HH:mm:ss'));
  };

  return (
    <VStack
      p={expanded ? 0 : 10}
      className="terminal"
      flex={1}
      spacing={0}
      h="100vh"
    >
      <HStack p={1} alignSelf="flex-start">
        <Theme isDark={darkTheme} onChangeTheme={setDarkTheme} />
        <Text>{darkTheme ? 'Switch to Day mode' : 'Swith to Night mode'}</Text>
      </HStack>
      {!isHidden && !isClose ? (
        <>
          <VStack
            bg={customTheme.terminalHeaderColor}
            w="100%"
            alignItems="flex-start"
            borderTopRadius={10}
            p={1}
          >
            <HStack>
              <HeaderActions {...{ onMinimise, onClose, expanded, onExpand }} />
            </HStack>
          </VStack>
          <VStack
            bg={customTheme.backgroundColor}
            height={expanded ? '100vh' : 500}
            w="100%"
            overflow="scroll"
            alignItems="flex-start"
            borderBottomRadius={10}
            p={2}
          >
            <VStack spacing={0} alignItems="flex-start">
              <Text color={customTheme.terminalTextColor}>
                Last login: {terminalDate.toString()}
              </Text>
              <Text color={customTheme.terminalTextColor}>
                For more details, please visit:
                https://www.linkedin.com/in/dinies-ganesan/.
              </Text>
            </VStack>
            <>
              {cmdHistories.map((el: ICommandProps) => (
                <>
                  <Prompt
                    {...{
                      command: el.cmd,
                      isHistory: true,
                      customTheme,
                      selectedCommand: el,
                      onChange,
                      onKeyUp,
                    }}
                  />
                  <Response {...{ customTheme, selectedCommand: el }} />
                </>
              ))}
              <>
                <Prompt
                  {...{
                    command,
                    customTheme,
                    selectedCommand,
                    onChange,
                    onKeyUp,
                  }}
                />
                <Response
                  {...{
                    customTheme,
                    selectedCommand: { cmd: '', content: [] },
                  }}
                />
              </>
            </>
          </VStack>
        </>
      ) : (
        <></>
      )}
      <>
        {isHidden || isClose ? (
          <Tab {...{ customTheme, isHidden, isClose, onClose, onMinimise }} />
        ) : undefined}
      </>
    </VStack>
  );
};
