echo "Quickmap by DigitalCyan"

if [ ! -d $PWD/node_modules ]; then
    echo "Missing dependencies! Installing..."
    npm i
fi

npm start

