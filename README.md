# Practicing

## API

Next.js is a full-framework

API always should be inside pages folder.

To access navigate to `localhost:3000/api`

### Catch All routes

Inside folder create file _[...params].ts_ to execute one endpoint for different parameters

for example:

```
/api/user/1/2/3/4
```

But without parameters it's throw an error, to avoid that, change it for optional parameters _{[...params]}.ts_
