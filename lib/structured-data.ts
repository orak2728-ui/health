import { faqItems, siteConfig, siteUrl } from "@/lib/site-config";

const weekdayHours = siteConfig.businessHours.find((row) =>
  row.label.includes("평일"),
)?.hours;
const lunchHours = siteConfig.businessHours.find((row) =>
  row.label.includes("점심"),
)?.hours;
const saturdayHours = siteConfig.businessHours.find((row) =>
  row.label.includes("토요일"),
)?.hours;

function parseRange(range: string | null | undefined) {
  const match = range?.match(/(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})/);
  return match ? { opens: match[1], closes: match[2] } : null;
}

const weekday = parseRange(weekdayHours);
const lunch = parseRange(lunchHours);
const saturday = parseRange(saturdayHours);

const openingHoursSpecification = [];
if (weekday) {
  if (lunch) {
    openingHoursSpecification.push(
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: weekday.opens,
        closes: lunch.opens,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: lunch.closes,
        closes: weekday.closes,
      },
    );
  } else {
    openingHoursSpecification.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: weekday.opens,
      closes: weekday.closes,
    });
  }
}
if (saturday) {
  openingHoursSpecification.push({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: saturday.opens,
    closes: saturday.closes,
  });
}

export const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#clinic`,
  name: siteConfig.clinicName ?? undefined,
  url: siteUrl,
  telephone: siteConfig.phone ?? undefined,
  address: siteConfig.address
    ? {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressCountry: "KR",
      }
    : undefined,
  openingHoursSpecification: openingHoursSpecification.length
    ? openingHoursSpecification
    : undefined,
  sameAs:
    Object.values(siteConfig.socials).filter(
      (url): url is string => url !== null,
    ).length > 0
      ? Object.values(siteConfig.socials).filter(
          (url): url is string => url !== null,
        )
      : undefined,
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
