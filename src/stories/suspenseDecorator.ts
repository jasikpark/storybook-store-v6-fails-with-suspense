/**
 * Wrap the story in a Suspense w/ a spinner fallback
 */
export const suspenseDecorator = (Component: React.FC) => {
  return (
    <Suspense fallback={<div>suspense is the problem</div>}>
      <Component />
    </Suspense>
  );
};
