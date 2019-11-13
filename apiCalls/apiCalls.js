export const processAge = async (name) => {
  const url = `https://api.agify.io?name=${name}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error processing the age')
  }
  const age = await response.json()
  return age
}

export const processGender = async (name) => {

}

export const getFortune = () => {

}