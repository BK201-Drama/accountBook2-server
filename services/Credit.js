const Consolidated = require('../model/Consolidated')

async function updateRank (username, name, newRank) {
  try {
    const res = Consolidated.Credit.updateOne({
      username: username,
      name: name
    }, {
      rank: newRank
    })
    return res
  } catch (error) {
    return new Error(e.message)
  }
}

async function addDeptorID (username, id) {
  try {
    const res = Consolidated.Credit.create({
      username: username,
      id: id
    })
    return res
  } catch (error) {
    return new Error(e.message)
  }
}

async function deleteDeptorID (username, id) {
  try {
    const res = Consolidated.Credit.deleteOne({
      username: username,
      id: id
    })
    return res
  } catch (error) {
    return new Error(e.message)
  }
}

async function updateDeptorID (username, newId) {
  try {
    const res = Consolidated.Credit.updateOne({
      username: username 
    }, {
      id: newId
    })
  } catch (error) {
    return new Error(e.message)
  }
}

async function getDeptorList (name) {
  try {
    const res = Consolidated.Credit.find({})
    return res
  } catch (error) {
    return new Error(e.message)
  }
}

module.exports = {
  updateRank,
  addDeptorID,
  deleteDeptorID,
  updateDeptorID,
  getDeptorList
}