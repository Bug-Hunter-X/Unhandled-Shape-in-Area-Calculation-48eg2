function calculateArea(shape: string, width: number, height?: number): number {
  switch (shape) {
    case "rectangle":
      return width * height;
    case "triangle":
      return width * height / 2;
    default:
      throw new Error(`Unsupported shape: ${shape}`);
  }
}
//Alternative using type guards
function calculateArea2(shape: string, width: number, height?: number): number {
  if (shape === "rectangle") {
    if(height === undefined) throw new Error("Height is required for rectangles");
    return width * height;
  } else if (shape === "triangle") {
    if(height === undefined) throw new Error("Height is required for triangles");
    return width * height / 2;
  } else {
    throw new Error(`Unsupported shape: ${shape}`);
  }
}