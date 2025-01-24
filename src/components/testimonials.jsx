'use client'

import { Container } from './container'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: 'https://cdn.itm.edu/assets/Yashika_43ade91818.avif',
    name: 'Yashika',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Rafe_5e134ed805.avif',
    name: 'Rafe',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Prabodh_Badimi_76999dc04d.avif',
    name: 'Prabodh Badimi',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Vrishank_a91b75d073.avif',
    name: 'Vrishank',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Prem_Thakare_2ee1d135c8.avif',
    name: 'Prem Thakare',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Prem_Thatikonda_90298ed91a.avif',
    name: 'Prem Thatikonda',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Roshini_530aac4538.avif',
    name: 'Roshini',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Whats_App_Image_2025_01_20_at_1_02_37_PM_96fa533daf.avif',
    name: 'Error',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Sahil_6df59c03d3.avif',
    name: 'Sahil',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Sahil_6df59c03d3.avif',
    name: 'Tanay',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Srivatsav_3757f6ab20.avif',
    name: 'Srivatsav',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Ankita_Lokhande_2c82ad2aa8.avif',
    name: 'Ankita Lokhande',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Sparsh_4f6d1b912f.avif',
    name: 'Sparsh',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Shikha_6bce79a27c.avif',
    name: 'Shikha',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Jadhav_Atharva_c57487fb2e.avif',
    name: 'Jadhav Atharva',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Jithendra_020ac6ca7a.avif',
    name: 'Jithendra',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Tanmay_f5053c6b61.avif',
    name: 'Tanmay',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Arpita_f36176b807.avif',
    name: 'Arpita',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Raheel_5d4388b75e.avif',
    name: 'Raheel',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Sarthi_36b76f6e25.avif',
    name: 'Sarthi',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Sakshi_f24438befc.avif',
    name: 'Sakshi',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Akriti_1eb6057ece.avif',
    name: 'Akriti',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Mohd_Areeb_6c9178eff7.avif',
    name: 'Mohd Areeb',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Riya_8051d4bd1a.avif',
    name: 'Riya',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Jeevan_281060c30e.avif',
    name: 'Jeevan',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Garvit_f68a1a5238.avif',
    name: 'Garvit',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Ashlin_26f2781097.avif',
    name: 'Ashlin',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/IMG_0696_32bd2be845.avif',
    name: 'Error',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Karunesh_154b2ea737.avif',
    name: 'Karunesh',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Aayush_Chounkar_1a1e1e9171.avif',
    name: 'Aayush Chounkar',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Hanshika_d1cde23e0f.avif',
    name: 'Hanshika',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Bhagyashree_70d393fd2c.avif',
    name: 'Bhagyashree',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Chandan_82560d643b.avif',
    name: 'Chandan',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Gaurang_165eaaa590.avif',
    name: 'Gaurang',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Anusri_78e4785083.avif',
    name: 'Anusri',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Romil_Pandey_57dd8891a6.avif',
    name: 'Romil',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Gagan_4530640c5b.avif',
    name: 'Gagan',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Tanish_7f63437d0a.avif',
    name: 'Tanish',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Manas_3d1cfbead5.avif',
    name: 'Manas',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Ayush_Aryan_7fa3939e8c.avif',
    name: 'Ayush',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Manmeet_c49b5601ca.avif',
    name: 'Manmeet',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Chaitanya_b692e32bbf.avif',
    name: 'Chaitanya',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Lakshya_0a5ae32937.avif',
    name: 'Lakshya',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Tanish_dcf2981dc2.avif',
    name: 'Tanish',
    title: 'Cohort of 2023-2027',
  },
  {
    img: 'https://cdn.itm.edu/assets/Mahajan_Piyush_a3bccb4032.avif',
    name: 'Mahajan Piyush',
    title: 'Cohort of 2023-2027',
  },
]

function TestimonialCard({ name, title, img, children }) {
  return (
    <div className="relative flex aspect-[9/16] w-full shrink-0 flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4]">
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="relative p-10">
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              {title}
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

export function Testimonials() {
  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2">
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
      <div className="mt-16 grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
          >
            {quote}
          </TestimonialCard>
        ))}
      </div>
    </div>
  )
}
