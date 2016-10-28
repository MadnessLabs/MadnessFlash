 /////////////////////////////////////
// REQUIRED LIBRARIES
gulp         = require('gulp');
startEnjin   = require('/usr/local/lib/node_modules/madnessenjin/app/enjin/madnessionic');

 /////////////////////////////////////
// ON LOAD
startEnjin();

 /////////////////////////////////////
// TASKS
require('gulp-require-tasks')({
    path: '/usr/local/lib/node_modules/madnessenjin/app/enjin/madnessionic/tasks',
    gulp: gulp
});