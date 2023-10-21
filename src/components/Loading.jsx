export default function Loading() {
  return (
    <div className="absolute h-full w-full inset-0 grid place-items-center bg-white z-50">
      <span className="loading loading-spinner w-12"></span>
    </div>
  );
}
