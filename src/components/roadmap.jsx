import { Heading } from './text'

const SemesterCard = ({
  semester,
  title,
  description,
  techs,
  softSkills,
  business,
  imageUrl,
  projectImageUrl,
}) => {
  return (
    <article className="flex w-80 max-w-xs flex-col gap-2">
      <div className="flex w-full px-3">
        <strong className="text-sm font-medium text-black md:text-base">
          {semester}
        </strong>
      </div>
      <div className="flex min-h-96 w-full flex-col gap-3 rounded-lg bg-black p-4">
        <div className="flex w-full gap-2">
          <span className="h-3 w-3 rounded-full bg-red-600"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <div className="flex w-full flex-col gap-3">
          <span className="text-sm font-bold text-white">{semester}</span>
          <span className="text-xs text-white">{description}</span>

          {techs && (
            <div className="flex w-full flex-col gap-2">
              <span className="flex w-full flex-col text-xs font-bold text-white">
                Tech:
              </span>
              <div className="flex w-full flex-col gap-1 pl-2 text-sm text-blue-200">
                {techs.map((tech, index) => (
                  <span key={index} className="flex w-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {softSkills && (
            <div className="flex w-full flex-col gap-2">
              <span className="flex w-full flex-col text-xs font-bold text-white">
                Softskills:
              </span>
              <div className="flex w-full flex-col gap-1 pl-2 text-sm text-blue-200">
                {softSkills.map((skill, index) => (
                  <span key={index} className="flex w-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {business && (
            <div className="flex w-full flex-col gap-2">
              <span className="flex w-full flex-col text-xs font-bold text-white">
                Business:
              </span>
              <div className="flex w-full flex-col gap-1 pl-2 text-sm text-blue-200">
                {business.map((item, index) => (
                  <span key={index} className="flex w-full text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {imageUrl && (
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full px-2">
            <span className="text-sm font-semibold">Tools & Languages</span>
          </div>
          <div className="flex w-full">
            <img src={imageUrl} alt={`${semester} tools`} />
          </div>
        </div>
      )}
      {projectImageUrl && (
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full px-2">
            <span className="text-sm font-semibold">Projects :</span>
          </div>
          <div className="flex w-full">
            <img src={projectImageUrl} alt={`${semester} project`} />
          </div>
        </div>
      )}
    </article>
  )
}

const Roadmap = () => {
  const semesterData = [
    {
      semester: 'SEMESTER 1',
      title: 'Semester 1',
      description: '"Go from 0 to 2 in Computer Science Basics"',
      techs: [
        '* Get started with Computer Science',
        '* Comptetitive Coding',
        '* Trending AI tools - P1',
      ],
      softSkills: ['* Problem Solving', '* Communication'],
      business: [],
      imageUrl: 'https://media.itm.ac.in/sem_1_92f113ee79.webp',
      projectImageUrl: 'https://media.itm.ac.in/sem_1_project_229fbb4491.webp',
    },
    {
      semester: 'SEMESTER 2',
      title: 'Semester 2',
      description: '"Become a Frontend Developer"',
      techs: [
        '* UI/UX',
        '* HTML & CSS',
        '* JavaScript',
        '* React JS',
        '* Trending AI tools - P2',
      ],
      softSkills: ['* TeamWork', '* Adaptability'],
      business: ['* How to build a valuable product and price it'],
      imageUrl: 'https://media.itm.ac.in/sem_2_5af4387bb6.webp',
      projectImageUrl: 'https://media.itm.ac.in/sem_2_project_dce8ad019f.webp',
    },
    {
      semester: 'SEMESTER 3',
      title: 'Semester 3',
      description: '"Learn backend development"',
      techs: [
        '* SQL and NoSQL',
        '* NodeJS',
        '* ExpressJS',
        '* Develop Full Stack App',
        '* Trending AI tools - P3',
      ],
      softSkills: ['* Time Management', '* Teaching Student'],
      business: ['* Selling anything and building operations'],
      imageUrl: 'https://media.itm.ac.in/sem_3_266c07ad06.webp',
      projectImageUrl: 'https://media.itm.ac.in/sem_3_project_be8763bd61.webp',
    },
    {
      semester: 'SEMESTER 4',
      title: 'Semester 4',
      description: '"DevOps and Cloud Computing"',
      techs: [
        '* Amazon Web Services',
        '* System Design',
        '* DevOps',
        '* Trending AI tools - P4',
      ],
      softSkills: ['* Leadership', '* Placement Bootcamp - 1'],
      business: ['* Economics and Customers Support'],
      imageUrl: 'https://media.itm.ac.in/sem_4_5b8bdac789.webp',
      projectImageUrl: 'https://media.itm.ac.in/sem_4_project_52ebf29c81.webp',
    },
    {
      semester: 'SEMESTER 5',
      title: 'Semester 5',
      description: '"Experience Industry"',
      techs: ['* 6 Months of Internship in Product or Service Based company'],
      softSkills: [],
      business: [],
      imageUrl: 'https://media.itm.ac.in/sem_5_4f175ac89e.webp',
      projectImageUrl: null,
    },
    {
      semester: 'SEMESTER 6',
      title: 'Semester 6',
      description: '"Create Mobile Apps and Manage Projects"',
      techs: [
        '* Mobile App Development',
        '* Project Management',
        '* Product Management',
        '* Trending AI tools- P5',
      ],
      softSkills: [
        '* Business Communication',
        '* Resume Building',
        '* Finding Jobs',
      ],
      business: ['* HR, Accounts, Investments'],
      imageUrl: 'https://media.itm.ac.in/sem_6_2f1f54fded.webp',
      projectImageUrl: 'https://media.itm.ac.in/sem_6_project_e6cba32bfa.webp',
    },
    {
      semester: 'SEMESTER 7',
      title: 'Semester 7',
      description: '"Master a Specialization : Unlock Your Expertise"',
      techs: [
        '* Web3 (Blockchain)',
        '* Data Science',
        '* AR/VR',
        '* Artificial Intelligence & ML',
        '* Trending AI Tools - P6',
      ],
      softSkills: ['* Placement Bootcamp - 2'],
      business: [],
      imageUrl: 'https://media.itm.ac.in/sem_7_8be42235b9.webp',
      projectImageUrl: 'https://media.itm.ac.in/sem_7_project_1389d65694.webp',
    },
    {
      semester: 'SEMESTER 8',
      title: 'Semester 8',
      description: '"Second Internship"',
      techs: ['* 6 Months of Internship in Product or Service Based Company'],
      softSkills: ['* Placement Bootcamp - 3'],
      business: [],
      imageUrl: null,
      projectImageUrl: null,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pt-40 md:px-0">
      <Heading as="h1" className="mb-5">
        Program Journey.
      </Heading>
      <p className="mt-6 text-sm/6 text-gray-600">
        A glimpse of our industry-validated curriculum, crafted by top 1%
        leaders.
      </p>
      <div className="card-scroll flex w-full flex-col overflow-x-scroll py-6">
        <div className="flex w-fit justify-start gap-3">
          {semesterData.map((semester, index) => (
            <SemesterCard
              key={index}
              semester={semester.semester}
              title={semester.title}
              description={semester.description}
              techs={semester.techs}
              softSkills={semester.softSkills}
              business={semester.business}
              imageUrl={semester.imageUrl}
              projectImageUrl={semester.projectImageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap
