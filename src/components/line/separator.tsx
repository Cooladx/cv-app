export default function Separator({
  color = "black",
  height = 1,
  width = 337.75,
}) {
  return (
    <hr
      style={{
        backgroundColor: color,
        height: `${height}rem`,
        border: "none",
        maxWidth: `${width}px`,
      }}
    />
  );
}
