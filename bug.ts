function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return width * height / 2;
    default:
      return 0; // Error: missing handling for other shapes
  }
}