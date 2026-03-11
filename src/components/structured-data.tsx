import Script from "next/script"
import { generatePersonSchema } from "@/lib/schema"

export function StructuredData() {
  const personSchema = generatePersonSchema()

  return (
    <Script id="schema-structured-data" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(personSchema)}
    </Script>
  )
}
