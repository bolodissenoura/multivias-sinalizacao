import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur 
        provident similique, esse dicta illo, in asperiores atque fugiat quia eius.
            </p>

            <Avatar
              image={userOneImg}
              name="Ciclano"
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur 
        provident similique, esse dicta illo, in asperiores atque fugiat quia eius.
            </p>

            <Avatar
              image={userTwoImg}
              name="Beutrano"
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="ciclano">
            Temporibus eum nihil ea quaerat possimus enim harum, excepturi velit quisquam sequi repudiandae consequatur 
        provident similique, esse dicta illo, 
            </p>

            <Avatar
              image={userThreeImg}
              name="Fulano"
              title="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-orange-800 bg-orange-100 rounded-md ring-orange-100 ring-4 dark:ring-orange-900 dark:bg-orange-900 dark:text-orange-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;