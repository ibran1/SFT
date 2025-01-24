import { AnimatedNumber } from '@/components/animated-number'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import Roadmap from '@/components/roadmap'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'

export const metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-28">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Hire Industry-Ready
          </h1>
          <h1 className="font-display mt-6 text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-7xl">
            Interns from ITM
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Great futures begin with great hires. Choose our students today.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">View Student Profiles</Button>
            <Button href="/" className="">
              Hire Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Meet the Cohort of 2023-2027
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="https://cdn.itm.edu/assets/DSC_06352_7e5dc0770a.JPG"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function Team() {
  return (
    <Container className="py-20">
      {/* <Subheading>Meet the team</Subheading> */}
      <Heading as="h3" className="mt-2">
        About ITM Group of Institutions
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="https://cdn.itm.edu/assets/kharghar_campus_c3e2f9a5de.jpeg"
              className="block size-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            ITM Group of Institutions has been a leader in professional
            education in India, fostering excellence in fields like engineering,
            management, health sciences, hospitality, and design.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            With a mission to transform lives, ITM graduates over 15,000
            students annually, shaping them into innovators and industry
            leaders. Its global collaborations with universities such as
            Griffith University and Manchester Metropolitan University ensure
            that programs meet international benchmarks. ITM offers
            UGC-accredited undergraduate and postgraduate courses, enabling
            students to excel in competitive industries. The flagship ITM
            Business School is consistently ranked among India’s top 20
            B-Schools, underscoring the institution’s commitment to quality
            education.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Spread across multiple campuses in India, ITM combines academic
            rigor with practical skills to nurture future leaders.
          </p>
        </div>
      </div>
    </Container>
  )
}

function SFT() {
  return (
    <Container className="mt-16">
      <Heading as="h1">About School of FutureTech</Heading>
      {/* <Lead className="mt-6 max-w-3xl">
        We’re on a mission to transform revenue organizations by harnessing vast
        amounts of illegally acquired customer data.
      </Lead> */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          {/* <h2 className="text-2xl font-medium tracking-tight">Our mission</h2> */}
          <p className="mt-6 text-sm/6 text-gray-600">
            he School of Future Tech (SFT) trains the next generation of tech
            leaders through its cutting-edge B.Tech CSE program. Developed in
            partnership with unicorn founders, global tech leaders, and
            executives, the program emphasizes advanced technologies like AI,
            AR/VR, Web3, Data Science, and Cybersecurity.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            SFT blends technical education with training in business,
            communication, and leadership to prepare students for industry
            challenges. Opportunities like internships, hackathons, tech
            summits, and the Dubai Global Immersion Program provide hands-on
            exposure and global insights.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            By merging future-focused academics with practical experiences, SFT
            redefines engineering education, ensuring graduates are equipped to
            lead in a dynamic, global tech landscape.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="https://cdn.itm.edu/assets/PHOTO_2023_08_04_19_28_32_a6391cb8c5.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="https://cdn.itm.edu/assets/Whats_App_Image_2023_10_03_at_5_22_31_PM_8063ce4af7.jpeg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="https://cdn.itm.edu/assets/Whats_App_Image_2023_10_03_at_5_23_26_PM_71e245aeec.jpeg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="https://cdn.itm.edu/assets/student_f6f829e7f5.avif"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>A Year of Achievements & Milestones</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Projects</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={30} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Hackathons</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={12} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Conferences & Meetups</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={15} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Internships</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={1} end={10} />+
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function BentoSection() {
  return (
    <Container className="pt-20">
      <Subheading>Sales</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Know more about your customers than they do.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Customer outreach has never been easier.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Sell at the speed of light"
            description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Integrations"
            title="Meet leads where they are"
            description="With thousands of integrations, no one will be able to escape your cold outreach."
            graphic={<LogoTimeline />}
            // `!overflow-visible` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Meetings"
            title="Smart call scheduling"
            description="Automatically insert intro calls into your leads' calendars without their consent."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Become a thought leader"
            description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        {/* <Container className="mt-10">
          <LogoCloud />
        </Container> */}
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <Team />
          {/* <Team2 /> */}
          <SFT />
          <Roadmap />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
