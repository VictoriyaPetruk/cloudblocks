interface ProgressBarProps {
  progress: number;
  isEmailStep: boolean;
}

export default function ProgressBar({ progress, isEmailStep }: ProgressBarProps) {
  return (
    <div className='fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50'>
      <div
        className='h-full bg-orange-500 transition-all duration-300'
        style={{
          width: `${isEmailStep ? 100 : progress}%`,
        }}
      />
    </div>
  );
}

