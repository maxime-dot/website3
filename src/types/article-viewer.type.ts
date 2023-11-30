export interface ArticleViewerProps {
  onClose?: () => void;
  data: {
    date: string;
    title: string;
    content: string;
    imageSrc: string;
  };
}
