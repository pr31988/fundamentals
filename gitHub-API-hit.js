
import readline from 'node:readline';
import { stdin, stdout } from 'node:process';
import axios from 'axios';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

rl.question('git-activity ', (input) => {
    axios({
        method: 'get',
        url: `https://api.github.com/users/${input}/events`,
        responseType: 'json'
    })
        .then(function (response) {
            try {
                response.data.forEach(element => {
                    switch (element.type) {
                        case "PushEvent":
                            console.log(`Pushed ${element.payload.commits.length} commits to ${element.repo.name}`)
                            break;
                        case "IssuesEvent":
                            console.log(`Opened a new issue in ${element.repo.name}`);
                            break;
                        case "WatchEvent":
                            console.log(`Starred ${element.repo.name}`);
                            break;
                    };
                })
                rl.close();
            }
            catch (error) {
                console.log(error);
            }
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            rl.close();
        })

})