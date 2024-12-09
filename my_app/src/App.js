import React from 'react'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}></Route>
        <Route path="/" element={<h1>Login Page</h1>}></Route>
        <Route path="/counter" element={<h1>Counter Page</h1>}></Route>
        <Route path="/" element={<h1>No Page Available</h1>}></Route>

      </Routes>
    </div>
  )
}

export default App