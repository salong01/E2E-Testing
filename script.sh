export output="no connected"
while [[ $output != "heroeverse_1  | Database connected successfully!" ]]
do
    export output=$(docker compose logs heroeverse --tail=1)
    echo $output
    sleep 30
done
    echo "Application is running and database is connected successfuly"
