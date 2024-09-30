import "@/styles/globals.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Inject JSON-LD structured data for Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Impact Catalyst Foundation",
              url: "https://icfoundation.catalysts.global/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://icfoundation.catalysts.global/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <link rel="canonical" href="https://icfoundation.catalysts.global/" />
      </head>
      <body>{children}</body>
    </html>
  )
}
