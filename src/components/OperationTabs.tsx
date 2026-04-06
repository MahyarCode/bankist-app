import React from "react";

interface buttonData {
  title: string;
  text: string;
  img: string;
}
const OperationTabs: React.FC<{
  handler: (buttonDescription: buttonData) => void;
}> = ({ handler }) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex gap-20 *:border *:rounded-full *:p-3 **:cursor-pointer">
          <button
            className={(isActive: boolean) =>
              isActive ? "bg-amber-800" : "bg-yellow-300"
            }
            onClick={() =>
              handler({
                title: "Tranfser money to anyone, instantly! No fees, no BS.",
                text: `laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt numquam corporis et asperiores
              deleniti optio ullam nesciunt numquam corporis et asperiores
              deleniti optio ullam nesciuntnumquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.`,
                img: "./icons.svg#icon-upload",
              })
            }
          >
            1. Instant Transfers
          </button>
          <button
            className="bg-green-300"
            onClick={() =>
              handler({
                title:
                  "Buy a home or make your dreams come true, with instant loans.",
                text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt numquam corporis et asperiores
              deleniti optio ullam nesciunt numquam corporis et asperiores
              deleniti optio ullam nesciuntnumquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.`,
                img: "./icons.svg#icon-home",
              })
            }
          >
            2. Instant Loans
          </button>
          <button
            className="bg-red-300"
            onClick={() =>
              handler({
                title:
                  "No longer need your account? No problem! Close it instantly.",
                text: `numquam corporis et asperiores Lorem ipsum dolor sit, amet consectetur adipisicing elit
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt 
              deleniti optio ullam nesciunt numquam corporis et asperiores
              deleniti optio ullam nesciuntnumquam corporis et asperiores
              deleniti optio ullam nesciuntnumquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.`,
                img: "./icons.svg#icon-user-x",
              })
            }
          >
            3. Instant Closing
          </button>
        </div>
      </div>
    </>
  );
};

export default OperationTabs;
