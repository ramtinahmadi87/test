import { createContext, useContext, useState } from "react";

const Context = createContext()

export function Provider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  )

  function saveUser(item) {
    setUser(item)
    localStorage.setItem("user", JSON.stringify(item))
  }

  function logout() {
    setUser({});
    localStorage.removeItem("user")
  }

  return (
    <Context.Provider value={{ user, saveUser, logout }}>
      {children}
    </Context.Provider>
  )
}

export function usecontext() {
  return useContext(Context)
}