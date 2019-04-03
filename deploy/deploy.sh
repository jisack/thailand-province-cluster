docker stack deploy -c docker-stack.yml backend-service
docker stack deploy -c docker-swarm-monitor.yml backend-monitor
docker stack deploy -c docker-swarmpit.yml backend-swarmpit