import { Layout } from "./components";
import { HomePage, Talks, Blog, Academy, Kurs, AboutMe } from "./pages";
import {  Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/kurs" element={<Kurs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/talks" element={<Talks />} />
      </Routes>
    </Layout>
  )
}

export default App;


