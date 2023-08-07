import Layout from "../layout/Layout";
import './InternalPageTemplate.scss';
import InternalSidebar from "../../molecules/internal-sidebar/InternalSidebar"
import InternalContent from "../../organisms/internal-content/InternalContent"
import { listInternalPages } from "../../../data/internalPage"
import TermsConditions from "../../atoms/terms-conditions/TermsConditions"
import { InternalNavigationItem } from "../../../interfaces/internal-page.interface";
import SEO from "../../seo";

interface Props {
    pageContext: {
        slug: string,
        parentSlug: string,
        sidebarData: InternalNavigationItem[]
    }
}

const InternalPageTemplate = ({ pageContext }: Props) => {

    const { sidebarData, parentSlug, slug } = pageContext;

    // * Lógica provisional:
    const selectedPage = listInternalPages.find(
        internalPage => internalPage.slug === parentSlug
    );

    const selectedSubPage = selectedPage!.subpages.find(
        subpage => subpage.slug === slug
    );

    const selectedTitle = sidebarData.find(
        item => item.slug === slug
    );

    return (
        <Layout>
            <div className="t-internal-page-template">
                <div className="main-container">
                    <div className="t-internal-page-template__container">
                        <InternalSidebar linksList={sidebarData} />
                        <InternalContent
                            sections={selectedSubPage!.sections}
                            parentSlug={selectedPage!.slug}
                            title={selectedTitle!.copy}
                        />
                    </div>
                </div>
                <TermsConditions />
            </div>
        </Layout>
    )
}

export default InternalPageTemplate

export const Head = ({ pageContext }: Props) => {

    // * Lógica provisional:
    const { sidebarData, parentSlug, slug } = pageContext;

    const selectedTitle = sidebarData.find(
        item => item.slug === slug
    );

    return <SEO title={`${selectedTitle?.copy} | Navhe Delivery`} slug={`${parentSlug}/${slug}`} />
}