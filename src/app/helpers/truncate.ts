export function TruncateText(fileName: string, maxLength = 30) {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    return `${fileName.substring(0, maxLength - 4)}...${fileName.slice(-4)}`;
  }
  
  export function truncate(input: string, maxLength: number): string {
    if (input.length <= maxLength) {
      return input;
    }
  
    const truncatedText = input.substring(0, maxLength - 3) + '...';
    return truncatedText;
  }