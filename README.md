Example of sandboxed esm workers not working in bullmq

Assumes docker is installed for a redis instance

``` sh
npm i
npm test
```

```
> test
> node test.js

require() of ES Module /Users/darrinholst/projects/bullmq-esm-processor/worker.js from /Users/darrinholst/projects/bullmq-esm-processor/node_modules/bullmq/dist/cjs/classes/child-processor.js not supported.
Instead change the require of worker.js in /Users/darrinholst/projects/bullmq-esm-processor/node_modules/bullmq/dist/cjs/classes/child-processor.js to a dynamic import() which is available in all CommonJS modules.

```
