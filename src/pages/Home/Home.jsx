import Hero from "../../components/Hero/Hero"
import Dashboard from "../../components/Dashboard/Dashboard"
import Partners from "../../components/Partners/Partners"
import Features from "../../components/Features/Features"
import Scalability from "../../components/Scalability/Scalability"
import Stats from "../../components/Stats/Stats"
import "./Home.css"

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Dashboard />
      <Partners />
      <Features />
      <Scalability />
      <Stats />
    </div>
  )
}

export default Home

