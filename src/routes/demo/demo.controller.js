import Demo from './demo.model';
import winston from 'winston';

export async function post(ctx) {
  const demo = new Demo(Object.assign({}, ctx.request.body));
  const result = await demo.save();
  winston.info('inserted demo:', result);
  ctx.status = 201;
  ctx.body = 'OK';
}

export async function get(ctx) {
  const result = await Demo.find({});
  winston.info('find demos:', result);
  ctx.body = result;
}

export async function getById(ctx) {
  const result = await Demo.findById(ctx.params.id);
  winston.info('find demo:', result);
  if (!result) ctx.status = 404;
  else ctx.body = result;
}

export async function put(ctx) {
  const result = await Demo.findByIdAndUpdate(
    ctx.params.id,
    Object.assign({}, ctx.request.body),
  );
  winston.info('updated demo:', result);
  ctx.body = 'OK';
}

export async function del(ctx) {
  const result = await Demo.findOneAndRemove({
    id: ctx.params.id,
  });
  winston.info('destroyed demo:', result);
  ctx.body = 'OK';
}
