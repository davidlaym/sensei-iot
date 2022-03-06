import Conf from 'conf/dist/source';
import pinoBuilder, { Logger } from 'pino';
import untildify from 'untildify';

export class LogBuilder {
  private readonly fileName: string;
  private readonly logLevel: any;

  constructor(conf: Conf) {
    this.fileName = untildify(`${conf.get('log.path')}/sensei-collector.log`);
    this.logLevel = conf.get('log.level') as string;
  }

  getInstance(): Logger {
    return pinoBuilder({
      transport: {
        targets: [
          {
            target: 'pino/file',
            options: {
              destination: this.fileName,
              mkdir: true,
              append: true,
            },
            level: this.logLevel,
          },
        ],
      },
    });
  }
}
