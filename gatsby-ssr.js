export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="ubuntuFont" />,
        <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="ubuntuFont" />,
        <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="ubuntuFont" />,
        <link
            rel="preload"
            href="/fonts/Ubuntu/Ubuntu-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="ubuntuFont" />,
        <link
            rel="preload"
            href="/fonts/Ubuntu_Mono/UbuntuMono-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="ubuntuFont" />,
        <link
            rel="preload"
            href="/fonts/Ubuntu_Mono/UbuntuMono-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
            key="ubuntuFont" />,
    ])
}