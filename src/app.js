import Koa from 'koa';
import cors from 'kcors';
import koaRouter from 'koa-router';
import bodyParser from 'koa-body';
import koaConvert from 'koa-convert';
import helmet from 'koa-helmet';
import winston from 'winston';
import project_env from './project-env';
import { errorResponder } from './middleware/error-responder';
import { REQUEST_LOGS } from './project-env';
import { rootRouter } from './routes/root.routes';
import { healthCheckRouter } from './routes/health-check/health-check.routes';
import { demoRouter } from './routes/demo/demo.routes';

import { connect } from './database/connect';

// connect to db
connect();

// Entry point for all modules.
const api = koaRouter()
  .get('/', rootRouter.routes())
  .use('/health', healthCheckRouter.routes())
  .use('/demo', demoRouter.routes());

// Top level server configuration.
export const app = new Koa();

/* istanbul ignore if */
if (REQUEST_LOGS) {
  app.use(require('koa-morgan')('combined'));
}

app
  .use(helmet())
  .use(koaConvert(bodyParser()))
  .use(errorResponder)
  .use(cors())
  .use(api.routes())
  .use(api.allowedMethods());

winston.info(`Using app config: ${JSON.stringify(project_env)}`);
const PORT = process.env.PORT || 3000;

/* istanbul ignore if */
if (require.main === module) {
  winston.info(`Starting server on port ${PORT}`);
  app.listen(PORT);
}
