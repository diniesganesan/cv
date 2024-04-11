import React from 'react';
import { themes } from '../../constants';
import { Help } from '../../containers/sections/help';
import { Profile } from '../../containers/sections/profile';
import { Knwl } from '../../containers/sections/knwl';

interface IResponseProps {
  customTheme: (typeof themes)[0];
  selectedCommand: { cmd: string; content: any };
  isHistory?: boolean;
}
export const Response = ({ customTheme, selectedCommand }: IResponseProps) => {
  const renderResponse = (command: string) => {
    switch (command) {
      case 'help':
        return <Help {...{ commands: selectedCommand.content.join(', ') }} />;
      case 'info':
        return <Profile {...{ commands: selectedCommand.content }} />;
      case 'knwl':
        return <Knwl {...{ commands: selectedCommand.content }} />;
      case 'edu':
        return <>{JSON.stringify(selectedCommand.content)}</>;
      case 'exp':
        return <>{JSON.stringify(selectedCommand.content)}</>;
      case '':
        return <></>;
      default:
        return <>{selectedCommand.cmd}: command not found.</>;
    }
  };
  return (
    <span
      style={{
        position: 'relative',
        top: -70,
        left: 10,
        wordBreak: 'break-word',
        paddingRight: 5,
        color: customTheme.terminalTextColor,
      }}
    >
      {renderResponse(selectedCommand.cmd)}
    </span>
  );
};
