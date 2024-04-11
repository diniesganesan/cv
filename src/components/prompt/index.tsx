import { KeyboardEvent } from 'react';
import { themes } from '../../constants';

interface IPromptProps {
  command: string;
  customTheme: (typeof themes)[0];
  selectedCommand: { cmd: string; content: any; isNotCommand?: boolean };
  isHistory?: boolean;
  onChange?: (e: string) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
export const Prompt = ({
  command,
  isHistory,
  selectedCommand,
  customTheme,
  onChange,
  onKeyUp,
}: IPromptProps) => {
  return (
    <div>
      <div
        style={{
          borderTop: `2px solid ${customTheme.terminalTextColor}`,
          borderLeft: `2px solid ${customTheme.terminalTextColor}`,
          height: 25,
          width: 170,
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          top: -37,
          left: 20,
        }}
      >
        <span
          style={{
            backgroundColor: customTheme.backgroundColor,
            fontWeight: 'bold',
            color: customTheme.directoryTextColor,
          }}
        >
          (dinies@terminal)
        </span>
      </div>
      <div
        style={{
          position: 'relative',
          top: -61,
          left: 165,
        }}
      >
        <span
          style={{
            backgroundColor: customTheme.backgroundColor,
            fontWeight: 'bold',
            color: customTheme.directoryTextColor,
          }}
        >
          [~/app
          {selectedCommand.isNotCommand
            ? undefined
            : selectedCommand.cmd
            ? `/${selectedCommand.cmd}`
            : selectedCommand.cmd}
          ]
        </span>
      </div>
      <div
        style={{
          borderTop: `2px solid ${customTheme.terminalTextColor}`,
          width: 15,
          position: 'relative',
          top: -49,
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          top: -63,
          left: 15,
          fontWeight: 'bold',
          color: customTheme.directoryTextColor,
        }}
      >
        #:{' '}
        {isHistory ? (
          <span
            style={{
              color: customTheme.terminalTextColor,
              fontWeight: 'normal',
              position: 'relative',
              left: -8,
            }}
          >
            {selectedCommand.cmd}
          </span>
        ) : (
          <input
            type="text"
            value={command}
            maxLength={20}
            onChange={(e) => onChange(e.target.value)}
            onKeyUp={(e) => onKeyUp(e)}
            style={{
              width: 450,
              outline: 'none',
              position: 'relative',
              left: -8,
              color: customTheme.terminalTextColor,
              backgroundColor: 'transparent',
            }}
            placeholder="To see a list of supported command, run: help"
          />
        )}
      </div>
    </div>
  );
};
