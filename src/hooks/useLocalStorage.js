import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
  // Mengambil nilai dari Local Storage atau menggunakan nilai awal
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  // Menyimpan nilai ke Local Storage setiap kali ada perubahan
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage
