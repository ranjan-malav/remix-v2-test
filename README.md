# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.


### Route CheatSheet
- `/app` should have `root.tsx` file
- `/app/routes` should have a `_index.tsx` file
- Any `{file_name}.tsx` file will create a new route `/{file_name}`

- `/app/routes/concerts.tsx` will be the layout for `/concerts/*` paths
- `/app/routes/concerts._index.tsx` will be the content for `/concerts` path wrapped inside concerts layout
- `/app/routes/concerts.$city.tsx` will be served on `/concerts/delhi` path wrapped inside concerts layout with dynamic routing support for `$city`
- `/app/routes/concerts.trending.tsx` will be served on `/concerts/trending` path wrapped inside concerts layout
- `/app/routes/concerts_.mine.tsx` will be served on `/concerts/mine` path but not wrapped inside concerts layout

- `/app/routes/_auth.tsx` will be the layout for `/auth/*` paths without adding `/auth` path
- `/app/routes/_auth.login.tsx` will be served on `/login` path wrapped inside auth layout

- `/app/routes/files.$.tsx` will handle dynamic routes like `/concerts/files/file_name.pdf`

- `/app/routes/city/route.tsx` will be the layout for `/city/*` paths
- `/app/routes/city/_index.tsx` is **not** served on `/city` path
- `/app/routes/city._index.tsx` will be served on `/city` path wrapped inside city layout
- `/app/routes/city.settings.tsx` will be served on `/city/settings` path wrapped inside city layout