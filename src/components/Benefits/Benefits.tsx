/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";

type BenefitItem = {
  title: string;
  image: { url: string; alt: string };
  description: string;
};

const BenefitList: BenefitItem[] = [
  {
    image: {
      url: "/img/benefits/perks-resources.svg",
      alt: "State-of-the-Art Resources Image",
    },
    title: "Best-in-Class Talent & Resources",
    description: `We seek to hire the best, so we ensure we provide the best. Get access to top-of-the-line equipment & resources to help make your job easier. And, earn up to $5k for referring friends to FOX!`,
  },
  {
    image: {
      url: "/img/benefits/skill-set.svg",
      alt: "Expand Your Skill Set Image",
    },
    title: "Expand Your Skill Set",
    description: ` Get the training & upskilling you need to take your work (and career) to the next level. From education reimbursement to leadership development to certification support, we’re investing in the current & next generation of talent at FOX.`,
  },
  {
    image: {
      url: "/img/benefits/perks-events.svg",
      alt: "Team Building Image",
    },
    title: "Team Building",
    description: `You provide the company, we’ll provide the treats & entertainment. Whether you’re joining in person or virtually, we’ll make sure each experience includes all members of the team, regardless of location.`,
  },
  {
    image: {
      url: "/img/benefits/perks-health.svg",
      alt: "State-of-the-Art Resources Image",
    },
    title: "Health & Wellness Programs",
    description: `From fitness classes to meditation to benefits coverage, we provide access to programs and services that lean into physical & mental wellbeing.`,
  },
  {
    image: {
      url: "/img/benefits/support-chain.svg",
      alt: "State-of-the-Art Resources Image",
    },
    title: "Your Support Champion",
    description: `Employees are the foundation of our culture & we strive to support their individual & collective needs, interests & voices. From flexibility in where & how you work to our employee resource groups dedicated to enhancing our culture to community give back, we’re committed to the causes that you care about most.`,
  },
  {
    image: {
      url: "/img/benefits/family-support.svg",
      alt: "State-of-the-Art Resources Image",
    },
    title: "Family Planning & Ongoing Support",
    description: `Family, childcare and/or eldercare support for whatever family stage you are in, whenever you need it.`,
  },
];

function Benefit({
  title,
  description,
  image:{url, alt},
  index,
}: BenefitItem & { index: number }) {
  return (
    <div className={clsx("col col--6 ", { "padding-top--xl": index > 1 })}>
      <div className="text--left padding-horiz--md">
        <img src={url} alt={alt} />
        <h3>{title}</h3>
        <p className="light-text">{description}</p>
      </div>
    </div>
  );
}

export default function Benefits(): JSX.Element {
  return (
    <section className={"benefitsAndPerks"}>
      <div className="container">
        <div className="row padding-bottom--lg">
          <div className={clsx("col col--7")}>
            <h1 className=" text--left padding-horiz--md">Benefits & Perks</h1>
            <p className="text--left padding-horiz--md">
              We work hard, but we also play hard. That includes taking time to
              hangout beyond meetings & work by striving to provide a healthy
              work/life balance. And, giving you the resources needed to support
              whatever life stage you’re in.
            </p>
          </div>
        </div>
        <div className="row">
          {BenefitList.map((props, idx) => (
            <Benefit key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
