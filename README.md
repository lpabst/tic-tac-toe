# SANE_Seed_Basic
This is a fully functional basic SANE stack app seed. It has gulp, and sass capabilities.
It is set to scss by default, but that can be changed in the gulpfile.js


## To use this seed

### Code setup
1. Clone this repo.
2. In the terminal, navigate to the project folder and run 'npm i'.
3. Create a 'config.js' file in the server folder (It is already ignored).

#### should look something like this. (Update for your use)
```javascript
module.exports = {
    secret: "aetb34thjfcbn!%$*$n554#$^nannzsdfgbher#$%66e445gnlk",
    connection: {
      host: '',//DB host
      port: 6789,//DB port,
      database: '',// DB database
      user: '',// DB user
      password: '', //DB password
      ssl: true
    },
    port: 8085
};
```

### Gulp setup
1. Run `npm install -g gulp` (if you have not installed it previously).
2. In a terminal window, navigate to the project folder and run `gulp`.
3. Note - npm i (above) will install all of the dependencies for you, 
including local gulp and everything!

### Run
1. In a new terminal window, navigate to the project folder and run `nodemon`.
