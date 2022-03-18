type Point = {
  x: number;
  y: number;
};

type Arrow = {
  start: Point;
  end: Point;
};

const DrawArrow = ({ start, end }: Arrow) => {
  const Width = Math.abs(end.x - start.x);
  const Height = Math.abs(end.y - start.y);
};
