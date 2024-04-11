import { format } from 'date-fns';
import { avatar } from '../assets/avatar';
import { sap } from '../assets/sap';

const cmd = ['info', 'knwl', 'edu', 'exp'] as const;
const listOfCommand = [
  {
    cmd: 'help',
    content: ['info', 'knwl', 'edu', 'exp'],
  },
  {
    cmd: 'info',
    content: [
      {
        image: avatar.image,
        firstName: 'Dinies',
        lastName: 'Naidu',
        linkedInURL: 'https://www.linkedin.com/in/dinies-ganesan/',
        isVerified: true,
        email: 'diniesn@gmail.com',
        phone: '+65 ******48',
        nationality: 'Malaysian / SG PR',
      },
    ],
  },
  {
    cmd: 'knwl',
    content: [
      {
        topLanguages: [
          {
            name: 'ReactJS/TS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            size: 180,
            rate: 72,
          },
          {
            name: 'React Native',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            size: 200,
            rate: 75,
          },
          {
            name: 'Javascript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            size: 140,
            rate: 78,
          },
        ],
        programmingLanguages: [
          {
            name: 'CSS3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
          },
          {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          },
          {
            name: 'NodeJS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
          },
          {
            name: 'NextJS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
          },
          {
            name: 'C# (MVVM Pattern, PRISM, .NET Framework, .NET Core)',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg',
          },
          {
            name: 'Java (Spring MVC, Android)',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
            icon2:
              'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
          },
          {
            name: 'SOAP & Restful API',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
          },
          {
            name: 'Angular',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
          },
        ],
        erp: [
          {
            name: 'SAP Business One',
            icon: sap.icon,
          },
        ],
        databases: [
          {
            name: 'SQL Server',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg',
          },
          {
            name: 'SQLite 3',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
          },
          {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
          },
          {
            name: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
          },
          {
            name: 'Firebase Real-Time Database',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
          },
          {
            name: 'MongoDB',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          },
        ],
        versionControls: [
          {
            name: 'Sourcetree',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sourcetree/sourcetree-original.svg',
          },
          {
            name: 'Tortoise SVN',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          },
          {
            name: 'GIT Extension',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          },
        ],
        others: [
          {
            name: 'Microsoft Visual Studios',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg',
          },
          {
            name: 'Visual Studio Code',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
          },
          {
            name: 'Android Studio',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
          },
          {
            name: 'Eclipse',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg',
          },
        ],
        certifications: [
          {
            name: 'AWS Certified Developer - Associate (exp Dec 2025)',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          },
          {
            name: 'AWS Cloud Practitioner (exp Sep 2025)',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          },
        ],
      },
    ],
  },
  {
    cmd: 'edu',
    content: [],
  },
  {
    cmd: 'exp',
    content: [],
  },
];

const themes = [
  {
    isDarkTheme: true,
    backgroundColor: '#2C3333',
    terminalTextColor: '#CBE4DE',
    directoryTextColor: '#0E8388',
    terminalHeaderColor: '#2E4F4F',
  },
  {
    isDarkTheme: false,
    backgroundColor: '#FFFBF5',
    terminalTextColor: '#000000',
    directoryTextColor: '#7743DB',
    terminalHeaderColor: '#F7EFE5',
  },
];

const date = format(new Date(), 'dd MMM yyyy HH:mm:ss');

export { listOfCommand, themes, date, cmd };
