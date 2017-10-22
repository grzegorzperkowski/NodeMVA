const https = require('https');
const fs = require('fs');

const { URL } = require('url');

for (var i = 1; i <= 81; i++) {
    const options = new URL("https://flipbook.apps.gwo.pl/book/getImage/bookId:2399/pageNo:" + i);
    const file = "file_" + i + ".jpg";

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
            fs.appendFileSync(file, d, "binary", (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("saved")
                }
            })
        })
    })

    req.end();
}