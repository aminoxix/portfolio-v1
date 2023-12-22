"use client";

import React from "react";

import { TbPhotoPlus } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";

import { type SubmitHandler, useForm } from "react-hook-form";
import { type Testimonial as FormValues } from "@prisma/client";

import SharedBar from "~/app/_components/atoms/shared-bar";

const CreateTestimony = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className="px-1 md:px-40">
      <form
        className="flex w-full flex-col items-center gap-4 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col-reverse items-center justify-between gap-5 md:flex-row">
          <div className="flex w-full flex-col justify-between gap-5">
            <SharedBar
              containerWidth="md:w-[340px] w-full h-full"
              innerContainerBackgroundColor="bg-black h-full"
            >
              <input
                type="text"
                placeholder="full name"
                {...register("name", { required: true, maxLength: 80 })}
                className="h-9 w-[250px] rounded-full bg-black px-1 outline-none md:w-[340px]"
              />
            </SharedBar>
            <SharedBar
              containerWidth="md:w-[340px] w-full h-full"
              innerContainerBackgroundColor="bg-black h-full"
            >
              <input
                type="text"
                placeholder="social link to follow up (any one)"
                {...register("social", { required: true, maxLength: 80 })}
                className="h-9 w-full rounded-full bg-black px-1 outline-none md:w-[340px]"
              />
            </SharedBar>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-3xl p-12 outline-dashed outline-secondary">
              <TbPhotoPlus />
            </div>
          </div>
        </div>
        <SharedBar
          containerWidth="w-full h-full"
          innerContainerBackgroundColor="bg-black py-1 w-full h-full"
        >
          <textarea
            placeholder="testimony"
            className="w-full resize-none rounded-full bg-black p-2 outline-none"
            {...register("testimony", { required: true, maxLength: 80 })}
          />
        </SharedBar>
        <SharedBar containerWidth="w-40">
          <button
            type="submit"
            className="flex w-[300px] items-center justify-center gap-1 font-semibold text-black"
          >
            submit
            <IoIosSend className="h-6 w-6 text-black" />
          </button>
        </SharedBar>
      </form>
    </div>
  );
};

export default CreateTestimony;
