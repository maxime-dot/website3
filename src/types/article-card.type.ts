export interface ArticleCardProps {
  imgSrc: string;
  date: string;
  title: string;
  content: string;
  smallContent: string;
  readMore: () => void;
}
