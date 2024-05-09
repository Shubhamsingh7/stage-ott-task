const ProgressBar = ({ value, max }: { value: number; max: number }) => {
  return <progress value={value} max={max} className="progress" />;
};

export default ProgressBar;
