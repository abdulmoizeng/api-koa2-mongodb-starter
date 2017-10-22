import koaRouter from 'koa-router';
import * as controller from './demo.controller';
import { validateParams } from '../../middleware/validate-params';

const objectIdRegex = /^[a-f\d]{24}$/i; // https://stackoverflow.com/questions/20988446/regex-for-mongodb-objectid

const match = regex => term => regex.test(term);

/**
 * A simple module to demonstrate declarative parameter validation.
 */
export const demoRouter = koaRouter()
  .get('/', controller.get)
  .post('/', validateParams(['request', 'body'], ['name']), controller.post)
  .get('/:id', validateParams(['params'], ['id'], match(objectIdRegex)), controller.getById)
  .delete('/:id', validateParams(['params'], ['id'], match(objectIdRegex)), controller.del)
  .put('/:id', validateParams(['params'], ['id'], match(objectIdRegex)), controller.put);
