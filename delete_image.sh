#!/usr/bin/bash

docker images | grep "cicd" | tr -s " " | cut -d " " -f3 | xargs docker rmi || true
docker images | grep "none" | tr -s " " | cut -d " " -f3 | xargs docker rmi || true
