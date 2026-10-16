import type { Metadata } from "next";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Sources and licences for the photographs used on the PLF website.",
  alternates: { canonical: "/photo-credits" },
};

const credits = [
  {"image": "/images/editorial/adivasi-women-village.webp", "title": "Women in adivasi village, Umaria district, India", "author": "Yann", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "source": "https://commons.wikimedia.org/wiki/File:Women_in_adivasi_village,_Umaria_district,_India.jpg"},
  {"image": "/images/editorial/community-leadership-india.webp", "title": "REAL women self help group", "author": "Pondicherry17", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "source": "https://commons.wikimedia.org/wiki/File:REAL_women_self_help_group.jpg"},
  {"image": "/images/editorial/frontline-health-records.webp", "title": "Teaching the importance of breastfeeding in India (8806268443)", "author": "DFID - UK Department for International Development", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/", "source": "https://commons.wikimedia.org/wiki/File:Teaching_the_importance_of_breastfeeding_in_India_(8806268443).jpg"},
  {"image": "/images/editorial/gram-sabha-mendha-lekha.webp", "title": "Gram sabha meeting at Mendha Lekha", "author": "Mendhalekha", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "source": "https://commons.wikimedia.org/wiki/File:Gram_sabha_meeting_at_Mendha_Lekha.jpg"},
  {"image": "/images/editorial/rural-digital-workshop.webp", "title": "JP Naik Workshop4", "author": "सुबोध कुलकर्णी", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "source": "https://commons.wikimedia.org/wiki/File:JP_Naik_Workshop4.jpg"},
  {"image": "/images/editorial/rural-women-collective.webp", "title": "India - Faces - Rural women driving their own change 2 (2229763779)", "author": "McKay Savage from London, UK", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/", "source": "https://commons.wikimedia.org/wiki/File:India_-_Faces_-_Rural_women_driving_their_own_change_2_(2229763779).jpg"},
  {"image": "/images/editorial/rural-women-shg-meeting.webp", "title": "India - Faces - Rural women driving their own change 1 (2229752965)", "author": "McKay Savage from London, UK", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/", "source": "https://commons.wikimedia.org/wiki/File:India_-_Faces_-_Rural_women_driving_their_own_change_1_(2229752965).jpg"},
  {"image": "/images/editorial/shg-facilitated-training.webp", "title": "Women self help group foundation", "author": "Pondicherry17", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "source": "https://commons.wikimedia.org/wiki/File:Women_self_help_group_foundation.jpg"},
  {"image": "/images/editorial/shg-member-leadership.webp", "title": "A member of Self Help Group addressing the session on Women Empowerment, at the Bharat…", "author": "Ministry of Information and Broadcasting", "license": "GODL-India", "licenseUrl": "https://www.data.gov.in/Godl", "source": "https://commons.wikimedia.org/wiki/File:A_member_of_Self_Help_Group_addressing_the_session_on_Women_Empowerment,_at_the_Bharat_Nirman_Public_Information_Campaign,_at_Paramakudi_in_Ramanathapuram_district,_Tamil_Nadu_on_August_08,_2010.jpg"},
  {"image": "/images/editorial/village-open-air-class.webp", "title": "The covid -19 crisis has hit the academic field hard, students from rural areas are at…", "author": "Prashant Kharote", "license": "CC BY-SA 4.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/", "source": "https://commons.wikimedia.org/wiki/File:The_covid_-19_crisis_has_hit_the_academic_field_hard,_students_from_rural_areas_are_at_the_receiving_end_because_they_do_not_have_smartphone_%26_TV_sets._a_teacher_of_ZP_School_at_village.jpg"},
  {"image": "/images/editorial/women-community-learning.webp", "title": "Self-driven futures 02 (4844551180)", "author": "McKay Savage from London, UK", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/", "source": "https://commons.wikimedia.org/wiki/File:Self-driven_futures_02_(4844551180).jpg"},
  {"image": "/images/editorial/women-farmers-gujarat.webp", "title": "Women at work, Gujarat", "author": "Bernard Gagnon", "license": "CC BY-SA 3.0", "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/", "source": "https://commons.wikimedia.org/wiki/File:Women_at_work,_Gujarat.jpg"},
  {"image": "/images/editorial/women-self-driven-futures.webp", "title": "Self-driven futures 01 (4843932607)", "author": "McKay Savage from London, UK", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/", "source": "https://commons.wikimedia.org/wiki/File:Self-driven_futures_01_(4843932607).jpg"},
];

export default function PhotoCredits() {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-serif font-bold text-foreground">Photo Credits</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Photographs on this website are used under open licences. Each image was resized for the web; adaptations of CC BY-SA images are shared under the same licence.
        </p>
        <ul className="mt-10 divide-y border-y">
          {credits.map((credit) => (
            <li key={credit.image} className="flex gap-4 py-5">
              <Image src={credit.image} alt="" width={112} height={76} className="h-[76px] w-28 shrink-0 rounded-lg object-cover" />
              <div className="min-w-0 text-sm leading-6">
                <a href={credit.source} target="_blank" rel="noreferrer" className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline">{credit.title}</a>
                <p className="text-muted-foreground">
                  {credit.author} ·{" "}
                  <a href={credit.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-primary">{credit.license}</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
