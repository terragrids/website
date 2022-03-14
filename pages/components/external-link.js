
export default function ExternalLink({ className, targetUrl, children }) {
    return (
        <a className={className}
            href={targetUrl}
            target={'_blank'}
            rel={'noreferrer'}>
            {children}
        </a>
    )
}