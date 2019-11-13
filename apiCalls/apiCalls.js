export const processAge = async (name) => {
  const url = `https://api.agify.io?name=${name}`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error processing your age')
  }
  const age = await response.json()
  return age
}

export const processGender = async (name) => {
  const url = `https://api.genderize.io?name=${name}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('There was an error processing your gender')
  }
  const gender = await response.json()
  return gender
}

export const getAdvice = () => {
  const url = 'https://api.adviceslip.com/advice'
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error getting your advice')
  }
  const advice = await response.json()
  return advice
}