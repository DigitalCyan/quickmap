echo "Quickmap by DigitalCyan"

if [ ! -d $PWD/node_modules ]; then
    echo "Missing dependencies! Installing..."
    npm i
    echo "DONE!"
fi

npm start

