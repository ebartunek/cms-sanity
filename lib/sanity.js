import {
    createClient
} from 'next-sanity';

const projectId = "wz54y5v3" 
const dataset = "production"
const apiVersion = "2022-10-21"

export const client = createClient({
    projectId,
    dataset,
    apiVersion, 
    useCdn: typeof document !== 'undefined'
  })
  