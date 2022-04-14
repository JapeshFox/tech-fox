/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import BenefitList from "../../JSON/BenefitList.json";

type BenefitItem = {
  title: string;
  image: { url: string; alt: string };
  description: string;
};

function Benefit({
  title,
  description,
  image: { url, alt },
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
