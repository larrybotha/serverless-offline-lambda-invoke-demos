# Invoking lambdas from other lambdas with `serverless-offline@5`

```bash
$ npm start

$ npm run invoke:[function|http]
```

- without prefix
  - invoking with `serverless invoke` works as expected
  - invoking with `curl` works as expected
- with prefix
  - neither invoking via `serverless invoke` nor `curl` result in the lambda
      being invoked
  - invoking the same handler, but without having it invoke another lambda works
      as expected for both `serverless invoke` and `curl`

### Conclusion

With `serverless-offline@5.12.0` one cannot use prefixed endpoints when invoking
lambdas from within other lambdas
