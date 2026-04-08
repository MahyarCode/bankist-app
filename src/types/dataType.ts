export interface operationDataType {
  title: string;
  text: string;
  img: string;
}

interface profileType {
  img: string;
  name: string;
  location: string;
}

export interface reviewsDataType {
  title: string;
  text: string;
  profile: profileType;
}
