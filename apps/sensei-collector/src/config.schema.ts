export const schema = {
  log: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        default: '~/.log/sensei',
      },
      level: {
        type: 'string',
        enum: ['debug', 'info', 'warn', 'error'],
        default: 'debug',
      },
    },
  },
};
