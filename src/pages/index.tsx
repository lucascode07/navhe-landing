import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/templates/layout/Layout"
import HomePage from "../components/templates/home-page/HomePage"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Navhe Delivery</title>
