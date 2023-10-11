// first create a .... npm init..... after that ..  npm i requests

const http = require('http');
const fs = require('fs');
var requests = require("requests");

const homefile = fs.readFileSync("home.html", "utf-8");


const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", Math.round(orgVal.main.temp / 10));
    temperature = temperature.replace("{%tempmin%}", Math.round(orgVal.main.temp_min / 10));
    temperature = temperature.replace("{%tempmax%}", Math.round(orgVal.main.temp_max / 10));
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests(`http://api.openweathermap.org/data/2.5/weather?q=Amritsar&appid=a6829334fb8034c828fd03c09613b5e6`, ).on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrdata = [objdata];
                // console.log(arrdata[0].main.temp);
                // console.log(arrdata);

                const realtimedata = arrdata.map((val) =>
                    replaceVal(homefile, val)).join("");
                res.write(realtimedata);
            })
            .on("end", (err) => {
                if (err) return console.log("connection closed due to error", err);
                console.log("end");
                res.end();
            });
    }
})

server.listen(8000, "127.0.0.1");