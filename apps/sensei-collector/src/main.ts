import Conf from 'conf';
import pinoBuilder from 'pino';
import untildify from 'untildify';
import { schema } from './config.schema';

const conf = new Conf({ schema: schema as any });
const logFileName = untildify(`${conf.get('log.path')}/sensei-collector.log`);

const log = pinoBuilder({
  transport: {
    targets: [
      {
        target: 'pino/file',
        options: {
          destination: logFileName,
          mkdir: true,
          append: true,
        },
        level: conf.get('log.level') as any,
      },
    ],
  },
});
console.log('starting', { log: logFileName });
log.warn('hello world');
