import file from '../Data/status.real'

const fileToString = () => {
    return fetch(file)
      .then(response => response.text())
      .then(data => {
          return data
      })
}

export default fileToString;