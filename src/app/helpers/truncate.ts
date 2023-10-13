export function TruncateText(fileName: string, maxLength = 30) {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    return `${fileName.substring(0, maxLength - 4)}...${fileName.slice(-4)}`;
  }
  