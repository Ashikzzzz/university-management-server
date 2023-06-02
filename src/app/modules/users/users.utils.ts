import User from './users.model'

export const findLastUSerID = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

// Function to generate the next ID
export const generateID = async () => {
  const userID = (await findLastUSerID()) || (0).toString().padStart(5, '0')
  const incrementedID = (parseInt(userID) + 1).toString().padStart(5, '0')
  return incrementedID
}
