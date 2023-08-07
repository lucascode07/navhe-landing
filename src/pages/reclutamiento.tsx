import { HeadFC } from "gatsby"
import Layout from "../components/templates/layout/Layout"
import RecruitmentPage from "../components/templates/recruitment-page/RecruitmentPage"
import SEO from "../components/seo"

const Recruitment = () => {
    return (
        <Layout>
            <RecruitmentPage />
        </Layout>
    )
}

export default Recruitment

export const Head: HeadFC = () => (
    <SEO
        title="Reclutamiento | Navhe Delivery"
        description="Página de reclutamiento para Navhe Delivery, postula a uno de nuestros puestos de trabajo"
        slug="reclutamiento"
    />
)