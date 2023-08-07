import useSiteMetadata from '../hooks/useSiteMetadata'
import { SeoData } from '../interfaces/seo.interface';

const SEO = ({ title, description, lang, slug, noIndex, urlCanonical }: Partial<SeoData>) => {

    const { title: defaultTitle, description: defaultDescription, author, siteUrl, ogImage } = useSiteMetadata();

    const seoData: SeoData = {
        title: title ?? defaultTitle,
        lang: lang ?? 'es',
        description: description ?? defaultDescription,
        noIndex: noIndex ?? false,
        urlCanonical: urlCanonical ?? `${siteUrl}/${slug}`,
        ogImage: siteUrl + ogImage,
        slug: slug ? `${siteUrl}/${slug}` : siteUrl,
        author,
    }

    return (
        <>
            <html lang={seoData.lang}></html>
            <title>{seoData.title}</title>
            <meta name="description" content={seoData.description} />
            <meta name="image" content={seoData.ogImage} />
            <link
                rel="canonical"
                href={seoData.urlCanonical}
                data-baseprotocol="https:"
                data-basehost="navhe-delivery-landing.netlify.app" />

            {
                seoData.noIndex && <meta name='robots' content='noindex' />
            }

            <meta property='og:title' content={seoData.title} />
            <meta property='og:description' content={seoData.description} />
            <meta property='og:image' content={seoData.ogImage} />
            <meta property='og:image:width' content='400' />
            <meta property='og:image:height' content='300' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={seoData.slug} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoData.title} />
            <meta name="twitter:url" content={seoData.slug} />
            <meta name="twitter:description" content={seoData.description} />
            <meta name="twitter:image" content={seoData.ogImage} />
            <meta name="twitter:creator" content={seoData.author} />
        </>
    )
}

export default SEO