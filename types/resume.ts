export interface Resume {
  $schema: string
  basics: Basics
  work: Work[]
  education: Education[]
  skills: Skills[]
  languages: Languages[]
  awards: Awards[]
  volunteer: Volunteer[]
}

export interface Basics {
  name: string
  label: string
  email: string
  phone: string
  url: string
  location: Location
  summary: string
}

export interface Location {
  address: string
  postalCode: string
  city: string
  region: string
  countryCode: string
}

export interface Work {
  name: string
  position: string
  url: string
  startDate: string
  endDate: string | null
  summary: string
  highlights: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  url: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  score: string
  courses: string[]
}

export interface Skills {
  name: string
  level: string
  keywords: string[]
}

export interface Languages {
  language: string
  fluency: string
}

export interface Awards {
  title: string
  date: string
  awarder: string
  summary: string
}

export interface Volunteer {
  organization: string
  position: string
  url: string
  startDate: string
  endDate: string | null
  summary: string
  highlights: string[]
}
