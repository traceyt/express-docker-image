FROM express-docker-i

ENV NODE_ENV=development

ENTRYPOINT npm run dev
