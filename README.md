# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# Dockerize Strapi

Project from Strapi community to help create a Docker project:  
https://github.com/strapi-community/strapi-tool-dockerize

```sh
npm run create strapi-app strapi-docker-starter

npx @strapi-community/dockerize

# create containers (build) - only first time
docker compose up -d 

# create containers and build the image - only when dependencies have been added
docker compose up -d --build

# delete dangling images (after every build)
docker image prune

# start services
docker compose start
docker compose stop
```

## Services
Note: localhost should be replaced with machine local IP address if you want to connect from your local machine.
- Strapi - http://localhost:1337
- Adminer - http://localhost:8080
- Postgres - `localhost:5432` (use Adminer to access DB)


## Admin user
email: master@sombrerostudio.com
password: Mexican123

## Generate JWT Secret from terminal
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

## Generate secrets
https://generate.plus/en/base64