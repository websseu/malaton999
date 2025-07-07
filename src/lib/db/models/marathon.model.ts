import { Schema, type Document, model, models } from 'mongoose'

export interface IMarathon extends Document {
  title: string
  date: string
  location: string
  locationPage: string
  type: string[]
  fee: string[]
  host: string
  registration: string
  registSite: string
  homePage: string
  status: string
  marathonDate: string
  registrationDate: string
  sponsor: string
  limitTime: string
  contents: string
  createdAt: Date
  updatedAt: Date
}

const MarathonSchema = new Schema<IMarathon>(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    locationPage: { type: String, default: '', trim: true },
    type: [{ type: String, trim: true }],
    fee: [{ type: String, trim: true }],
    host: { type: String, trim: true },
    registration: { type: String, trim: true },
    registSite: { type: String, default: '', trim: true },
    homePage: { type: String, default: '', trim: true },
    status: { type: String, trim: true },
    marathonDate: { type: String, trim: true },
    registrationDate: { type: String, trim: true },
    sponsor: { type: String, default: '', trim: true },
    limitTime: { type: String, default: '', trim: true },
    contents: { type: String, default: '', trim: true },
  },
  {
    timestamps: true,
  }
)

const Marathon = models.Marathon || model('Marathon', MarathonSchema)

export default Marathon
