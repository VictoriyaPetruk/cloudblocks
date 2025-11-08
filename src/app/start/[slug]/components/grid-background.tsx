interface GridBackgroundProps {
  mounted: boolean;
}

export default function GridBackground({ mounted }: GridBackgroundProps) {
  if (!mounted) return null;

  return (
    <div
      className='absolute top-0 left-0 right-0 pointer-events-none z-0'
      suppressHydrationWarning
      style={{
        height: "100%",
        backgroundImage: `
          linear-gradient(to right, rgba(229, 231, 235, 0.8) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(229, 231, 235, 0.8) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundPosition: "0 0",
      }}
    >
      {/* Gradient overlay that fades the grid in the middle */}
      <div
        className='absolute inset-0'
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(255, 255, 255, 0.3) 30%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(255, 255, 255, 0.95) 70%,
              rgba(255, 255, 255, 1) 100%
            )
          `,
        }}
      />
    </div>
  );
}
