import {
    createClient
} from 'next-sanity';

const projectId: string = "wz54y5v3" 
const dataset: string = "production"
const apiVersion: string = "2022-10-21"

export const client = createClient({
    projectId,
    dataset,
    apiVersion, 
    useCdn: typeof document !== 'undefined'
  })
  