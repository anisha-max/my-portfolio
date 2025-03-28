async function GitLoader() {
  const url = "https://api.github.com/users/anisha-max"
  
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }

    const gitData = await response.json()
    return gitData
  } catch (error) {
    console.log("Error:", error)
  }
}

export default GitLoader
