# docker-compose deploy replicas auto scale

## scale.sh

```sh
#!/bin/bash

# 설정
COMPOSE_SERVICE_NAME="app"
COMPOSE_PROJECT_NAME="myproject"  # docker-compose가 실행된 디렉토리 이름
SCALE_UP_THRESHOLD=80             # CPU % 초과 시 스케일 업
SCALE_DOWN_THRESHOLD=20           # CPU % 미만 시 스케일 다운
MIN_REPLICAS=1                    # 최소 컨테이너 개수
MAX_REPLICAS=5                    # 최대 컨테이너 개수

# 현재 컨테이너 개수 확인
current_replicas=$(docker ps --filter "name=${COMPOSE_PROJECT_NAME}_${COMPOSE_SERVICE_NAME}_" --format '{{.Names}}' | wc -l)

# 현재 컨테이너들의 평균 CPU 사용량 계산
cpu_usage=$(docker stats --no-stream --format "{{.CPUPerc}}" $(docker ps --filter "name=${COMPOSE_PROJECT_NAME}_${COMPOSE_SERVICE_NAME}_" --format '{{.Names}}') | sed 's/%//' | awk '{sum+=$1} END {if (NR>0) print int(sum/NR); else print 0}')

echo "$(date): Current replicas=${current_replicas}, CPU usage=${cpu_usage}%"

# 스케일 업 조건
if [ "$cpu_usage" -gt "$SCALE_UP_THRESHOLD" ] && [ "$current_replicas" -lt "$MAX_REPLICAS" ]; then
  new_replicas=$((current_replicas + 1))
  echo "$(date): Scaling UP to ${new_replicas} replicas"
  docker compose up -d --scale ${COMPOSE_SERVICE_NAME}=${new_replicas}
fi

# 스케일 다운 조건
if [ "$cpu_usage" -lt "$SCALE_DOWN_THRESHOLD" ] && [ "$current_replicas" -gt "$MIN_REPLICAS" ]; then
  new_replicas=$((current_replicas - 1))
  echo "$(date): Scaling DOWN to ${new_replicas} replicas"
  docker compose up -d --scale ${COMPOSE_SERVICE_NAME}=${new_replicas}
fi
```

## cron job

```sh
crontab -e

# Run the scale.sh script every 5 minutes
*/5 * * * * /path/to/scale.sh
```
