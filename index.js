const { exec } = require('child_process');

exec('npm init -y', {
  cwd: `${__dirname}/src`
});