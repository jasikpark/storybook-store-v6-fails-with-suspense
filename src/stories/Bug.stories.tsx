import type { Meta, StoryObj } from "@storybook/react";
import { Suspense } from "react";
import { Bug } from "./Bug";

/**
 * Wrap the story in a Suspense w/ a spinner fallback
 */
const suspenseDecorator = (Component: React.FC) => {
  return (
    <Suspense fallback={<div>suspense is the problem</div>}>
      <Component />
    </Suspense>
  );
};

const meta = {
  component: Bug,
  decorators: [suspenseDecorator],
} satisfies Meta<typeof Bug>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
