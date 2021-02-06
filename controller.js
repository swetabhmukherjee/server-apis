// get all servers

const getTableData = (req, res, db) => {
  db.select('*').from('server')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}


// query a specfic server wrt its id

const getSpecificServerData = (req, res, db) => {
    const { id } = req.body
    db.select('*').from('server').where({id})
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'false'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  

// add a server

const postTableData = (req, res, db) => {
  const { ram, cpu, os, graphics, storage} = req.body
  db('server').insert({ ram, cpu, os, graphics, storage})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

// update a server wrt its id

const putTableData = (req, res, db) => {
  const { id, ram, cpu, os, graphics, storage } = req.body
  db('server').where({id}).update({ram, cpu, os, graphics, storage})
    .returning('*')
    .then(item => {
      res.json(item)

    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

// delete a server

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('server').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}


module.exports = {
  getTableData,
  getSpecificServerData,
  postTableData,
  putTableData,
  deleteTableData,
}