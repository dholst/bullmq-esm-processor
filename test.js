import { Worker, Queue } from 'bullmq';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { randomUUID as uuid } from 'node:crypto';
import waitFor from 'p-wait-for';

const jobId = uuid();
const connection = { host: 'localhost' };
const processor = `${dirname(fileURLToPath(import.meta.url))}/worker.js`;
const queue = new Queue('test', { connection });

new Worker('test', processor, { connection });
queue.add('test', { foo: 'bar' }, { jobId });

await waitFor(() => queue.getJob(jobId).then((job) => Boolean(job.finishedOn)), { timeout: 2000 });
const job = await queue.getJob(jobId);
console.log(job.failedReason);

process.exit(0)
