import Conf from 'conf/dist/source';
import { Logger } from 'pino';

export class Application {
  constructor(readonly log: Logger, readonly config: Conf) {}

  async start() {
    this.log.info('Starting sensei collector');

    const sensors = this.getEnabledSensors();
  }

  private getEnabledSensors() {}
}
