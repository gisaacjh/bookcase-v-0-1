const Router = require('express').Router;
//Iniciar el Router
const apiRouter = Router();

//Modelos

const Project_Documents = require("../models/project_documents.js");
const Documents = require("../models/documents.js");

//Mis rutas que responen JSON
function getAllDocuments (req, res) {
  Documents.query().then(data => res.json(data));

}

apiRouter
  .get('/documents', getAllDocuments);
//   .get ('/', (req, res) => {
//     res.json({
//       'routes': {
//         '/api/users': 'Show the users',
//         '/api/files': 'Show the files',
//         '/api/projects': 'Show the projects'
//       }
//     });
//   });

// apiRouter
//   .get('/files', (req, res) => {
//     res.json([{
//       "title": "Principios de la Iconología",
//       "author_last_name": "Panofsky",
//       "author_first_name": "Erwin",
//       "year_published": 1947,
//       "publisher": "Porrua",
//       "category": "Art",
//       "subject_matter": "Iconología",
//       "pages": 217,
//       "format": ".pdf"
//     }
//   ]);
//   });



module.exports = apiRouter;
