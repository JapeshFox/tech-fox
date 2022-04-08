/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";

type ReasonItem = {
  title: string;
  description: string;
};

const Reasonist: ReasonItem[] = [
  {
    title: "Innovate.",
    description: `Fast paced, smart ideas, entrepreneurial spirit - that's the foundation
      of our culture & what you'll find at FOX. With access to
      state-of-the-art equipment & tools, you’ll have the opportunity to
      actually make a difference and be part of bettering our products and
      customer/client experiences.`,
  },
  {
    title: "Create.",
    description: ` Roll up your sleeves & get ready to dive in because we’re dedicated to
      developing the latest & greatest in entertainment technology. Find the
      right job for you & apply — we can’t wait to see what you can contribute
      to the team!`,
  },
  {
    title: "Collaborate & Work With The Best.",
    description: `Test, Iterate, Deploy — together. That’s our motto. We’re a trusted,
    smart working team & together we reimagine what’s possible for the
    company and the industry.`,
  },
];

function Reason({ title, description }: ReasonItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function JoinFox(): JSX.Element {
  return (
    <section className={"whyJoinFox"}>
      <div className="container">
        <div className="row padding-bottom--md">
          <div className={clsx("col col--7")}>
            <h1 className=" text--left padding-horiz--md">
              Make Your Mark Here.
            </h1>
            <p className="text--left padding-horiz--md">
              We’ve always been a little different. And we like it that way. At
              FOX, we pride ourselves in shaking things up and making things
              happen. We like to think of ourselves as a start-up with the
              resources and stability of an established, profitable company.
              Come join us & help develop the next world of entertainment
              technology.
            </p>
          </div>
        </div>
        <div className="row">
          {Reasonist.map((props, idx) => (
            <Reason key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
