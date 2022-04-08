/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Styles from "./TechStack.module.css";

const techStackItems = [
  {
    title: "Clients",
    images: [
      "/img/tech-stack/ios.png",
      "/img/tech-stack/android.png",
      "/img/tech-stack/kotlin.png",
      "/img/tech-stack/tvos.png",
      "/img/tech-stack/android-tv.png",
      "/img/tech-stack/react.png",
      "/img/tech-stack/roku.png",
      "/img/tech-stack/nodejs.png",
      "/img/tech-stack/fire-tv.png",
      "/img/tech-stack/sass.png",
      "/img/tech-stack/swift.png",
      "/img/tech-stack/gulpjs.png",
      "/img/tech-stack/codecov.png",
      "/img/tech-stack/cypress.png",
      "/img/tech-stack/npm.png",
      "/img/tech-stack/launchdarkly.png",
      "/img/tech-stack/typescript.png",
      "/img/tech-stack/vuejs.png",
    ],
  },
  {
    title: "Back-end",
    images: [
      "/img/tech-stack/golang.png",
      "/img/tech-stack/dynamodb.png",
      "/img/tech-stack/elastic-search.png",
      "/img/tech-stack/redis.png",
      "/img/tech-stack/kinesis.png",
      "/img/tech-stack/mysql.png",
      "/img/tech-stack/aws-lambda.png",
      "/img/tech-stack/memcached.png",
      "/img/tech-stack/influxdb.png",
      "/img/tech-stack/mongodb.png",
      "/img/tech-stack/grafana.png",
      "/img/tech-stack/codecov.png",
      "/img/tech-stack/php.png",
      "/img/tech-stack/composer.png",
      "/img/tech-stack/jaeger.png",
      "/img/tech-stack/hystrix.png",
      "/img/tech-stack/splunk.png",
      "/img/tech-stack/sql-server.png",
      "/img/tech-stack/c-sharp.png",
      "/img/tech-stack/net-core.png",
    ],
  },
  {
    title: "Video",
    images: [
      "/img/tech-stack/aws-elemental.png",
      "/img/tech-stack/edgecast.png?v=2",
      "/img/tech-stack/fastly.png",
      "/img/tech-stack/akamai.png",
      "/img/tech-stack/limelight.png",
      "/img/tech-stack/aws-cloudfront.png",
      "/img/tech-stack/yospace.png",
      "/img/tech-stack/hls.png",
      "/img/tech-stack/mpeg-dash.png",
      "/img/tech-stack/hdr.png",
      "/img/tech-stack/4k.png",
      "/img/tech-stack/ns1.png",
    ],
  },
  {
    title: "Infra",
    images: [
      "/img/tech-stack/docker.png",
      "/img/tech-stack/aws.png",
      "/img/tech-stack/google-cloud-platform.png",
      "/img/tech-stack/fluentd.png",
      "/img/tech-stack/consul.png",
      "/img/tech-stack/terraform.png",
      "/img/tech-stack/linkerd.png",
      "/img/tech-stack/packer.png",
      "/img/tech-stack/k6.png",
    ],
  },
];

export default function TechStack(): JSX.Element {
  return (
    <section className={"techStackAtFox"}>
      <div className="container">
        <h1 className="padding-bottom--lg text--left padding-horiz--md">
          Tech stack at Fox
        </h1>
        {techStackItems.map((item, index) => {
          return (
            <div
              className={clsx(
                { "padding-top--xl": index !== 0 },
                "padding-horiz--md"
              )}
            >
              <h2 className="">{item.title}</h2>
              <div
                className={clsx(Styles.techImageContainer, "padding-top--sm")}
              >
                {item.images.map((src) => {
                  return <img className={Styles.techImage} src={src} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
