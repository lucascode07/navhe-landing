import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/templates/layout/Layout"
import HomePage from "../components/templates/HomePage/HomePage"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
