import Conf from 'conf';
import { Application } from './app';
import { schema } from './config.schema';
import { LogBuilder } from './logger';

const conf = new Conf({ schema: schema as any });
const log = new LogBuilder(conf).getInstance();

const app = new Application(log, conf);

app.start();
