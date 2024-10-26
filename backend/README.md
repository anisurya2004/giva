# Backend Task

Below are instruction to run server. Before running dont forget to create `.env` file.

```bash
npm i
node app.js

```

Sample `.env` is below:

```
DB_URL = "postgres://default:*********@ep-dawn-sound-a1ov400n.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
```


## Below are routes

1. `GET /api/` - Get all products
2. `POST /api/` - give `name`, `description`,`price` and `quantity` in req body
3. `DELETE /api/:id` - will delete product with `id`
4. `PUT /api/:id` - give `name`, `description`,`price` and `quantity` in req body for update