"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { TbSocial } from "react-icons/tb";
import { IoIosSend } from "react-icons/io";
import { LuLoader } from "react-icons/lu";
import { TbPhotoPlus } from "react-icons/tb";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdOutlineTextFields } from "react-icons/md";
import { TiSocialGithubCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";

import { supabase } from "~/app/supabase";
import { type Testimonial } from "@prisma/client";
import { type SubmitHandler, useForm } from "react-hook-form";

import { env } from "~/env";
import { api } from "~/trpc/react";
import SharedBar from "~/app/_components/atoms/shared-bar";

const CreateTestimony = () => {
  const router = useRouter();

  const [isHovering, setIsHovering] = useState(false);
  const [avatarURL, setAvatarURL] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  // const [testimony, setTestimony] = useState<Testimonial | null>(null);

  const { register, handleSubmit, watch, reset } = useForm<Testimonial>({
    mode: "onChange",
  });

  const socialValue = watch("social");

  const { mutate: create } = api.testimonial.create.useMutation({
    onSuccess: () => {
      reset();
      setAvatarURL("");
      void router.push("/");
      // console.log("testimony created successfully");
    },
  });

  // const { mutate: getOne } = api.testimonial.getOne.useMutation({
  //   onSuccess: (successor) => {
  //     setTestimony(successor)
  //   }
  // })

  // const { mutate: update } = api.testimonial.update.useMutation({
  //   onSuccess: () => {
  //     console.log("testimony updated successfully");
  //   },
  // });

  // Upload file using standard upload
  async function uploadAvatar(file: File, fileExt: string) {
    setIsUploading(true);
    const { data, error } = await supabase.storage
      .from(env.NEXT_PUBLIC_BUCKET_NAME)
      .upload(
        `avatars/${Math.floor(Math.random() * 1000000)}.${fileExt}`,
        file,
      );

    if (error) {
      console.log("error uploading picture", error);
    } else {
      setIsUploading(false);
      setAvatarURL(
        `https://${env.NEXT_PUBLIC_SUPABASE_PROJECT_HOSTNAME}/storage/v1/object/public/${env.NEXT_PUBLIC_BUCKET_NAME}/${data.path}`,
      );
    }
  }

  const onSubmit: SubmitHandler<Testimonial> = ({
    name,
    social,
    position,
    testimony,
  }) => {
    avatarURL &&
      create({
        name,
        social,
        position,
        testimony,
        picture: avatarURL,
      });
  };

  return (
    <div className="px-1 md:px-40">
      <form
        className="flex w-full flex-col items-center gap-2 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col-reverse items-center justify-between gap-2 md:flex-row">
          <div className="flex w-full flex-col justify-between gap-2">
            <SharedBar
              containerClassName="w-full md:w-[355px]"
              innerContainerClassName="!bg-black relative"
            >
              <MdOutlineTextFields className="absolute right-3 h-5 w-5" />
              <input
                type="text"
                autoComplete="off"
                placeholder="full name"
                {...register("name", { required: true, maxLength: 80 })}
                className="h-9 w-full rounded-full bg-black px-1 text-sm outline-none"
              />
            </SharedBar>
            <SharedBar
              containerClassName="w-full md:w-[355px]"
              innerContainerClassName="relative bg-black"
            >
              {socialValue?.includes("facebook.com") ? (
                <TiSocialFacebookCircular className="absolute right-3 h-6 w-6" />
              ) : socialValue?.includes("instagram.com") ? (
                <TiSocialInstagramCircular className="absolute right-3 h-6 w-6" />
              ) : socialValue?.includes("github.com") ? (
                <TiSocialGithubCircular className="absolute right-3 h-6 w-6" />
              ) : socialValue?.includes("twitter.com") ||
                socialValue?.includes("x.com") ? (
                <TiSocialTwitterCircular className="absolute right-3 h-6 w-6" />
              ) : socialValue?.includes("linkedin.com") ? (
                <TiSocialLinkedinCircular className="absolute right-3 h-6 w-6" />
              ) : socialValue?.includes("instagram.com") ? (
                <TiSocialInstagramCircular className="absolute right-3" />
              ) : socialValue?.includes("@") ? (
                <TiSocialAtCircular className="absolute right-3 h-6 w-6" />
              ) : socialValue?.includes("youtube.com") ? (
                <TiSocialYoutubeCircular className="absolute right-3 h-6 w-6" />
              ) : (
                <TbSocial className="absolute right-3" />
              )}
              <input
                type="text"
                autoComplete="off"
                placeholder="social link to follow up (any one)"
                {...register("social", { required: true, maxLength: 80 })}
                className="h-9 w-full rounded-full bg-black px-1 text-sm outline-none"
              />
            </SharedBar>
          </div>
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl">
            {avatarURL ? (
              <Image
                width={100}
                height={100}
                alt="avatar"
                loading="eager"
                src={avatarURL}
              />
            ) : (
              <label className="relative flex h-28 w-28 items-center justify-center rounded-3xl outline-dashed outline-secondary">
                <input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  className="w-28 text-white opacity-0"
                  onChange={async (event) => {
                    const file = event.target.files?.[0];
                    const fileExt = file?.name.split(".").pop();
                    void uploadAvatar(file!, fileExt!);
                  }}
                />
                <p className="absolute right-12">
                  {isUploading ? (
                    <LuLoader className="animate-spin" />
                  ) : (
                    <TbPhotoPlus />
                  )}
                </p>
              </label>
            )}
          </div>
        </div>
        <SharedBar
          containerClassName="h-full w-full"
          innerContainerClassName="bg-black py-1 w-full h-full"
        >
          <input
            autoComplete="off"
            placeholder="position (40 characters)"
            className="w-full resize-none rounded-full bg-black p-2 text-sm outline-none"
            {...register("position", { required: true, maxLength: 40 })}
          />
        </SharedBar>
        <SharedBar
          containerClassName="h-full w-full"
          innerContainerClassName="bg-black py-1 w-full h-full"
        >
          <textarea
            placeholder="testimony (80 characters)"
            className="w-full resize-none rounded-full bg-black p-2 text-sm outline-none"
            {...register("testimony", { required: true, maxLength: 80 })}
          />
        </SharedBar>
        <SharedBar containerClassName="w-40">
          <button
            type="submit"
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            className="relative flex w-[300px] items-center justify-center gap-1 font-semibold text-black"
          >
            submit
            <IoIosSend className="h-6 w-6 text-black" />
          </button>
          {isHovering && (
            <div className="absolute -bottom-6 right-4 text-xs">
              All fields are required!
            </div>
          )}
        </SharedBar>
      </form>
    </div>
  );
};

export default CreateTestimony;
