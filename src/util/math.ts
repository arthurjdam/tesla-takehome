export type Rectangle = {
  id: string;
  width: number;
  height: number;
};

export type Space = {
  x: number;
  y: number;
  height: number;
  width: number;
};

type PackedRectangle = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotated: boolean;
};

type PackingResult = {
  packedRectangles: PackedRectangle[];
  containerWidth: number;
  containerHeight: number;
};

export function guillotinePack(
  rectangles: Rectangle[],
  maxWidth?: number,
  initialHeight?: number,
): PackingResult {
  // Sort rectangles by area in descending order
  rectangles.sort((a, b) => b.width * b.height - a.width * a.height);

  // If maxWidth is not provided, use the width of the widest rectangle
  const containerWidth =
    maxWidth || Math.max(...rectangles.map((r) => r.width));
  let maxContainerWidth = Math.max(...rectangles.map((r) => r.width));
  let containerHeight =
    initialHeight || Math.max(...rectangles.map((r) => r.height));

  const spaces: Array<Space> = [
    {
      x: 0,
      y: 0,
      width: containerWidth,
      height: containerHeight,
    },
  ];
  const packedRectangles: PackedRectangle[] = [];

  for (let i = 0; i < rectangles.length; i++) {
    const rect = rectangles[i];
    let bestSpace: Space | null = null;
    let bestRotation = false;
    let bestScore = Infinity;

    for (const space of spaces) {
      // Try without rotation
      if (rect.width <= space.width && rect.height <= space.height) {
        const score = Math.min(
          space.width - rect.width,
          space.height - rect.height,
        );
        if (score < bestScore) {
          bestSpace = space;
          bestRotation = false;
          bestScore = score;
        }
      }

      // Try with rotation
      if (rect.height <= space.width && rect.width <= space.height) {
        const score = Math.min(
          space.width - rect.height,
          space.height - rect.width,
        );
        if (score < bestScore) {
          bestSpace = space;
          bestRotation = true;
          bestScore = score;
        }
      }
    }

    if (bestSpace) {
      if (bestRotation) {
        // Rotate the rectangle
        [rect.width, rect.height] = [rect.height, rect.width];
      }

      packedRectangles.push({
        id: rect.id,
        x: bestSpace.x,
        y: bestSpace.y,
        width: rect.width,
        height: rect.height,
        rotated: bestRotation,
      });
      maxContainerWidth = Math.max(maxContainerWidth, bestSpace.x + rect.width);

      // Update container height if necessary
      containerHeight = Math.max(containerHeight, bestSpace.y + rect.height);

      // Split remaining space
      if (rect.width < bestSpace.width) {
        spaces.push({
          x: bestSpace.x + rect.width,
          y: bestSpace.y,
          width: bestSpace.width - rect.width,
          height: rect.height,
        });
      }
      if (rect.height < bestSpace.height) {
        spaces.push({
          x: bestSpace.x,
          y: bestSpace.y + rect.height,
          width: bestSpace.width,
          height: bestSpace.height - rect.height,
        });
      }

      // Remove used space
      const index = spaces.indexOf(bestSpace);
      spaces.splice(index, 1);
    } else {
      // If no space found, extend the container height
      containerHeight += rect.height;
      spaces.push({
        x: 0,
        y: containerHeight - rect.height,
        width: containerWidth,
        height: rect.height,
      });
      // Retry packing this rectangle
      i--; // Decrement i to reprocess this rectangle
    }
  }

  return {
    packedRectangles,
    containerWidth: Math.max(maxContainerWidth, 0),
    containerHeight: Math.max(containerHeight, 0),
  };
}
