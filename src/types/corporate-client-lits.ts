interface Duration {
  durationInNumber: number;
  durationType: string;
  _id: string;
}

interface Training {
  time: string; // Note: Consider using a proper date type instead of string
  hour: number;
  _id: string;
}

interface Agent {
  customerId: string;
  role: string;
  name: string;
  email: string;
  contact: string | null;
  _id: string;
}
//appoitment list Data
export interface TrainingRequest {
  _id: string;
  isApproved: boolean;
  name: string;
  email: string;
  contact: string;
  instituteName: string;
  corporateType: string;
  teamSize: number;
  duration: Duration;
  address: string;
  training: Training;
  agent: Agent;
  createdAt: string;
  updatedAt: string;
  isActive?: boolean;
}

//appoitment details Data user Baed
interface Duration {
  durationInNumber: number;
  durationType: string;
  _id: string;
}

interface Agent {
  customerId: string;
  role: string;
  name: string;
  email: string;
  contact: string | null;
  _id: string;
}

export interface DataItem {
  _id: string;
  isApproved: boolean;
  name: string;
  email: string;
  contact: string;
  instituteName: string;
  corporateType: string;
  teamSize: number;
  duration: Duration;
  address: string;
  training: Training;
  agent: Agent;
  createdAt: string;
  updatedAt: string;
}

export interface FileInformation {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
