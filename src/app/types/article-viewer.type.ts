export interface ArticleViewerProps {
  data: {
    date: string,
    title: string;
    imgSrc: string;
    content: string;
  };

  onClose?: () => void;
}
