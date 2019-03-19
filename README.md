## Changes
- Dockerfile, docker-compose.override.yml for express server
- PORT env var
- EXPRESS_HOST_PORT, EXPRESS_CONTAINER_PORT env vars
- POSTGRES_HOSTNAME env var set to docker service name for postgres container
- hostname property added to knexfile
- REDIS env vars
- migrations dir moved to database folder using "directory" in knexfile
- same for seeds

