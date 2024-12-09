import { defineConfig } from 'vite';

export default defineConfig({
   build: {
      rollupOptions: {
         input: {
            main: 'index.html',
            about: 'about.html',
            portfolio: 'portfolio.html',
            blog: 'blog.html',
            contact: 'contact.html',
         },
      },
   },
});
