echo "quickmap"

if [ ! -d $PWD/node_modules ]; then
    echo "Missing dependencies! Installing..."
    sudo npm i
fi

npm start

