export interface IComment {
  user: string;
  comment: string;
}

export interface IBook {
  Title: string;
  Author: string;
  Genre: string;
  PublishedDate: string;
  Image: string;
  Comment: IComment[];
}
