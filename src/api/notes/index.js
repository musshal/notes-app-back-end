const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: async (server, { service }) => {
    const notesHandler = new NotesHandler(service);

    server.route(routes(notesHandler));
  },
};
