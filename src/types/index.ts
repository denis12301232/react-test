export interface IData {
  id: number;
  title: string;
  content: string | IData[];
  about: string;
}
