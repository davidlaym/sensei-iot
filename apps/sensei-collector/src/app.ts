import Conf from 'conf/dist/source';
import { Logger } from 'pino';

export class Application {
  constructor(readonly log: Logger, readonly config: Conf) {}

  async start() {
    this.log.debug('Starting sensei collector');
  }
}
