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
  sensors: {
    type: 'array',
    items: {
      type: 'object',
      oneOf: [
        {
          properties: {
            dht11: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
                enabled: {
                  type: 'boolean',
                },
                bcmPort: {
                  type: 'integer',
                },
                pollingSeconds: {
                  type: 'integer',
                },
                tempEnabled: {
                  type: 'boolean',
                  default: true,
                },
                hrEnabled: {
                  type: 'boolean',
                  default: true,
                },
              },
            },
          },
        },
      ],
    },
  },
};
