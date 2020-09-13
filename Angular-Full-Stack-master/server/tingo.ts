var tungus = require('tungus');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

async function setTingo(): Promise<any> {
  let mongodbURI;
  if (process.env.NODE_ENV === 'test') {
    mongodbURI = 'tingodb://' + __dirname + '/dev';
  } else {
    mongodbURI = 'tingodb://' + __dirname + '/prod';
  }

  console.log(mongodbURI);
  mongoose.Promise = global.Promise;
  mongoose.set('useCreateIndex', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useFindAndModify', false);
  mongoose.set('useUnifiedTopology', true);

  // Connect to TingoDB using Mongoose
  await mongoose.connect(mongodbURI, function(err): void {
    // if we failed to connect, abort
    if (err) { throw err; }
    // createData();
  });
  console.log('Connected to Tingo DB');
}
//////////////////////////////////////////////////////////////////////////////
/* Data generation
*/

/* var Schema = mongoose.Schema;

console.log('Running mongoose version %s', mongoose.version);

/**
 * Console schema
 */
/*
var consoleSchema = Schema({
	name: String
  , manufacturer: String
  , released: Date
})
var Console = mongoose.model('Console', consoleSchema);

/**
 * Game schema
 */
/*
var gameSchema = Schema({
	name: String
  , developer: String
  , released: Date
  , consoles: [{ type: Schema.Types.ObjectId, ref: 'Console' }]
})
var Game = mongoose.model('Game', gameSchema);

function createData () {
 Console.create({
   name: 'Nintendo 64'
 , manufacturer: 'Nintendo'
 , released: 'September 29, 1996'
 }, function (err, nintendo64) {
 if (err) { return done(err); }

 Game.create({
   name: 'Legend of Zelda: Ocarina of Time'
   , developer: 'Nintendo'
   , released: new Date('November 21, 1998')
   , consoles: [nintendo64]
 }, function (err) {
   if (err) { return done(err); }
   example();
 });
 });
}

/**
* Population
*/
/*
function example () {
 Game
 .findOne({ name: /^Legend of Zelda/ })
 .populate('consoles')
 .exec(function (err, ocinara) {
 if (err) { return done(err); }
 console.log(ocinara);

 console.log(
   '"%s" was released for the %s on %s'
   , ocinara.name
   , ocinara.consoles[0].name
   , ocinara.released.toLocaleDateString());


 });
}

function done (err) {
 if (err) { console.error(err); }
 Console.remove(function() {
 Game.remove(function() {
   mongoose.disconnect();
 });
 });
}
 */
////////////////////////////////////////////////////////////////////////////////
export default setTingo;
